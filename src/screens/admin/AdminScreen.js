import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AdminScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Administración</Text>
      <Text style={styles.subtitle}>Panel CRUD de la Biblia</Text>
      
      <View style={styles.adminOptions}>
        <TouchableOpacity 
          style={styles.adminButton}
          onPress={() => navigation.navigate('VersionesList')}
        >
          <Ionicons name="book" size={24} color="white" style={styles.buttonIcon} />
          <Text style={styles.adminButtonText}>Gestionar Versiones</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.adminButton}
          onPress={() => navigation.navigate('LibrosList')}
        >
          <Ionicons name="library" size={24} color="white" style={styles.buttonIcon} />
          <Text style={styles.adminButtonText}>Gestionar Libros</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.adminButton}>
          <Ionicons name="document-text" size={24} color="white" style={styles.buttonIcon} />
          <Text style={styles.adminButtonText}>Gestionar Capítulos</Text>
        </TouchableOpacity>
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
  adminOptions: {
    width: '100%',
    marginTop: 20,
  },
  adminButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 10,
  },
  adminButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default AdminScreen;