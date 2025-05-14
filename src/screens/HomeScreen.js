import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  Image,
  ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../database/database';

const HomeScreen = ({ navigation }) => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        setLoading(true);
        const data = await db.getVersiones();
        setVersiones(data);
      } catch (error) {
        console.error('Error al cargar versiones:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarVersiones();
    
    // Recargar cuando el usuario vuelva a esta pantalla
    const unsubscribe = navigation.addListener('focus', cargarVersiones);
    return unsubscribe;
  }, [navigation]);

  const irALectura = (versionId) => {
    // Usar el nombre correcto "Lectura" en lugar de "Read"
    navigation.jumpTo('Lectura', { versionId });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versiones bíblicas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Biblia Interactiva</Text>
        <Text style={styles.subtitle}>Tu compañero de estudio bíblico</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Versiones disponibles</Text>
        {versiones.length > 0 ? (
          <FlatList
            data={versiones}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.versionItem}
                onPress={() => irALectura(item.id)}
              >
                <View style={styles.versionInfo}>
                  <Text style={styles.versionName}>{item.nombre}</Text>
                  <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#4a90e2" />
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.list}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay versiones disponibles</Text>
            <Text style={styles.emptySubtext}>
              Añade versiones desde el panel de administración
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity 
        style={styles.adminButton}
        onPress={() => navigation.navigate('Admin')}
      >
        <Ionicons name="settings-outline" size={20} color="white" />
        <Text style={styles.adminButtonText}>Panel de Administración</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f8fa',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  sectionContainer: {
    width: '100%',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  versionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  versionInfo: {
    flex: 1,
  },
  versionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  versionDetails: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
  },
  adminButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  adminButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  }
});

export default HomeScreen;