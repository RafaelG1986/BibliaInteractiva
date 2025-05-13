import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { initDatabase, db } from './src/database/database';

// Pantalla de inicio que muestra las versiones disponibles
const HomeScreen = () => {
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

// Pantalla de lectura
const ReadScreen = () => {
  const [libros, setLibros] = useState([]);
  
  useEffect(() => {
    const cargarLibros = async () => {
      try {
        // Por defecto cargamos la versión con ID 1
        const data = await db.getLibrosByVersion(1);
        setLibros(data);
      } catch (error) {
        console.error('Error al cargar libros:', error);
      }
    };
    
    cargarLibros();
  }, []);

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

// Pantalla de administración
const AdminScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Administración</Text>
      <Text style={styles.subtitle}>Panel CRUD de la Biblia</Text>
      
      <View style={styles.adminOptions}>
        <TouchableOpacity style={styles.adminButton}>
          <Text style={styles.adminButtonText}>Gestionar Versiones</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.adminButton}>
          <Text style={styles.adminButtonText}>Gestionar Libros</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.adminButton}>
          <Text style={styles.adminButtonText}>Gestionar Capítulos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Inicializar la base de datos al cargar la app
    const setupDatabase = async () => {
      try {
        await initDatabase();
        console.log('Base de datos inicializada correctamente');
        setIsLoading(false);
      } catch (err) {
        console.error('Error al inicializar la base de datos:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    setupDatabase();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Inicializando base de datos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.subtitle}>{error}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Lectura') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Admin') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            
            // Asegúrate de que Ionicons esté instalado: npx expo install @expo/vector-icons
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Lectura" component={ReadScreen} />
        <Tab.Screen name="Admin" component={AdminScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
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
  libroItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
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
  adminOptions: {
    width: '100%',
    marginTop: 20,
  },
  adminButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  adminButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
