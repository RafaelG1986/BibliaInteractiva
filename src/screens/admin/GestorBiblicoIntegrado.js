import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Switch
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../database/database';

const GestorBiblicoIntegrado = ({ navigation }) => {
  // Estados de los pasos del proceso
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Estado para versión bíblica
  const [versiones, setVersiones] = useState([]);
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [crearNuevaVersion, setCrearNuevaVersion] = useState(false);
  const [nuevaVersion, setNuevaVersion] = useState({
    nombre: '',
    abreviatura: '',
    idioma: '',
    descripcion: ''
  });

  // Estado para libro
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [crearNuevoLibro, setCrearNuevoLibro] = useState(false);
  const [nuevoLibro, setNuevoLibro] = useState({
    nombre: '',
    abreviatura: '',
    testamento: 'Antiguo',
    orden: ''
  });

  // Estado para capítulo
  const [capitulos, setCapitulos] = useState([]);
  const [selectedCapituloId, setSelectedCapituloId] = useState(null);
  const [crearNuevoCapitulo, setCrearNuevoCapitulo] = useState(false);
  const [numeroCapitulo, setNumeroCapitulo] = useState('');

  // Estado para versículos
  const [tipoCargaVersiculos, setTipoCargaVersiculos] = useState('individual'); // 'individual' o 'masiva'
  const [nuevoVersiculo, setNuevoVersiculo] = useState({
    numero: '',
    texto: ''
  });
  const [textoVersiculosMasivos, setTextoVersiculosMasivos] = useState('');
  const [versiculosMasivos, setVersiculosMasivos] = useState([]);
  const [vistaPreviaVersiculos, setVistaPreviaVersiculos] = useState(false);
  
  // Lista de versículos agregados en la sesión actual
  const [versiculosAgregados, setVersiculosAgregados] = useState([]);

  useEffect(() => {
    cargarDatosIniciales();
  }, []);

  const cargarDatosIniciales = async () => {
    try {
      setLoading(true);
      
      // Cargar versiones
      const versionesData = await db.getVersiones();
      setVersiones(versionesData);
      
      if (versionesData.length > 0) {
        setSelectedVersionId(versionesData[0].id);
        await cargarLibrosPorVersion(versionesData[0].id);
      }
    } catch (error) {
      console.error('Error al cargar datos iniciales:', error);
      Alert.alert('Error', 'No se pudieron cargar los datos iniciales');
    } finally {
      setLoading(false);
    }
  };

  const cargarLibrosPorVersion = async (versionId) => {
    try {
      setLoading(true);
      const librosData = await db.getLibrosByVersion(versionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        setSelectedLibroId(librosData[0].id);
        await cargarCapitulosPorLibro(librosData[0].id);
      } else {
        setSelectedLibroId(null);
        setCapitulos([]);
        setSelectedCapituloId(null);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      Alert.alert('Error', 'No se pudieron cargar los libros');
    } finally {
      setLoading(false);
    }
  };

  const cargarCapitulosPorLibro = async (libroId) => {
    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  const handleCambiarVersion = (versionId) => {
    setSelectedVersionId(versionId);
    cargarLibrosPorVersion(versionId);
  };

  const handleCambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    cargarCapitulosPorLibro(libroId);
  };

  const handleGuardarNuevaVersion = async () => {
    if (!nuevaVersion.nombre.trim() || !nuevaVersion.abreviatura.trim() || !nuevaVersion.idioma.trim()) {
      Alert.alert('Error', 'Nombre, abreviatura e idioma son obligatorios');
      return false;
    }
    
    try {
      setSaving(true);
      const versionCreada = await db.addVersion({
        nombre: nuevaVersion.nombre,
        abreviatura: nuevaVersion.abreviatura,
        idioma: nuevaVersion.idioma,
        descripcion: nuevaVersion.descripcion || ''
      });
      
      // Actualizar la lista de versiones y seleccionar la nueva
      const versionesActualizadas = [...versiones, versionCreada];
      setVersiones(versionesActualizadas);
      setSelectedVersionId(versionCreada.id);
      setCrearNuevaVersion(false);
      setLibros([]);
      setSelectedLibroId(null);
      setCapitulos([]);
      setSelectedCapituloId(null);
      
      // Reiniciar el formulario
      setNuevaVersion({
        nombre: '',
        abreviatura: '',
        idioma: '',
        descripcion: ''
      });
      
      Alert.alert('Éxito', 'Versión creada correctamente');
      return true;
    } catch (error) {
      console.error('Error al guardar nueva versión:', error);
      Alert.alert('Error', 'No se pudo crear la versión');
      return false;
    } finally {
      setSaving(false);
    }
  };

  const handleGuardarNuevoLibro = async () => {
    if (!selectedVersionId && !crearNuevaVersion) {
      Alert.alert('Error', 'Debe seleccionar una versión');
      return false;
    }
    
    if (!nuevoLibro.nombre.trim() || !nuevoLibro.abreviatura.trim() || !nuevoLibro.orden.trim()) {
      Alert.alert('Error', 'Nombre, abreviatura y orden son obligatorios');
      return false;
    }
    
    if (isNaN(parseInt(nuevoLibro.orden))) {
      Alert.alert('Error', 'El orden debe ser un número');
      return false;
    }
    
    try {
      setSaving(true);
      
      // Si estamos creando una nueva versión, primero guardarla
      let versionId = selectedVersionId;
      if (crearNuevaVersion) {
        const success = await handleGuardarNuevaVersion();
        if (!success) return false;
        versionId = selectedVersionId;
      }
      
      const libroCreado = await db.addLibro({
        version_id: versionId,
        nombre: nuevoLibro.nombre,
        abreviatura: nuevoLibro.abreviatura,
        testamento: nuevoLibro.testamento,
        orden: parseInt(nuevoLibro.orden)
      });
      
      // Actualizar la lista de libros y seleccionar el nuevo
      const librosActualizados = [...libros, libroCreado];
      setLibros(librosActualizados);
      setSelectedLibroId(libroCreado.id);
      setCrearNuevoLibro(false);
      setCapitulos([]);
      setSelectedCapituloId(null);
      
      // Reiniciar el formulario
      setNuevoLibro({
        nombre: '',
        abreviatura: '',
        testamento: 'Antiguo',
        orden: ''
      });
      
      Alert.alert('Éxito', 'Libro creado correctamente');
      return true;
    } catch (error) {
      console.error('Error al guardar nuevo libro:', error);
      Alert.alert('Error', 'No se pudo crear el libro');
      return false;
    } finally {
      setSaving(false);
    }
  };

  const handleGuardarNuevoCapitulo = async () => {
    if (!selectedLibroId && !crearNuevoLibro) {
      Alert.alert('Error', 'Debe seleccionar un libro');
      return false;
    }
    
    if (!numeroCapitulo.trim() || isNaN(parseInt(numeroCapitulo))) {
      Alert.alert('Error', 'El número de capítulo debe ser un valor numérico');
      return false;
    }
    
    try {
      setSaving(true);
      
      // Si estamos creando un nuevo libro, primero guardarlo
      let libroId = selectedLibroId;
      if (crearNuevoLibro) {
        const success = await handleGuardarNuevoLibro();
        if (!success) return false;
        libroId = selectedLibroId;
      }
      
      // Verificar si ya existe un capítulo con ese número
      const capitulosExistentes = await db.getCapitulosByLibro(libroId);
      if (capitulosExistentes.some(c => c.numero === parseInt(numeroCapitulo))) {
        Alert.alert('Error', `Ya existe un capítulo ${numeroCapitulo} en este libro`);
        setSaving(false);
        return false;
      }
      
      const capituloCreado = await db.addCapitulo({
        libro_id: libroId,
        numero: parseInt(numeroCapitulo)
      });
      
      // Actualizar la lista de capítulos y seleccionar el nuevo
      const capitulosActualizados = [...capitulos, capituloCreado];
      setCapitulos(capitulosActualizados);
      setSelectedCapituloId(capituloCreado.id);
      setCrearNuevoCapitulo(false);
      
      // Reiniciar el formulario
      setNumeroCapitulo('');
      
      Alert.alert('Éxito', 'Capítulo creado correctamente');
      return true;
    } catch (error) {
      console.error('Error al guardar nuevo capítulo:', error);
      Alert.alert('Error', 'No se pudo crear el capítulo');
      return false;
    } finally {
      setSaving(false);
    }
  };

  const handleGuardarVersiculo = async () => {
    if (!selectedCapituloId && !crearNuevoCapitulo) {
      Alert.alert('Error', 'Debe seleccionar un capítulo');
      return;
    }
    
    if (!nuevoVersiculo.numero.trim() || isNaN(parseInt(nuevoVersiculo.numero))) {
      Alert.alert('Error', 'El número de versículo debe ser un valor numérico');
      return;
    }
    
    if (!nuevoVersiculo.texto.trim()) {
      Alert.alert('Error', 'El texto del versículo es obligatorio');
      return;
    }
    
    try {
      setSaving(true);
      
      // Si estamos creando un nuevo capítulo, primero guardarlo
      let capituloId = selectedCapituloId;
      if (crearNuevoCapitulo) {
        const success = await handleGuardarNuevoCapitulo();
        if (!success) return;
        capituloId = selectedCapituloId;
      }
      
      // Verificar si ya existe un versículo con ese número
      const versiculosExistentes = await db.getVersiculosByCapitulo(capituloId);
      const versiculoExistente = versiculosExistentes.find(v => v.numero === parseInt(nuevoVersiculo.numero));
      
      if (versiculoExistente) {
        Alert.alert('Error', `Ya existe un versículo ${nuevoVersiculo.numero} en este capítulo`);
        setSaving(false);
        return;
      }
      
      const versiculoCreado = await db.addVersiculo({
        capitulo_id: capituloId,
        numero: parseInt(nuevoVersiculo.numero),
        texto: nuevoVersiculo.texto.trim()
      });
      
      // Añadir a la lista de versículos agregados
      setVersiculosAgregados([...versiculosAgregados, {
        ...versiculoCreado,
        capituloNumero: capitulos.find(c => c.id === capituloId)?.numero
      }]);
      
      // Incrementar automáticamente el número para el siguiente versículo
      setNuevoVersiculo({
        numero: (parseInt(nuevoVersiculo.numero) + 1).toString(),
        texto: ''
      });
      
      Alert.alert('Éxito', 'Versículo añadido correctamente');
    } catch (error) {
      console.error('Error al guardar versículo:', error);
      Alert.alert('Error', 'No se pudo guardar el versículo');
    } finally {
      setSaving(false);
    }
  };
  
  const procesarVersiculosMasivos = () => {
    if (!textoVersiculosMasivos.trim()) {
      Alert.alert('Error', 'Ingrese texto para procesar');
      return;
    }

    // Expresión regular para encontrar el formato: número seguido de espacio y texto
    const lineas = textoVersiculosMasivos.split('\n');
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

    setVersiculosMasivos(versiculosProcesados);
    setVistaPreviaVersiculos(true);
  };

  const guardarVersiculosMasivos = async () => {
    if (!selectedCapituloId && !crearNuevoCapitulo) {
      Alert.alert('Error', 'Debe seleccionar un capítulo');
      return;
    }
    
    if (versiculosMasivos.length === 0) {
      Alert.alert('Error', 'No hay versículos para guardar');
      return;
    }
    
    try {
      setSaving(true);
      
      // Si estamos creando un nuevo capítulo, primero guardarlo
      let capituloId = selectedCapituloId;
      if (crearNuevoCapitulo) {
        const success = await handleGuardarNuevoCapitulo();
        if (!success) return;
        capituloId = selectedCapituloId;
      }
      
      // Obtener versículos existentes para verificar duplicados
      const versiculosExistentes = await db.getVersiculosByCapitulo(capituloId);
      const numerosExistentes = new Set(versiculosExistentes.map(v => v.numero));
      
      // Filtrar los que ya existen
      const versiculosAgregar = versiculosMasivos.filter(v => !numerosExistentes.has(v.numero));
      const versiculosOmitidos = versiculosMasivos.filter(v => numerosExistentes.has(v.numero));
      
      if (versiculosOmitidos.length > 0 && versiculosAgregar.length === 0) {
        Alert.alert('Información', 'Todos los versículos ya existen en este capítulo. No se realizarán cambios.');
        setSaving(false);
        return;
      }
      
      let mensajeConfirmacion = `Se añadirán ${versiculosAgregar.length} versículos.`;
      if (versiculosOmitidos.length > 0) {
        mensajeConfirmacion += ` Se omitirán ${versiculosOmitidos.length} versículos que ya existen.`;
      }
      
      Alert.alert(
        'Confirmación',
        mensajeConfirmacion,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
            onPress: () => setSaving(false)
          },
          {
            text: 'Guardar',
            onPress: async () => {
              try {
                // Guardar cada versículo
                for (const versiculo of versiculosAgregar) {
                  const versiculoCreado = await db.addVersiculo({
                    capitulo_id: capituloId,
                    numero: versiculo.numero,
                    texto: versiculo.texto
                  });
                  
                  // Añadir a la lista de versículos agregados
                  setVersiculosAgregados(prevState => [...prevState, {
                    ...versiculoCreado,
                    capituloNumero: capitulos.find(c => c.id === capituloId)?.numero
                  }]);
                }
                
                // Limpiar y restablecer
                setVersiculosMasivos([]);
                setTextoVersiculosMasivos('');
                setVistaPreviaVersiculos(false);
                
                Alert.alert('Éxito', `Se han añadido ${versiculosAgregar.length} versículos correctamente`);
              } catch (error) {
                console.error('Error al guardar versículos masivos:', error);
                Alert.alert('Error', 'No se pudieron guardar algunos versículos');
              } finally {
                setSaving(false);
              }
            }
          }
        ]
      );
    } catch (error) {
      console.error('Error en el proceso de guardar versículos masivos:', error);
      Alert.alert('Error', 'Ocurrió un problema al procesar los versículos');
      setSaving(false);
    }
  };

  const renderPasoVersion = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Paso 1: Seleccionar o Crear Versión Bíblica</Text>
        
        <View style={styles.optionContainer}>
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              !crearNuevaVersion && styles.optionButtonSelected
            ]}
            onPress={() => setCrearNuevaVersion(false)}
          >
            <Text style={[
              styles.optionButtonText,
              !crearNuevaVersion && styles.optionButtonTextSelected
            ]}>Seleccionar Existente</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              crearNuevaVersion && styles.optionButtonSelected
            ]}
            onPress={() => setCrearNuevaVersion(true)}
          >
            <Text style={[
              styles.optionButtonText,
              crearNuevaVersion && styles.optionButtonTextSelected
            ]}>Crear Nueva</Text>
          </TouchableOpacity>
        </View>
        
        {!crearNuevaVersion ? (
          <View style={styles.formGroup}>
            <Text style={styles.label}>Versión Bíblica:</Text>
            <View style={styles.pickerContainer}>
              {versiones.length > 0 ? (
                <Picker
                  selectedValue={selectedVersionId}
                  onValueChange={handleCambiarVersion}
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
                <Text style={styles.noDataText}>
                  No hay versiones disponibles. Cree una versión nueva.
                </Text>
              )}
            </View>
          </View>
        ) : (
          <>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Nombre:</Text>
              <TextInput
                style={styles.input}
                value={nuevaVersion.nombre}
                onChangeText={(text) => setNuevaVersion({...nuevaVersion, nombre: text})}
                placeholder="Ej: Reina Valera 1960"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Abreviatura:</Text>
              <TextInput
                style={styles.input}
                value={nuevaVersion.abreviatura}
                onChangeText={(text) => setNuevaVersion({...nuevaVersion, abreviatura: text})}
                placeholder="Ej: RVR60"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Idioma:</Text>
              <TextInput
                style={styles.input}
                value={nuevaVersion.idioma}
                onChangeText={(text) => setNuevaVersion({...nuevaVersion, idioma: text})}
                placeholder="Ej: Español"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Descripción (opcional):</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={nuevaVersion.descripcion}
                onChangeText={(text) => setNuevaVersion({...nuevaVersion, descripcion: text})}
                placeholder="Descripción de la versión"
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>
          </>
        )}
        
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => {
            if (crearNuevaVersion) {
              handleGuardarNuevaVersion().then(success => {
                if (success) setCurrentStep(2);
              });
            } else {
              if (!selectedVersionId && versiones.length > 0) {
                Alert.alert('Error', 'Debe seleccionar una versión');
                return;
              }
              setCurrentStep(2);
            }
          }}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.nextButtonText}>
              {crearNuevaVersion ? 'Guardar y Continuar' : 'Continuar'}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  
  const renderPasoLibro = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Paso 2: Seleccionar o Crear Libro</Text>
        
        <View style={styles.optionContainer}>
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              !crearNuevoLibro && styles.optionButtonSelected
            ]}
            onPress={() => setCrearNuevoLibro(false)}
          >
            <Text style={[
              styles.optionButtonText,
              !crearNuevoLibro && styles.optionButtonTextSelected
            ]}>Seleccionar Existente</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              crearNuevoLibro && styles.optionButtonSelected
            ]}
            onPress={() => setCrearNuevoLibro(true)}
          >
            <Text style={[
              styles.optionButtonText,
              crearNuevoLibro && styles.optionButtonTextSelected
            ]}>Crear Nuevo</Text>
          </TouchableOpacity>
        </View>
        
        {!crearNuevoLibro ? (
          <View style={styles.formGroup}>
            <Text style={styles.label}>Libro:</Text>
            <View style={styles.pickerContainer}>
              {libros.length > 0 ? (
                <Picker
                  selectedValue={selectedLibroId}
                  onValueChange={handleCambiarLibro}
                  style={styles.picker}
                >
                  {libros.map(libro => (
                    <Picker.Item 
                      key={libro.id} 
                      label={`${libro.nombre} (${libro.abreviatura})`} 
                      value={libro.id} 
                    />
                  ))}
                </Picker>
              ) : (
                <Text style={styles.noDataText}>
                  No hay libros disponibles para esta versión. Cree un libro nuevo.
                </Text>
              )}
            </View>
          </View>
        ) : (
          <>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Nombre:</Text>
              <TextInput
                style={styles.input}
                value={nuevoLibro.nombre}
                onChangeText={(text) => setNuevoLibro({...nuevoLibro, nombre: text})}
                placeholder="Ej: Génesis"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Abreviatura:</Text>
              <TextInput
                style={styles.input}
                value={nuevoLibro.abreviatura}
                onChangeText={(text) => setNuevoLibro({...nuevoLibro, abreviatura: text})}
                placeholder="Ej: Gen"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Orden:</Text>
              <TextInput
                style={styles.input}
                value={nuevoLibro.orden}
                onChangeText={(text) => setNuevoLibro({...nuevoLibro, orden: text})}
                placeholder="Ej: 1"
                keyboardType="numeric"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Testamento:</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={nuevoLibro.testamento}
                  onValueChange={(value) => setNuevoLibro({...nuevoLibro, testamento: value})}
                  style={styles.picker}
                >
                  <Picker.Item label="Antiguo Testamento" value="Antiguo" />
                  <Picker.Item label="Nuevo Testamento" value="Nuevo" />
                </Picker>
              </View>
            </View>
          </>
        )}
        
        <View style={styles.navigationButtons}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => setCurrentStep(1)}
          >
            <Text style={styles.backButtonText}>Volver</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => {
              if (crearNuevoLibro) {
                handleGuardarNuevoLibro().then(success => {
                  if (success) setCurrentStep(3);
                });
              } else {
                if (!selectedLibroId && libros.length > 0) {
                  Alert.alert('Error', 'Debe seleccionar un libro');
                  return;
                }
                setCurrentStep(3);
              }
            }}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.nextButtonText}>
                {crearNuevoLibro ? 'Guardar y Continuar' : 'Continuar'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const renderPasoCapitulo = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Paso 3: Seleccionar o Crear Capítulo</Text>
        
        <View style={styles.optionContainer}>
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              !crearNuevoCapitulo && styles.optionButtonSelected
            ]}
            onPress={() => setCrearNuevoCapitulo(false)}
          >
            <Text style={[
              styles.optionButtonText,
              !crearNuevoCapitulo && styles.optionButtonTextSelected
            ]}>Seleccionar Existente</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              crearNuevoCapitulo && styles.optionButtonSelected
            ]}
            onPress={() => setCrearNuevoCapitulo(true)}
          >
            <Text style={[
              styles.optionButtonText,
              crearNuevoCapitulo && styles.optionButtonTextSelected
            ]}>Crear Nuevo</Text>
          </TouchableOpacity>
        </View>
        
        {!crearNuevoCapitulo ? (
          <View style={styles.formGroup}>
            <Text style={styles.label}>Capítulo:</Text>
            <View style={styles.pickerContainer}>
              {capitulos.length > 0 ? (
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
              ) : (
                <Text style={styles.noDataText}>
                  No hay capítulos disponibles para este libro. Cree un capítulo nuevo.
                </Text>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.formGroup}>
            <Text style={styles.label}>Número de Capítulo:</Text>
            <TextInput
              style={styles.input}
              value={numeroCapitulo}
              onChangeText={setNumeroCapitulo}
              placeholder="Ej: 1"
              keyboardType="numeric"
            />
          </View>
        )}
        
        <View style={styles.navigationButtons}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => setCurrentStep(2)}
          >
            <Text style={styles.backButtonText}>Volver</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => {
              if (crearNuevoCapitulo) {
                handleGuardarNuevoCapitulo().then(success => {
                  if (success) setCurrentStep(4);
                });
              } else {
                if (!selectedCapituloId && capitulos.length > 0) {
                  Alert.alert('Error', 'Debe seleccionar un capítulo');
                  return;
                }
                setCurrentStep(4);
              }
            }}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.nextButtonText}>
                {crearNuevoCapitulo ? 'Guardar y Continuar' : 'Continuar'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const renderPasoVersiculos = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Paso 4: Añadir Versículos</Text>
        
        <View style={styles.optionContainer}>
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              tipoCargaVersiculos === 'individual' && styles.optionButtonSelected
            ]}
            onPress={() => {
              setTipoCargaVersiculos('individual');
              setVistaPreviaVersiculos(false);
            }}
          >
            <Text style={[
              styles.optionButtonText,
              tipoCargaVersiculos === 'individual' && styles.optionButtonTextSelected
            ]}>Individual</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              tipoCargaVersiculos === 'masiva' && styles.optionButtonSelected
            ]}
            onPress={() => setTipoCargaVersiculos('masiva')}
          >
            <Text style={[
              styles.optionButtonText,
              tipoCargaVersiculos === 'masiva' && styles.optionButtonTextSelected
            ]}>Carga Masiva</Text>
          </TouchableOpacity>
        </View>
        
        {tipoCargaVersiculos === 'individual' ? (
          <>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Número de Versículo:</Text>
              <TextInput
                style={styles.input}
                value={nuevoVersiculo.numero}
                onChangeText={(text) => setNuevoVersiculo({...nuevoVersiculo, numero: text})}
                placeholder="Ej: 1"
                keyboardType="numeric"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Texto del Versículo:</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={nuevoVersiculo.texto}
                onChangeText={(text) => setNuevoVersiculo({...nuevoVersiculo, texto: text})}
                placeholder="Texto del versículo"
                multiline
                numberOfLines={6}
                textAlignVertical="top"
              />
            </View>
            
            <TouchableOpacity
              style={[styles.button, saving && styles.disabledButton]}
              onPress={handleGuardarVersiculo}
              disabled={saving}
            >
              {saving ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Añadir Versículo</Text>
              )}
            </TouchableOpacity>
          </>
        ) : (
          <>
            {!vistaPreviaVersiculos ? (
              <>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Texto de los versículos:</Text>
                  <Text style={styles.instructionText}>
                    Ingrese un versículo por línea con el formato: número seguido del texto.
                    Ejemplo:
                  </Text>
                  <Text style={styles.exampleText}>
                    1 En el principio creó Dios los cielos y la tierra.{"\n"}
                    2 Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo.{"\n"}
                    3 Y dijo Dios: Sea la luz; y fue la luz.
                  </Text>
                  <TextInput
                    style={[styles.input, styles.textAreaLarge]}
                    value={textoVersiculosMasivos}
                    onChangeText={setTextoVersiculosMasivos}
                    placeholder="Ingrese los versículos aquí..."
                    multiline
                    numberOfLines={10}
                    textAlignVertical="top"
                  />
                </View>
                
                <TouchableOpacity
                  style={[styles.button, (!textoVersiculosMasivos.trim() || saving) && styles.disabledButton]}
                  onPress={procesarVersiculosMasivos}
                  disabled={!textoVersiculosMasivos.trim() || saving}
                >
                  {saving ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text style={styles.buttonText}>Procesar y ver vista previa</Text>
                  )}
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={styles.previewHeader}>
                  <Text style={styles.previewTitle}>Vista previa de versículos</Text>
                  <Text style={styles.previewInfo}>
                    Solo se añadirán versículos que no existan actualmente
                  </Text>
                </View>
                
                <View style={styles.versiculosPreview}>
                  {versiculosMasivos.map((versiculo, index) => (
                    <View key={index} style={styles.versiculoPreviewItem}>
                      <Text style={styles.versiculoNumero}>{versiculo.numero}</Text>
                      <Text style={styles.versiculoTexto}>{versiculo.texto}</Text>
                    </View>
                  ))}
                </View>
                
                <View style={styles.buttonGroup}>
                  <TouchableOpacity 
                    style={[styles.button, styles.outlineButton]} 
                    onPress={() => setVistaPreviaVersiculos(false)}
                  >
                    <Text style={styles.outlineButtonText}>Volver a editar</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={[styles.button, saving && styles.disabledButton]}
                    onPress={guardarVersiculosMasivos}
                    disabled={saving}
                  >
                    {saving ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <Text style={styles.buttonText}>Guardar {versiculosMasivos.length} versículos</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </>
            )}
          </>
        )}
        
        {/* Mostrar lista de versículos añadidos en esta sesión */}
        {versiculosAgregados.length > 0 && (
          <View style={styles.addedItemsContainer}>
            <Text style={styles.addedItemsTitle}>
              Versículos añadidos en esta sesión: {versiculosAgregados.length}
            </Text>
            
            {versiculosAgregados.slice(0, 5).map((v, index) => (
              <View key={index} style={styles.addedItem}>
                <Text style={styles.addedItemCapitulo}>
                  Cap. {v.capituloNumero}:
                </Text>
                <Text style={styles.addedItemNumero}>{v.numero}</Text>
                <Text style={styles.addedItemTexto} numberOfLines={1}>
                  {v.texto}
                </Text>
              </View>
            ))}
            
            {versiculosAgregados.length > 5 && (
              <Text style={styles.moreItemsText}>
                y {versiculosAgregados.length - 5} más...
              </Text>
            )}
          </View>
        )}
        
        <View style={styles.navigationButtons}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => setCurrentStep(3)}
          >
            <Text style={styles.backButtonText}>Volver</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.finishButton}
            onPress={() => {
              Alert.alert(
                'Completado', 
                `Se han añadido ${versiculosAgregados.length} versículos en total`,
                [
                  { 
                    text: 'OK', 
                    onPress: () => navigation.goBack() 
                  }
                ]
              );
            }}
          >
            <Text style={styles.finishButtonText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={100}
    >
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Gestor Bíblico Integrado</Text>
        <Text style={styles.description}>
          Cree y gestione versiones, libros, capítulos y versículos bíblicos en un solo lugar
        </Text>
        
        {/* Indicador de progreso */}
        <View style={styles.progressContainer}>
          {[1, 2, 3, 4].map((step) => (
            <TouchableOpacity
              key={step}
              style={[
                styles.progressStep,
                currentStep >= step ? styles.progressStepActive : {}
              ]}
              onPress={() => {
                // Solo permitir retroceder, no saltar adelante
                if (step < currentStep) {
                  setCurrentStep(step);
                }
              }}
            >
              <Text style={[
                styles.progressStepText,
                currentStep >= step ? styles.progressStepTextActive : {}
              ]}>
                {step}
              </Text>
            </TouchableOpacity>
          ))}
          <View style={styles.progressLine} />
        </View>
        
        {/* Contenido según el paso actual */}
        {currentStep === 1 && renderPasoVersion()}
        {currentStep === 2 && renderPasoLibro()}
        {currentStep === 3 && renderPasoCapitulo()}
        {currentStep === 4 && renderPasoVersiculos()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    position: 'relative',
  },
  progressLine: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#ddd',
    left: 45,
    right: 45,
    top: '50%',
    zIndex: -1,
  },
  progressStep: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    zIndex: 2,
  },
  progressStepActive: {
    backgroundColor: '#4a90e2',
    borderColor: '#4a90e2',
  },
  progressStepText: {
    color: '#999',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressStepTextActive: {
    color: '#fff',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  optionButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionButtonSelected: {
    backgroundColor: '#e6f2ff',
    borderColor: '#4a90e2',
  },
  optionButtonText: {
    color: '#666',
    fontWeight: '500',
  },
  optionButtonTextSelected: {
    color: '#4a90e2',
    fontWeight: 'bold',
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
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  textAreaLarge: {
    minHeight: 180,
    textAlignVertical: 'top',
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
  noDataText: {
    padding: 15,
    color: '#e74c3c',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 16,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4a90e2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#a0a0a0',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nextButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4a90e2',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  finishButton: {
    backgroundColor: '#32a852',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  previewHeader: {
    marginBottom: 16,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  previewInfo: {
    fontSize: 14,
    color: '#4a90e2',
    fontStyle: 'italic',
    marginTop: 4,
  },
  versiculosPreview: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
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
    marginBottom: 16,
  },
  addedItemsContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  addedItemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 10,
  },
  addedItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  addedItemCapitulo: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
    marginRight: 6,
  },
  addedItemNumero: {
    fontSize: 14,
    color: '#4a90e2',
    fontWeight: 'bold',
    marginRight: 8,
    minWidth: 16,
    textAlign: 'right',
  },
  addedItemTexto: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  moreItemsText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default GestorBiblicoIntegrado;