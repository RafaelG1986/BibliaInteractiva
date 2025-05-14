import AsyncStorage from '@react-native-async-storage/async-storage';

// Simulación de base de datos usando AsyncStorage
const initDatabase = async () => {
  try {
    // Inicializar con algunos datos de prueba
    const versiones = [
      { id: 1, nombre: 'Reina Valera', abreviatura: 'RVR', idioma: 'Español' },
      { id: 2, nombre: 'Nueva Versión Internacional', abreviatura: 'NVI', idioma: 'Español' }
    ];
    
    // Verificar si ya existen datos para no sobrescribir
    const existingVersiones = await AsyncStorage.getItem('versiones');
    if (!existingVersiones) {
      await AsyncStorage.setItem('versiones', JSON.stringify(versiones));
    }
    
    // Estructura inicial para libros
    const existingLibros = await AsyncStorage.getItem('libros');
    if (!existingLibros) {
      const libros = [
        { id: 1, version_id: 1, nombre: 'Génesis', abreviatura: 'Gen', testamento: 'Antiguo', orden: 1 },
        { id: 2, version_id: 1, nombre: 'Éxodo', abreviatura: 'Exo', testamento: 'Antiguo', orden: 2 }
      ];
      await AsyncStorage.setItem('libros', JSON.stringify(libros));
    }
    
    // Estructura inicial para capítulos
    const existingCapitulos = await AsyncStorage.getItem('capitulos');
    if (!existingCapitulos) {
      const capitulos = [
        { id: 1, libro_id: 1, numero: 1 },
        { id: 2, libro_id: 1, numero: 2 },
        { id: 3, libro_id: 1, numero: 3 }
      ];
      await AsyncStorage.setItem('capitulos', JSON.stringify(capitulos));
    }
    
    // Estructura inicial para versículos
    const existingVersiculos = await AsyncStorage.getItem('versiculos');
    if (!existingVersiculos) {
      const versiculos = [
        { id: 1, capitulo_id: 1, numero: 1, texto: 'En el principio creó Dios los cielos y la tierra.' },
        { id: 2, capitulo_id: 1, numero: 2, texto: 'Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas.' },
        { id: 3, capitulo_id: 1, numero: 3, texto: 'Y dijo Dios: Sea la luz; y fue la luz.' }
      ];
      await AsyncStorage.setItem('versiculos', JSON.stringify(versiculos));
    }
    
    console.log('Base de datos inicializada correctamente');
    return true;
  } catch (error) {
    console.error('Error al inicializar base de datos:', error);
    throw error;
  }
};

