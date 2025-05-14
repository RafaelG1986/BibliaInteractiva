import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { db } from '../database/database';

const ReadScreen = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const cargarLibros = async () => {
      try {
        setLoading(true);
        // Por defecto cargamos la versión con ID 1
        const data = await db.getLibrosByVersion(1);
        setLibros(data);
      } catch (error) {
        console.error('Error al cargar libros:', error);
      } finally {
        setLoading(false);
      }
    };
    
    cargarLibros();
  }, []);

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Lectura</Text>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Libros</Text>
        <FlatList
          data={libros}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.libroItem}>
              <Text style={styles.libroName}>{item.nombre}</Text>
              <Text style={styles.libroDetails}>{item.testamento}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No hay libros disponibles</Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  sectionContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  libroItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
  },
});

export default ReadScreen;