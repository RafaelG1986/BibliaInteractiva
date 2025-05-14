import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
  Switch
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const CopiarLibros = ({ navigation, route }) => {
  const { targetVersionId } = route.params || {};
  
  const [versiones, setVersiones] = useState([]);
  const [selectedSourceVersionId, setSelectedSourceVersionId] = useState(null);
  const [targetVersionName, setTargetVersionName] = useState('');
  const [copyContent, setCopyContent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setInitialLoading(true);
        
        // Cargar versiones
        const versionesData = await db.getVersiones();
        // Filtrar la versión destino para no mostrarla en el selector de origen
        const versionesSource = versionesData.filter(v => v.id !== targetVersionId);
        setVersiones(versionesSource);
        
        // Si hay versiones disponibles, seleccionar la primera por defecto
        if (versionesSource.length > 0) {
          setSelectedSourceVersionId(versionesSource[0].id);
        }
        
        // Obtener el nombre de la versión destino
        if (targetVersionId) {
          const targetVersion = versionesData.find(v => v.id === targetVersionId);
          if (targetVersion) {
            setTargetVersionName(targetVersion.nombre);
          }
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar las versiones bíblicas');
      } finally {
        setInitialLoading(false);
      }
    };
    
    cargarDatos();
  }, [targetVersionId]);

  const handleCopiarLibros = async () => {
    if (!selectedSourceVersionId || !targetVersionId) {
      Alert.alert('Error', 'Debe seleccionar una versión origen y destino');
      return;
    }

    try {
      setLoading(true);
      
      // Confirmar la operación
      Alert.alert(
        'Confirmar copia',
        `¿Desea copiar todos los libros${copyContent ? ', capítulos y versículos' : ''} de la versión seleccionada a ${targetVersionName}?`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
            onPress: () => setLoading(false),
          },
          {
            text: 'Copiar',
            onPress: async () => {
              try {
                const result = await db.copyLibrosToVersion(
                  selectedSourceVersionId,
                  targetVersionId,
                  copyContent
                );
                
                Alert.alert(
                  'Copia completada',
                  `Se han copiado ${result.librosCopied} libros${copyContent ? ` y ${result.capitulosCopied} capítulos con sus versículos` : ''} exitosamente.`,
                  [
                    {
                      text: 'OK',
                      onPress: () => navigation.goBack()
                    }
                  ]
                );
              } catch (error) {
                console.error('Error durante la copia:', error);
                Alert.alert('Error', error.message || 'No se pudieron copiar los libros');
              } finally {
                setLoading(false);
              }
            }
          }
        ]
      );
    } catch (error) {
      console.error('Error al iniciar la copia:', error);
      Alert.alert('Error', 'No se pudo iniciar el proceso de copia');
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versiones bíblicas...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Copiar libros entre versiones</Text>
      
      <View style={styles.infoContainer}>
        <Ionicons name="information-circle" size={24} color="#4a90e2" />
        <Text style={styles.infoText}>
          Esta herramienta le permite copiar todos los libros de una versión bíblica existente a "{targetVersionName}".
          También puede elegir copiar los capítulos y versículos asociados.
        </Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Versión origen (copiar desde):</Text>
        <View style={styles.pickerContainer}>
          {versiones.length > 0 ? (
            <Picker
              selectedValue={selectedSourceVersionId}
              onValueChange={(value) => setSelectedSourceVersionId(value)}
              style={styles.picker}
            >
              {versiones.map(version => (
                <Picker.Item 
                  key={version.id} 
                  label={`${version.nombre} (${version.abreviatura})`} 
                  value={version.id} 
                />
              ))}
            </Picker>
          ) : (
            <Text style={styles.noOptionsText}>No hay otras versiones bíblicas disponibles</Text>
          )}
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Versión destino (copiar a):</Text>
        <View style={styles.targetVersionContainer}>
          <Text style={styles.targetVersionName}>{targetVersionName}</Text>
        </View>
      </View>
      
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>
          Copiar también capítulos y versículos
        </Text>
        <Switch
          value={copyContent}
          onValueChange={setCopyContent}
          trackColor={{ false: "#767577", true: "#d0e4ff" }}
          thumbColor={copyContent ? "#4a90e2" : "#f4f3f4"}
        />
      </View>
      
      <TouchableOpacity 
        style={[
          styles.button,
          (!selectedSourceVersionId || loading) && styles.disabledButton
        ]}
        onPress={handleCopiarLibros}
        disabled={!selectedSourceVersionId || loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Iniciar copia de libros</Text>
        )}
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
        disabled={loading}
      >
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    backgroundColor: '#e6f2ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#444',
    marginLeft: 8,
    lineHeight: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  targetVersionContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  targetVersionName: {
    fontSize: 16,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  switchLabel: {
    fontSize: 16,
    color: '#444',
    flex: 1,
  },
  noOptionsText: {
    padding: 15,
    color: '#888',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: '#a0a0a0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#4a90e2',
  },
  cancelButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: '500',
  }
});

export default CopiarLibros;