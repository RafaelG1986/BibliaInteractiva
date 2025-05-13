# Estado actual del proyecto Biblia Interactiva

## Lo que tenemos hasta ahora:

1. **Estructura básica** de la aplicación con React Native y Expo
2. **Navegación configurada** con tres pestañas principales:
   - Inicio (HomeScreen)
   - Lectura (ReadScreen)
   - Administración (AdminScreen)
3. **Repositorio GitHub** creado (BibliaInteractiva)

## Próximos pasos a seguir:

1. **Configurar base de datos** para almacenar:
   - Versiones bíblicas
   - Libros
   - Capítulos 
   - Versículos
   - Archivos de audio

2. **Desarrollar pantallas de administración (CRUD)**:
   - Formularios para ingresar contenido
   - Gestión de archivos de audio

3. **Implementar lector de Biblia**:
   - Lista de libros/capítulos
   - Visualización de versículos
   - Reproductor de audio

4. **Crear sistema de progreso**:
   - Barras de progreso
   - Estadísticas de lectura

¿Te gustaría que comencemos a trabajar en la estructura de la base de datos o prefieres enfocarte primero en alguna de las pantallas principales?

Primer Paso

# Primer paso: Configuración de la base de datos

Vamos a configurar la base de datos SQLite para almacenar el contenido de nuestra Biblia Interactiva. Este es el primer paso fundamental para toda la aplicación.

## 1. Instalar dependencias necesarias

Ejecuta estos comandos en tu terminal:

```bash
npx expo install expo-sqlite
```

## 2. Crear la estructura de archivos

```bash
mkdir -p src/database
mkdir -p src/models
```

## 3. Definir el esquema de la base de datos

Vamos a crear el archivo de inicialización de la base de datos:

````javascript
import * as SQLite from 'expo-sqlite';

// Abrir o crear la base de datos
const db = SQLite.openDatabase('biblia.db');

