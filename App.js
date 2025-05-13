import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Componentes temporales (después los moveremos a archivos separados)
const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Biblia Interactiva</Text>
    <Text style={styles.subtitle}>Tu compañero de estudio bíblico</Text>
  </View>
);

const ReadScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Lectura</Text>
    <Text style={styles.subtitle}>Aquí irá el lector de la Biblia</Text>
  </View>
);

const AdminScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Administración</Text>
    <Text style={styles.subtitle}>Panel CRUD de la Biblia</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
    justifyContent: 'center',
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
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});
