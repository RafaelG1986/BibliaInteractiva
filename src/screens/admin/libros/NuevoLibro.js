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

const NuevoLibro = ({ navigation, route }) => {
  const { versionId } = route.params || {};
  
  const [nombre, setNombre] = useState('');
  const [abreviatura, setAbreviatura] = useState('');
  const [testamento, setTestamento] = useState('Antiguo');
  const [orden, setOrden] = useState('');
  const [selectedVersionId, setSelectedVersionId] = useState(versionId || null);
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingVersiones, setLoadingVersiones] = useState(true);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        const data = await db.getVersiones();
        setVersiones(data);
        if (data.length > 0 && !selectedVersionId) {
          setSelectedVersionId(data[0].id);
        }
      } catch (error) {
        console.error('Error al cargar versiones:', error);
        Alert.alert('Error', 'No se pudieron cargar las versiones');
      } finally {
        setLoadingVersiones(false);
      }
    };

    cargarVersiones();
  }, []);

  const validarFormulario = () => {
    if (!nombre.trim()) {
      Alert.alert('Error', 'El nombre es obligatorio');
      return false;
    }
    if (!abreviatura.trim()) {
      Alert.alert('Error', 'La abreviatura es obligatoria');
      return false;
    }
    if (!testamento.trim()) {
      Alert.alert('Error', 'El testamento es obligatorio');
      return false;
    }
    if (!orden.trim() || isNaN(Number(orden))) {
      Alert.alert('Error', 'El orden debe ser un número válido');
      return false;
    }
    if (!selectedVersionId) {
      Alert.alert('Error', 'Debe seleccionar una versión');
      return false;
    }
    return true;
  };

  const guardarLibro = async () => {
    if (!validarFormulario()) return;

    try {
      setLoading(true);
      
      const nuevoLibro = {
        version_id: selectedVersionId,
        nombre,
        abreviatura,
        testamento,
        orden: parseInt(orden)
      };
      
      await db.addLibro(nuevoLibro);
      
      Alert.alert('Éxito', 'Libro añadido correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al guardar libro:', error);
      Alert.alert('Error', 'No se pudo guardar el libro');
    } finally {
      setLoading(false);
    }
  };

  if (loadingVersiones) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versiones...</Text>
      </View>
    );
  }

  if (versiones.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No hay versiones disponibles</Text>
        <Text style={styles.subtitle}>
          Necesitas crear al menos una versión bíblica antes de añadir libros.
        </Text>
        <TouchableOpacity
          style={styles.createVersionButton}
          onPress={() => navigation.navigate('VersionesList')}
        >
          <Text style={styles.createVersionButtonText}>Ir a Gestionar Versiones</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevo Libro Bíblico</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Versión *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedVersionId}
            onValueChange={(itemValue) => setSelectedVersionId(itemValue)}
            style={styles.picker}
          >
            {versiones.map(version => (
              <Picker.Item 
                key={version.id} 
                label={`${version.nombre} (${version.abreviatura})`} 
                value={version.id} 
              />
            ))}
          </Picker>
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre *</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Ej: Génesis"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Abreviatura *</Text>
        <TextInput
          style={styles.input}
          value={abreviatura}
          onChangeText={setAbreviatura}
          placeholder="Ej: Gen"
          maxLength={10}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Testamento *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={testamento}
            onValueChange={(itemValue) => setTestamento(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Antiguo Testamento" value="Antiguo" />
            <Picker.Item label="Nuevo Testamento" value="Nuevo" />
          </Picker>
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Orden *</Text>
        <TextInput
          style={styles.input}
          value={orden}
          onChangeText={setOrden}
          placeholder="Ej: 1"
          keyboardType="numeric"
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
          onPress={guardarLibro}
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  createVersionButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  createVersionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
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

export default NuevoLibro;