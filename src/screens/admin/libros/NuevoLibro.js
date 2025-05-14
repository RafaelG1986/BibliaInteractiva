import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const NuevoLibro = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [abreviatura, setAbreviatura] = useState('');
  const [orden, setOrden] = useState('');
  const [testamento, setTestamento] = useState('Antiguo');
  const [versiones, setVersiones] = useState([]);
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        setLoading(true);
        const data = await db.getVersiones();
        setVersiones(data);
        if (data.length > 0) {
          setSelectedVersionId(data[0].id);
        }
      } catch (error) {
        console.error('Error al cargar versiones:', error);
        Alert.alert('Error', 'No se pudieron cargar las versiones bíblicas');
      } finally {
        setLoading(false);
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
    if (!orden.trim() || isNaN(parseInt(orden))) {
      Alert.alert('Error', 'El orden debe ser un número válido');
      return false;
    }
    if (!selectedVersionId) {
      Alert.alert('Error', 'Debe seleccionar una versión bíblica');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validarFormulario()) return;

    try {
      setSubmitting(true);
      await db.addLibro({
        version_id: selectedVersionId,
        nombre,
        abreviatura,
        testamento,
        orden: parseInt(orden)
      });
      
      Alert.alert('Éxito', 'Libro creado correctamente', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.error('Error al guardar libro:', error);
      Alert.alert('Error', 'No se pudo guardar el libro');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versiones bíblicas...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevo Libro Bíblico</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Versión Bíblica:</Text>
        <View style={styles.pickerContainer}>
          {versiones.length > 0 ? (
            <Picker
              selectedValue={selectedVersionId}
              onValueChange={(value) => setSelectedVersionId(value)}
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
          ) : (
            <Text style={styles.noDataText}>
              No hay versiones disponibles. Cree una versión primero.
            </Text>
          )}
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Ej: Génesis"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Abreviatura:</Text>
        <TextInput
          style={styles.input}
          value={abreviatura}
          onChangeText={setAbreviatura}
          placeholder="Ej: Gen"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Orden:</Text>
        <TextInput
          style={styles.input}
          value={orden}
          onChangeText={setOrden}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Testamento:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={testamento}
            onValueChange={(value) => setTestamento(value)}
            style={styles.picker}
          >
            <Picker.Item label="Antiguo Testamento" value="Antiguo" />
            <Picker.Item label="Nuevo Testamento" value="Nuevo" />
          </Picker>
        </View>
      </View>
      
      <TouchableOpacity
        style={[styles.button, submitting && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={submitting || versiones.length === 0}
      >
        {submitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Guardar Libro</Text>
        )}
      </TouchableOpacity>
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
    color: '#333',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#a0a0a0',
  },
  noDataText: {
    padding: 15,
    color: '#e74c3c',
    fontStyle: 'italic',
  },
});

export default NuevoLibro;