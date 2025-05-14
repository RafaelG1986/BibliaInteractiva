import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator,
  Modal,
  FlatList,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../database/database';

const ReadScreen = ({ route, navigation }) => {
  // Extraer parámetros con un valor predeterminado como objeto vacío
  const { versionId } = route.params || {};
  
  const [versiones, setVersiones] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [libros, setLibros] = useState([]);
  const [selectedLibro, setSelectedLibro] = useState(null);
  const [capitulos, setCapitulos] = useState([]);
  const [selectedCapitulo, setSelectedCapitulo] = useState(null);
  const [versiculos, setVersiculos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(''); // 'version', 'libro', 'capitulo'
  const [loading, setLoading] = useState(true);
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1);

  // Cargar versiones al inicio
  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        setLoading(true);
        const data = await db.getVersiones();
        setVersiones(data);
        
        // Si se proporcionó un ID de versión, usarlo
        if (versionId) {
          const versionSeleccionada = data.find(v => v.id === versionId);
          if (versionSeleccionada) {
            setSelectedVersion(versionSeleccionada);
            cargarLibros(versionId);
            return;
          }
        }
        
        // Si no hay ID o no se encontró, seleccionar primera versión por defecto
        if (data.length > 0) {
          setSelectedVersion(data[0]);
          cargarLibros(data[0].id);
        }
      } catch (error) {
        console.error('Error al cargar versiones:', error);
      }
    };
    
    cargarVersiones();
  }, [versionId]);

  // Cargar libros cuando cambia la versión
  const cargarLibros = async (versionId) => {
    try {
      setLoading(true);
      const data = await db.getLibrosByVersion(versionId);
      setLibros(data.sort((a, b) => a.orden - b.orden)); // Ordenar por el campo 'orden'
      
      // Seleccionar primer libro por defecto
      if (data.length > 0) {
        setSelectedLibro(data[0]);
        cargarCapitulos(data[0].id);
      } else {
        setSelectedLibro(null);
        setCapitulos([]);
        setSelectedCapitulo(null);
        setVersiculos([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      setLoading(false);
    }
  };

  // Cargar capítulos cuando cambia el libro
  const cargarCapitulos = async (libroId) => {
    try {
      setLoading(true);
      const data = await db.getCapitulosByLibro(libroId);
      setCapitulos(data.sort((a, b) => a.numero - b.numero)); // Ordenar por número
      
      // Seleccionar primer capítulo por defecto
      if (data.length > 0) {
        setSelectedCapitulo(data[0]);
        cargarVersiculos(data[0].id);
      } else {
        setSelectedCapitulo(null);
        setVersiculos([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      setLoading(false);
    }
  };

  // Cargar versículos cuando cambia el capítulo
  const cargarVersiculos = async (capituloId) => {
    try {
      setLoading(true);
      const data = await db.getVersiculosByCapitulo(capituloId);
      setVersiculos(data.sort((a, b) => a.numero - b.numero)); // Ordenar por número
    } catch (error) {
      console.error('Error al cargar versículos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Seleccionar una versión del modal
  const seleccionarVersion = (version) => {
    setModalVisible(false);
    setSelectedVersion(version);
    cargarLibros(version.id);
  };

  // Seleccionar un libro del modal
  const seleccionarLibro = (libro) => {
    setModalVisible(false);
    setSelectedLibro(libro);
    cargarCapitulos(libro.id);
  };

  // Seleccionar un capítulo del modal
  const seleccionarCapitulo = (capitulo) => {
    setModalVisible(false);
    setSelectedCapitulo(capitulo);
    cargarVersiculos(capitulo.id);
  };

  // Abrir modal basado en el tipo
  const abrirModal = (type) => {
    setModalType(type);
    setModalVisible(true);
  };

  // Navegar al siguiente capítulo
  const siguienteCapitulo = () => {
    if (!selectedCapitulo || !capitulos.length) return;
    
    const currentIndex = capitulos.findIndex(cap => cap.id === selectedCapitulo.id);
    if (currentIndex < capitulos.length - 1) {
      // Hay más capítulos en este libro
      setSelectedCapitulo(capitulos[currentIndex + 1]);
      cargarVersiculos(capitulos[currentIndex + 1].id);
    } else {
      // Último capítulo del libro, intentar pasar al siguiente libro
      const libroIndex = libros.findIndex(lib => lib.id === selectedLibro.id);
      if (libroIndex < libros.length - 1) {
        // Hay más libros
        const siguienteLibro = libros[libroIndex + 1];
        setSelectedLibro(siguienteLibro);
        cargarCapitulos(siguienteLibro.id);
      }
    }
  };

  // Navegar al capítulo anterior
  const anteriorCapitulo = () => {
    if (!selectedCapitulo || !capitulos.length) return;
    
    const currentIndex = capitulos.findIndex(cap => cap.id === selectedCapitulo.id);
    if (currentIndex > 0) {
      // No es el primer capítulo de este libro
      setSelectedCapitulo(capitulos[currentIndex - 1]);
      cargarVersiculos(capitulos[currentIndex - 1].id);
    } else {
      // Primer capítulo del libro, intentar pasar al libro anterior
      const libroIndex = libros.findIndex(lib => lib.id === selectedLibro.id);
      if (libroIndex > 0) {
        // Hay libros anteriores
        const libroAnterior = libros[libroIndex - 1];
        setSelectedLibro(libroAnterior);
        
        // Cargar capítulos del libro anterior y seleccionar el último
        db.getCapitulosByLibro(libroAnterior.id).then(caps => {
          const capsOrdenados = caps.sort((a, b) => a.numero - b.numero);
          setCapitulos(capsOrdenados);
          if (capsOrdenados.length > 0) {
            const ultimoCapitulo = capsOrdenados[capsOrdenados.length - 1];
            setSelectedCapitulo(ultimoCapitulo);
            cargarVersiculos(ultimoCapitulo.id);
          }
        });
      }
    }
  };

  // Cambiar tamaño de texto
  const cambiarTamanoTexto = (incremento) => {
    setFontSizeMultiplier(prevSize => {
      const newSize = prevSize + incremento;
      return Math.max(0.8, Math.min(newSize, 1.6)); // Limitar entre 0.8 y 1.6
    });
  };

  // Renderizar el modal según el tipo
  const renderModal = () => {
    let title = '';
    let data = [];
    let renderItem = null;
    
    switch (modalType) {
      case 'version':
        title = 'Seleccionar Versión';
        data = versiones;
        renderItem = ({ item }) => (
          <TouchableOpacity 
            style={styles.modalItem} 
            onPress={() => seleccionarVersion(item)}
          >
            <View style={styles.modalItemContent}>
              <Text style={styles.modalItemTitle}>{item.nombre}</Text>
              <Text style={styles.modalItemSubtitle}>{item.abreviatura} - {item.idioma}</Text>
            </View>
            {selectedVersion && selectedVersion.id === item.id && (
              <Ionicons name="checkmark-circle" size={24} color="#4a90e2" />
            )}
          </TouchableOpacity>
        );
        break;
      case 'libro':
        title = 'Seleccionar Libro';
        data = libros;
        renderItem = ({ item }) => (
          <TouchableOpacity 
            style={styles.modalItem} 
            onPress={() => seleccionarLibro(item)}
          >
            <View style={styles.modalItemContent}>
              <Text style={styles.modalItemTitle}>{item.nombre}</Text>
              <Text style={styles.modalItemSubtitle}>{item.abreviatura} - {item.testamento}</Text>
            </View>
            {selectedLibro && selectedLibro.id === item.id && (
              <Ionicons name="checkmark-circle" size={24} color="#4a90e2" />
            )}
          </TouchableOpacity>
        );
        break;
      case 'capitulo':
        title = 'Seleccionar Capítulo';
        data = capitulos;
        renderItem = ({ item }) => (
          <TouchableOpacity 
            style={styles.modalItem} 
            onPress={() => seleccionarCapitulo(item)}
          >
            <Text style={styles.modalItemTitle}>Capítulo {item.numero}</Text>
            {selectedCapitulo && selectedCapitulo.id === item.id && (
              <Ionicons name="checkmark-circle" size={24} color="#4a90e2" />
            )}
          </TouchableOpacity>
        );
        break;
    }
    
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{title}</Text>
              <TouchableOpacity 
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalList}
            />
          </View>
        </View>
      </Modal>
    );
  };

  if (loading && !versiculos.length) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando contenido...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      {/* Barra de navegación */}
      <View style={styles.navbar}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => abrirModal('version')}
        >
          <Text style={styles.navButtonText}>
            {selectedVersion ? selectedVersion.abreviatura : 'Versión'}
          </Text>
          <Ionicons name="chevron-down" size={16} color="#4a90e2" />
        </TouchableOpacity>
        
        <View style={styles.navSeparator} />
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => abrirModal('libro')}
        >
          <Text style={styles.navButtonText}>
            {selectedLibro ? selectedLibro.abreviatura : 'Libro'}
          </Text>
          <Ionicons name="chevron-down" size={16} color="#4a90e2" />
        </TouchableOpacity>
        
        <View style={styles.navSeparator} />
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => abrirModal('capitulo')}
        >
          <Text style={styles.navButtonText}>
            {selectedCapitulo ? `Cap ${selectedCapitulo.numero}` : 'Cap'}
          </Text>
          <Ionicons name="chevron-down" size={16} color="#4a90e2" />
        </TouchableOpacity>

        {/* Botones de tamaño de texto */}
        <View style={styles.fontSizeControls}>
          <TouchableOpacity
            style={styles.fontSizeButton}
            onPress={() => cambiarTamanoTexto(-0.1)}
          >
            <Ionicons name="remove" size={16} color="#4a90e2" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fontSizeButton}
            onPress={() => cambiarTamanoTexto(0.1)}
          >
            <Ionicons name="add" size={16} color="#4a90e2" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {selectedLibro ? selectedLibro.nombre : 'Seleccione un libro'}
          {selectedCapitulo ? ` ${selectedCapitulo.numero}` : ''}
        </Text>
      </View>
      
      {/* Contenido de versículos */}
      <ScrollView style={styles.content}>
        {versiculos.length > 0 ? (
          <View style={styles.versiculosContainer}>
            {versiculos.map(versiculo => (
              <View key={versiculo.id} style={styles.versiculoItem}>
                <Text style={[styles.versiculoNumero, {fontSize: 16 * fontSizeMultiplier}]}>
                  {versiculo.numero}
                </Text>
                <Text style={[styles.versiculoTexto, {fontSize: 18 * fontSizeMultiplier}]}>
                  {versiculo.texto}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {selectedCapitulo 
                ? 'No hay versículos para este capítulo' 
                : 'Seleccione un libro y capítulo para comenzar a leer'}
            </Text>
          </View>
        )}
      </ScrollView>
      
      {/* Navegación entre capítulos */}
      <View style={styles.chapterNavigation}>
        <TouchableOpacity 
          style={styles.navArrow}
          onPress={anteriorCapitulo}
        >
          <Ionicons name="chevron-back" size={28} color="#4a90e2" />
        </TouchableOpacity>
        
        <Text style={styles.chapterIndicator}>
          {selectedCapitulo ? `Capítulo ${selectedCapitulo.numero}` : ''}
        </Text>
        
        <TouchableOpacity 
          style={styles.navArrow}
          onPress={siguienteCapitulo}
        >
          <Ionicons name="chevron-forward" size={28} color="#4a90e2" />
        </TouchableOpacity>
      </View>
      
      {renderModal()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7f8fa',
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
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4a90e2',
    marginRight: 4,
  },
  navSeparator: {
    width: 1,
    height: 16,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 8,
  },
  fontSizeControls: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  fontSizeButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    marginLeft: 8,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  versiculosContainer: {
    padding: 16,
  },
  versiculoItem: {
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
    fontSize: 18,
    color: '#333',
    flex: 1,
    lineHeight: 28,
  },
  emptyContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  chapterNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navArrow: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chapterIndicator: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  modalCloseButton: {
    padding: 4,
  },
  modalList: {
    padding: 8,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalItemContent: {
    flex: 1,
  },
  modalItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  modalItemSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  }
});

export default ReadScreen;