// Métodos para interactuar con los datos
const db = {
  // Versiones
  getVersiones: async () => {
    const data = await AsyncStorage.getItem('versiones');
    return data ? JSON.parse(data) : [];
  },
  
  getVersionById: async (id) => {
    const versiones = await db.getVersiones();
    return versiones.find(v => v.id === id);
  },
  
  addVersion: async (version) => {
    const versiones = await db.getVersiones();
    const newId = versiones.length > 0 ? Math.max(...versiones.map(v => v.id)) + 1 : 1;
    const newVersion = { id: newId, ...version };
    versiones.push(newVersion);
    await AsyncStorage.setItem('versiones', JSON.stringify(versiones));
    return newVersion;
  },
  
  updateVersion: async (id, version) => {
    const versiones = await db.getVersiones();
    const index = versiones.findIndex(v => v.id === id);
    if (index !== -1) {
      versiones[index] = { ...versiones[index], ...version };
      await AsyncStorage.setItem('versiones', JSON.stringify(versiones));
      return versiones[index];
    }
    return null;
  },
  
  deleteVersion: async (id) => {
    const versiones = await db.getVersiones();
    const newVersiones = versiones.filter(v => v.id !== id);
    await AsyncStorage.setItem('versiones', JSON.stringify(newVersiones));
    return id;
  },
  
  // Libros
  getLibros: async () => {
    const data = await AsyncStorage.getItem('libros');
    return data ? JSON.parse(data) : [];
  },
  
  getLibrosByVersion: async (versionId) => {
    const libros = await db.getLibros();
    return libros.filter(l => l.version_id === versionId);
  },
  
  getLibroById: async (id) => {
    const libros = await db.getLibros();
    return libros.find(l => l.id === id);
  },
  
  addLibro: async (libro) => {
    const libros = await db.getLibros();
    const newId = libros.length > 0 ? Math.max(...libros.map(l => l.id)) + 1 : 1;
    const newLibro = { id: newId, ...libro };
    libros.push(newLibro);
    await AsyncStorage.setItem('libros', JSON.stringify(libros));
    return newLibro;
  },
  
  updateLibro: async (id, libro) => {
    const libros = await db.getLibros();
    const index = libros.findIndex(l => l.id === id);
    if (index !== -1) {
      libros[index] = { ...libros[index], ...libro };
      await AsyncStorage.setItem('libros', JSON.stringify(libros));
      return libros[index];
    }
    return null;
  },
  
  deleteLibro: async (id) => {
    const libros = await db.getLibros();
    const newLibros = libros.filter(l => l.id !== id);
    await AsyncStorage.setItem('libros', JSON.stringify(newLibros));
    return id;
  },
  
  // Capítulos
  getCapitulos: async () => {
    const data = await AsyncStorage.getItem('capitulos');
    return data ? JSON.parse(data) : [];
  },
  
  getCapitulosByLibro: async (libroId) => {
    const capitulos = await db.getCapitulos();
    return capitulos.filter(c => c.libro_id === libroId).sort((a, b) => a.numero - b.numero);
  },
  
  getCapituloById: async (id) => {
    const capitulos = await db.getCapitulos();
    return capitulos.find(c => c.id === id);
  },
  
  addCapitulo: async (capitulo) => {
    const capitulos = await db.getCapitulos();
    const newId = capitulos.length > 0 ? Math.max(...capitulos.map(c => c.id)) + 1 : 1;
    const newCapitulo = { id: newId, ...capitulo };
    capitulos.push(newCapitulo);
    await AsyncStorage.setItem('capitulos', JSON.stringify(capitulos));
    return newCapitulo;
  },
  
  updateCapitulo: async (id, capitulo) => {
    const capitulos = await db.getCapitulos();
    const index = capitulos.findIndex(c => c.id === id);
    if (index !== -1) {
      capitulos[index] = { ...capitulos[index], ...capitulo };
      await AsyncStorage.setItem('capitulos', JSON.stringify(capitulos));
      return capitulos[index];
    }
    return null;
  },
  
  deleteCapitulo: async (id) => {
    const capitulos = await db.getCapitulos();
    const newCapitulos = capitulos.filter(c => c.id !== id);
    await AsyncStorage.setItem('capitulos', JSON.stringify(newCapitulos));
    
    // También eliminar versículos relacionados con este capítulo
    const versiculos = await db.getVersiculos();
    const newVersiculos = versiculos.filter(v => v.capitulo_id !== id);
    await AsyncStorage.setItem('versiculos', JSON.stringify(newVersiculos));
    
    return id;
  },
  
  // Versículos
  getVersiculos: async () => {
    const data = await AsyncStorage.getItem('versiculos');
    return data ? JSON.parse(data) : [];
  },
  
  getVersiculosByCapitulo: async (capituloId) => {
    const versiculos = await db.getVersiculos();
    return versiculos.filter(v => v.capitulo_id === capituloId)
      .sort((a, b) => a.numero - b.numero);
  },
  
  getVersiculoById: async (id) => {
    const versiculos = await db.getVersiculos();
    return versiculos.find(v => v.id === id);
  },
  
  addVersiculo: async (versiculo) => {
    const versiculos = await db.getVersiculos();
    const newId = versiculos.length > 0 ? Math.max(...versiculos.map(v => v.id)) + 1 : 1;
    const newVersiculo = { id: newId, ...versiculo };
    versiculos.push(newVersiculo);
    await AsyncStorage.setItem('versiculos', JSON.stringify(versiculos));
    return newVersiculo;
  },
  
  updateVersiculo: async (id, versiculo) => {
    const versiculos = await db.getVersiculos();
    const index = versiculos.findIndex(v => v.id === id);
    if (index !== -1) {
      versiculos[index] = { ...versiculos[index], ...versiculo };
      await AsyncStorage.setItem('versiculos', JSON.stringify(versiculos));
      return versiculos[index];
    }
    return null;
  },
  
  deleteVersiculo: async (id) => {
    const versiculos = await db.getVersiculos();
    const newVersiculos = versiculos.filter(v => v.id !== id);
    await AsyncStorage.setItem('versiculos', JSON.stringify(newVersiculos));
    return id;
  },

  // Función para copiar libros de una versión a otra
  copyLibrosToVersion: async (sourceVersionId, targetVersionId, copyContent = false) => {
    try {
      // Obtener libros de la versión fuente
      const libros = await db.getLibros();
      const librosSource = libros.filter(l => l.version_id === sourceVersionId);
      
      if (librosSource.length === 0) {
        throw new Error('La versión origen no tiene libros para copiar');
      }
      
      // Mapa para mantener relación entre IDs originales y nuevos
      const libroIdMap = {};
      const capituloIdMap = {};
      
      // Copiar cada libro a la versión destino
      for (const libro of librosSource) {
        const newLibro = await db.addLibro({
          version_id: targetVersionId,
          nombre: libro.nombre,
          abreviatura: libro.abreviatura,
          testamento: libro.testamento,
          orden: libro.orden
        });
        
        libroIdMap[libro.id] = newLibro.id;
        
        // Si se solicita copiar también el contenido
        if (copyContent) {
          // Obtener capítulos del libro original
          const capitulos = await db.getCapitulosByLibro(libro.id);
          
          for (const capitulo of capitulos) {
            const newCapitulo = await db.addCapitulo({
              libro_id: newLibro.id,
              numero: capitulo.numero
            });
            
            capituloIdMap[capitulo.id] = newCapitulo.id;
            
            // Copiar versículos
            const versiculos = await db.getVersiculosByCapitulo(capitulo.id);
            
            for (const versiculo of versiculos) {
              await db.addVersiculo({
                capitulo_id: newCapitulo.id,
                numero: versiculo.numero,
                texto: versiculo.texto
              });
            }
          }
        }
      }
      
      return {
        success: true,
        librosCopied: Object.keys(libroIdMap).length,
        capitulosCopied: Object.keys(capituloIdMap).length,
        libroIdMap,
        capituloIdMap
      };
    } catch (error) {
      console.error('Error al copiar libros entre versiones:', error);
      throw error;
    }
  }
};

export { db, initDatabase };