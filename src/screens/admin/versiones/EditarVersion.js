import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Alert,
  ActivityIndicator
} from 'react-native';
import { db } from '../../../database/database';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditarVersion = ({ navigation, route }) => {
  const { versionId } = route.params;
  
  const [nombre, setNombre] = useState('');
  const [abreviatura, setAbreviatura] = useState('');
  const [idioma, setIdioma] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const version = await db.getVersionById(versionId);
        if (version) {
          setNombre(version.nombre || '');
          setAbreviatura(version.abreviatura || '');
          setIdioma(version.idioma || '');
          setDescripcion(version.descripcion || '');
        } else {
          Alert.alert('Error', 'No se encontró la versión');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error al cargar datos de versión:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [versionId, navigation]);

  const validarFormulario = () => {
    if (!nombre.trim()) {
      Alert.alert('Error', 'El nombre es obligatorio');
      return false;
    }
    if (!abreviatura.trim()) {
      Alert.alert('Error', 'La abreviatura es obligatoria');
      return false;
    }
    if (!idioma.trim()) {
      Alert.alert('Error', 'El idioma es obligatorio');
      return false;
    }
    return true;
  };

  const actualizarVersion = async () => {
    if (!validarFormulario()) return;

    try {
      setSaving(true);
      
      const versionActualizada = {
        nombre,
        abreviatura,
        idioma,
        descripcion
      };
      
      await db.updateVersion(versionId, versionActualizada);
      
      Alert.alert('Éxito', 'Versión actualizada correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al actualizar versión:', error);
      Alert.alert('Error', 'No se pudo actualizar la versión');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Editar Versión Bíblica</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre *</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Ej: Reina Valera 1960"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Abreviatura *</Text>
        <TextInput
          style={styles.input}
          value={abreviatura}
          onChangeText={setAbreviatura}
          placeholder="Ej: RVR60"
          maxLength={10}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Idioma *</Text>
        <TextInput
          style={styles.input}
          value={idioma}
          onChangeText={setIdioma}
          placeholder="Ej: Español"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Descripción (opcional)</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={descripcion}
          onChangeText={setDescripcion}
          placeholder="Añade información adicional sobre esta versión"
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity 
        style={styles.copyBooksButton}
        onPress={() => navigation.navigate('CopiarLibros', { targetVersionId: versionId })}
      >
        <Ionicons name="copy-outline" size={20} color="white" />
        <Text style={styles.copyBooksButtonText}>Copiar libros de otra versión</Text>
      </TouchableOpacity>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={saving}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={actualizarVersion}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.submitButtonText}>Actualizar</Text>
          )}
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
    color: '#333',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 40,
  },
  submitButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cancelButtonText: {
    color: '#777',
    fontSize: 16,
  },
  copyBooksButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  copyBooksButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
});

export default EditarVersion;