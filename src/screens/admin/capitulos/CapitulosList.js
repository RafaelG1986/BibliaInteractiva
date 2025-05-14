import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const CapitulosList = ({ navigation }) => {
  const [capitulos, setCapitulos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Cargar datos iniciales
  useEffect(() => {
    cargarVersiones();
    
    // Actualizar al volver a la pantalla
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedVersionId) {
        cargarLibrosPorVersion(selectedVersionId);
        if (selectedLibroId) {
          cargarCapitulosPorLibro(selectedLibroId);
        }
      }
    });

    return unsubscribe;
  }, [navigation]);

  // Cargar versiones bíblicas disponibles
  const cargarVersiones = async () => {
    try {
      setLoading(true);
      const versionesData = await db.getVersiones();
      setVersiones(versionesData);
      
      if (versionesData.length > 0) {
        setSelectedVersionId(versionesData[0].id);
        await cargarLibrosPorVersion(versionesData[0].id);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar versiones:', error);
      Alert.alert('Error', 'No se pudieron cargar las versiones bíblicas');
      setLoading(false);
    }
  };

  // Cargar libros de una versión específica
  const cargarLibrosPorVersion = async (versionId) => {
    try {
      const librosData = await db.getLibrosByVersion(versionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        setSelectedLibroId(librosData[0].id);
        await cargarCapitulosPorLibro(librosData[0].id);
      } else {
        setCapitulos([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      Alert.alert('Error', 'No se pudieron cargar los libros');
      setLoading(false);
    }
  };

  // Cargar capítulos de un libro específico
  const cargarCapitulosPorLibro = async (libroId) => {
    try {
      setRefreshing(true);
      const capitulosData = await db.getCapitulosByLibro(libroId);
      
      // Enriquecer datos con información del libro
      const capitulosEnriquecidos = await Promise.all(capitulosData.map(async (capitulo) => {
        const libro = await db.getLibroById(capitulo.libro_id);
        return {
          ...capitulo,
          libroNombre: libro ? libro.nombre : 'Desconocido'
        };
      }));
      
      setCapitulos(capitulosEnriquecidos);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      Alert.alert('Error', 'No se pudieron cargar los capítulos');
      setRefreshing(false);
      setLoading(false);
    }
  };

  // Cambiar la versión seleccionada
  const handleCambiarVersion = (versionId) => {
    setSelectedVersionId(versionId);
    cargarLibrosPorVersion(versionId);
  };

  // Cambiar el libro seleccionado
  const handleCambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    cargarCapitulosPorLibro(libroId);
  };

  // Eliminar un capítulo
  const handleEliminarCapitulo = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro de que desea eliminar este capítulo? Esta acción eliminará también todos los versículos asociados.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteCapitulo(id);
              setCapitulos(capitulos.filter(c => c.id !== id));
              Alert.alert('Éxito', 'Capítulo eliminado correctamente');
            } catch (error) {
              console.error('Error al eliminar capítulo:', error);
              Alert.alert('Error', 'No se pudo eliminar el capítulo');
            }
          }
        }
      ]
    );
  };

  // Navegación a la pantalla de edición
  const handleEditarCapitulo = (capitulo) => {
    navigation.navigate('EditarCapitulo', { id: capitulo.id });
  };

  // Renderizar un ítem de la lista
  const renderItem = ({ item }) => (
    <View style={styles.capituloItem}>
      <View style={styles.capituloInfo}>
        <Text style={styles.capituloNumero}>Capítulo {item.numero}</Text>
        <Text style={styles.libroNombre}>{item.libroNombre}</Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.editButton]}
          onPress={() => handleEditarCapitulo(item)}
        >
          <Ionicons name="create-outline" size={20} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => handleEliminarCapitulo(item.id)}
        >
          <Ionicons name="trash-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando capítulos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.selectors}>
        {/* Selector de Versión */}
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Versión:</Text>
          <View style={styles.pickerContainer}>
            {versiones.length > 0 ? (
              <Picker
                selectedValue={selectedVersionId}
                onValueChange={handleCambiarVersion}
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
              <Text style={styles.noDataText}>No hay versiones disponibles</Text>
            )}
          </View>
        </View>
        
        {/* Selector de Libro */}
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Libro:</Text>
          <View style={styles.pickerContainer}>
            {libros.length > 0 ? (
              <Picker
                selectedValue={selectedLibroId}
                onValueChange={handleCambiarLibro}
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
                No hay libros para esta versión
              </Text>
            )}
          </View>
        </View>
      </View>
      
      {capitulos.length > 0 ? (
        <FlatList
          data={capitulos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing={refreshing}
          onRefresh={() => cargarCapitulosPorLibro(selectedLibroId)}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="book-outline" size={60} color="#ccc" />
          <Text style={styles.emptyStateText}>
            No hay capítulos para este libro
          </Text>
        </View>
      )}
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NuevoCapitulo', { 
          libroId: selectedLibroId 
        })}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 16,
  },
  selectors: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  selectorContainer: {
    marginBottom: 12,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 6,
  },
  pickerContainer: {
    backgroundColor: '#f9f9f9',
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
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  capituloItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  capituloInfo: {
    flex: 1,
  },
  capituloNumero: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  libroNombre: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  }
});

export default CapitulosList;