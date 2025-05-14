import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const VersiculosList = ({ navigation, route }) => {
  const [versiculos, setVersiculos] = useState([]);
  const [capitulos, setCapitulos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [selectedCapituloId, setSelectedCapituloId] = useState(null);
  const [loading, setLoading] = useState(true);

  const cargarLibros = async () => {
    try {
      const data = await db.getLibros();
      setLibros(data);
      if (data.length > 0 && !selectedLibroId) {
        setSelectedLibroId(data[0].id);
        cargarCapitulos(data[0].id);
      } else if (data.length === 0) {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      setLoading(false);
    }
  };

  const cargarCapitulos = async (libroId) => {
    try {
      const data = await db.getCapitulosByLibro(libroId || selectedLibroId);
      setCapitulos(data);
      if (data.length > 0 && !selectedCapituloId) {
        setSelectedCapituloId(data[0].id);
        cargarVersiculos(data[0].id);
      } else if (data.length === 0) {
        setVersiculos([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      setLoading(false);
    }
  };

  const cargarVersiculos = async (capituloId) => {
    try {
      setLoading(true);
      const data = await db.getVersiculosByCapitulo(capituloId || selectedCapituloId);
      setVersiculos(data);
    } catch (error) {
      console.error('Error al cargar versículos:', error);
      Alert.alert('Error', 'No se pudieron cargar los versículos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarLibros();
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedCapituloId) {
        cargarVersiculos(selectedCapituloId);
      } else if (selectedLibroId) {
        cargarCapitulos(selectedLibroId);
      } else {
        cargarLibros();
      }
    });
    return unsubscribe;
  }, [navigation]);

  const eliminarVersiculo = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar este versículo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteVersiculo(id);
              cargarVersiculos(selectedCapituloId);
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

  const cambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    setSelectedCapituloId(null);
    setVersiculos([]);
    cargarCapitulos(libroId);
  };

  const cambiarCapitulo = (capituloId) => {
    setSelectedCapituloId(capituloId);
    cargarVersiculos(capituloId);
  };

  if (loading && !versiculos.length && !capitulos.length) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestionar Versículos</Text>
        <View style={styles.headerButtons}>
          {selectedCapituloId && (
            <TouchableOpacity 
              style={styles.massImportButton}
              onPress={() => navigation.navigate('CargaMasivaVersiculos', { capituloId: selectedCapituloId })}
            >
              <Ionicons name="document-text" size={20} color="white" />
              <Text style={styles.massImportButtonText}>Carga Masiva</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('NuevoVersiculo', { capituloId: selectedCapituloId })}
            disabled={!selectedCapituloId}
          >
            <Ionicons name="add" size={24} color="white" />
            <Text style={styles.addButtonText}>Nuevo</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Selector de Libro */}
      <View style={styles.selectorContainer}>
        <Text style={styles.selectorLabel}>Libro:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorScrollView}>
          {libros.map(libro => (
            <TouchableOpacity
              key={libro.id}
              style={[
                styles.selectorButton,
                selectedLibroId === libro.id && styles.selectedButton
              ]}
              onPress={() => cambiarLibro(libro.id)}
            >
              <Text 
                style={[
                  styles.selectorButtonText,
                  selectedLibroId === libro.id && styles.selectedButtonText
                ]}
              >
                {libro.abreviatura}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Selector de Capítulo */}
      {selectedLibroId && (
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Capítulo:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorScrollView}>
            {capitulos.length > 0 ? (
              capitulos.map(capitulo => (
                <TouchableOpacity
                  key={capitulo.id}
                  style={[
                    styles.selectorButton,
                    selectedCapituloId === capitulo.id && styles.selectedButton
                  ]}
                  onPress={() => cambiarCapitulo(capitulo.id)}
                >
                  <Text 
                    style={[
                      styles.selectorButtonText,
                      selectedCapituloId === capitulo.id && styles.selectedButtonText
                    ]}
                  >
                    {capitulo.numero}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No hay capítulos para este libro</Text>
                <TouchableOpacity 
                  style={styles.createButton}
                  onPress={() => navigation.navigate('CapitulosList')}
                >
                  <Text style={styles.createButtonText}>Crear Capítulos</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </View>
      )}

      {/* Lista de versículos */}
      {selectedCapituloId && (
        <FlatList
          data={versiculos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.versiculoItem}>
              <Text style={styles.versiculoNumero}>{item.numero}</Text>
              <View style={styles.versiculoInfo}>
                <Text style={styles.versiculoTexto}>{item.texto}</Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editButton]}
                  onPress={() => navigation.navigate('EditarVersiculo', { versiculoId: item.id })}
                >
                  <Ionicons name="create-outline" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => eliminarVersiculo(item.id)}
                >
                  <Ionicons name="trash-outline" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.list}
          refreshing={loading}
          onRefresh={() => cargarVersiculos(selectedCapituloId)}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyMessage}>No hay versículos en este capítulo</Text>
              <TouchableOpacity
                style={styles.createButton}
                onPress={() => navigation.navigate('NuevoVersiculo', { capituloId: selectedCapituloId })}
              >
                <Text style={styles.createButtonText}>Añadir Versículo</Text>
              </TouchableOpacity>
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  massImportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#32a852',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  massImportButtonText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: '500',
    fontSize: 12,
  },
  selectorContainer: {
    marginBottom: 16,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selectorScrollView: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  selectorButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minWidth: 44,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#4a90e2',
  },
  selectorButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  selectedButtonText: {
    color: 'white',
  },
  list: {
    paddingBottom: 20,
  },
  versiculoItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  versiculoNumero: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 12,
    color: '#4a90e2',
    minWidth: 26,
    textAlign: 'center',
  },
  versiculoInfo: {
    flex: 1,
  },
  versiculoTexto: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#777',
    marginBottom: 16,
    textAlign: 'center',
  },
  noDataContainer: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  noDataText: {
    color: '#777',
    marginBottom: 8,
  },
  createButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  createButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default VersiculosList;