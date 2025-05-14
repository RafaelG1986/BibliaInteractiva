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

const NuevoCapitulo = ({ navigation, route }) => {
  const { libroId: libroIdParam } = route.params || {};
  
  const [numero, setNumero] = useState('');
  const [versiones, setVersiones] = useState([]);
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(libroIdParam || null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        
        // Cargar versiones
        const versionesData = await db.getVersiones();
        setVersiones(versionesData);
        
        if (versionesData.length > 0) {
          // Si ya tenemos un libroId, necesitamos obtener su versionId
          if (libroIdParam) {
            const libro = await db.getLibroById(libroIdParam);
            if (libro) {
              setSelectedVersionId(libro.version_id);
              setSelectedLibroId(libroIdParam);
              
              // Cargar libros de esa versión
              const librosData = await db.getLibrosByVersion(libro.version_id);
              setLibros(librosData);
            } else {
              // Si no se encuentra el libro, usar la primera versión
              setSelectedVersionId(versionesData[0].id);
              const librosData = await db.getLibrosByVersion(versionesData[0].id);
              setLibros(librosData);
              if (librosData.length > 0) {
                setSelectedLibroId(librosData[0].id);
              }
            }
          } else {
            // Si no hay libroId, usar primera versión y cargar sus libros
            setSelectedVersionId(versionesData[0].id);
            const librosData = await db.getLibrosByVersion(versionesData[0].id);
            setLibros(librosData);
            if (librosData.length > 0) {
              setSelectedLibroId(librosData[0].id);
            }
          }
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos necesarios');
      } finally {
        setLoading(false);
      }
    };
    
    cargarDatos();
  }, [libroIdParam]);

  const cargarLibrosPorVersion = async (versionId) => {
    try {
      setLoading(true);
      const librosData = await db.getLibrosByVersion(versionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        setSelectedLibroId(librosData[0].id);
      } else {
        setSelectedLibroId(null);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      Alert.alert('Error', 'No se pudieron cargar los libros');
    } finally {
      setLoading(false);
    }
  };

  const cambiarVersion = (versionId) => {
    setSelectedVersionId(versionId);
    cargarLibrosPorVersion(versionId);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(parseInt(numero))) {
      Alert.alert('Error', 'El número de capítulo debe ser un valor numérico');
      return false;
    }
    if (!selectedLibroId) {
      Alert.alert('Error', 'Debe seleccionar un libro');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validarFormulario()) return;

    try {
      setSubmitting(true);
      
      // Verificar si el capítulo ya existe
      const capitulos = await db.getCapitulosByLibro(selectedLibroId);
      const capituloExistente = capitulos.find(c => c.numero === parseInt(numero));
      
      if (capituloExistente) {
        Alert.alert('Error', `El capítulo ${numero} ya existe para este libro`);
        setSubmitting(false);
        return;
      }
      
      await db.addCapitulo({
        libro_id: selectedLibroId,
        numero: parseInt(numero)
      });
      
      Alert.alert('Éxito', 'Capítulo creado correctamente', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.error('Error al guardar capítulo:', error);
      Alert.alert('Error', 'No se pudo guardar el capítulo');
    } finally {
      setSubmitting(false);
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
      <Text style={styles.title}>Nuevo Capítulo</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Versión Bíblica:</Text>
        <View style={styles.pickerContainer}>
          {versiones.length > 0 ? (
            <Picker
              selectedValue={selectedVersionId}
              onValueChange={cambiarVersion}
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
        <Text style={styles.label}>Libro:</Text>
        <View style={styles.pickerContainer}>
          {libros.length > 0 ? (
            <Picker
              selectedValue={selectedLibroId}
              onValueChange={(value) => setSelectedLibroId(value)}
              style={styles.picker}
              enabled={libros.length > 0}
            >
              {libros.map(libro => (
                <Picker.Item 
                  key={libro.id} 
                  label={libro.nombre} 
                  value={libro.id} 
                />
              ))}
            </Picker>
          ) : (
            <Text style={styles.noDataText}>
              No hay libros disponibles para esta versión.
            </Text>
          )}
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de Capítulo:</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <TouchableOpacity
        style={[
          styles.button, 
          (submitting || !selectedLibroId) && styles.disabledButton
        ]}
        onPress={handleSubmit}
        disabled={submitting || !selectedLibroId}
      >
        {submitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Guardar Capítulo</Text>
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
  noDataText: {
    padding: 15,
    color: '#e74c3c',
    fontStyle: 'italic',
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
  }
});

export default NuevoCapitulo;