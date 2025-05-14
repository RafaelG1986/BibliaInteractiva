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

const EditarCapitulo = ({ navigation, route }) => {
  const { capituloId } = route.params;
  
  const [numero, setNumero] = useState('');
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [originalNumero, setOriginalNumero] = useState(null);
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar libros
        const librosData = await db.getLibrosByVersion(1); // Versión 1 por defecto
        setLibros(librosData);
        
        // Cargar datos del capítulo
        const capitulo = await db.getCapituloById(capituloId);
        if (capitulo) {
          setNumero(capitulo.numero.toString());
          setOriginalNumero(capitulo.numero);
          setSelectedLibroId(capitulo.libro_id);
        } else {
          Alert.alert('Error', 'No se encontró el capítulo');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [capituloId, navigation]);
  
  // Función para verificar si ya existe un capítulo con ese número en el libro
  const existeCapitulo = async (libroId, numCapitulo) => {
    // Si el número no ha cambiado, no necesitamos verificar
    if (numCapitulo === originalNumero) return false;
    
    const capitulos = await db.getCapitulosByLibro(libroId);
    return capitulos.some(cap => cap.numero === numCapitulo);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(Number(numero)) || Number(numero) <= 0) {
      Alert.alert('Error', 'El número de capítulo debe ser un número positivo');
      return false;
    }
    if (!selectedLibroId) {
      Alert.alert('Error', 'Debe seleccionar un libro');
      return false;
    }
    return true;
  };

  const actualizarCapitulo = async () => {
    if (!validarFormulario()) return;

    const numCapitulo = parseInt(numero);
    
    try {
      // Verificar si ya existe un capítulo con ese número
      const existe = await existeCapitulo(selectedLibroId, numCapitulo);
      if (existe) {
        Alert.alert('Error', `Ya existe un capítulo ${numCapitulo} en este libro`);
        return;
      }
      
      setSaving(true);
      
      const capituloActualizado = {
        libro_id: selectedLibroId,
        numero: numCapitulo
      };
      
      await db.updateCapitulo(capituloId, capituloActualizado);
      
      Alert.alert('Éxito', 'Capítulo actualizado correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al actualizar capítulo:', error);
      Alert.alert('Error', 'No se pudo actualizar el capítulo');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Editar Capítulo</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Libro *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedLibroId}
            onValueChange={(itemValue) => setSelectedLibroId(itemValue)}
            style={styles.picker}
          >
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
        <Text style={styles.label}>Número de capítulo *</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={saving}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={actualizarCapitulo}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.submitButtonText}>Actualizar</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 40,
  },
  submitButton: {
    backgroundColor: '#4a90e2',
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

export default EditarCapitulo;