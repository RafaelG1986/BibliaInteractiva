import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const CargaMasivaVersiculos = ({ navigation, route }) => {
  const { capituloId: capituloIdParam } = route.params || {};
  
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [capitulos, setCapitulos] = useState([]);
  const [selectedCapituloId, setSelectedCapituloId] = useState(capituloIdParam || null);
  const [textoVersiculos, setTextoVersiculos] = useState('');
  const [versiculosProcesados, setVersiculosProcesados] = useState([]);
  const [vistaPrevia, setVistaPrevia] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [formatoEjemplo, setFormatoEjemplo] = useState(
    "1 En el principio creó Dios los cielos y la tierra.\n" +
    "2 Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas.\n" +
    "3 Y dijo Dios: Sea la luz; y fue la luz."
  );

  // Cargar libros al inicio
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoadingData(true);
        const librosData = await db.getLibros();
        setLibros(librosData);
        
        // Si ya tenemos un capítulo ID de los parámetros
        if (capituloIdParam) {
          // Primero necesitamos obtener el capítulo para saber a qué libro pertenece
          const capitulo = await db.getCapituloById(capituloIdParam);
          if (capitulo) {
            setSelectedLibroId(capitulo.libro_id);
            const capitulosData = await db.getCapitulosByLibro(capitulo.libro_id);
            setCapitulos(capitulosData);
            setSelectedCapituloId(capituloIdParam);
          } else {
            await cargarLibrosPorDefecto(librosData);
          }
        } else {
          await cargarLibrosPorDefecto(librosData);
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los libros');
      } finally {
        setLoadingData(false);
      }
    };

    const cargarLibrosPorDefecto = async (librosData) => {
      if (librosData.length > 0) {
        setSelectedLibroId(librosData[0].id);
        const capitulosData = await db.getCapitulosByLibro(librosData[0].id);
        setCapitulos(capitulosData);
        
        if (capitulosData.length > 0) {
          setSelectedCapituloId(capitulosData[0].id);
        }
      }
    };

    cargarDatos();
  }, [capituloIdParam]);

  // Cargar capítulos cuando cambia el libro
  const cargarCapitulos = async (libroId) => {
    try {
      setLoadingData(true);
      const capitulosData = await db.getCapitulosByLibro(libroId);
      setCapitulos(capitulosData);
      
      if (capitulosData.length > 0) {
        setSelectedCapituloId(capitulosData[0].id);
      } else {
        setSelectedCapituloId(null);
      }
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      Alert.alert('Error', 'No se pudieron cargar los capítulos');
    } finally {
      setLoadingData(false);
    }
  };

  const cambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    cargarCapitulos(libroId);
  };

  // Procesar el texto ingresado para extraer números y texto de versículos
  const procesarTexto = () => {
    if (!textoVersiculos.trim()) {
      Alert.alert('Error', 'Ingrese texto para procesar');
      return;
    }

    // Expresión regular para encontrar el formato: número seguido de espacio y texto
    // El formato esperado es como "1 Texto del versículo"
    const lineas = textoVersiculos.split('\n');
    const versiculosProcesados = [];
    let errorEnLinea = -1;

    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i].trim();
      if (!linea) continue; // Ignorar líneas vacías

      // Buscar el número al inicio de la línea
      const match = linea.match(/^(\d+)(.+)/);
      
      if (match) {
        const numero = parseInt(match[1], 10);
        const texto = match[2].trim();
        
        if (isNaN(numero) || !texto) {
          errorEnLinea = i + 1;
          break;
        }
        
        versiculosProcesados.push({
          numero,
          texto
        });
      } else {
        errorEnLinea = i + 1;
        break;
      }
    }

    if (errorEnLinea !== -1) {
      Alert.alert(
        'Error de formato', 
        `La línea ${errorEnLinea} no tiene el formato correcto. Cada línea debe comenzar con un número seguido del texto del versículo.`
      );
      return;
    }

    // Verificar que los números sean consecutivos
    const numerosVersiculo = versiculosProcesados.map(v => v.numero);
    const numerosConsecutivos = Array.from(
      { length: Math.max(...numerosVersiculo) - Math.min(...numerosVersiculo) + 1 },
      (_, i) => Math.min(...numerosVersiculo) + i
    );
    
    if (JSON.stringify(numerosVersiculo.sort((a, b) => a - b)) !== JSON.stringify(numerosConsecutivos)) {
      Alert.alert(
        'Error de numeración', 
        'Los números de versículo deben ser consecutivos sin saltos ni duplicados.'
      );
      return;
    }

    setVersiculosProcesados(versiculosProcesados);
    setVistaPrevia(true);
  };

  // Guardar versículos, pero solo los que no existen
  const guardarVersiculos = async () => {
    if (!selectedCapituloId) {
      Alert.alert('Error', 'Debe seleccionar un capítulo');
      return;
    }

    if (versiculosProcesados.length === 0) {
      Alert.alert('Error', 'No hay versículos para guardar');
      return;
    }

    try {
      setLoading(true);
      
      // Obtener versículos existentes
      const versiculosExistentes = await db.getVersiculosByCapitulo(selectedCapituloId);
      
      // Crear un mapa de los números de versículo existentes para búsqueda rápida
      const numerosExistentes = new Set(versiculosExistentes.map(v => v.numero));
      
      // Separar versículos a agregar y versículos que se omitirán
      const versiculosAgregar = versiculosProcesados.filter(v => !numerosExistentes.has(v.numero));
      const versiculosOmitidos = versiculosProcesados.filter(v => numerosExistentes.has(v.numero));
      
      if (versiculosOmitidos.length > 0 && versiculosAgregar.length === 0) {
        Alert.alert(
          'Información',
          'Todos los versículos ya existen en este capítulo. No se realizarán cambios.',
          [{ text: 'OK' }]
        );
        setLoading(false);
        return;
      }
      
      // Si hay versículos para agregar y versículos que se omitirán
      if (versiculosOmitidos.length > 0 && versiculosAgregar.length > 0) {
        Alert.alert(
          'Confirmación',
          `Se encontraron ${versiculosOmitidos.length} versículos que ya existen (números: ${versiculosOmitidos.map(v => v.numero).join(', ')}). 
           Se añadirán solo los ${versiculosAgregar.length} versículos restantes. ¿Desea continuar?`,
          [
            {
              text: 'Cancelar',
              style: 'cancel',
              onPress: () => setLoading(false)
            },
            {
              text: 'Continuar',
              onPress: async () => {
                await agregarNuevosVersiculos(versiculosAgregar);
                setLoading(false);
              }
            }
          ]
        );
      } else {
        // Si todos son nuevos, simplemente agregarlos
        await agregarNuevosVersiculos(versiculosAgregar);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al verificar versículos:', error);
      Alert.alert('Error', 'No se pudieron procesar los versículos');
      setLoading(false);
    }
  };

  const agregarNuevosVersiculos = async (versiculosAgregar) => {
    try {
      // Añadir los nuevos versículos
      for (const versiculo of versiculosAgregar) {
        await db.addVersiculo({
          capitulo_id: selectedCapituloId,
          numero: versiculo.numero,
          texto: versiculo.texto
        });
      }
      
      Alert.alert(
        'Éxito', 
        `Se han guardado ${versiculosAgregar.length} versículos correctamente`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Limpiar y volver a la lista
              setTextoVersiculos('');
              setVersiculosProcesados([]);
              setVistaPrevia(false);
              navigation.goBack();
            }
          }
        ]
      );
    } catch (error) {
      console.error('Error al añadir nuevos versículos:', error);
      Alert.alert('Error', 'Ocurrió un error al guardar los versículos');
    }
  };

  if (loadingData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Carga masiva de versículos</Text>

        {!vistaPrevia ? (
          <>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Libro</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedLibroId}
                  onValueChange={cambiarLibro}
                  style={styles.picker}
                >
                  {libros.map(libro => (
                    <Picker.Item 
                      key={libro.id} 
                      label={libro.nombre} 
                      value={libro.id} 
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Capítulo</Text>
              {capitulos.length > 0 ? (
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={selectedCapituloId}
                    onValueChange={(value) => setSelectedCapituloId(value)}
                    style={styles.picker}
                  >
                    {capitulos.map(capitulo => (
                      <Picker.Item 
                        key={capitulo.id} 
                        label={`Capítulo ${capitulo.numero}`} 
                        value={capitulo.id} 
                      />
                    ))}
                  </Picker>
                </View>
              ) : (
                <Text style={styles.noDataText}>
                  No hay capítulos disponibles para este libro.
                </Text>
              )}
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Texto de los versículos</Text>
              <Text style={styles.instructionText}>
                Ingrese un versículo por línea con el formato: número seguido del texto.
                Ejemplo:
              </Text>
              <Text style={styles.exampleText}>
                {formatoEjemplo}
              </Text>
              <TextInput
                style={styles.textArea}
                multiline
                numberOfLines={10}
                value={textoVersiculos}
                onChangeText={setTextoVersiculos}
                placeholder="Ingrese los versículos aquí..."
                textAlignVertical="top"
              />
            </View>

            <TouchableOpacity 
              style={[
                styles.button,
                (!selectedCapituloId || !textoVersiculos) && styles.disabledButton
              ]}
              onPress={procesarTexto}
              disabled={!selectedCapituloId || !textoVersiculos}
            >
              <Text style={styles.buttonText}>Procesar y ver vista previa</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.previewHeader}>
              <Text style={styles.previewTitle}>Vista previa</Text>
              <Text style={styles.previewSubtitle}>
                {libros.find(l => l.id === selectedLibroId)?.nombre} - 
                Capítulo {capitulos.find(c => c.id === selectedCapituloId)?.numero}
              </Text>
              <Text style={styles.previewInfo}>
                Solo se añadirán versículos que no existan actualmente.
              </Text>
            </View>

            <View style={styles.versiculosPreview}>
              {versiculosProcesados.map((versiculo, index) => (
                <View key={index} style={styles.versiculoPreviewItem}>
                  <Text style={styles.versiculoNumero}>{versiculo.numero}</Text>
                  <Text style={styles.versiculoTexto}>{versiculo.texto}</Text>
                </View>
              ))}
            </View>

            <View style={styles.buttonGroup}>
              <TouchableOpacity 
                style={[styles.button, styles.buttonOutline]} 
                onPress={() => setVistaPrevia(false)}
              >
                <Text style={styles.buttonOutlineText}>Volver a editar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.button}
                onPress={guardarVersiculos}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Guardar {versiculosProcesados.length} versículos</Text>
                )}
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
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
  instructionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  exampleText: {
    fontSize: 13,
    color: '#888',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 6,
    fontStyle: 'italic',
  },
  textArea: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    fontSize: 16,
    minHeight: 200,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#a0a0a0',
  },
  noDataText: {
    fontSize: 16,
    color: '#e74c3c',
    marginTop: 8,
  },
  previewHeader: {
    marginBottom: 20,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  previewSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  previewInfo: {
    fontSize: 14,
    color: '#4a90e2',
    fontStyle: 'italic',
    marginTop: 8,
  },
  versiculosPreview: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  versiculoPreviewItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  versiculoNumero: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginRight: 8,
    minWidth: 24,
    textAlign: 'right',
  },
  versiculoTexto: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    lineHeight: 22,
  },
  buttonGroup: {
    flexDirection: 'column',
    marginBottom: 30,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4a90e2',
  },
  buttonOutlineText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CargaMasivaVersiculos;