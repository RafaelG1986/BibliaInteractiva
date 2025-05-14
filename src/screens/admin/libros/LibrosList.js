import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const LibrosList = ({ navigation }) => {
  const [libros, setLibros] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [loading, setLoading] = useState(true);

  const cargarVersiones = async () => {
    try {
      const data = await db.getVersiones();
      setVersiones(data);
      // Seleccionar la primera versión por defecto
      if (data.length > 0 && !selectedVersion) {
        setSelectedVersion(data[0].id);
        cargarLibros(data[0].id);
      } else if (data.length === 0) {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar versiones:', error);
      setLoading(false);
    }
  };

  const cargarLibros = async (versionId) => {
    try {
      setLoading(true);
      const data = await db.getLibrosByVersion(versionId || selectedVersion);
      setLibros(data);
    } catch (error) {
      console.error('Error al cargar libros:', error);
      Alert.alert('Error', 'No se pudieron cargar los libros');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarVersiones();
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedVersion) {
        cargarLibros(selectedVersion);
      } else {
        cargarVersiones();
      }
    });
    return unsubscribe;
  }, [navigation]);

  const eliminarLibro = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar este libro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteLibro(id);
              cargarLibros();
              Alert.alert('Éxito', 'Libro eliminado correctamente');
            } catch (error) {
              console.error('Error al eliminar libro:', error);
              Alert.alert('Error', 'No se pudo eliminar el libro');
            }
          }
        }
      ]
    );
  };

  const cambiarVersion = (versionId) => {
    setSelectedVersion(versionId);
    cargarLibros(versionId);
  };

  if (loading && !libros.length) {
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
        <Text style={styles.title}>Gestionar Libros</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('NuevoLibro', { versionId: selectedVersion })}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Nuevo</Text>
        </TouchableOpacity>
      </View>

      {/* Selector de versión */}
      {versiones.length > 0 ? (
        <View style={styles.versionSelector}>
          <Text style={styles.selectorLabel}>Versión:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {versiones.map(version => (
              <TouchableOpacity
                key={version.id}
                style={[
                  styles.versionButton,
                  selectedVersion === version.id && styles.selectedVersion
                ]}
                onPress={() => cambiarVersion(version.id)}
              >
                <Text 
                  style={[
                    styles.versionButtonText,
                    selectedVersion === version.id && styles.selectedVersionText
                  ]}
                >
                  {version.abreviatura}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.noVersions}>
          <Text style={styles.noVersionsText}>
            No hay versiones disponibles. Por favor, crea una versión primero.
          </Text>
          <TouchableOpacity
            style={styles.createVersionButton}
            onPress={() => navigation.navigate('VersionesList')}
          >
            <Text style={styles.createVersionButtonText}>Ir a Gestionar Versiones</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Lista de libros */}
      {selectedVersion && (
        <FlatList
          data={libros}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.libroItem}>
              <View style={styles.libroInfo}>
                <Text style={styles.libroName}>{item.nombre}</Text>
                <Text style={styles.libroDetails}>
                  {item.abreviatura} - {item.testamento}
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editButton]}
                  onPress={() => navigation.navigate('EditarLibro', { libroId: item.id })}
                >
                  <Ionicons name="create-outline" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => eliminarLibro(item.id)}
                >
                  <Ionicons name="trash-outline" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.list}
          refreshing={loading}
          onRefresh={() => cargarLibros()}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>
              No hay libros disponibles para esta versión
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
  versionSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  versionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedVersion: {
    backgroundColor: '#4a90e2',
  },
  versionButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  selectedVersionText: {
    color: 'white',
  },
  noVersions: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  noVersionsText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
    fontSize: 16,
  },
  createVersionButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  createVersionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  libroItem: {
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
  libroInfo: {
    flex: 1,
  },
  libroName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  libroDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
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
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
  },
});

export default LibrosList;