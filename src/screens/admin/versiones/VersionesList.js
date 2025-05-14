import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const VersionesList = ({ navigation }) => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarVersiones = async () => {
    try {
      setLoading(true);
      const data = await db.getVersiones();
      setVersiones(data);
    } catch (error) {
      console.error('Error al cargar versiones:', error);
      Alert.alert('Error', 'No se pudieron cargar las versiones');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarVersiones();
  }, []);

  const eliminarVersion = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar esta versión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteVersion(id);
              cargarVersiones();
              Alert.alert('Éxito', 'Versión eliminada correctamente');
            } catch (error) {
              console.error('Error al eliminar versión:', error);
              Alert.alert('Error', 'No se pudo eliminar la versión');
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestionar Versiones</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('NuevaVersion')}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Nueva</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={versiones}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.versionItem}>
            <View style={styles.versionInfo}>
              <Text style={styles.versionName}>{item.nombre}</Text>
              <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity 
                style={[styles.actionButton, styles.editButton]}
                onPress={() => navigation.navigate('EditarVersion', { versionId: item.id })}
              >
                <Ionicons name="create-outline" size={22} color="white" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => eliminarVersion(item.id)}
              >
                <Ionicons name="trash-outline" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
        refreshing={loading}
        onRefresh={cargarVersiones}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No hay versiones disponibles</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
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
  list: {
    paddingBottom: 20,
  },
  versionItem: {
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
  versionInfo: {
    flex: 1,
  },
  versionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionDetails: {
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

export default VersionesList;