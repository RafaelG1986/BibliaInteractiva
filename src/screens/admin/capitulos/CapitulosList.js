import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const CapitulosList = ({ navigation, route }) => {
  const [libros, setLibros] = useState([]);
  const [capitulos, setCapitulos] = useState([]);
  const [selectedLibro, setSelectedLibro] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const cargarLibros = async () => {
    try {
      // Por defecto cargamos la versión con ID 1
      const data = await db.getLibrosByVersion(1);
      setLibros(data);
      
      if (data.length > 0) {
        const libroId = route.params?.libroId || data[0].id;
        setSelectedLibro(libroId);
        cargarCapitulos(libroId);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      setLoading(false);
    }
  };
  
  const cargarCapitulos = async (libroId) => {
    try {
      setLoading(true);
      const data = await db.getCapitulosByLibro(libroId || selectedLibro);
      setCapitulos(data);
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      Alert.alert('Error', 'No se pudieron cargar los capítulos');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    cargarLibros();
    
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedLibro) {
        cargarCapitulos(selectedLibro);
      } else {
        cargarLibros();
      }
    });
    
    return unsubscribe;
  }, [navigation]);
  
  const eliminarCapitulo = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar este capítulo? Se eliminarán todos los versículos asociados.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteCapitulo(id);
              cargarCapitulos(selectedLibro);
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
  
  const cambiarLibro = (libroId) => {
    setSelectedLibro(libroId);
    cargarCapitulos(libroId);
  };
  
  if (loading && !capitulos.length) {
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
        <Text style={styles.title}>Gestionar Capítulos</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('NuevoCapitulo', { libroId: selectedLibro })}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Nuevo</Text>
        </TouchableOpacity>
      </View>
      
      {/* Selector de libro */}
      {libros.length > 0 ? (
        <View style={styles.libroSelector}>
          <Text style={styles.selectorLabel}>Libro:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {libros.map(libro => (
              <TouchableOpacity
                key={libro.id}
                style={[
                  styles.libroButton,
                  selectedLibro === libro.id && styles.selectedLibro
                ]}
                onPress={() => cambiarLibro(libro.id)}
              >
                <Text 
                  style={[
                    styles.libroButtonText,
                    selectedLibro === libro.id && styles.selectedLibroText
                  ]}
                >
                  {libro.abreviatura}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.noLibros}>
          <Text style={styles.noLibrosText}>
            No hay libros disponibles. Por favor, crea un libro primero.
          </Text>
          <TouchableOpacity
            style={styles.createLibroButton}
            onPress={() => navigation.navigate('LibrosList')}
          >
            <Text style={styles.createLibroButtonText}>Ir a Gestionar Libros</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {/* Lista de capítulos */}
      {selectedLibro && (
        <FlatList
          data={capitulos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.capituloItem}>
              <View style={styles.capituloInfo}>
                <Text style={styles.capituloName}>Capítulo {item.numero}</Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.viewButton]}
                  onPress={() => navigation.navigate('VersiculosList', { capituloId: item.id })}
                >
                  <Ionicons name="book-outline" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editButton]}
                  onPress={() => navigation.navigate('EditarCapitulo', { capituloId: item.id })}
                >
                  <Ionicons name="create-outline" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => eliminarCapitulo(item.id)}
                >
                  <Ionicons name="trash-outline" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.list}
          refreshing={loading}
          onRefresh={() => cargarCapitulos(selectedLibro)}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>
              No hay capítulos disponibles para este libro
            </Text>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
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
  libroSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  libroButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedLibro: {
    backgroundColor: '#4a90e2',
  },
  libroButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  selectedLibroText: {
    color: 'white',
  },
  noLibros: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  noLibrosText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
    fontSize: 16,
  },
  createLibroButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  createLibroButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  capituloItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  capituloInfo: {
    flex: 1,
  },
  capituloName: {
    fontSize: 18,
    fontWeight: 'bold',
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
  viewButton: {
    backgroundColor: '#5cb85c',
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
  },
});

export default CapitulosList;