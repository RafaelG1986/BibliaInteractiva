import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { db } from '../database/database';

const HomeScreen = ({ navigation }) => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        const data = await db.getVersiones();
        setVersiones(data);
      } catch (error) {
        console.error('Error al cargar versiones:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarVersiones();
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
      <Text style={styles.title}>Biblia Interactiva</Text>
      <Text style={styles.subtitle}>Tu compañero de estudio bíblico</Text>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Versiones disponibles</Text>
        <FlatList
          data={versiones}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.versionItem}>
              <Text style={styles.versionName}>{item.nombre}</Text>
              <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No hay versiones disponibles</Text>
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
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
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
  versionItem: {
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
  versionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionDetails: {
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

export default HomeScreen;