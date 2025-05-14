import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const VersiculosList = ({ navigation }) => {
  const [versiculos, setVersiculos] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [libros, setLibros] = useState([]);
  const [capitulos, setCapitulos] = useState([]);
  
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [selectedCapituloId, setSelectedCapituloId] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Cargar datos iniciales
  useEffect(() => {
    cargarVersiones();
    
    // Actualizar al volver a la pantalla
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedCapituloId) {
        cargarVersiculosPorCapitulo(selectedCapituloId);
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
        setVersiculos([]);
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
      const capitulosData = await db.getCapitulosByLibro(libroId);
      setCapitulos(capitulosData);
      
      if (capitulosData.length > 0) {
        setSelectedCapituloId(capitulosData[0].id);
        await cargarVersiculosPorCapitulo(capitulosData[0].id);
      } else {
        setVersiculos([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      Alert.alert('Error', 'No se pudieron cargar los capítulos');
      setLoading(false);
    }
  };

  // Cargar versículos de un capítulo específico
  const cargarVersiculosPorCapitulo = async (capituloId) => {
    try {
      setRefreshing(true);
      const versiculosData = await db.getVersiculosByCapitulo(capituloId);
      setVersiculos(versiculosData);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar versículos:', error);
      Alert.alert('Error', 'No se pudieron cargar los versículos');
      setRefreshing(false);
      setLoading(false);
    }
  };

  // Manejar cambios en los selectores
  const handleCambiarVersion = (versionId) => {
    setSelectedVersionId(versionId);
    cargarLibrosPorVersion(versionId);
  };

  const handleCambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    cargarCapitulosPorLibro(libroId);
  };

  const handleCambiarCapitulo = (capituloId) => {
    setSelectedCapituloId(capituloId);
    cargarVersiculosPorCapitulo(capituloId);
  };

  // Eliminar un versículo
  const handleEliminarVersiculo = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro de que desea eliminar este versículo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteVersiculo(id);
              setVersiculos(versiculos.filter(v => v.id !== id));
              Alert.alert('Éxito', 'Versículo eliminado correctamente');
            } catch (error) {
              console.error('Error al eliminar versículo:', error);
              Alert.alert('Error', 'No se pudo eliminar el versículo');
            }
          }
        }
      ]
    );
  };

  // Navegación a la pantalla de edición
  const handleEditarVersiculo = (versiculo) => {
    navigation.navigate('EditarVersiculo', { id: versiculo.id });
  };

  // Filtrar versículos por búsqueda
  const versiculosFiltrados = versiculos.filter(v => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      v.texto.toLowerCase().includes(query) ||
      v.numero.toString().includes(query)
    );
  });

  // Renderizar un ítem de la lista
  const renderItem = ({ item }) => (
    <View style={styles.versiculoItem}>
      <View style={styles.versiculoInfo}>
        <Text style={styles.versiculoNumero}>{item.numero}</Text>
        <Text style={styles.versiculoTexto}>{item.texto}</Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.editButton]}
          onPress={() => handleEditarVersiculo(item)}
        >
          <Ionicons name="create-outline" size={20} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => handleEliminarVersiculo(item.id)}
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
        <Text style={styles.loadingText}>Cargando versículos...</Text>
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
        
        {/* Selector de Capítulo */}
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Capítulo:</Text>
          <View style={styles.pickerContainer}>
            {capitulos.length > 0 ? (
              <Picker
                selectedValue={selectedCapituloId}
                onValueChange={handleCambiarCapitulo}
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
                No hay capítulos para este libro
              </Text>
            )}
          </View>
        </View>
        
        {/* Buscador */}
        {versiculos.length > 0 && (
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Buscar versículos..."
              placeholderTextColor="#999"
            />
            {searchQuery ? (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color="#666" />
              </TouchableOpacity>
            ) : null}
          </View>
        )}
      </View>
      
      {versiculos.length > 0 ? (
        <FlatList
          data={versiculosFiltrados}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing={refreshing}
          onRefresh={() => cargarVersiculosPorCapitulo(selectedCapituloId)}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="document-text-outline" size={60} color="#ccc" />
          <Text style={styles.emptyStateText}>
            No hay versículos para este capítulo
          </Text>
        </View>
      )}
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NuevoVersiculo', { 
          capituloId: selectedCapituloId 
        })}
        disabled={!selectedCapituloId}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: '#333',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  versiculoItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  versiculoInfo: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  versiculoNumero: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginRight: 12,
    minWidth: 30,
    textAlign: 'right',
  },
  versiculoTexto: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    lineHeight: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
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

export default VersiculosList;