// Inicializar la base de datos
const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Tabla de versiones bíblicas
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS versiones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          abreviatura TEXT NOT NULL,
          idioma TEXT NOT NULL,
          descripcion TEXT
        )`,
        [],
        () => console.log('Tabla versiones creada correctamente'),
        (_, error) => {
          console.error('Error al crear tabla versiones:', error);
          reject(error);
        }
      );
      
      // Tabla de libros
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS libros (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          version_id INTEGER,
          nombre TEXT NOT NULL,
          abreviatura TEXT NOT NULL,
          testamento TEXT NOT NULL,
          orden INTEGER NOT NULL,
          FOREIGN KEY (version_id) REFERENCES versiones (id)
        )`,
        [],
        () => console.log('Tabla libros creada correctamente'),
        (_, error) => reject(error)
      );
      
      // Tabla de capítulos
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS capitulos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          libro_id INTEGER,
          numero INTEGER NOT NULL,
          audio_url TEXT,
          duracion INTEGER,
          FOREIGN KEY (libro_id) REFERENCES libros (id)
        )`,
        [],
        () => console.log('Tabla capítulos creada correctamente'),
        (_, error) => reject(error)
      );
      
      // Tabla de versículos
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS versiculos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          capitulo_id INTEGER,
          numero INTEGER NOT NULL,
          texto TEXT NOT NULL,
          FOREIGN KEY (capitulo_id) REFERENCES capitulos (id)
        )`,
        [],
        () => console.log('Tabla versículos creada correctamente'),
        (_, error) => reject(error)
      );
      
      // Tabla de progreso de lectura
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS progreso (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          usuario_id TEXT,
          libro_id INTEGER,
          capitulo_id INTEGER,
          fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          completado BOOLEAN DEFAULT 0,
          FOREIGN KEY (libro_id) REFERENCES libros (id),
          FOREIGN KEY (capitulo_id) REFERENCES capitulos (id)
        )`,
        [],
        () => {
          console.log('Tabla progreso creada correctamente');
          resolve();
        },
        (_, error) => reject(error)
      );
    });
  });
};

// Funciones de utilidad para la base de datos
const getVersiones = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM versiones',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

// Exportar las funciones y la instancia de la base de datos
export {
  db,
  initDatabase,
  getVersiones
};
````

## 4. Integrar la base de datos en la aplicación

Ahora modifiquemos el archivo App.js para inicializar la base de datos:

````javascript
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { initDatabase } from './src/database/database';

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
  const [dbInitialized, setDbInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const setupDatabase = async () => {
      try {
        await initDatabase();
        setDbInitialized(true);
      } catch (err) {
        console.error('Error al inicializar la base de datos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    setupDatabase();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Inicializando base de datos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

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
````

## Próximos pasos

Con esta base de datos configurada, ahora podremos:
1. Crear los modelos de datos para interactuar con las tablas
2. Implementar las pantallas CRUD para gestionar el contenido
3. Desarrollar las funciones de lectura de la Biblia

¿Quieres continuar con la creación de los modelos de datos o prefieres empezar a trabajar en alguna de las pantallas de administración?

siguiente paso

# Segundo paso: Creación de los modelos de datos

Ahora que tenemos nuestra base de datos configurada, el siguiente paso es crear los modelos de datos que nos permitirán interactuar con las tablas de manera más organizada. Estos modelos encapsularán las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para cada entidad.

## Crear archivos de modelo

Primero, vamos a crear los archivos para cada modelo en la carpeta `src/models`:

### 1. Modelo para Versiones Bíblicas:

````javascript
import { db } from '../database/database';

class VersionModel {
  // Obtener todas las versiones
  static getAll() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM versiones ORDER BY nombre',
          [],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Obtener una versión por ID
  static getById(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM versiones WHERE id = ?',
          [id],
          (_, { rows }) => {
            if (rows.length > 0) {
              resolve(rows._array[0]);
            } else {
              resolve(null);
            }
          },
          (_, error) => reject(error)
        );
      });
    });
  }

  // Crear una nueva versión
  static create(version) {
    const { nombre, abreviatura, idioma, descripcion } = version;
    
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO versiones (nombre, abreviatura, idioma, descripcion) VALUES (?, ?, ?, ?)',
          [nombre, abreviatura, idioma, descripcion],
          (_, { insertId }) => resolve(insertId),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Actualizar una versión existente
  static update(id, version) {
    const { nombre, abreviatura, idioma, descripcion } = version;
    
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE versiones SET nombre = ?, abreviatura = ?, idioma = ?, descripcion = ? WHERE id = ?',
          [nombre, abreviatura, idioma, descripcion, id],
          (_, { rowsAffected }) => resolve(rowsAffected > 0),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Eliminar una versión
  static delete(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM versiones WHERE id = ?',
          [id],
          (_, { rowsAffected }) => resolve(rowsAffected > 0),
          (_, error) => reject(error)
        );
      });
    });
  }
}

export default VersionModel;
````

### 2. Modelo para Libros:

````javascript
import { db } from '../database/database';

class LibroModel {
  // Obtener todos los libros
  static getAll() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM libros ORDER BY orden',
          [],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Obtener libros por versión
  static getByVersion(versionId) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM libros WHERE version_id = ? ORDER BY orden',
          [versionId],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Obtener un libro por ID
  static getById(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM libros WHERE id = ?',
          [id],
          (_, { rows }) => {
            if (rows.length > 0) {
              resolve(rows._array[0]);
            } else {
              resolve(null);
            }
          },
          (_, error) => reject(error)
        );
      });
    });
  }

  // Crear un nuevo libro
  static create(libro) {
    const { version_id, nombre, abreviatura, testamento, orden } = libro;
    
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO libros (version_id, nombre, abreviatura, testamento, orden) VALUES (?, ?, ?, ?, ?)',
          [version_id, nombre, abreviatura, testamento, orden],
          (_, { insertId }) => resolve(insertId),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Actualizar un libro existente
  static update(id, libro) {
    const { version_id, nombre, abreviatura, testamento, orden } = libro;
    
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE libros SET version_id = ?, nombre = ?, abreviatura = ?, testamento = ?, orden = ? WHERE id = ?',
          [version_id, nombre, abreviatura, testamento, orden, id],
          (_, { rowsAffected }) => resolve(rowsAffected > 0),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Eliminar un libro
  static delete(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM libros WHERE id = ?',
          [id],
          (_, { rowsAffected }) => resolve(rowsAffected > 0),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Obtener conteo de libros por versión
  static getCountByVersion(versionId) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT COUNT(*) as total FROM libros WHERE version_id = ?',
          [versionId],
          (_, { rows }) => resolve(rows._array[0].total),
          (_, error) => reject(error)
        );
      });
    });
  }
}

export default LibroModel;
````

### 3. Modelo para Capítulos:

````javascript
import { db } from '../database/database';

class CapituloModel {
  // Obtener todos los capítulos de un libro
  static getByLibro(libroId) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM capitulos WHERE libro_id = ? ORDER BY numero',
          [libroId],
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Obtener un capítulo por ID
  static getById(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM capitulos WHERE id = ?',
          [id],
          (_, { rows }) => {
            if (rows.length > 0) {
              resolve(rows._array[0]);
            } else {
              resolve(null);
            }
          },
          (_, error) => reject(error)
        );
      });
    });
  }

  // Crear un nuevo capítulo
  static create(capitulo) {
    const { libro_id, numero, audio_url, duracion } = capitulo;
    
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO capitulos (libro_id, numero, audio_url, duracion) VALUES (?, ?, ?, ?)',
          [libro_id, numero, audio_url, duracion],
          (_, { insertId }) => resolve(insertId),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Actualizar un capítulo existente
  static update(id, capitulo) {
    const { libro_id, numero, audio_url, duracion } = capitulo;
    
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE capitulos SET libro_id = ?, numero = ?, audio_url = ?, duracion = ? WHERE id = ?',
          [libro_id, numero, audio_url, duracion, id],
          (_, { rowsAffected }) => resolve(rowsAffected > 0),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Eliminar un capítulo
  static delete(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM capitulos WHERE id = ?',
          [id],
          (_, { rowsAffected }) => resolve(rowsAffected > 0),
          (_, error) => reject(error)
        );
      });
    });
  }

  // Obtener el conteo de capítulos por libro
  static getCountByLibro(libroId) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT COUNT(*) as total FROM capitulos WHERE libro_id = ?',
          [libroId],
          (_, { rows }) => resolve(rows._array[0].total),
          (_, error) => reject(error)
        );
      });
    });
  }
}

export default CapituloModel;
````

## Próximo paso

Una vez que tengamos estos modelos básicos, el siguiente paso será implementar las pantallas de administración para interactuar con nuestros datos:

1. Pantalla para añadir/editar versiones bíblicas
2. Pantalla para gestionar libros
3. Pantalla para trabajar con capítulos y versículos
4. Implementación del sistema para subir archivos de audio

¿Te gustaría que continuemos con los modelos adicionales (versículos y progreso) o prefieres empezar a trabajar en las pantallas de administración con los modelos que ya tenemos?

Código similar encontrado con 1 tipo de licencia