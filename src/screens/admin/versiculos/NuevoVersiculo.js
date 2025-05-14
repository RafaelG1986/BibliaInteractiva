import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Alert,
  ActivityIndicator
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const NuevoVersiculo = ({ navigation, route }) => {
  const { capituloId } = route.params || {};
  
  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState('');
  const [selectedCapituloId, setSelectedCapituloId] = useState(capituloId || null);
  const [capitulos, setCapitulos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar libros
        const librosData = await db.getLibros();
        setLibros(librosData);
        
        // Cargar capitulos
        const capitulosData = await db.getCapitulos();
        setCapitulos(capitulosData);
        
        // Si tenemos un capítulo seleccionado, buscar su libro
        if (capituloId) {
          setSelectedCapituloId(capituloId);
          const capituloSeleccionado = capitulosData.find(c => c.id === capituloId);
          if (capituloSeleccionado) {
            setSelectedLibroId(capituloSeleccionado.libro_id);
          }
          
          // Obtener el último número de versículo para sugerir el siguiente
          const ultimosVersiculos = await db.getVersiculosByCapitulo(capituloId);
          if (ultimosVersiculos.length > 0) {
            const ultimoNumero = Math.max(...ultimosVersiculos.map(v => v.numero));
            setNumero((ultimoNumero + 1).toString());
          } else {
            setNumero('1');
          }
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos necesarios');
      } finally {
        setLoadingData(false);
      }
    };

    cargarDatos();
  }, [capituloId]);

  const filtrarCapitulos = () => {
    if (!selectedLibroId) return [];
    return capitulos.filter(c => c.libro_id === selectedLibroId);
  };

  const validarFormulario = () => {
    if (!texto.trim()) {
      Alert.alert('Error', 'El texto es obligatorio');
      return false;
    }
    if (!numero.trim() || isNaN(Number(numero))) {
      Alert.alert('Error', 'El número debe ser un valor numérico');
      return false;
    }
    if (!selectedCapituloId) {
      Alert.alert('Error', 'Debe seleccionar un capítulo');
      return false;
    }
    return true;
  };

  const guardarVersiculo = async () => {
    if (!validarFormulario()) return;

    try {
      setLoading(true);
      
      const nuevoVersiculo = {
        capitulo_id: selectedCapituloId,
        numero: parseInt(numero),
        texto
      };
      
      await db.addVersiculo(nuevoVersiculo);
      
      Alert.alert('Éxito', 'Versículo añadido correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al guardar versículo:', error);
      Alert.alert('Error', 'No se pudo guardar el versículo');
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando datos...</Text>
      </View>
    );
  }

  const capitulosFiltrados = filtrarCapitulos();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevo Versículo</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Libro *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedLibroId}
            onValueChange={(itemValue) => {
              setSelectedLibroId(itemValue);
              setSelectedCapituloId(null); // Reset capítulo al cambiar libro
            }}
            style={styles.picker}
          >
            <Picker.Item label="Seleccione un libro" value={null} />
            {libros.map(libro => (
              <Picker.Item 
                key={libro.id} 
                label={`${libro.nombre} (${libro.abreviatura})`} 
                value={libro.id} 
              />
            ))}
          </Picker>
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Capítulo *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCapituloId}
            onValueChange={(itemValue) => setSelectedCapituloId(itemValue)}
            style={styles.picker}
            enabled={capitulosFiltrados.length > 0}
          >
            <Picker.Item label="Seleccione un capítulo" value={null} />
            {capitulosFiltrados.map(capitulo => (
              <Picker.Item 
                key={capitulo.id} 
                label={`Capítulo ${capitulo.numero}`} 
                value={capitulo.id} 
              />
            ))}
          </Picker>
        </View>
        {selectedLibroId && capitulosFiltrados.length === 0 && (
          <Text style={styles.warningText}>
            No hay capítulos disponibles para este libro. Por favor, añada capítulos primero.
          </Text>
        )}
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de versículo *</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Texto del versículo *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={texto}
          onChangeText={setTexto}
          placeholder="Ingrese el texto del versículo"
          multiline={true}
          numberOfLines={6}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={guardarVersiculo}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.submitButtonText}>Guardar</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  warningText: {
    color: '#e67e22',
    marginTop: 6,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 40,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cancelButtonText: {
    color: '#777',
    fontSize: 16,
  },
});

export default NuevoVersiculo;