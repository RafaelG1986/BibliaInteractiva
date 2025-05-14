import React, { useState } from 'react';
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

const NuevaVersion = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [abreviatura, setAbreviatura] = useState('');
  const [idioma, setIdioma] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = async () => {
    // Validación
    if (!nombre.trim() || !abreviatura.trim() || !idioma.trim()) {
      Alert.alert('Error', 'Todos los campos son requeridos');
      return;
    }

    try {
      setSubmitting(true);
      const newVersion = await db.addVersion({
        nombre,
        abreviatura,
        idioma
      });
      
      Alert.alert(
        'Éxito', 
        '¿Desea copiar libros de otra versión bíblica a esta nueva versión?',
        [
          {
            text: 'No, más tarde',
            onPress: () => navigation.goBack()
          },
          {
            text: 'Sí, copiar libros',
            onPress: () => navigation.replace('CopiarLibros', { targetVersionId: newVersion.id })
          }
        ]
      );
    } catch (error) {
      console.error('Error al guardar versión:', error);
      Alert.alert('Error', 'No se pudo guardar la versión');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nueva Versión Bíblica</Text>
      
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
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={loading || submitting}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={loading || submitting}
        >
          {loading || submitting ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.submitButtonText}>Guardar</Text>
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
    backgroundColor: '#4CAF50',
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
});

export default NuevaVersion;