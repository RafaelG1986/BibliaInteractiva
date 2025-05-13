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
  }
};

export { db, initDatabase };