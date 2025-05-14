import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const NuevoVersiculo = ({ navigation, route }) => {
  const { capituloId: capituloIdParam } = route.params || {};
  
  const [numero, setNumero] = useState('');
  const [texto, setTexto] = useState('');
  
  const [versiones, setVersiones] = useState([]);
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  
  const [capitulos, setCapitulos] = useState([]);
  const [selectedCapituloId, setSelectedCapituloId] = useState(capituloIdParam || null);
  
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
          // Si ya tenemos un capituloId, tenemos que obtener su libro y versión
          if (capituloIdParam) {
            const capitulo = await db.getCapituloById(capituloIdParam);
            if (capitulo) {
              const libro = await db.getLibroById(capitulo.libro_id);
              if (libro) {
                // Establecer la versión primero
                setSelectedVersionId(libro.version_id);
                
                // Cargar libros de esa versión
                const librosData = await db.getLibrosByVersion(libro.version_id);
                setLibros(librosData);
                
                // Establecer el libro
                setSelectedLibroId(libro.id);
                
                // Cargar capítulos de ese libro
                const capitulosData = await db.getCapitulosByLibro(libro.id);
                setCapitulos(capitulosData);
                
                // Establecer el capítulo
                setSelectedCapituloId(capituloIdParam);
              }
            } else {
              await cargarDatosPorDefecto(versionesData);
            }
          } else {
            await cargarDatosPorDefecto(versionesData);
          }
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos necesarios');
      } finally {
        setLoading(false);
      }
    };
    
    const cargarDatosPorDefecto = async (versiones) => {
      // Usar la primera versión
      const primerVersionId = versiones[0].id;
      setSelectedVersionId(primerVersionId);
      
      // Cargar libros de esa versión
      const librosData = await db.getLibrosByVersion(primerVersionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        // Usar el primer libro
        setSelectedLibroId(librosData[0].id);
        
        // Cargar capítulos de ese libro
        const capitulosData = await db.getCapitulosByLibro(librosData[0].id);
        setCapitulos(capitulosData);
        
        if (capitulosData.length > 0) {
          // Usar el primer capítulo
          setSelectedCapituloId(capitulosData[0].id);
        }
      }
    };
    
    cargarDatos();
  }, [capituloIdParam]);

  const cargarLibrosPorVersion = async (versionId) => {
    try {
      setLoading(true);
      const librosData = await db.getLibrosByVersion(versionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        setSelectedLibroId(librosData[0].id);
        
        // Al cambiar el libro, también debemos actualizar los capítulos
        const capitulosData = await db.getCapitulosByLibro(librosData[0].id);
        setCapitulos(capitulosData);
        
        if (capitulosData.length > 0) {
          setSelectedCapituloId(capitulosData[0].id);
        } else {
          setSelectedCapituloId(null);
        }
      } else {
        setSelectedLibroId(null);
        setCapitulos([]);
        setSelectedCapituloId(null);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      Alert.alert('Error', 'No se pudieron cargar los libros');
    } finally {
      setLoading(false);
    }
  };

  const cargarCapitulosPorLibro = async (libroId) => {
    try {
      setLoading(true);
      const capitulosData = await db.getCapitulosByLibro(libroId);
      setCapitulos(capitulosData);
      
      if (capitulosData.length > 0) {
        setSelectedCapituloId(capitulosData[0].id);
      } else {
        setSelectedCapituloId(null);
      }
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      Alert.alert('Error', 'No se pudieron cargar los capítulos');
    } finally {
      setLoading(false);
    }
  };

  const cambiarVersion = (versionId) => {
    setSelectedVersionId(versionId);
    cargarLibrosPorVersion(versionId);
  };

  const cambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    cargarCapitulosPorLibro(libroId);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(parseInt(numero))) {
      Alert.alert('Error', 'El número de versículo debe ser un valor numérico');
      return false;
    }
    if (!texto.trim()) {
      Alert.alert('Error', 'El texto del versículo es obligatorio');
      return false;
    }
    if (!selectedCapituloId) {
      Alert.alert('Error', 'Debe seleccionar un capítulo');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validarFormulario()) return;

    try {
      setSubmitting(true);
      
      // Verificar si el versículo ya existe
      const versiculos = await db.getVersiculosByCapitulo(selectedCapituloId);
      const versiculoExistente = versiculos.find(v => v.numero === parseInt(numero));
      
      if (versiculoExistente) {
        Alert.alert('Error', `El versículo ${numero} ya existe para este capítulo`);
        setSubmitting(false);
        return;
      }
      
      await db.addVersiculo({
        capitulo_id: selectedCapituloId,
        numero: parseInt(numero),
        texto: texto.trim()
      });
      
      Alert.alert('Éxito', 'Versículo creado correctamente', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.error('Error al guardar versículo:', error);
      Alert.alert('Error', 'No se pudo guardar el versículo');
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Nuevo Versículo</Text>
        
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
                onValueChange={cambiarLibro}
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
          <Text style={styles.label}>Capítulo:</Text>
          <View style={styles.pickerContainer}>
            {capitulos.length > 0 ? (
              <Picker
                selectedValue={selectedCapituloId}
                onValueChange={(value) => setSelectedCapituloId(value)}
                style={styles.picker}
                enabled={capitulos.length > 0}
              >
                {capitulos.map(capitulo => (
                  <Picker.Item 
                    key={capitulo.id} 
                    label={`Capítulo ${capitulo.numero}`} 
                    value={capitulo.id} 
                  />
                ))}
              </Picker>
            ) : (
              <Text style={styles.noDataText}>
                No hay capítulos disponibles para este libro.
              </Text>
            )}
          </View>
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Número de Versículo:</Text>
          <TextInput
            style={styles.input}
            value={numero}
            onChangeText={setNumero}
            placeholder="Ej: 1"
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Texto del Versículo:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={texto}
            onChangeText={setTexto}
            placeholder="Texto del versículo"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
        </View>
        
        <TouchableOpacity
          style={[
            styles.button, 
            (submitting || !selectedCapituloId) && styles.disabledButton
          ]}
          onPress={handleSubmit}
          disabled={submitting || !selectedCapituloId}
        >
          {submitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Guardar Versículo</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 16,
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
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
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

export default NuevoVersiculo;