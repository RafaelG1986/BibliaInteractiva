RafaelG1986: puedo realizar una app para movil?

GitHub Copilot: # Desarrollo de aplicaciones móviles en VS Code

Sí, puedes desarrollar aplicaciones móviles usando Visual Studio Code. Tienes varias opciones dependiendo de tus preferencias y necesidades:

## Opciones principales

- **React Native**: Aplicaciones multiplataforma con JavaScript/TypeScript
- **Flutter**: Framework de Google usando Dart para apps nativas en iOS/Android
- **Xamarin**: Desarrollo con C# para aplicaciones multiplataforma
- **Ionic**: Usando tecnologías web (HTML, CSS, JavaScript)
- **PWA**: Aplicaciones web progresivas

## Comenzar en VS Code

Para cualquiera de estas opciones necesitarás:

1. Instalar las extensiones correspondientes en VS Code
2. Configurar los SDKs necesarios (Android, iOS)
3. Instalar las dependencias requeridas

¿Tienes alguna preferencia por alguna tecnología específica? Puedo ayudarte a configurar el entorno para comenzar con el desarrollo.

RafaelG1986: cual me recomiendas para comenzar?

GitHub Copilot: # Recomendación para comenzar con el desarrollo móvil

Para principiantes, recomendaría **React Native** por estas razones:

## Ventajas de React Native
- **Lenguaje accesible**: Usa JavaScript/TypeScript, que son muy populares y probablemente ya conozcas algo
- **Gran comunidad**: Muchos recursos, tutoriales y bibliotecas disponibles
- **Multiplataforma**: Un solo código para iOS y Android
- **Integración con VS Code**: Excelente soporte con extensiones específicas
- **Hot Reload**: Cambios visibles instantáneamente sin reiniciar la app

## Configuración inicial
Para comenzar necesitarías:
1. Node.js
2. React Native CLI o Expo (recomiendo Expo para principiantes)
3. Extensión de React Native para VS Code

## Alternativa: Flutter
Si prefieres una experiencia más consistente y no te importa aprender un nuevo lenguaje (Dart), Flutter también es excelente para principiantes y tiene una hermosa interfaz visual.

¿Te gustaría que te ayude a configurar el entorno para React Native o prefieres explorar otra opción?

RafaelG1986: sigamos los pasos

GitHub Copilot: # Configuración de React Native con Expo en VS Code

Vamos a configurar paso a paso un entorno de desarrollo React Native usando Expo, que es ideal para principiantes:

## 1. Instalar Node.js

1. Descarga Node.js desde [nodejs.org](https://nodejs.org/)
2. Instala la versión LTS (soporte a largo plazo)
3. Verifica la instalación abriendo el terminal y ejecutando:

```bash
node --version
npm --version
```

## 2. Instalar Expo CLI

Desde el terminal, ejecuta:

```bash
npm install -g expo-cli
```

## 3. Instalar extensiones en VS Code

Abre VS Code y busca estas extensiones:
- React Native Tools
- ESLint
- Prettier (opcional para formateo de código)

## 4. Crear un nuevo proyecto

1. Abre el terminal en VS Code (Ctrl+`)
2. Navega a la ubicación donde deseas crear tu proyecto:

```bash
cd c:\AppCel
expo init MiPrimeraApp
```

3. Selecciona una plantilla (recomiendo "blank" para empezar)

## 5. Ejecutar la aplicación

```bash
cd MiPrimeraApp
npm start
```

Esto abrirá un navegador con el panel de control de Expo. Desde allí podrás:
- Escanear un código QR con la app Expo Go en tu teléfono
- Ejecutar en un emulador de Android/iOS
- Ejecutar en navegador web

¿Quieres que procedamos con alguno de estos pasos específicos?

RafaelG1986: Sale en expo go: Open up App.js to start working on your app

GitHub Copilot: # Comenzando a editar tu aplicación React Native

¡Excelente! Ya tienes tu aplicación ejecutándose en Expo Go. Ahora es momento de comenzar a modificar el código para crear tu propia aplicación.

## Estructura del archivo App.js

El archivo App.js es el punto de entrada principal de tu aplicación. Vamos a ver cómo modificarlo:

1. Abre el archivo `App.js` en VS Code
2. Verás un código similar a este:

```jsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Modifica tu primera app

Prueba a cambiar el texto para ver cómo se actualiza automáticamente:

```jsx
<Text>¡Hola mundo! Esta es mi primera app móvil</Text>
```

## Añade más elementos

Puedes agregar más componentes básicos:

```jsx
<View style={styles.container}>
  <Text style={styles.title}>Mi Aplicación Móvil</Text>
  <Text style={styles.subtitle}>Creada con React Native y Expo</Text>
  <StatusBar style="auto" />
</View>
```

Y actualiza los estilos:

```jsx
const styles = StyleSheet.create({
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
```

¿Quieres que te muestre cómo añadir algún elemento interactivo como un botón?

Código similar encontrado con 1 tipo de licencia

RafaelG1986: Necesito crear una Biblia interactiva, un sistema CRUD para ingresar versiones de la Biblia, Capitulos, versiculos, audio del capitulo, una barra de progreso (se necesita saber cuantos capitulos y libros tiene la Biblia).

GitHub Copilot: # Plan para crear una Biblia interactiva con React Native

Veo que estás construyendo una aplicación móvil y ahora quieres convertirla en una Biblia interactiva con sistema CRUD. Vamos a planificar cómo desarrollar esta aplicación paso a paso.

## Estructura de la aplicación

Primero, vamos a definir una estructura de carpetas que organice nuestro proyecto:

```
MiPrimeraApp/
  ├── assets/         # Imágenes, audios, etc.
  ├── components/     # Componentes reutilizables
  ├── screens/        # Pantallas principales
  ├── navigation/     # Configuración de navegación
  ├── services/       # Servicios de API y base de datos
  ├── models/         # Modelos de datos
  ├── context/        # Contextos para estado global
  ├── utils/          # Utilidades y funciones auxiliares
  └── App.js          # Punto de entrada
```

## Paquetes necesarios

Instala los siguientes paquetes para facilitar el desarrollo:

```bash
expo install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
expo install react-native-sqlite-storage
expo install expo-av
expo install react-native-progress
expo install @react-native-async-storage/async-storage
```

## Modelo de datos

Para tu Biblia interactiva, necesitarás estos modelos:

1. **Versión Bíblica** (ej: Reina Valera, Nueva Versión Internacional)
2. **Libro** (ej: Génesis, Éxodo)
3. **Capítulo** (con referencia al libro y audio)
4. **Versículo** (con texto y referencia al capítulo)
5. **Progreso** (seguimiento de lectura)

## Componentes principales a desarrollar

Actualizaré tu App.js con una estructura inicial y luego desarrollaremos:

```jsx
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
```

## Próximos pasos

1. **Configurar base de datos SQLite** para almacenar el contenido bíblico
2. **Crear pantallas de administración** (CRUD)
   - Formularios para agregar versiones, libros, capítulos y versículos
   - Subida y gestión de archivos de audio
3. **Desarrollar el lector de Biblia**:
   - Navegación entre libros y capítulos
   - Visualización de versículos
   - Reproductor de audio
4. **Implementar seguimiento de progreso**:
   - Barras de progreso
   - Contador de libros/capítulos leídos

¿Te gustaría que profundizáramos en alguna parte específica de este plan? Podemos crear las pantallas del sistema CRUD, configurar la base de datos, o implementar la función de reproducción de audio.

RafaelG1986: Android Bundling failed 1644ms index.js (670 modules)
Unable to resolve "@react-navigation/native" from "App.js"
Android Bundling failed 563ms index.js (664 modules)
Unable to resolve "@react-navigation/native" from "App.js"

GitHub Copilot: # Error de instalación de paquetes React Navigation

Veo que estás teniendo problemas con la resolución de los paquetes de navegación. El error `Unable to resolve "@react-navigation/native" from "App.js"` indica que los paquetes de React Navigation no están instalados correctamente.

## Solución paso a paso

1. **Detén el servidor Expo** (presiona Ctrl+C en la terminal)

2. **Instala los paquetes necesarios** ejecutando estos comandos en la terminal:

```bash
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
expo install react-native-screens react-native-safe-area-context
```

3. **Reinicia tu servidor Expo**:

```bash
npm start
```

## Verificación

Para comprobar que los paquetes se instalaron correctamente, puedes revisar el archivo `package.json` donde deberían aparecer en las dependencias.

Si el problema persiste, intenta lo siguiente:

```bash
npx expo install --fix
```

Esto ayudará a resolver posibles incompatibilidades entre paquetes.

## Nota adicional

Recuerda que antes de agregar cualquier código que use paquetes externos, estos deben estar instalados primero. Para el desarrollo posterior de tu Biblia interactiva, instalaremos los demás paquetes que mencioné anteriormente cuando estés listo para implementar esas características.

¿Necesitas ayuda con alguna otra cosa mientras solucionamos este error?

RafaelG1986: Super, donde puedo hacer un repositorio?

GitHub Copilot: # Crear un repositorio para tu proyecto de Biblia Interactiva

Puedes crear un repositorio en plataformas como GitHub, GitLab o Bitbucket. Te mostraré cómo hacerlo en GitHub, que es la más popular:

## Crear un repositorio en GitHub

1. **Crea una cuenta** en [GitHub](https://github.com/) si aún no tienes una
2. **Inicia sesión** y haz clic en el botón `+` en la esquina superior derecha
3. Selecciona `New repository`
4. **Completa la información**:
   - Nombre: `biblia-interactiva` (o el que prefieras)
   - Descripción: "Aplicación móvil de Biblia interactiva con sistema CRUD"
   - Elige visibilidad (público o privado)
   - Marca "Initialize with README" si deseas crear un README inicial
5. Haz clic en `Create repository`

## Conectar tu proyecto local al repositorio

Desde el terminal de VS Code, dentro de tu proyecto:

```bash
# Inicializar Git en tu proyecto (si no está ya inicializado)
git init

# Añadir todos los archivos
git add .

# Crear el primer commit
git commit -m "Primer commit: estructura inicial de la Biblia interactiva"

# Conectar con el repositorio remoto (reemplaza USER por tu nombre de usuario y REPO por el nombre del repositorio)
git remote add origin https://github.com/USER/REPO.git

# Subir el código al repositorio
git push -u origin main
```

## Alternativas

- **GitLab**: Similar a GitHub con algunas características distintas
- **Bitbucket**: Buena integración con otras herramientas de Atlassian
- **Azure DevOps**: Si prefieres el ecosistema de Microsoft

¿Te gustaría crear el repositorio en alguna plataforma específica?

RafaelG1986: PS C:\AppCel\MiPrimeraApp> git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/RafaelG1986/BibliaInteractiva.git'
PS C:\AppCel\MiPrimeraApp> 

GitHub Copilot: # Solución al error de Git push

El error ocurre porque estás intentando enviar a la rama `main`, pero probablemente tu rama local tenga otro nombre (como `master`) o aún no has realizado un commit inicial.

## Solución paso a paso

1. **Verificar el nombre de tu rama actual**:

```bash
git branch
```

2. **Si no hay resultados o no tienes commits todavía**, realiza estos pasos:

```bash
# Añadir todos los archivos
git add .

# Crear el primer commit
git commit -m "Primer commit: estructura inicial de la Biblia interactiva"
```

3. **Si tu rama se llama "master" en lugar de "main"**, puedes:

```bash
# Opción 1: Hacer push usando el nombre correcto de tu rama
git push -u origin master

# Opción 2: Renombrar tu rama local a main
git branch -M main
git push -u origin main
```

4. **Si necesitas crear una rama main**:

```bash
git checkout -b main
git add .
git commit -m "Primer commit: estructura inicial de la Biblia interactiva"
git push -u origin main
```

Una vez completados estos pasos, deberías poder ver tu código en el repositorio GitHub que creaste (BibliaInteractiva).

¿Necesitas ayuda con algún otro paso del proceso?

RafaelG1986: En que paso vamos?

GitHub Copilot: # Estado actual del proyecto Biblia Interactiva

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

RafaelG1986: Primer Paso

GitHub Copilot: # Primer paso: Configuración de la base de datos

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

RafaelG1986: siguiente paso

GitHub Copilot: # Segundo paso: Creación de los modelos de datos

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

RafaelG1986: mira el error

GitHub Copilot: # Error en la inicialización de SQLite

Veo que estás teniendo un error con SQLite: `TypeError: SQLite.openDatabase is not a function (it is undefined)`. Este es un problema común al configurar SQLite en Expo.

## Solución

El problema está en la forma de importar e inicializar SQLite. Necesitamos corregir el archivo de la base de datos:

````javascript
import * as SQLite from 'expo-sqlite';

// La forma correcta de inicializar SQLite en Expo
const db = SQLite.openDatabase('biblia.db');

// Alternativamente, si sigues teniendo problemas, prueba:
// const db = SQLite.default.openDatabase('biblia.db');

// O incluso:
// import { openDatabase } from 'expo-sqlite';
// const db = openDatabase('biblia.db');

// Resto del código...
````

## Pasos para resolver el problema

1. **Verifica la instalación**: Asegúrate de que expo-sqlite esté correctamente instalado:

```bash
npx expo install expo-sqlite
```

2. **Reinicia la aplicación**: Cierra completamente la aplicación y el servidor de desarrollo, luego reinicia:

```bash
npx expo start --clear
```

3. **Verificar la versión**: Asegúrate de que la versión de expo-sqlite sea compatible con tu versión de Expo. Puedes verificar en el `package.json`.

Si el problema persiste, puede ser útil revisar la documentación oficial de Expo SQLite para la versión específica que estás utilizando, ya que la API puede cambiar entre versiones.

¿Necesitas ayuda para implementar alguna de estas soluciones?

RafaelG1986: mismo errorc:\Users\Emanuel\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\TempState\C5F441CD5F43EB2F2C024E1F8B5D00CD\Imagen de WhatsApp 2025-05-13 a las 17.33.03_bd4afd37.jpg

GitHub Copilot: # Solución para el error de SQLite en Expo

Veo que sigues teniendo el mismo error con SQLite. Este problema es común en las versiones recientes de Expo. Vamos a modificar la importación y la forma de crear la base de datos:

````javascript
import { openDatabase } from 'expo-sqlite';

// Inicializar la base de datos directamente con la función importada
const db = openDatabase('biblia.db');

// Inicializar la base de datos
const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // El resto del código permanece igual...
````

## Si esto no funciona, prueba estas alternativas:

### Opción 1: Actualizar expo-sqlite

```bash
npx expo install expo-sqlite@latest
```

### Opción 2: Instalar otra biblioteca compatible

```bash
npx expo install @expo/sqlite-next
```

Y luego modificar tu código:

````javascript
import { openDatabaseSync } from '@expo/sqlite-next';

const db = openDatabaseSync('biblia.db');

// El resto sigue igual...
````

### Opción 3: Comprobar la versión de Expo

Verifica la versión de Expo que estás usando en tu package.json. Si estás usando Expo SDK 46 o posterior, la API de SQLite puede haber cambiado.

Después de realizar los cambios, asegúrate de reiniciar completamente la aplicación:

```bash
npx expo start --clear
```

¿Quieres que probemos alguna de estas soluciones específicas?

RafaelG1986: › Installing 1 other package using npm
> npm install --save @expo/sqlite-next
npm error code E404
npm error 404 Not Found - GET https://registry.npmjs.org/@expo%2fsqlite-next - Not found   
npm error 404
npm error 404  '@expo/sqlite-next@*' is not in this registry.
npm error 404
npm error 404 Note that you can also install from a
npm error 404 tarball, folder, http url, or git url.
npm error A complete log of this run can be found in: C:\Users\Emanuel\AppData\Local\npm-cache\_logs\2025-05-13T22_35_56_962Z-debug-0.log
Error: npm install --save @expo/sqlite-next exited with non-zero code: 1
Error: npm install --save @expo/sqlite-next exited with non-zero code: 1
    at ChildProcess.completionListener (C:\AppCel\MiPrimeraApp\node_modules\@expo\spawn-async\build\spawnAsync.js:42:23)
    at Object.onceWrapper (node:events:633:26)
    at ChildProcess.emit (node:events:518:28)
    at cp.emit (C:\AppCel\MiPrimeraApp\node_modules\cross-spawn\lib\enoent.js:34:29)       
    at maybeClose (node:internal/child_process:1101:16)
    at ChildProcess._handle.onexit (node:internal/child_process:304:5)
    ...
    at spawnAsync (C:\AppCel\MiPrimeraApp\node_modules\@expo\spawn-async\build\spawnAsync.js:7:23)
    at NpmPackageManager.runAsync (C:\AppCel\MiPrimeraApp\node_modules\@expo\package-manager\build\node\BasePackageManager.js:41:42)
    at C:\AppCel\MiPrimeraApp\node_modules\@expo\package-manager\build\node\NpmPackageManager.js:37:20
    at C:\AppCel\MiPrimeraApp\node_modules\@expo\package-manager\build\utils\spawn.js:14:34    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)

GitHub Copilot: # Error al instalar @expo/sqlite-next

Veo que el paquete `@expo/sqlite-next` no está disponible en el registro de npm. Vamos a usar el paquete oficial de Expo para SQLite.

## Solución

1. **Instala el paquete oficial de SQLite**:

```bash
npx expo install expo-sqlite
```

2. **Modifica el archivo database.js**:

````javascript
import * as SQLite from 'expo-sqlite';

// Inicializar la base de datos directamente con la función importada
const db = SQLite.openDatabase('biblia.db');

// El resto del código permanece igual...
````

También puedes usar una importación más específica:

````javascript
import { openDatabase } from 'expo-sqlite';

// Inicializar la base de datos
const db = openDatabase('biblia.db');

// El resto del código permanece igual...
````

## Verificación de versiones

Para asegurarte de que estás usando versiones compatibles, puedes verificar tu package.json para ver la versión de Expo SDK que estás utilizando y asegurarte de que `expo-sqlite` es compatible con esa versión.

Después de realizar los cambios, reinicia completamente la aplicación:

```bash
npx expo start --clear
```

¿Necesitas ayuda para implementar estos cambios o tienes alguna otra pregunta?

RafaelG1986: como puedo trabajar desde el pc, con una pagina web?

GitHub Copilot: # Desarrollo de páginas web desde tu PC

Para trabajar con páginas web desde tu PC, tienes varias opciones que se integran bien con VS Code:

## Opción 1: Proyecto web estático (HTML, CSS, JavaScript)

La forma más sencilla de comenzar:

1. **Crea una estructura básica de carpetas**:
   ```
   mi-sitio-web/
     ├── index.html
     ├── css/
     │   └── styles.css
     └── js/
         └── script.js
   ```

2. **Visualiza tu página** de dos formas:
   - Abre el archivo HTML directamente en tu navegador
   - Instala la extensión "Live Server" en VS Code para ver cambios en tiempo real

## Opción 2: Framework de desarrollo web

Si prefieres un framework moderno:

- **React**: Ideal si ya estás familiarizado por tu trabajo con React Native
- **Vue.js**: Más simple para principiantes
- **Angular**: Más estructurado y completo

## Opción 3: Convertir tu app React Native actual a web

React Native Web te permite reutilizar gran parte de tu código:

```bash
npm install react-native-web react-dom
```

Luego necesitarías configurar webpack para que funcione con tu proyecto existente.

## Configuración recomendada para iniciar

1. **Instala Node.js** (ya lo tienes si estás usando Expo)
2. **Configura un nuevo proyecto**:
   ```bash
   npx create-react-app mi-sitio-web
   cd mi-sitio-web
   npm start
   ```
3. **Explora el código** generado y comienza a desarrollar

¿Te interesa alguna de estas opciones en particular?

RafaelG1986: hice git reset --hard

GitHub Copilot: # Efectos de git reset --hard

Has ejecutado `git reset --hard`, lo que significa que:

- Todos los cambios no confirmados han sido eliminados
- Tu código ha vuelto al estado del último commit
- Los archivos nuevos que no estaban en seguimiento (untracked) se mantienen

## Próximos pasos

Para continuar con el desarrollo de tu Biblia Interactiva, te recomiendo:

1. **Verifica el estado actual** de tu repositorio:
   ```bash
   git status
   ```

2. **Revisa la estructura** de tu proyecto para confirmar qué archivos tienes y cuáles faltan.

3. **Reconstruye los archivos necesarios**:
   - Recrear la estructura de carpetas (`src/database`, `src/models`)
   - Reimplementar los archivos de base de datos y modelos

## Para evitar esta situación en el futuro

- Realiza commits más frecuentes
- Usa `git stash` para guardar cambios temporales
- Antes de operaciones destructivas, considera hacer una rama temporal

¿Quieres que te ayude a reconstruir alguno de los archivos que trabajamos anteriormente?

RafaelG1986: necesitamos crear la base de datos, para la app; 

GitHub Copilot: # Implementación de la base de datos para la Biblia Interactiva

Vamos a crear la estructura necesaria para la base de datos de tu aplicación. Primero, asegurémonos de instalar la dependencia correcta:

```bash
npx expo install expo-sqlite
```

## Paso 1: Crear la estructura de carpetas

```bash
mkdir -p src/database
```

## Paso 2: Crear el archivo de configuración de la base de datos

````javascript
import * as SQLite from 'expo-sqlite';

// Inicializar la base de datos
const db = SQLite.openDatabase('biblia.db');

// Función para inicializar las tablas en la base de datos
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
        () => console.log('Tabla versiones creada'),
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
        () => console.log('Tabla libros creada'),
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
        () => console.log('Tabla capítulos creada'),
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
        () => console.log('Tabla versículos creada'),
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
          console.log('Tabla progreso creada');
          resolve();
        },
        (_, error) => reject(error)
      );
    });
  });
};

// Funciones básicas para interactuar con la base de datos
const executeQuery = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        sql,
        params,
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });

RafaelG1986: no sqlite, puede ser otra tecnologia?

GitHub Copilot: # Alternativas a SQLite para tu aplicación de Biblia Interactiva

Claro, podemos utilizar otras tecnologías para la persistencia de datos en tu aplicación. Aquí te presento algunas alternativas viables:

## 1. AsyncStorage (Solución sencilla)

AsyncStorage es un sistema de almacenamiento clave-valor sencillo incluido en Expo.

```bash
npx expo install @react-native-async-storage/async-storage
```

**Ventajas:**
- Fácil de implementar
- No requiere configuración compleja
- Funciona bien con Expo

**Desventajas:**
- No es ideal para datos relacionales complejos
- Limitado para búsquedas avanzadas

## 2. Firebase (Recomendado)

Firebase ofrece Firestore (base de datos NoSQL) que podría ser ideal para tu proyecto.

```bash
npx expo install firebase
```

**Ventajas:**
- Sincronización en tiempo real
- Funciona offline
- Escalable
- Incluye autenticación y almacenamiento para tus archivos de audio

**Ejemplo de implementación:**

```javascript
// Estructura de Firestore para tu aplicación:
// - Colección "versiones"
//   - Documento "version_id"
//     - Colección "libros"
//       - Documento "libro_id"
//         - Colección "capitulos"
//           - Documento "capitulo_id"
//             - Colección "versiculos"
```

## 3. Realm Database

Una potente base de datos NoSQL orientada a objetos que funciona completamente offline.

```bash
npm install realm @realm/react
```

**Ventajas:**
- Alto rendimiento
- Soporte para consultas complejas
- Completamente offline

## 4. MMKV Storage

Una alternativa de alto rendimiento que es mucho más rápida que AsyncStorage.

```bash
npx expo install react-native-mmkv
```

¿Te gustaría que exploremos alguna de estas opciones en particular? Para tu aplicación de Biblia interactiva, recomendaría especialmente Firebase por su flexibilidad y la facilidad para manejar datos jerárquicos y relaciones.

RafaelG1986: firebase

GitHub Copilot: # Implementación de Firebase para tu Biblia Interactiva

Vamos a configurar Firebase como solución de base de datos para tu aplicación. Firebase es ideal para este caso porque te permitirá sincronizar datos, almacenar archivos de audio y escalar fácilmente.

## 1. Instalar Firebase

Primero, instala las dependencias necesarias:

```bash
npx expo install firebase
```

## 2. Configurar Firebase en tu proyecto

Crea un archivo de configuración para Firebase:

````javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Tu configuración de Firebase (obtenida del panel de Firebase)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
````

## 3. Crear servicios para manejar datos bíblicos

Ahora creemos algunos servicios para interactuar con Firestore:

````javascript
import { db, storage } from '../firebase/config';
import { 
  collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

// Servicios para versiones bíblicas
export const versionesService = {
  // Obtener todas las versiones
  getAll: async () => {
    const versionsCollection = collection(db, 'versiones');
    const querySnapshot = await getDocs(versionsCollection);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },
  
  // Obtener una versión por ID
  getById: async (id) => {
    const versionDoc = doc(db, 'versiones', id);
    const docSnapshot = await getDoc(versionDoc);
    
    if (docSnapshot.exists()) {
      return {
        id: docSnapshot.id,
        ...docSnapshot.data()
      };
    }
    return null;
  },
  
  // Crear una nueva versión
  create: async (version) => {
    const versionsCollection = collection(db, 'versiones');
    return await addDoc(versionsCollection, version);
  },
  
  // Actualizar una versión
  update: async (id, version) => {
    const versionDoc = doc(db, 'versiones', id);
    await updateDoc(versionDoc, version);
    return id;
  },
  
  // Eliminar una versión
  delete: async (id) => {
    const versionDoc = doc(db, 'versiones', id);
    await deleteDoc(versionDoc);
    return id;
  }
};

// Servicios para libros
export const librosService = {
  // Obtener todos los libros de una versión
  getByVersion: async (versionId) => {
    const librosCollection = collection(db, 'libros');
    const q = query(
      librosCollection, 
      where('versionId', '==', versionId),
      orderBy('orden')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },
  
  // Crear un libro
  create: async (libro) => {
    const librosCollection = collection(db, 'libros');
    return await addDoc(librosCollection, libro);
  },
  
  // Obtener libro por ID
  getById: async (id) => {
    const libroDoc = doc(db, 'libros', id);
    const docSnapshot = await getDoc(libroDoc);
    
    if (docSnapshot.exists()) {
      return {
        id: docSnapshot.id,
        ...docSnapshot.data()
      };
    }
    return null;
  },
  
  // Actualizar un libro
  update: async (id, libro) => {
    const libroDoc = doc(db, 'libros', id);
    await updateDoc(libroDoc, libro);
    return id;
  },
  
  // Eliminar un libro
  delete: async (id) => {
    const libroDoc = doc(db, 'libros', id);
    await deleteDoc(libroDoc);
    return id;
  }
};

// Servicio para capítulos con manejo de audio
export const capitulosService = {
  // Obtener capítulos por libro
  getByLibro: async (libroId) => {
    const capitulosCollection = collection(db, 'capitulos');
    const q = query(
      capitulosCollection, 
      where('libroId', '==', libroId),
      orderBy('numero')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },
  
  // Subir archivo de audio
  uploadAudio: async (file, capitulo) => {
    const audioRef = ref(storage, `audios/${capitulo.libroId}_${capitulo.numero}.mp3`);
    await uploadBytes(audioRef, file);
    const audioUrl = await getDownloadURL(audioRef);
    return audioUrl;
  },
  
  // Crear capítulo
  create: async (capitulo, audioFile = null) => {
    let capituloData = {...capitulo};
    
    // Si hay un archivo de audio, súbelo primero
    if (audioFile) {
      const audioUrl = await capitulosService.uploadAudio(audioFile, capitulo);
      capituloData.audioUrl = audioUrl;
    }
    
    const capitulosCollection = collection(db, 'capitulos');
    return await addDoc(capitulosCollection, capituloData);
  },
  
  // Actualizar capítulo
  update: async (id, capitulo, audioFile = null) => {
    let capituloData = {...capitulo};
    
    // Si hay un nuevo archivo de audio, súbelo
    if (audioFile) {
      const audioUrl = await capitulosService.uploadAudio(audioFile, capitulo);
      capituloData.audioUrl = audioUrl;
    }
    
    const capituloDoc = doc(db, 'capitulos', id);
    await updateDoc(capituloDoc, capituloData);
    return id;
  }
};

// Servicio para versículos
export const versiculosService = {
  // Obtener versículos por capítulo
  getByCapitulo: async (capituloId) => {
    const versiculosCollection = collection(db, 'versiculos');
    const q = query(
      versiculosCollection, 
      where('capituloId', '==', capituloId),
      orderBy('numero')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },
  
  // Crear varios versículos a la vez (importación masiva)
  createMany: async (versiculos) => {
    const batch = [];
    
    for (const versiculo of versiculos) {
      const versiculosCollection = collection(db, 'versiculos');
      batch.push(addDoc(versiculosCollection, versiculo));
    }
    
    return Promise.all(batch);
  }
};

// Servicio para progreso de lectura
export const progresoService = {
  // Registrar progreso de lectura
  registrarLectura: async (userId, libroId, capituloId) => {
    const progresoCollection = collection(db, 'progreso');
    
    // Verificar si ya existe un registro de progreso
    const q = query(
      progresoCollection,
      where('userId', '==', userId),
      where('libroId', '==', libroId),
      where('capituloId', '==', capituloId)
    );
    
    const existingDocs = await getDocs(q);
    
    if (existingDocs.empty) {
      // Crear nuevo registro
      return await addDoc(progresoCollection, {
        userId,
        libroId,
        capituloId,
        fecha: new Date(),
        completado: true
      });
    } else {
      // Actualizar registro existente
      const docId = existingDocs.docs[0].id;
      const progresoDoc = doc(db, 'progreso', docId);
      await updateDoc(progresoDoc, {
        fecha: new Date(),
        completado: true
      });
      return docId;
    }
  },
  
  // Obtener estadísticas de progreso
  getEstadisticas: async (userId, versionId) => {
    // Obtener todos los libros de la versión
    const libros = await librosService.getByVersion(versionId);
    
    // Obtener progreso del usuario
    const progresoCollection = collection(db, 'progreso');
    const q = query(progresoCollection, where('userId', '==', userId));
    const progresoSnapshot = await getDocs(q);
    
    const capitulosLeidos = progresoSnapshot.docs.map(doc => doc.data());
    const capitulosLeidosPorLibro = {};
    
    // Agrupar capítulos leídos por libro
    capitulosLeidos.forEach(progreso => {
      if (!capitulosLeidosPorLibro[progreso.libroId]) {
        capitulosLeidosPorLibro[progreso.libroId] = [];
      }
      capitulosLeidosPorLibro[progreso.libroId].push(progreso.capituloId);
    });
    
    // Calcular progreso por libro
    const progresoPorLibro = await Promise.all(
      libros.map(async libro => {
        const capitulos = await capitulosService.getByLibro(libro.id);
        const capitulosLeidos = capitulosLeidosPorLibro[libro.id] || [];
        
        return {
          libroId: libro.id,
          nombre: libro.nombre,
          totalCapitulos: capitulos.length,
          capitulosLeidos: capitulosLeidos.length,
          porcentaje: capitulos.length > 0 
            ? Math.round((capitulosLeidos.length / capitulos.length) * 100)
            : 0
        };
      })
    );
    
    // Calcular progreso general
    const totalCapitulos = progresoPorLibro.reduce((sum, libro) => sum + libro.totalCapitulos, 0);
    const totalCapitulosLeidos = progresoPorLibro.reduce((sum, libro) => sum + libro.capitulosLeidos, 0);
    
    return {
      progresoPorLibro,
      progresoGeneral: {
        totalCapitulos,
        capitulosLeidos: totalCapitulosLeidos,
        porcentaje: totalCapitulos > 0 
          ? Math.round((totalCapitulosLeidos / totalCapitulos) * 100) 
          : 0
      }
    };
  }
};
````

## 4. Integrar Firebase en tu App.js

Ahora modifiquemos tu App.js para inicializar Firebase:

````javascript
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { db } from './src/firebase/config'; // Importamos Firebase

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
  const [initializing, setInitializing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Verificar la conexión a Firebase
    const checkFirebase = async () => {
      try {
        // Comprobar si Firebase está conectado
        console.log('Firebase inicializado');
        setInitializing(false);
      } catch (err) {
        console.error('Error al inicializar Firebase:', err);
        setError(err.message);
        setInitializing(false);
      }
    };

    checkFirebase();
  }, []);

  if (initializing) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.subtitle}>Conectando con Firebase...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.subtitle}>{error}</Text>
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

## 5. Crear un proyecto en Firebase

1. Ve a [console.firebase.google.com](https://console.firebase.google.com/)
2. Crea un nuevo proyecto
3. Configura Firestore Database
4. Configura Storage para los archivos de audio
5. Obtén la configuración y reemplaza en el archivo `config.js`

¿Quieres que te ayude a configurar el proyecto en Firebase o prefieres que profundicemos en alguna parte específica de la implementación?

RafaelG1986: dame los paso para firebase

GitHub Copilot: # Pasos para configurar Firebase en tu aplicación de Biblia Interactiva

## 1. Crear un proyecto en Firebase Console

1. Ve a [console.firebase.google.com](https://console.firebase.google.com/)
2. Haz clic en "Añadir proyecto"
3. Ingresa un nombre para tu proyecto (por ejemplo, "BibliaInteractiva")
4. Decide si deseas habilitar Google Analytics (recomendado)
5. Haz clic en "Crear proyecto"

## 2. Registrar tu aplicación en Firebase

1. En la consola de Firebase, selecciona tu proyecto
2. Haz clic en "Añadir aplicación" y selecciona el ícono de Android o iOS (según tu enfoque principal)
3. Para Android:
   - Ingresa el nombre del paquete (lo encuentras en app.json como "package")
   - Sigue los pasos del asistente, pero no necesitas descargar el archivo google-services.json
4. También añade una aplicación Web haciendo clic en el ícono `</>`:
   - Dale un nombre a la app (por ejemplo "BibliaInteractivaWeb")
   - Registra la aplicación y copia la configuración que aparecerá (apiKey, authDomain, etc.)

## 3. Instalar dependencias de Firebase

Ejecuta estos comandos en tu terminal:

```bash
npx expo install firebase
```

## 4. Configurar Firebase en tu aplicación

Crea los archivos y directorios necesarios:

```bash
mkdir -p src/firebase
mkdir -p src/services
```

Crea el archivo de configuración de Firebase:

````javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Reemplaza esto con tu configuración de Firebase (de la consola)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
````

## 5. Habilitar servicios en Firebase Console

1. **Configurar Authentication**:
   - En la consola de Firebase, ve a Authentication > Comenzar
   - Habilita el método de inicio de sesión por correo y contraseña

2. **Configurar Firestore (base de datos)**:
   - Ve a Firestore Database > Crear base de datos
   - Comienza en modo de prueba (permite lectura/escritura para todos)
   - Selecciona la ubicación preferida para tu base de datos

3. **Configurar Storage (para archivos de audio)**:
   - Ve a Storage > Comenzar
   - Acepta la configuración predeterminada
   - Establece las reglas para permitir acceso a los archivos

## 6. Crear servicios para interactuar con Firestore

Crea el servicio para la Biblia:

````javascript
import { db, storage } from '../firebase/config';
import { 
  collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc,
  query, where, orderBy 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Servicio para versiones bíblicas
export const versionesService = {
  getAll: async () => {
    const versionsRef = collection(db, 'versiones');
    const snapshot = await getDocs(versionsRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },
  
  create: async (version) => {
    const versionsRef = collection(db, 'versiones');
    const docRef = await addDoc(versionsRef, version);
    return docRef.id;
  },
  
  update: async (id, version) => {
    const versionRef = doc(db, 'versiones', id);
    await updateDoc(versionRef, version);
    return id;
  },
  
  delete: async (id) => {
    const versionRef = doc(db, 'versiones', id);
    await deleteDoc(versionRef);
    return id;
  }
};

// Servicio para libros
export const librosService = {
  getByVersion: async (versionId) => {
    const librosRef = collection(db, 'libros');
    const q = query(
      librosRef, 
      where('versionId', '==', versionId),
      orderBy('orden')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },
  
  create: async (libro) => {
    const librosRef = collection(db, 'libros');
    const docRef = await addDoc(librosRef, libro);
    return docRef.id;
  }
};

// Servicio para capítulos con manejo de audio
export const capitulosService = {
  getByLibro: async (libroId) => {
    const capitulosRef = collection(db, 'capitulos');
    const q = query(
      capitulosRef, 
      where('libroId', '==', libroId),
      orderBy('numero')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },
  
  uploadAudio: async (file, capitulo) => {
    // Crear referencia al archivo en Storage
    const storageRef = ref(storage, `audios/${capitulo.libroId}_cap${capitulo.numero}.mp3`);
    
    // Subir el archivo
    await uploadBytes(storageRef, file);
    
    // Obtener la URL de descarga
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  },
  
  create: async (capitulo, audioFile) => {
    // Si hay un archivo de audio, primero lo subimos
    let audioUrl = null;
    if (audioFile) {
      audioUrl = await this.uploadAudio(audioFile, capitulo);
    }
    
    // Crear el capítulo con la URL del audio
    const capitulosRef = collection(db, 'capitulos');
    const docRef = await addDoc(capitulosRef, {
      ...capitulo,
      audioUrl
    });
    
    return docRef.id;
  }
};

// Servicios para versículos
export const versiculosService = {
  getByCapitulo: async (capituloId) => {
    const versiculosRef = collection(db, 'versiculos');
    const q = query(
      versiculosRef,
      where('capituloId', '==', capituloId),
      orderBy('numero')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },
  
  createMany: async (versiculos) => {
    // Para inserción masiva de versículos
    const batch = [];
    
    for (let versiculo of versiculos) {
      const versiculosRef = collection(db, 'versiculos');
      batch.push(addDoc(versiculosRef, versiculo));
    }
    
    const results = await Promise.all(batch);
    return results.map(docRef => docRef.id);
  }
};
````

## 7. Actualizar App.js para inicializar Firebase

Actualiza tu archivo App.js para utilizar Firebase:

````javascript
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Importar Firebase
import { db } from './src/firebase/config';
import { collection, getDocs } from 'firebase/firestore';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Verificar la conexión a Firebase
    const checkFirebaseConnection = async () => {
      try {
        // Intenta acceder a Firestore
        await getDocs(collection(db, 'versiones'));
        console.log('Firebase conectado correctamente');
        setLoading(false);
      } catch (err) {
        console.error('Error al conectar con Firebase:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    checkFirebaseConnection();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Conectando a Firebase...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.subtitle}>{error}</Text>
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

Una vez completados estos pasos, tu aplicación estará conectada a Firebase y podrás comenzar a implementar las pantallas de administración para tu Biblia Interactiva.

RafaelG1986: 2. Registrar tu aplicación en Firebase
En la consola de Firebase, selecciona tu proyecto
Haz clic en "Añadir aplicación" y selecciona el ícono de Android o iOS (según tu enfoque principal)
Para Android:
Ingresa el nombre del paquete (lo encuentras en app.json como "package")
Sigue los pasos del asistente, pero no necesitas descargar el archivo google-services.json
También añade una aplicación Web haciendo clic en el ícono </>:
Dale un nombre a la app (por ejemplo "BibliaInteractivaWeb")
Registra la aplicación y copia la configuración que aparecerá (apiKey, authDomain, etc.)---- dame el paso a paso

GitHub Copilot: # Paso a paso: Registrar tu aplicación web en Firebase

## 1. Accede a Firebase Console

- Ve a [console.firebase.google.com](https://console.firebase.google.com/)
- Inicia sesión con tu cuenta de Google

## 2. Selecciona tu proyecto

- Una vez en la consola, selecciona el proyecto que creaste para tu Biblia Interactiva
  - Si aún no tienes un proyecto, haz clic en "Crear un proyecto"
  - Sigue las instrucciones para dar nombre a tu proyecto y configurar Google Analytics (opcional)

## 3. Registra tu aplicación web

1. En la página de inicio del proyecto, haz clic en el ícono de web `</>`
   - Este botón suele estar en el centro de la pantalla o en el panel lateral bajo "Agregar app"

2. Ingresa un nombre para tu aplicación
   - Por ejemplo: "BibliaInteractivaWeb"
   - La opción "Configurar también Firebase Hosting" es opcional

3. Haz clic en "Registrar app"

## 4. Obtén la configuración de Firebase

Después de registrar la app, verás los detalles de configuración:

1. Se mostrará un bloque de código JavaScript con un objeto `firebaseConfig` que contiene:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`
   - `measurementId` (si activaste Analytics)

2. Copia todo este objeto de configuración

## 5. Implementa la configuración en tu proyecto

1. Crea el archivo de configuración de Firebase si aún no lo tienes:

```bash
mkdir -p src/firebase
touch src/firebase/config.js
```

2. Abre el archivo `config.js` y pega tu configuración:

````javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Tu configuración de Firebase (copia y pega desde la consola)
const firebaseConfig = {
  apiKey: "TU-API-KEY-AQUÍ",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "TU-MESSAGING-SENDER-ID",
  appId: "TU-APP-ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
````

## 6. Continúa con la configuración adicional

En la misma consola de Firebase, puedes habilitar los servicios necesarios para tu aplicación:

1. Firestore Database
2. Storage (para archivos de audio)
3. Authentication (para gestionar usuarios)

¿Necesitas ayuda con alguno de estos servicios específicos?

RafaelG1986: el enfoque es android

GitHub Copilot: # Paso a paso: Registrar tu aplicación Android en Firebase

## 1. Encuentra el nombre del paquete de tu aplicación

Para una app Expo, el nombre del paquete se encuentra en tu archivo `app.json`:

1. Abre tu archivo `app.json` en VS Code
2. Busca la sección `android` y el campo `package`
3. Si no existe, generalmente sigue este formato: `com.tuusuario.nombreapp`

## 2. Accede a Firebase Console

- Ve a [console.firebase.google.com](https://console.firebase.google.com/)
- Selecciona tu proyecto de Biblia Interactiva

## 3. Registra tu aplicación Android

1. En la página de inicio del proyecto, haz clic en el icono de Android (el robot verde)
   - Este botón suele estar en el centro de la pantalla o en la barra lateral bajo "Agregar app"

2. Completa la información:
   - **Nombre del paquete Android**: Ingresa el nombre del paquete (por ejemplo: `com.tuusuario.bibliainteractiva`)
   - **Apodo de la app** (opcional): "Biblia Interactiva"
   - **Certificado SHA-1** (opcional): Puedes dejarlo en blanco por ahora para desarrollo con Expo

3. Haz clic en "Registrar app"

## 4. Descarga el archivo de configuración

1. Firebase generará un archivo `google-services.json`
2. Descarga este archivo
3. **Importante para Expo**: Este archivo se usará diferente en Expo que en un proyecto Android nativo

## 5. Configura Firebase para Expo Android

Como estás utilizando Expo, hay dos enfoques para configurar Firebase:

### Opción A: Usando la configuración web para ambas plataformas (más fácil)

1. También registra una aplicación web como mencionamos antes (haz clic en el icono `</>`)
2. Usa la configuración web en tu archivo `config.js`
3. Instala los paquetes necesarios:

```bash
npx expo install firebase
```

### Opción B: Usando google-services.json (requiere EAS Build o expulsar)

Esta opción es más avanzada y requiere:
- Crear una carpeta `android/app` en tu proyecto
- Colocar el archivo `google-services.json` allí
- Usar EAS Build o expulsar (eject) tu proyecto Expo

## 6. Actualiza tu config.js con la configuración web

````javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Tu configuración de Firebase (de la aplicación web)
const firebaseConfig = {
  apiKey: "TU-API-KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "TU-MESSAGING-SENDER-ID",
  appId: "TU-APP-ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
````

## 7. Actualiza tu app.json para incluir las configuraciones de Android

````json
{
  "expo": {
    "name": "Biblia Interactiva",
    "slug": "MiPrimeraApp",
    // Otras configuraciones...
    "android": {
      "package": "com.tuusuario.bibliainteractiva",
      "googleServicesFile": "./google-services.json",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    }
  }
}
````

Esto establecerá tu app para Android con Firebase. ¿Quieres que detalle algún paso en particular o pasamos a configurar los servicios específicos de Firebase que necesitarás?

RafaelG1986: Otra opcion diferente a firebase?

GitHub Copilot: # Alternativas a Firebase para tu aplicación de Biblia Interactiva

Existen varias opciones alternativas que funcionarían bien para tu aplicación de Biblia Interactiva:

## 1. Supabase
- **Ventajas**: Base de datos PostgreSQL potente, autenticación, almacenamiento, tiempo real
- **Ideal para**: Estructura de datos relacional (libros, capítulos, versículos)
- **Integración**: `supabase-js` funciona bien con React Native

```bash
npm install @supabase/supabase-js
```

## 2. MongoDB Realm (ahora Atlas Device SDK)
- **Ventajas**: Excelente sincronización offline, ideal para aplicaciones móviles
- **Especialidad**: Soporte offline completo (ideal para una app de lectura)
- **Manejo de datos**: Modelo basado en documentos (semejante a tu estructura bíblica)

```bash
npm install realm
```

## 3. SQLite con AsyncStorage (solución local)
- **Ventajas**: Completamente offline, sin costos de backend
- **Ideal para**: Aplicación que no requiere sincronización entre dispositivos
- **Independencia**: No depende de servicios en la nube

```bash
npx expo install expo-sqlite @react-native-async-storage/async-storage
```

## 4. Appwrite (código abierto)
- **Ventajas**: Similar a Firebase pero open source, puedes alojarlo tú mismo
- **Servicios**: Autenticación, base de datos, almacenamiento, funciones

```bash
npm install appwrite
```

## 5. AWS Amplify
- **Ventajas**: Solución empresarial escalable con múltiples servicios
- **Características**: GraphQL, autenticación, analytics, almacenamiento

```bash
npm install aws-amplify
```

## Recomendación para tu caso

Para una Biblia interactiva, recomendaría **SQLite con AsyncStorage** si:
- No necesitas sincronización entre dispositivos
- Quieres evitar costos de backend
- Priorizas el funcionamiento offline

Si necesitas sincronización, **MongoDB Realm** sería la mejor opción por su excelente manejo del modo offline y su modelo de datos que se adapta bien a la estructura jerárquica de una Biblia.

¿Quieres que exploremos alguna de estas opciones en más detalle?

RafaelG1986: SQLite con AsyncStorage

GitHub Copilot: # Implementación de SQLite con AsyncStorage para tu Biblia Interactiva

Vamos a configurar tu aplicación para usar SQLite (datos estructurados de la Biblia) junto con AsyncStorage (preferencias y progreso).

## 1. Instalar dependencias necesarias

Ejecuta estos comandos en tu terminal:

```bash
npx expo install expo-sqlite
npx expo install @react-native-async-storage/async-storage
```

## 2. Crear estructura de carpetas

```bash
mkdir -p src/database
mkdir -p src/models
mkdir -p src/services
mkdir -p src/utils
```

## 3. Configurar la base de datos SQLite

Crea el archivo para inicializar la base de datos:

````javascript
import * as SQLite from 'expo-sqlite';

// Abrir o crear la base de datos
const db = SQLite.openDatabase('biblia.db');

// Inicializar tablas
const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Tabla de versiones bíblicas (RVR, NTV, etc.)
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS versiones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          abreviatura TEXT NOT NULL,
          idioma TEXT NOT NULL,
          descripcion TEXT
        )`,
        [],
        () => console.log('Tabla versiones creada'),
        (_, error) => {
          console.error('Error al crear tabla versiones:', error);
          reject(error);
          return false;
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
        () => console.log('Tabla libros creada'),
        (_, error) => {
          console.error('Error al crear tabla libros:', error);
          reject(error);
          return false;
        }
      );
      
      // Tabla de capítulos
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS capitulos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          libro_id INTEGER,
          numero INTEGER NOT NULL,
          audio_path TEXT,
          FOREIGN KEY (libro_id) REFERENCES libros (id)
        )`,
        [],
        () => console.log('Tabla capítulos creada'),
        (_, error) => {
          console.error('Error al crear tabla capítulos:', error);
          reject(error);
          return false;
        }
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
        () => {
          console.log('Tabla versículos creada');
          resolve();
        },
        (_, error) => {
          console.error('Error al crear tabla versículos:', error);
          reject(error);
          return false;
        }
      );
    });
  });
};

export { db, initDatabase };
````

## 4. Configurar AsyncStorage para el progreso

Crea un servicio para manejar el progreso de lectura:

````javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const PROGRESO_KEY = '@biblia_progreso';
const ULTIMA_LECTURA_KEY = '@biblia_ultima_lectura';
const PREFERENCIAS_KEY = '@biblia_preferencias';

// Servicio para manejar el progreso de lectura
const progresoService = {
  // Guardar progreso de capítulo leído
  guardarCapituloLeido: async (versionId, libroId, capituloId) => {
    try {
      // Obtener progreso actual
      const pro

RafaelG1986: quiero crear las cosas paso a paso, no mucho por los errores generados.

GitHub Copilot: # Implementación paso a paso de SQLite para Biblia Interactiva

Veo que ya has agregado el plugin de expo-sqlite en tu app.json, lo cual es un buen comienzo. Vamos a proceder paso a paso para minimizar errores.

## Paso 1: Verificar la instalación correcta

Asegúrate de que las dependencias estén instaladas:

```bash
npx expo install expo-sqlite @react-native-async-storage/async-storage
```

## Paso 2: Crear la estructura básica

```bash
mkdir -p src/database
```

## Paso 3: Crear un archivo de base de datos simple

Empezaremos creando solo una tabla para verificar que todo funciona correctamente:

````javascript
import * as SQLite from 'expo-sqlite';

// Abrir o crear la base de datos
const db = SQLite.openDatabase('biblia.db');

// Inicializar solo una tabla para probar
const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Solo creamos la tabla de versiones para empezar
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS versiones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          abreviatura TEXT NOT NULL,
          idioma TEXT NOT NULL
        )`,
        [],
        () => {
          console.log('Tabla versiones creada correctamente');
          resolve();
        },
        (_, error) => {
          console.error('Error al crear tabla versiones:', error);
          reject(error);
        }
      );
    });
  });
};

export { db, initDatabase };
````

## Paso 4: Integrar la base de datos en App.js

Modifica tu App.js para inicializar la base de datos:

````javascript
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Inicializar la base de datos al cargar la app
    const setupDatabase = async () => {
      try {
        await initDatabase();
        console.log('Base de datos inicializada correctamente');
        setIsLoading(false);
      } catch (err) {
        console.error('Error al inicializar la base de datos:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    setupDatabase();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Inicializando base de datos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.subtitle}>{error}</Text>
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
  // Los estilos que ya tienes...
});
````

## Paso 5: Verificar que funciona

Una vez que confirmes que esta implementación básica funciona sin errores, podemos continuar con los siguientes pasos:

1. Añadir más tablas a la base de datos
2. Implementar AsyncStorage para el progreso de lectura
3. Crear servicios para CRUD de cada entidad

¿Te gustaría que procedamos a implementar este primer paso para confirmar que funciona?

RafaelG1986: runtime not ready TypeError SQLite.openDatabase is not a function

GitHub Copilot: # Solución al error de SQLite en Expo

Veo que estás enfrentando el error `TypeError: SQLite.openDatabase is not a function`. Este es un problema común con la forma en que se importa y utiliza expo-sqlite.

## Paso 1: Verificar la instalación

Primero, asegúrate de tener la versión correcta:

```bash
npx expo install expo-sqlite
```

## Paso 2: Corregir la importación de SQLite

Modifica el archivo de base de datos para cambiar cómo importamos y usamos SQLite:

````javascript
// Cambia la forma de importar SQLite
import { openDatabase } from 'expo-sqlite';

// Abrir o crear la base de datos usando la función importada directamente
const db = openDatabase('biblia.db');

// Inicializar solo una tabla para probar
const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Solo creamos la tabla de versiones para empezar
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS versiones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          abreviatura TEXT NOT NULL,
          idioma TEXT NOT NULL
        )`,
        [],
        () => {
          console.log('Tabla versiones creada correctamente');
          resolve();
        },
        (_, error) => {
          console.error('Error al crear tabla versiones:', error);
          reject(error);
        }
      );
    });
  });
};

export { db, initDatabase };
````

## Paso 3: Actualizar plugin en app.json

Asegúrate de que tu app.json incluya el plugin correctamente:

````json
"plugins": [
  "expo-sqlite"
]
````

## Paso 4: Reiniciar la aplicación completamente

```bash
npx expo start --clear
```

Este cambio en la forma de importar debería resolver el problema. Es común tener este tipo de errores porque la API de expo-sqlite ha cambiado ligeramente en las versiones recientes.

¿Quieres que te ayude con algo más para asegurar que SQLite funcione correctamente?

RafaelG1986: PS C:\AppCel\MiPrimeraApp> npm fund
miprimeraapp@1.0.0
├── https://opencollective.com/babel
│   └── @babel/core@7.27.1
├── https://github.com/sponsors/sindresorhus
│   └── escape-string-regexp@4.0.0, query-string@7.1.3, string-width@5.1.2, pretty-bytes@5.6.0, terminal-link@2.1.1, ansi-escapes@4.3.2, type-fest@0.21.3, find-up@5.0.0, locate-path@6.0.0, p-locate@5.0.0, p-limit@3.1.0, yocto-queue@0.1.0, open@8.4.2, is-docker@2.2.1, cli-spinners@2.9.2, defaults@1.0.4, camelcase@6.3.0, p-limit@2.3.0
├── https://github.com/sponsors/ai
│   └── nanoid@3.3.11
├─┬ https://github.com/chalk/chalk?sponsor=1
│ │ └── chalk@4.1.2
│ └── https://github.com/chalk/ansi-styles?sponsor=1
│     └── ansi-styles@4.3.0, ansi-styles@6.2.1, ansi-styles@5.2.0
├── https://github.com/sponsors/sibiraj-s
│   └── ci-info@3.9.0
├── https://github.com/sponsors/isaacs
│   └── glob@10.4.5, foreground-child@3.3.1, signal-exit@4.1.0, jackspeak@3.4.3, path-scurry@1.11.1, minimatch@9.0.5, rimraf@3.0.2, glob@7.2.3, mkdirp@3.0.1
├── https://github.com/sponsors/jonschlinkert
│   └── picomatch@2.3.1
├── https://github.com/sponsors/ljharb
│   └── resolve@1.22.10, is-core-module@2.16.1, function-bind@1.1.2, supports-preserve-symlinks-flag@1.0.0, minimist@1.2.8, shell-quote@1.8.2
├── https://dotenvx.com
│   └── dotenv@16.4.7, dotenv-expand@11.0.7
├── https://github.com/sponsors/feross
│   └── base64-js@1.5.1, safe-buffer@5.2.1, buffer@5.7.1, ieee754@1.2.1
├── https://opencollective.com/parcel
│   └── lightningcss@1.27.0, lightningcss-darwin-arm64@1.27.0, lightningcss-darwin-x64@1.27.0, lightningcss-freebsd-x64@1.27.0, lightningcss-linux-arm-gnueabihf@1.27.0, lightningcss-linux-arm64-gnu@1.27.0, lightningcss-linux-arm64-musl@1.27.0, lightningcss-linux-x64-gnu@1.27.0, lightningcss-linux-x64-musl@1.27.0, lightningcss-win32-arm64-msvc@1.27.0, lightningcss-win32-x64-msvc@1.27.0
├── https://opencollective.com/postcss/
│   └── postcss@8.4.49
├── https://opencollective.com/browserslist
│   └── browserslist@4.24.5, caniuse-lite@1.0.30001718, update-browserslist-db@1.1.3       
├── https://opencollective.com/core-js
│   └── core-js-compat@3.42.0
├── https://github.com/chalk/supports-color?sponsor=1
│   └── supports-color@8.1.1
└─┬ https://github.com/sponsors/fb55
  │ └── css-select@5.1.0, css-what@6.1.0, domelementtype@2.3.0
  ├── https://github.com/fb55/domhandler?sponsor=1
  │   └── domhandler@5.0.3
  ├─┬ https://github.com/fb55/domutils?sponsor=1
  │ │ └── domutils@3.2.2
  │ └─┬ https://github.com/cheeriojs/dom-serializer?sponsor=1
  │   │ └── dom-serializer@2.0.0
  │   └── https://github.com/fb55/entities?sponsor=1
  │       └── entities@4.5.0
  └── https://github.com/fb55/nth-check?sponsor=1
      └── nth-check@2.1.1

GitHub Copilot: # Corrigiendo la importación de SQLite

Veo que sigues teniendo el mismo error con SQLite. Necesitamos modificar la forma en que importas y utilizas la biblioteca en tu archivo database.js:

````javascript
// Cambiar esto:
// import * as SQLite from 'expo-sqlite';
// Por esto:
import { openDatabase } from 'expo-sqlite';

// Abrir o crear la base de datos usando la función importada directamente
const db = openDatabase('biblia.db');

// El resto del código permanece igual
const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Solo creamos la tabla de versiones para empezar
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS versiones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          abreviatura TEXT NOT NULL,
          idioma TEXT NOT NULL
        )`,
        [],
        () => {
          console.log('Tabla versiones creada correctamente');
          resolve();
        },
        (_, error) => {
          console.error('Error al crear tabla versiones:', error);
          reject(error);
        }
      );
    });
  });
};

export { db, initDatabase };
````

Después de hacer este cambio:

1. Guarda el archivo
2. Detén completamente la aplicación (Ctrl+C en la terminal)
3. Reinicia con `npx expo start --clear`

Esta modificación en la importación debería resolver el error de `SQLite.openDatabase is not a function`, ya que ahora estamos importando la función directamente.

RafaelG1986: runtime not ready: TypeError:0

GitHub Copilot: # Solución para "runtime not ready: TypeError:0"

Este error genérico puede ocurrir en Expo por varios motivos, especialmente cuando hay problemas con los plugins nativos como SQLite. Vamos a resolverlo paso a paso:

## 1. Limpiar completamente la caché

```bash
# Detener la aplicación primero (Ctrl+C)
npx expo start --clear --no-dev --minify
```

Si esto no funciona:

```bash
expo r -c
```

## 2. Reinstalar las dependencias

```bash
npm uninstall expo-sqlite
npm install expo-sqlite@latest
```

## 3. Verificar las versiones de Expo y SQLite

Asegúrate de que estás usando versiones compatibles:

```bash
npx expo install expo-sqlite
```

## 4. Usar un enfoque alternativo para SQLite

Si los pasos anteriores no funcionan, podemos usar AsyncStorage temporalmente para probar:

````javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Función simulada para inicializar "base de datos"
const initDatabase = async () => {
  try {
    // Crear una estructura básica de "versiones" como prueba
    const versiones = [
      { id: 1, nombre: 'Reina Valera', abreviatura: 'RVR', idioma: 'Español' }
    ];
    
    await AsyncStorage.setItem('versiones', JSON.stringify(versiones));
    console.log('Datos iniciales guardados correctamente');
    return true;
  } catch (error) {
    console.error('Error al inicializar los datos:', error);
    throw error;
  }
};

// Simulación de operaciones de base de datos
const db = {
  getVersiones: async () => {
    const data = await AsyncStorage.getItem('versiones');
    return data ? JSON.parse(data) : [];
  },
  addVersion: async (version) => {
    const versiones = await db.getVersiones();
    const newVersion = { id: Date.now(), ...version };
    versiones.push(newVersion);
    await AsyncStorage.setItem('versiones', JSON.stringify(versiones));
    return newVersion;
  }
};

export { db, initDatabase };
````

## 5. Revisar tu App.js

Asegúrate de manejar correctamente los errores en App.js:

````javascript
// En tu useEffect donde inicializas la base de datos
useEffect(() => {
  const setupDatabase = async () => {
    try {
      await initDatabase();
      setIsLoading(false);
    } catch (err) {
      console.error('Error:', err);
      setError(err.toString());
      setIsLoading(false);
    }
  };

  setupDatabase();
}, []);
````

¿Quieres que implementemos alguno de estos enfoques para resolver el problema?

RafaelG1986: PS C:\AppCel\MiPrimeraApp> npm fund
miprimeraapp@1.0.0
├── https://opencollective.com/babel
│   └── @babel/core@7.27.1
├── https://github.com/sponsors/sindresorhus
│   └── escape-string-regexp@4.0.0, query-string@7.1.3, string-width@5.1.2, pretty-bytes@5.6.0, terminal-link@2.1.1, ansi-escapes@4.3.2, type-fest@0.21.3, find-up@5.0.0, locate-path@6.0.0, p-locate@5.0.0, p-limit@3.1.0, yocto-queue@0.1.0, open@8.4.2, is-docker@2.2.1, cli-spinners@2.9.2, defaults@1.0.4, camelcase@6.3.0, p-limit@2.3.0
├── https://github.com/sponsors/ai
│   └── nanoid@3.3.11
├─┬ https://github.com/chalk/chalk?sponsor=1
│ │ └── chalk@4.1.2
│ └── https://github.com/chalk/ansi-styles?sponsor=1
│     └── ansi-styles@4.3.0, ansi-styles@6.2.1, ansi-styles@5.2.0
├── https://github.com/sponsors/sibiraj-s
│   └── ci-info@3.9.0
├── https://github.com/sponsors/isaacs
│   └── glob@10.4.5, foreground-child@3.3.1, signal-exit@4.1.0, jackspeak@3.4.3, path-scurry@1.11.1, minimatch@9.0.5, rimraf@3.0.2, glob@7.2.3, mkdirp@3.0.1
├── https://github.com/sponsors/jonschlinkert
│   └── picomatch@2.3.1
├── https://github.com/sponsors/ljharb
│   └── resolve@1.22.10, is-core-module@2.16.1, function-bind@1.1.2, supports-preserve-symlinks-flag@1.0.0, minimist@1.2.8, shell-quote@1.8.2
├── https://dotenvx.com
│   └── dotenv@16.4.7, dotenv-expand@11.0.7
├── https://github.com/sponsors/feross
│   └── base64-js@1.5.1, safe-buffer@5.2.1, buffer@5.7.1, ieee754@1.2.1
├── https://opencollective.com/parcel
│   └── lightningcss@1.27.0, lightningcss-darwin-arm64@1.27.0, lightningcss-darwin-x64@1.27.0, lightningcss-freebsd-x64@1.27.0, lightningcss-linux-arm-gnueabihf@1.27.0, lightningcss-linux-arm64-gnu@1.27.0, lightningcss-linux-arm64-musl@1.27.0, lightningcss-linux-x64-gnu@1.27.0, lightningcss-linux-x64-musl@1.27.0, lightningcss-win32-arm64-msvc@1.27.0, lightningcss-win32-x64-msvc@1.27.0
├── https://opencollective.com/postcss/
│   └── postcss@8.4.49
├── https://opencollective.com/browserslist
│   └── browserslist@4.24.5, caniuse-lite@1.0.30001718, update-browserslist-db@1.1.3       
├── https://opencollective.com/core-js
│   └── core-js-compat@3.42.0
├── https://github.com/chalk/supports-color?sponsor=1
│   └── supports-color@8.1.1
└─┬ https://github.com/sponsors/fb55
  │ └── css-select@5.1.0, css-what@6.1.0, domelementtype@2.3.0
  ├── https://github.com/fb55/domhandler?sponsor=1
  │   └── domhandler@5.0.3
  ├─┬ https://github.com/fb55/domutils?sponsor=1
  │ │ └── domutils@3.2.2
  │ └─┬ https://github.com/cheeriojs/dom-serializer?sponsor=1
  │   │ └── dom-serializer@2.0.0
  │   └── https://github.com/fb55/entities?sponsor=1
  │       └── entities@4.5.0
  └── https://github.com/fb55/nth-check?sponsor=1
      └── nth-check@2.1.1

GitHub Copilot: 

RafaelG1986: PS C:\AppCel\MiPrimeraApp> expo r -c
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: 
https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Starting project at C:\AppCel\MiPrimeraApp
ExpoMetroConfig.loadAsync is not a function
TypeError: ExpoMetroConfig.loadAsync is not a function
    at runMetroDevServerAsync (C:\Users\Emanuel\AppData\Roaming\npm\node_modules\expo-cli\node_modules\@expo\dev-server\src\MetroDevServer.ts:86:45)
    at startDevServerAsync (C:\Users\Emanuel\AppData\Roaming\npm\node_modules\expo-cli\node_modules\xdl\src\start\startDevServerAsync.ts:75:77)
    at startAsync (C:\Users\Emanuel\AppData\Roaming\npm\node_modules\expo-cli\node_modules\xdl\src\start\startAsync.ts:84:41)

GitHub Copilot: # Solución a problemas de Expo CLI y SQLite

Veo que estás enfrentando dos problemas:
1. Estás usando la versión global antigua de expo-cli
2. El error con SQLite persiste

## Paso 1: Usar la CLI local de Expo (recomendado)

En lugar de `expo r -c`, usa:

```bash
npx expo start --clear
```

## Paso 2: Si el problema con SQLite persiste, implementemos AsyncStorage

Dado que SQLite está dando problemas, podemos usar AsyncStorage temporalmente:

1. **Instalar AsyncStorage**:

```bash
npx expo install @react-native-async-storage/async-storage
```

2. **Crear una implementación alternativa**:

````javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Simulación de base de datos usando AsyncStorage
const initDatabase = async () => {
  try {
    // Inicializar con algunos datos de prueba
    const versiones = [
      { id: 1, nombre: 'Reina Valera', abreviatura: 'RVR', idioma: 'Español' },
      { id: 2, nombre: 'Nueva Versión Internacional', abreviatura: 'NVI', idioma: 'Español' }
    ];
    
    await AsyncStorage.setItem('versiones', JSON.stringify(versiones));
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
  addVersion: async (version) => {
    const versiones = await db.getVersiones();
    const newId = versiones.length > 0 ? Math.max(...versiones.map(v => v.id)) + 1 : 1;
    const newVersion = { id: newId, ...version };
    versiones.push(newVersion);
    await AsyncStorage.setItem('versiones', JSON.stringify(versiones));
    return newVersion;
  }
};

export { db, initDatabase };
````

3. **Usar esta implementación en tu App.js**

Este enfoque te permitirá avanzar con el desarrollo mientras resolvemos el problema con SQLite.

¿Quieres que implementemos esta solución alternativa o prefieres que intentemos resolver el problema con SQLite de otra manera?

RafaelG1986: implementala por favor

GitHub Copilot: # Implementación de AsyncStorage como alternativa a SQLite

Voy a implementar la solución con AsyncStorage para evitar los problemas con SQLite:

````javascript
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
````

## ¿Cómo funciona?

Esta implementación:

1. **Inicializa datos de ejemplo** para versiones bíblicas y libros al iniciar la app
2. **Proporciona métodos CRUD** similares a los que habrías tenido con SQLite
3. **Mantiene los datos** entre sesiones de la aplicación

## Uso en tu aplicación

Para usar estas funciones en tus componentes:

```javascript
import { db } from '../database/database';

// En un componente:
const [versiones, setVersiones] = useState([]);

useEffect(() => {
  const cargarVersiones = async () => {
    const data = await db.getVersiones();
    setVersiones(data);
  };
  
  cargarVersiones();
}, []);
```

## Próximos pasos

1. Prueba la aplicación para verificar que esta implementación funciona correctamente
2. Si todo está bien, podemos continuar implementando las pantallas CRUD
3. Más adelante podemos ampliar esta implementación para capítulos y versículos

¿Necesitas ayuda con alguna otra parte de la implementación?

RafaelG1986: dame el codigo de app.js con esta implementacin

GitHub Copilot: # Código actualizado para App.js con AsyncStorage

Aquí está el código completo de App.js implementando la solución de AsyncStorage:

````javascript
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { initDatabase, db } from './src/database/database';

// Pantalla de inicio que muestra las versiones disponibles
const HomeScreen = () => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        const data = await db.getVersiones();
        setVersiones(data);
      } catch (error) {
        console.error('Error al cargar versiones:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarVersiones();
  }, []);

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Biblia Interactiva</Text>
      <Text style={styles.subtitle}>Tu compañero de estudio bíblico</Text>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Versiones disponibles</Text>
        <FlatList
          data={versiones}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.versionItem}>
              <Text style={styles.versionName}>{item.nombre}</Text>
              <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No hay versiones disponibles</Text>
          }
        />
      </View>
    </View>
  );
};

// Pantalla de lectura
const ReadScreen = () => {
  const [libros, setLibros] = useState([]);
  
  useEffect(() => {
    const cargarLibros = async () => {
      try {
        // Por defecto cargamos la versión con ID 1
        const data = await db.getLibrosByVersion(1);
        setLibros(data);
      } catch (error) {
        console.error('Error al cargar libros:', error);
      }
    };
    
    cargarLibros();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Lectura</Text>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Libros</Text>
        <FlatList
          data={libros}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.libroItem}>
              <Text style={styles.libroName}>{item.nombre}</Text>
              <Text style={styles.libroDetails}>{item.testamento}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No hay libros disponibles</Text>
          }
        />
      </View>
    </View>
  );
};

// Pantalla de administración
const AdminScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Administración</Text>
      <Text style={styles.subtitle}>Panel CRUD de la Biblia</Text>
      
      <View style={styles.adminOptions}>
        <TouchableOpacity style={styles.adminButton}>
          <Text style={styles.adminButtonText}>Gestionar Versiones</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.adminButton}>
          <Text style={styles.adminButtonText}>Gestionar Libros</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.adminButton}>
          <Text style={styles.adminButtonText}>Gestionar Capítulos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Inicializar la base de datos al cargar la app
    const setupDatabase = async () => {
      try {
        await initDatabase();
        console.log('Base de datos inicializada correctamente');
        setIsLoading(false);
      } catch (err) {
        console.error('Error al inicializar la base de datos:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    setupDatabase();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Inicializando base de datos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.subtitle}>{error}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Lectura') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Admin') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            
            // Asegúrate de que Ionicons esté instalado: npx expo install @expo/vector-icons
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
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
    justifyContent: 'flex-start',
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
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  sectionContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  versionItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  versionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
  },
  libroItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  libroName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  libroDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
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
    alignItems: 'center',
  },
  adminButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
````

## Novedades en esta implementación:

1. **Visualización de datos reales de AsyncStorage**: 
   - HomeScreen muestra las versiones bíblicas
   - ReadScreen muestra los libros de la primera versión

2. **Iconos en la navegación**: 
   - Utilizando Ionicons para mejorar la UI (necesitas instalar `@expo/vector-icons` si aún no lo tienes)

3. **Interfaz mejorada**:
   - Componentes con sombras y bordes redondeados
   - Mejores estilos para la experiencia de usuario

4. **Pantalla de administración con botones**:
   - Opciones para gestionar las distintas entidades

Para usar esta implementación, asegúrate de instalar los íconos:

```bash
npx expo install @expo/vector-icons
```

¿Quieres que te ayude a implementar alguna pantalla específica del CRUD o prefieres probar primero esta implementación básica?

Código similar encontrado con 1 tipo de licencia

RafaelG1986: actualicemos repositorio

GitHub Copilot: # Actualización del repositorio para la Biblia Interactiva

Vamos a actualizar tu repositorio con los cambios que hemos implementado para la solución de AsyncStorage. Sigue estos pasos:

## 1. Verificar el estado actual

```bash
git status
```

Este comando te mostrará qué archivos han sido modificados o creados.

## 2. Añadir los archivos al área de preparación

```bash
# Añadir archivos específicos
git add src/database/database.js
git add App.js

# O añadir todos los cambios
git add .
```

## 3. Realizar un commit con mensaje descriptivo

```bash
git commit -m "Implementación de AsyncStorage como solución de almacenamiento para la Biblia Interactiva"
```

## 4. Si tienes un repositorio remoto, hacer push

```bash
git push origin main
```
(O `git push origin master` dependiendo de la rama principal que estés usando)

## 5. Para verificar que todo está correcto

```bash
git log --oneline -5
```

Este comando te mostrará los últimos 5 commits para confirmar que tu cambio se ha registrado correctamente.

¿Necesitas ayuda con alguno de estos pasos o tienes alguna otra pregunta sobre el repositorio?

RafaelG1986: Listo, ahora quiero subir informacion con la implementacion realizada

GitHub Copilot: # Actualización del repositorio con la implementación AsyncStorage

## 1. Resumen de cambios implementados

Hemos realizado los siguientes cambios importantes:

- Migración de SQLite a AsyncStorage para almacenar datos
- Implementación de versiones bíblicas y libros de ejemplo
- Interfaz de usuario mejorada con iconos y estilización
- Pantallas funcionales para mostrar versiones y libros

## 2. Comandos para actualizar el repositorio

```bash
# Ver los archivos modificados
git status

# Añadir todos los archivos modificados
git add .

# Crear un commit con mensaje descriptivo
git commit -m "Implementar solución AsyncStorage para almacenar datos bíblicos"

# Subir los cambios al repositorio remoto
git push origin main
```

## 3. Verificar la actualización

```bash
# Verificar los últimos commits
git log --oneline -5
```

## 4. Estructura actualizada del proyecto

La implementación actual incluye:

- `App.js` con navegación por pestañas y 3 pantallas principales
- `src/database/database.js` con la lógica de AsyncStorage
- Datos de ejemplo para versiones bíblicas y libros
- Interfaz mejorada con componentes estilizados

¿Necesitas ayuda con algún paso específico del proceso de actualización del repositorio?

RafaelG1986: cual seria el siguiente paso?

GitHub Copilot: # Siguiente paso: Implementar las pantallas CRUD para Administración

Ahora que tienes la estructura básica de la aplicación funcionando con AsyncStorage, el siguiente paso lógico es implementar la funcionalidad CRUD completa para el panel de administración.

## Pantallas de Gestión de Versiones

Comenzaría con la implementación del CRUD para las versiones bíblicas:

1. **Crear una estructura de navegación anidada** para la sección de administración
2. **Desarrollar las siguientes pantallas**:
   - Lista de versiones con opciones para editar/eliminar
   - Formulario para añadir nueva versión
   - Formulario para editar versión existente

## Implementación Paso a Paso

### 1. Instalar la navegación Stack para las pantallas de administración

```bash
npm install @react-navigation/stack
```

### 2. Crear archivos para las pantallas de administración

```bash
mkdir -p src/screens/admin/versiones
```

### 3. Implementar las pantallas y flujos de navegación

Estas pantallas te permitirán gestionar el contenido de tu Biblia Interactiva de manera más efectiva.

¿Te gustaría comenzar con la implementación de las pantallas de gestión de versiones? Puedo proporcionarte el código completo para esta funcionalidad.

RafaelG1986: listo siguiente paso

GitHub Copilot: # Implementación de pantallas CRUD para el Panel de Administración

Vamos a implementar las pantallas para administrar las versiones bíblicas, que será el siguiente paso lógico en el desarrollo de tu aplicación.

## Paso 1: Instalar dependencias para la navegación Stack

```bash
npm install @react-navigation/stack
```

## Paso 2: Crear estructura de carpetas

```bash
mkdir -p src/screens/admin/versiones
```

## Paso 3: Implementar pantallas para gestión de versiones

### 1. Lista de Versiones

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const VersionesList = ({ navigation }) => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarVersiones = async () => {
    try {
      setLoading(true);
      const data = await db.getVersiones();
      setVersiones(data);
    } catch (error) {
      console.error('Error al cargar versiones:', error);
      Alert.alert('Error', 'No se pudieron cargar las versiones');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarVersiones();

    // Refrescar la lista cuando el foco regresa a esta pantalla
    const unsubscribe = navigation.addListener('focus', () => {
      cargarVersiones();
    });

    return unsubscribe;
  }, [navigation]);

  const eliminarVersion = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar esta versión? Esta acción no se puede deshacer.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteVersion(id);
              cargarVersiones(); // Recargar la lista
              Alert.alert('Éxito', 'Versión eliminada correctamente');
            } catch (error) {
              console.error('Error al eliminar versión:', error);
              Alert.alert('Error', 'No se pudo eliminar la versión');
            }
          }
        }
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.versionItem}>
      <View style={styles.versionInfo}>
        <Text style={styles.versionName}>{item.nombre}</Text>
        <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.editButton]}
          onPress={() => navigation.navigate('EditarVersion', { versionId: item.id })}
        >
          <Ionicons name="create-outline" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => eliminarVersion(item.id)}
        >
          <Ionicons name="trash-outline" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestionar Versiones</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('NuevaVersion')}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Nueva Versión</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={versiones}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No hay versiones disponibles</Text>
        }
        refreshing={loading}
        onRefresh={cargarVersiones}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  versionItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  versionInfo: {
    flex: 1,
  },
  versionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
  },
});

export default VersionesList;
````

### 2. Formulario para Nueva Versión

````javascript
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

  const guardarVersion = async () => {
    if (!validarFormulario()) return;

    try {
      setLoading(true);
      
      const nuevaVersion = {
        nombre,
        abreviatura,
        idioma,
        descripcion
      };
      
      await db.addVersion(nuevaVersion);
      
      Alert.alert('Éxito', 'Versión añadida correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al guardar versión:', error);
      Alert.alert('Error', 'No se pudo guardar la versión');
    } finally {
      setLoading(false);
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
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={guardarVersion}
          disabled={loading}
        >
          {loading ? (
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
````

### 3. Formulario para Editar Versión

````javascript
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
});

export default EditarVersion;
````

### 4. Configurar la navegación en el panel de Administración

````javascript
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from './AdminScreen';
import VersionesList from './versiones/VersionesList';
import NuevaVersion from './versiones/NuevaVersion';
import EditarVersion from './versiones/EditarVersion';

const Stack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="AdminHome" 
        component={AdminScreen} 
        options={{ headerTitle: 'Administración' }}
      />
      <Stack.Screen 
        name="VersionesList" 
        component={VersionesList} 
        options={{ headerTitle: 'Versiones Bíblicas' }}
      />
      <Stack.Screen 
        name="NuevaVersion" 
        component={NuevaVersion} 
        options={{ headerTitle: 'Nueva Versión' }}
      />
      <Stack.Screen 
        name="EditarVersion" 
        component={EditarVersion} 
        options={{ headerTitle: 'Editar Versión' }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
````

### 5. Actualizar el componente AdminScreen

````javascript
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
        
        <TouchableOpacity style={styles.adminButton}>
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
````

## Paso 4: Actualizar el App.js para usar la navegación anidada

````javascript
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { initDatabase } from './src/database/database';
import HomeScreen from './src/screens/HomeScreen';
import ReadScreen from './src/screens/ReadScreen';
import AdminNavigator from './src/screens/admin/AdminNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Inicializar la base de datos al cargar la app
    const setupDatabase = async () => {
      try {
        await initDatabase();
        console.log('Base de datos inicializada correctamente');
        setIsLoading(false);
      } catch (err) {
        console.error('Error al inicializar la base de datos:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    setupDatabase();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Inicializando base de datos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.subtitle}>{error}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Lectura') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Admin') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Lectura" component={ReadScreen} />
        <Tab.Screen name="Admin" component={AdminNavigator} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});
````

## Paso 5: Crear los componentes para las otras pantallas

### HomeScreen.js

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { db } from '../database/database';

const HomeScreen = ({ navigation }) => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        const data = await db.getVersiones();
        setVersiones(data);
      } catch (error) {
        console.error('Error al cargar versiones:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarVersiones();
  }, []);

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Biblia Interactiva</Text>
      <Text style={styles.subtitle}>Tu compañero de estudio bíblico</Text>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Versiones disponibles</Text>
        <FlatList
          data={versiones}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.versionItem}>
              <Text style={styles.versionName}>{item.nombre}</Text>
              <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No hay versiones disponibles</Text>
          }
        />
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
  sectionContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  versionItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  versionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
  },
});

export default HomeScreen;
````

### ReadScreen.js

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { db } from '../database/database';

const ReadScreen = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const cargarLibros = async () => {
      try {
        setLoading(true);
        // Por defecto cargamos la versión con ID 1
        const data = await db.getLibrosByVersion(1);
        setLibros(data);
      } catch (error) {
        console.error('Error al cargar libros:', error);
      } finally {
        setLoading(false);
      }
    };
    
    cargarLibros();
  }, []);

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Lectura</Text>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Libros</Text>
        <FlatList
          data={libros}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.libroItem}>
              <Text style={styles.libroName}>{item.nombre}</Text>
              <Text style={styles.libroDetails}>{item.testamento}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No hay libros disponibles</Text>
          }
        />
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
  sectionContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  libroItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  libroName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  libroDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
  },
});

export default ReadScreen;
````

## Paso 6: Ejecutar la aplicación

Una vez que hayas implementado todos estos archivos, ejecuta:

```bash
npx expo start --clear
```

Ahora tendrás un panel de administración funcional donde podrás:
1. Ver una lista de versiones bíblicas
2. Añadir nuevas versiones
3. Editar versiones existentes
4. Eliminar versiones

¿Quieres implementar siguiente las pantallas CRUD para libros o prefieres revisar primero cómo funciona esta parte?

Código similar encontrado con 1 tipo de licencia

RafaelG1986: ndroid Bundling failed 17823ms index.js (670 modules)
Unable to resolve "./src/screens/HomeScreen" from "App.js"

GitHub Copilot: # Solución para el error de bundling

Veo que estás teniendo problemas para resolver las rutas de los archivos en tu proyecto. El error específico es:

```
Unable to resolve "./src/screens/HomeScreen" from "App.js"
```

## Paso 1: Verificar la estructura de carpetas

Vamos a crear los archivos y carpetas necesarios para resolver el problema:

```bash
# Crear la estructura de carpetas
mkdir -p src/screens
mkdir -p src/screens/admin
mkdir -p src/screens/admin/versiones
```

## Paso 2: Crear los archivos que faltan

Primero, crea el archivo HomeScreen.js:

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { db } from '../database/database';

const HomeScreen = ({ navigation }) => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        const data = await db.getVersiones();
        setVersiones(data);
      } catch (error) {
        console.error('Error al cargar versiones:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarVersiones();
  }, []);

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Biblia Interactiva</Text>
      <Text style={styles.subtitle}>Tu compañero de estudio bíblico</Text>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Versiones disponibles</Text>
        <FlatList
          data={versiones}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.versionItem}>
              <Text style={styles.versionName}>{item.nombre}</Text>
              <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No hay versiones disponibles</Text>
          }
        />
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
  sectionContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  versionItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  versionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
  },
});

export default HomeScreen;
````

## Paso 3: Crear el AdminNavigator y AdminScreen

````javascript
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
        
        <TouchableOpacity style={styles.adminButton}>
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
````

````javascript
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from './AdminScreen';

const Stack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="AdminHome" 
        component={AdminScreen} 
        options={{ headerTitle: 'Administración' }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
````

## Paso 4: Instalar las dependencias faltantes

Es posible que también necesites instalar `@react-navigation/stack`:

```bash
npm install @react-navigation/stack
```

## Paso 5: Actualizar App.js para usar los componentes correctamente

````javascript
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { initDatabase } from './src/database/database';
import HomeScreen from './src/screens/HomeScreen';
import ReadScreen from './src/screens/ReadScreen';
import AdminNavigator from './src/screens/admin/AdminNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Inicializar la base de datos al cargar la app
    const setupDatabase = async () => {
      try {
        await initDatabase();
        console.log('Base de datos inicializada correctamente');
        setIsLoading(false);
      } catch (err) {
        console.error('Error al inicializar la base de datos:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    setupDatabase();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Inicializando base de datos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.subtitle}>{error}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Lectura') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Admin') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Lectura" component={ReadScreen} />
        <Tab.Screen name="Admin" component={AdminNavigator} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});
````

## Paso 6: Reiniciar completamente la aplicación

```bash
npx expo start --clear
```

Esto debería resolver el error de bundling. Una vez que esta versión básica funcione correctamente, podemos proceder a implementar las pantallas de gestión de versiones y el resto de la funcionalidad CRUD.

Código similar encontrado con 1 tipo de licencia

RafaelG1986:  ERROR  The action 'NAVIGATE' with payload {"name":"VersionesList"} was not handled by any 
navigator.

Do you have a screen named 'VersionesList'?

If you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.

If you're using conditional rendering, navigation will happen automatically and you shouldn't navigate manually, see.

This is a development-only warning and won't be shown in production.
 ERROR  The action 'NAVIGATE' with payload {"name":"VersionesList"} was not handled by any 
navigator.

Do you have a screen named 'VersionesList'?

If you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.

If you're using conditional rendering, navigation will happen automatically and you shouldn't navigate manually, see.

This is a development-only warning and won't be shown in production.


GitHub Copilot: # Solución al error de navegación "VersionesList"

El error ocurre porque estás intentando navegar a una pantalla llamada `VersionesList` que no está registrada en tu `AdminNavigator.js`. Necesitamos actualizar el navegador para incluir esta pantalla.

## Paso 1: Crear el archivo VersionesList.js

Primero, vamos a crear el archivo VersionesList.js en la carpeta adecuada:

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const VersionesList = ({ navigation }) => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarVersiones = async () => {
    try {
      setLoading(true);
      const data = await db.getVersiones();
      setVersiones(data);
    } catch (error) {
      console.error('Error al cargar versiones:', error);
      Alert.alert('Error', 'No se pudieron cargar las versiones');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarVersiones();
  }, []);

  const eliminarVersion = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar esta versión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteVersion(id);
              cargarVersiones();
              Alert.alert('Éxito', 'Versión eliminada correctamente');
            } catch (error) {
              console.error('Error al eliminar versión:', error);
              Alert.alert('Error', 'No se pudo eliminar la versión');
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestionar Versiones</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('NuevaVersion')}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Nueva</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={versiones}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.versionItem}>
            <View style={styles.versionInfo}>
              <Text style={styles.versionName}>{item.nombre}</Text>
              <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity 
                style={[styles.actionButton, styles.editButton]}
                onPress={() => navigation.navigate('EditarVersion', { versionId: item.id })}
              >
                <Ionicons name="create-outline" size={22} color="white" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => eliminarVersion(item.id)}
              >
                <Ionicons name="trash-outline" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
        refreshing={loading}
        onRefresh={cargarVersiones}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No hay versiones disponibles</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  versionItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  versionInfo: {
    flex: 1,
  },
  versionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
  },
});

export default VersionesList;
````

## Paso 2: Actualizar AdminNavigator.js

Ahora modifiquemos el AdminNavigator para incluir la referencia a la pantalla VersionesList:

````javascript
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from './AdminScreen';
import VersionesList from './versiones/VersionesList';

const Stack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="AdminHome" 
        component={AdminScreen} 
        options={{ headerTitle: 'Administración' }}
      />
      <Stack.Screen 
        name="VersionesList" 
        component={VersionesList} 
        options={{ headerTitle: 'Versiones Bíblicas' }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
````

## Paso 3: Verificar la importación en AdminScreen.js

Asegúrate de que tu AdminScreen.js está navegando correctamente a VersionesList:

````javascript
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
        
        <TouchableOpacity style={styles.adminButton}>
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
````

Con estos cambios, deberías poder navegar correctamente a la pantalla VersionesList desde el menú de administración.

Una vez que esto funcione, puedes agregar las otras pantallas (NuevaVersion y EditarVersion) para completar la funcionalidad CRUD de versiones bíblicas.

RafaelG1986:  ERROR  The action 'NAVIGATE' with payload {"name":"EditarVersion","params":{"versionId":1}} was not handled by any navigator.

Do you have a screen named 'EditarVersion'?

If you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.

If you're using conditional rendering, navigation will happen automatically and you shouldn't navigate manually, see.

This is a development-only warning and won't be shown in production.

GitHub Copilot: # Solución al error de navegación a "EditarVersion"

El problema es que estás intentando navegar a una pantalla llamada `EditarVersion` que no está registrada en tu navegador. Necesitamos:

1. Crear el archivo `EditarVersion.js` 
2. Actualizar `AdminNavigator.js` para incluir esta pantalla
3. También necesitaremos crear la pantalla `NuevaVersion` que se está utilizando en la lista

## Paso 1: Crear la pantalla EditarVersion.js

````javascript
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
});

export default EditarVersion;
````

## Paso 2: Crear la pantalla NuevaVersion.js

````javascript
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

  const guardarVersion = async () => {
    if (!validarFormulario()) return;

    try {
      setLoading(true);
      
      const nuevaVersion = {
        nombre,
        abreviatura,
        idioma,
        descripcion
      };
      
      await db.addVersion(nuevaVersion);
      
      Alert.alert('Éxito', 'Versión añadida correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al guardar versión:', error);
      Alert.alert('Error', 'No se pudo guardar la versión');
    } finally {
      setLoading(false);
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
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={guardarVersion}
          disabled={loading}
        >
          {loading ? (
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
````

## Paso 3: Actualizar AdminNavigator.js para incluir ambas pantallas

````javascript
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from './AdminScreen';
import VersionesList from './versiones/VersionesList';
import NuevaVersion from './versiones/NuevaVersion';
import EditarVersion from './versiones/EditarVersion';

const Stack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="AdminHome" 
        component={AdminScreen} 
        options={{ headerTitle: 'Administración' }}
      />
      <Stack.Screen 
        name="VersionesList" 
        component={VersionesList} 
        options={{ headerTitle: 'Versiones Bíblicas' }}
      />
      <Stack.Screen 
        name="NuevaVersion" 
        component={NuevaVersion} 
        options={{ headerTitle: 'Nueva Versión' }}
      />
      <Stack.Screen 
        name="EditarVersion" 
        component={EditarVersion} 
        options={{ headerTitle: 'Editar Versión' }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
````

Después de implementar estos archivos, tu sistema de navegación debería funcionar correctamente y podrás:

1. Ver la lista de versiones bíblicas
2. Agregar nuevas versiones
3. Editar versiones existentes 
4. Eliminar versiones

¿Necesitas alguna otra pantalla o funcionalidad específica para este módulo de administración?

RafaelG1986: Siguiente paso

GitHub Copilot: # Siguiente paso: Implementar la gestión de libros bíblicos

Ahora que has implementado con éxito la gestión de versiones bíblicas, el siguiente paso lógico es crear el CRUD para los libros de la Biblia.

## Paso 1: Crear la estructura de carpetas

```bash
mkdir -p src/screens/admin/libros
```

## Paso 2: Crear las pantallas para gestión de libros

### 1. Primero, creamos la lista de libros:

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const LibrosList = ({ navigation }) => {
  const [libros, setLibros] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [loading, setLoading] = useState(true);

  const cargarVersiones = async () => {
    try {
      const data = await db.getVersiones();
      setVersiones(data);
      // Seleccionar la primera versión por defecto
      if (data.length > 0 && !selectedVersion) {
        setSelectedVersion(data[0].id);
        cargarLibros(data[0].id);
      } else if (data.length === 0) {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar versiones:', error);
      setLoading(false);
    }
  };

  const cargarLibros = async (versionId) => {
    try {
      setLoading(true);
      const data = await db.getLibrosByVersion(versionId || selectedVersion);
      setLibros(data);
    } catch (error) {
      console.error('Error al cargar libros:', error);
      Alert.alert('Error', 'No se pudieron cargar los libros');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarVersiones();
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedVersion) {
        cargarLibros(selectedVersion);
      } else {
        cargarVersiones();
      }
    });
    return unsubscribe;
  }, [navigation]);

  const eliminarLibro = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar este libro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteLibro(id);
              cargarLibros();
              Alert.alert('Éxito', 'Libro eliminado correctamente');
            } catch (error) {
              console.error('Error al eliminar libro:', error);
              Alert.alert('Error', 'No se pudo eliminar el libro');
            }
          }
        }
      ]
    );
  };

  const cambiarVersion = (versionId) => {
    setSelectedVersion(versionId);
    cargarLibros(versionId);
  };

  if (loading && !libros.length) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestionar Libros</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('NuevoLibro', { versionId: selectedVersion })}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Nuevo</Text>
        </TouchableOpacity>
      </View>

      {/* Selector de versión */}
      {versiones.length > 0 ? (
        <View style={styles.versionSelector}>
          <Text style={styles.selectorLabel}>Versión:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {versiones.map(version => (
              <TouchableOpacity
                key={version.id}
                style={[
                  styles.versionButton,
                  selectedVersion === version.id && styles.selectedVersion
                ]}
                onPress={() => cambiarVersion(version.id)}
              >
                <Text 
                  style={[
                    styles.versionButtonText,
                    selectedVersion === version.id && styles.selectedVersionText
                  ]}
                >
                  {version.abreviatura}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.noVersions}>
          <Text style={styles.noVersionsText}>
            No hay versiones disponibles. Por favor, crea una versión primero.
          </Text>
          <TouchableOpacity
            style={styles.createVersionButton}
            onPress={() => navigation.navigate('VersionesList')}
          >
            <Text style={styles.createVersionButtonText}>Ir a Gestionar Versiones</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Lista de libros */}
      {selectedVersion && (
        <FlatList
          data={libros}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.libroItem}>
              <View style={styles.libroInfo}>
                <Text style={styles.libroName}>{item.nombre}</Text>
                <Text style={styles.libroDetails}>
                  {item.abreviatura} - {item.testamento}
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editButton]}
                  onPress={() => navigation.navigate('EditarLibro', { libroId: item.id })}
                >
                  <Ionicons name="create-outline" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => eliminarLibro(item.id)}
                >
                  <Ionicons name="trash-outline" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.list}
          refreshing={loading}
          onRefresh={() => cargarLibros()}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>
              No hay libros disponibles para esta versión
            </Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  versionSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  versionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedVersion: {
    backgroundColor: '#4a90e2',
  },
  versionButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  selectedVersionText: {
    color: 'white',
  },
  noVersions: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  noVersionsText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
    fontSize: 16,
  },
  createVersionButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  createVersionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  libroItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  libroInfo: {
    flex: 1,
  },
  libroName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  libroDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
  },
});

export default LibrosList;
````

### 2. Formulario para Nuevo Libro:

````javascript
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
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const NuevoLibro = ({ navigation, route }) => {
  const { versionId } = route.params || {};
  
  const [nombre, setNombre] = useState('');
  const [abreviatura, setAbreviatura] = useState('');
  const [testamento, setTestamento] = useState('Antiguo');
  const [orden, setOrden] = useState('');
  const [selectedVersionId, setSelectedVersionId] = useState(versionId || null);
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingVersiones, setLoadingVersiones] = useState(true);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        const data = await db.getVersiones();
        setVersiones(data);
        if (data.length > 0 && !selectedVersionId) {
          setSelectedVersionId(data[0].id);
        }
      } catch (error) {
        console.error('Error al cargar versiones:', error);
        Alert.alert('Error', 'No se pudieron cargar las versiones');
      } finally {
        setLoadingVersiones(false);
      }
    };

    cargarVersiones();
  }, []);

  const validarFormulario = () => {
    if (!nombre.trim()) {
      Alert.alert('Error', 'El nombre es obligatorio');
      return false;
    }
    if (!abreviatura.trim()) {
      Alert.alert('Error', 'La abreviatura es obligatoria');
      return false;
    }
    if (!testamento.trim()) {
      Alert.alert('Error', 'El testamento es obligatorio');
      return false;
    }
    if (!orden.trim() || isNaN(Number(orden))) {
      Alert.alert('Error', 'El orden debe ser un número válido');
      return false;
    }
    if (!selectedVersionId) {
      Alert.alert('Error', 'Debe seleccionar una versión');
      return false;
    }
    return true;
  };

  const guardarLibro = async () => {
    if (!validarFormulario()) return;

    try {
      setLoading(true);
      
      const nuevoLibro = {
        version_id: selectedVersionId,
        nombre,
        abreviatura,
        testamento,
        orden: parseInt(orden)
      };
      
      await db.addLibro(nuevoLibro);
      
      Alert.alert('Éxito', 'Libro añadido correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al guardar libro:', error);
      Alert.alert('Error', 'No se pudo guardar el libro');
    } finally {
      setLoading(false);
    }
  };

  if (loadingVersiones) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versiones...</Text>
      </View>
    );
  }

  if (versiones.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No hay versiones disponibles</Text>
        <Text style={styles.subtitle}>
          Necesitas crear al menos una versión bíblica antes de añadir libros.
        </Text>
        <TouchableOpacity
          style={styles.createVersionButton}
          onPress={() => navigation.navigate('VersionesList')}
        >
          <Text style={styles.createVersionButtonText}>Ir a Gestionar Versiones</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevo Libro Bíblico</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Versión *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedVersionId}
            onValueChange={(itemValue) => setSelectedVersionId(itemValue)}
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
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre *</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Ej: Génesis"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Abreviatura *</Text>
        <TextInput
          style={styles.input}
          value={abreviatura}
          onChangeText={setAbreviatura}
          placeholder="Ej: Gen"
          maxLength={10}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Testamento *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={testamento}
            onValueChange={(itemValue) => setTestamento(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Antiguo Testamento" value="Antiguo" />
            <Picker.Item label="Nuevo Testamento" value="Nuevo" />
          </Picker>
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Orden *</Text>
        <TextInput
          style={styles.input}
          value={orden}
          onChangeText={setOrden}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={guardarLibro}
          disabled={loading}
        >
          {loading ? (
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  createVersionButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  createVersionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
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
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
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

export default NuevoLibro;
````

### 3. Formulario para Editar Libro:

````javascript
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
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const EditarLibro = ({ navigation, route }) => {
  const { libroId } = route.params;
  
  const [nombre, setNombre] = useState('');
  const [abreviatura, setAbreviatura] = useState('');
  const [testamento, setTestamento] = useState('');
  const [orden, setOrden] = useState('');
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar versiones disponibles
        const versionesData = await db.getVersiones();
        setVersiones(versionesData);
        
        // Cargar datos del libro
        const libro = await db.getLibroById(libroId);
        if (libro) {
          setNombre(libro.nombre || '');
          setAbreviatura(libro.abreviatura || '');
          setTestamento(libro.testamento || '');
          setOrden(libro.orden ? libro.orden.toString() : '');
          setSelectedVersionId(libro.version_id || null);
        } else {
          Alert.alert('Error', 'No se encontró el libro');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [libroId, navigation]);

  const validarFormulario = () => {
    if (!nombre.trim()) {
      Alert.alert('Error', 'El nombre es obligatorio');
      return false;
    }
    if (!abreviatura.trim()) {
      Alert.alert('Error', 'La abreviatura es obligatoria');
      return false;
    }
    if (!testamento.trim()) {
      Alert.alert('Error', 'El testamento es obligatorio');
      return false;
    }
    if (!orden.trim() || isNaN(Number(orden))) {
      Alert.alert('Error', 'El orden debe ser un número válido');
      return false;
    }
    if (!selectedVersionId) {
      Alert.alert('Error', 'Debe seleccionar una versión');
      return false;
    }
    return true;
  };

  const actualizarLibro = async () => {
    if (!validarFormulario()) return;

    try {
      setSaving(true);
      
      const libroActualizado = {
        version_id: selectedVersionId,
        nombre,
        abreviatura,
        testamento,
        orden: parseInt(orden)
      };
      
      await db.updateLibro(libroId, libroActualizado);
      
      Alert.alert('Éxito', 'Libro actualizado correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al actualizar libro:', error);
      Alert.alert('Error', 'No se pudo actualizar el libro');
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
      <Text style={styles.title}>Editar Libro Bíblico</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Versión *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedVersionId}
            onValueChange={(itemValue) => setSelectedVersionId(itemValue)}
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
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre *</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Ej: Génesis"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Abreviatura *</Text>
        <TextInput
          style={styles.input}
          value={abreviatura}
          onChangeText={setAbreviatura}
          placeholder="Ej: Gen"
          maxLength={10}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Testamento *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={testamento}
            onValueChange={(itemValue) => setTestamento(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Antiguo Testamento" value="Antiguo" />
            <Picker.Item label="Nuevo Testamento" value="Nuevo" />
          </Picker>
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Orden *</Text>
        <TextInput
          style={styles.input}
          value={orden}
          onChangeText={setOrden}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
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
          onPress={actualizarLibro}
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
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
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
});

export default EditarLibro;
````

## Paso 3: Actualizar AdminScreen para incluir la navegación a libros

````javascript
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

// Estilos que ya tienes...
export default AdminScreen;
````

## Paso 4: Actualizar AdminNavigator para incluir las rutas de libros

````javascript
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from './AdminScreen';
import VersionesList from './versiones/VersionesList';
import NuevaVersion from './versiones/NuevaVersion';
import EditarVersion from './versiones/EditarVersion';
import LibrosList from './libros/LibrosList';
import NuevoLibro from './libros/NuevoLibro';
import EditarLibro from './libros/EditarLibro';

const Stack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="AdminHome" 
        component={AdminScreen} 
        options={{ headerTitle: 'Administración' }}
      />
      {/* Rutas para Versiones */}
      <Stack.Screen 
        name="VersionesList" 
        component={VersionesList} 
        options={{ headerTitle: 'Versiones Bíblicas' }}
      />
      <Stack.Screen 
        name="NuevaVersion" 
        component={NuevaVersion} 
        options={{ headerTitle: 'Nueva Versión' }}
      />
      <Stack.Screen 
        name="EditarVersion" 
        component={EditarVersion} 
        options={{ headerTitle: 'Editar Versión' }}
      />
      
      {/* Rutas para Libros */}
      <Stack.Screen 
        name="LibrosList" 
        component={LibrosList} 
        options={{ headerTitle: 'Libros Bíblicos' }}
      />
      <Stack.Screen 
        name="NuevoLibro" 
        component={NuevoLibro} 
        options={{ headerTitle: 'Nuevo Libro' }}
      />
      <Stack.Screen 
        name="EditarLibro" 
        component={EditarLibro} 
        options={{ headerTitle: 'Editar Libro' }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
````

## Paso 5: Instalar @react-native-picker/picker

Para el componente Picker, necesitarás instalarlo:

```bash
npm install @react-native-picker/picker
```

## Paso 6: Implementar funciones adicionales en database.js

Asegúrate de que tu archivo database.js tenga las funciones necesarias para gestionar los libros:

````javascript
// Añade estas funciones a tu módulo db
// ...código existente...

// Implementar funciones para manejar libros
const db = {
  // Funciones existentes...
  
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

// ...resto del código...
````

Una vez implementados estos pasos, tendrás un CRUD completo para gestionar los libros de la Biblia, vinculados a sus respectivas versiones.

## Próximos pasos

Después de implementar la gestión de libros, los siguientes pasos serán:

1. Implementar la gestión de capítulos (con referencias a libros)
2. Implementar la gestión de versículos (con referencias a capítulos)
3. Mejorar la interfaz de lectura para navegar por la jerarquía de contenido
4. Implementar funcionalidades adicionales como marcadores, notas y búsqueda

¿Por cuál de estos pasos te gustaría continuar?

RafaelG1986:  ERROR  Warning: ReferenceError: Property 'ScrollView' doesn't exist

This error is located at:

Call Stack
  RNSScreenContainer (<anonymous>)
  RNGestureHandlerRootView (<anonymous>)
  AdminNavigator (<anonymous>)
  RNSScreenContainer (<anonymous>)
  RNCSafeAreaProvider (<anonymous>)

GitHub Copilot: # Corrección del error ScrollView en LibrosList.js

El error ocurre porque estás intentando usar `ScrollView` en tu componente `LibrosList.js` pero no lo has importado correctamente.

## Paso 1: Actualiza las importaciones en LibrosList.js

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';
````

## Paso 2: Corregir el mismo problema en otros archivos

Asegúrate de que todos los archivos que usan `ScrollView` lo importen correctamente:

````javascript
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,  // Verifica esta importación
  Alert,
  ActivityIndicator
} from 'react-native';
````

````javascript
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,  // Verifica esta importación
  Alert,
  ActivityIndicator
} from 'react-native';
````

## Paso 3: Verificar el resto de componentes

Este tipo de error ocurre cuando intentas usar un componente que no has importado. Revisa todos tus archivos que utilizan componentes de React Native para asegurarte de que importas correctamente todos los componentes que estás usando.

## Consejo adicional para evitar estos errores

Para evitar este tipo de problemas en el futuro:

1. Utiliza herramientas de lint como ESLint que destacan variables o componentes no definidos
2. Configura tu editor de código para mostrar advertencias sobre variables no definidas
3. Cuando tengas ejemplos de código, asegúrate de revisar las importaciones antes de implementarlos

Una vez realizados estos cambios, ejecuta la aplicación nuevamente y el error debería estar resuelto.

RafaelG1986: Listo, actualicemos repositorio.

GitHub Copilot: # Actualización del repositorio con los cambios CRUD de Versiones y Libros

Vamos a actualizar el repositorio con todos los cambios implementados para la gestión de versiones bíblicas y libros:

## 1. Revisar los cambios pendientes

```bash
git status
```

Este comando te mostrará todos los archivos nuevos y modificados que hemos creado.

## 2. Añadir todos los archivos al área de preparación

```bash
git add .
```

Esto añadirá todos los archivos nuevos y modificados al área de staging.

## 3. Crear un commit con un mensaje descriptivo

```bash
git commit -m "Implementación de CRUD completo para versiones bíblicas y libros"
```

Puedes personalizar el mensaje del commit para describir mejor los cambios realizados.

## 4. Subir los cambios al repositorio remoto (si existe)

```bash
git push origin main
```

Si estás usando una rama diferente, reemplaza "main" por el nombre de tu rama.

## 5. Verificar el estado actualizado

```bash
git log --oneline -5
```

Este comando te mostrará los últimos 5 commits para verificar que tus cambios se hayan registrado correctamente.

## Resumen de los cambios implementados

Los cambios que hemos implementado incluyen:

- CRUD completo para gestión de versiones bíblicas
- CRUD completo para gestión de libros bíblicos
- Navegación mejorada entre pantallas
- Integración de AsyncStorage para persistencia de datos
- Interfaz de usuario mejorada con componentes estilizados

El siguiente paso sería implementar la gestión de capítulos y versículos para completar la funcionalidad principal de la aplicación de Biblia Interactiva.

RafaelG1986: ahora el siguiente paso, los versiculos.

GitHub Copilot: # Implementación de Capítulos y Versículos en la Biblia Interactiva

Para continuar con el desarrollo de la aplicación, vamos a implementar la gestión de capítulos y versículos. Este es un paso importante para completar la estructura de la Biblia.

## Paso 1: Actualizar el modelo de datos en database.js

Primero, ampliemos el archivo de base de datos para incluir capítulos y versículos:

````javascript
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
  // Versiones (código existente)
  // ...
  
  // Libros (código existente)
  // ...
  
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
    return versiculos.filter(v => v.capitulo_id === capituloId).sort((a, b) => a.numero - b.numero);
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
  }
};

export { db, initDatabase };
````

## Paso 2: Crear la estructura de carpetas para capítulos y versículos

```bash
mkdir -p src/screens/admin/capitulos
mkdir -p src/screens/admin/versiculos
```

## Paso 3: Implementar pantallas para gestión de Capítulos

### 1. Lista de capítulos

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const CapitulosList = ({ navigation, route }) => {
  const [libros, setLibros] = useState([]);
  const [capitulos, setCapitulos] = useState([]);
  const [selectedLibro, setSelectedLibro] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const cargarLibros = async () => {
    try {
      // Por defecto cargamos la versión con ID 1
      const data = await db.getLibrosByVersion(1);
      setLibros(data);
      
      if (data.length > 0) {
        const libroId = route.params?.libroId || data[0].id;
        setSelectedLibro(libroId);
        cargarCapitulos(libroId);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      setLoading(false);
    }
  };
  
  const cargarCapitulos = async (libroId) => {
    try {
      setLoading(true);
      const data = await db.getCapitulosByLibro(libroId || selectedLibro);
      setCapitulos(data);
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      Alert.alert('Error', 'No se pudieron cargar los capítulos');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    cargarLibros();
    
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedLibro) {
        cargarCapitulos(selectedLibro);
      } else {
        cargarLibros();
      }
    });
    
    return unsubscribe;
  }, [navigation]);
  
  const eliminarCapitulo = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar este capítulo? Se eliminarán todos los versículos asociados.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteCapitulo(id);
              cargarCapitulos(selectedLibro);
              Alert.alert('Éxito', 'Capítulo eliminado correctamente');
            } catch (error) {
              console.error('Error al eliminar capítulo:', error);
              Alert.alert('Error', 'No se pudo eliminar el capítulo');
            }
          }
        }
      ]
    );
  };
  
  const cambiarLibro = (libroId) => {
    setSelectedLibro(libroId);
    cargarCapitulos(libroId);
  };
  
  if (loading && !capitulos.length) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestionar Capítulos</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('NuevoCapitulo', { libroId: selectedLibro })}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Nuevo</Text>
        </TouchableOpacity>
      </View>
      
      {/* Selector de libro */}
      {libros.length > 0 ? (
        <View style={styles.libroSelector}>
          <Text style={styles.selectorLabel}>Libro:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {libros.map(libro => (
              <TouchableOpacity
                key={libro.id}
                style={[
                  styles.libroButton,
                  selectedLibro === libro.id && styles.selectedLibro
                ]}
                onPress={() => cambiarLibro(libro.id)}
              >
                <Text 
                  style={[
                    styles.libroButtonText,
                    selectedLibro === libro.id && styles.selectedLibroText
                  ]}
                >
                  {libro.abreviatura}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.noLibros}>
          <Text style={styles.noLibrosText}>
            No hay libros disponibles. Por favor, crea un libro primero.
          </Text>
          <TouchableOpacity
            style={styles.createLibroButton}
            onPress={() => navigation.navigate('LibrosList')}
          >
            <Text style={styles.createLibroButtonText}>Ir a Gestionar Libros</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {/* Lista de capítulos */}
      {selectedLibro && (
        <FlatList
          data={capitulos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.capituloItem}>
              <View style={styles.capituloInfo}>
                <Text style={styles.capituloName}>Capítulo {item.numero}</Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.viewButton]}
                  onPress={() => navigation.navigate('VersiculosList', { capituloId: item.id })}
                >
                  <Ionicons name="book-outline" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editButton]}
                  onPress={() => navigation.navigate('EditarCapitulo', { capituloId: item.id })}
                >
                  <Ionicons name="create-outline" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => eliminarCapitulo(item.id)}
                >
                  <Ionicons name="trash-outline" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.list}
          refreshing={loading}
          onRefresh={() => cargarCapitulos(selectedLibro)}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>
              No hay capítulos disponibles para este libro
            </Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  libroSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  libroButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedLibro: {
    backgroundColor: '#4a90e2',
  },
  libroButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  selectedLibroText: {
    color: 'white',
  },
  noLibros: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  noLibrosText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
    fontSize: 16,
  },
  createLibroButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  createLibroButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  capituloItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  capituloInfo: {
    flex: 1,
  },
  capituloName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  viewButton: {
    backgroundColor: '#5cb85c',
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
  },
});

export default CapitulosList;
````

### 2. Formulario para Nuevo Capítulo:

````javascript
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
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const NuevoCapitulo = ({ navigation, route }) => {
  const { libroId } = route.params || {};
  
  const [numero, setNumero] = useState('');
  const [selectedLibroId, setSelectedLibroId] = useState(libroId || null);
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingLibros, setLoadingLibros] = useState(true);
  
  useEffect(() => {
    const cargarLibros = async () => {
      try {
        // Cargar libros de la versión 1 por defecto
        const data = await db.getLibrosByVersion(1);
        setLibros(data);
        if (data.length > 0 && !selectedLibroId) {
          setSelectedLibroId(data[0].id);
        }
      } catch (error) {
        console.error('Error al cargar libros:', error);
        Alert.alert('Error', 'No se pudieron cargar los libros');
      } finally {
        setLoadingLibros(false);
      }
    };

    cargarLibros();
  }, []);
  
  // Función para verificar si ya existe un capítulo con ese número en el libro
  const existeCapitulo = async (libroId, numCapitulo) => {
    const capitulos = await db.getCapitulosByLibro(libroId);
    return capitulos.some(cap => cap.numero === numCapitulo);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(Number(numero)) || Number(numero) <= 0) {
      Alert.alert('Error', 'El número de capítulo debe ser un número positivo');
      return false;
    }
    if (!selectedLibroId) {
      Alert.alert('Error', 'Debe seleccionar un libro');
      return false;
    }
    return true;
  };

  const guardarCapitulo = async () => {
    if (!validarFormulario()) return;

    const numCapitulo = parseInt(numero);
    
    try {
      // Verificar si ya existe un capítulo con ese número
      const existe = await existeCapitulo(selectedLibroId, numCapitulo);
      if (existe) {
        Alert.alert('Error', `Ya existe un capítulo ${numCapitulo} en este libro`);
        return;
      }
      
      setLoading(true);
      
      const nuevoCapitulo = {
        libro_id: selectedLibroId,
        numero: numCapitulo
      };
      
      await db.addCapitulo(nuevoCapitulo);
      
      Alert.alert('Éxito', 'Capítulo añadido correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al guardar capítulo:', error);
      Alert.alert('Error', 'No se pudo guardar el capítulo');
    } finally {
      setLoading(false);
    }
  };

  if (loadingLibros) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando libros...</Text>
      </View>
    );
  }

  if (libros.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No hay libros disponibles</Text>
        <Text style={styles.subtitle}>
          Necesitas crear al menos un libro antes de añadir capítulos.
        </Text>
        <TouchableOpacity
          style={styles.createLibroButton}
          onPress={() => navigation.navigate('LibrosList')}
        >
          <Text style={styles.createLibroButtonText}>Ir a Gestionar Libros</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevo Capítulo</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Libro *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedLibroId}
            onValueChange={(itemValue) => setSelectedLibroId(itemValue)}
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
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de capítulo *</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={guardarCapitulo}
          disabled={loading}
        >
          {loading ? (
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  createLibroButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  createLibroButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
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
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
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

export default NuevoCapitulo;
````

### 3. Formulario para Editar Capítulo:

````javascript
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
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const EditarCapitulo = ({ navigation, route }) => {
  const { capituloId } = route.params;
  
  const [numero, setNumero] = useState('');
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [originalNumero, setOriginalNumero] = useState(null);
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar libros
        const librosData = await db.getLibrosByVersion(1); // Versión 1 por defecto
        setLibros(librosData);
        
        // Cargar datos del capítulo
        const capitulo = await db.getCapituloById(capituloId);
        if (capitulo) {
          setNumero(capitulo.numero.toString());
          setOriginalNumero(capitulo.numero);
          setSelectedLibroId(capitulo.libro_id);
        } else {
          Alert.alert('Error', 'No se encontró el capítulo');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [capituloId, navigation]);
  
  // Función para verificar si ya existe un capítulo con ese número en el libro
  const existeCapitulo = async (libroId, numCapitulo) => {
    // Si el número no ha cambiado, no necesitamos verificar
    if (numCapitulo === originalNumero) return false;
    
    const capitulos = await db.getCapitulosByLibro(libroId);
    return capitulos.some(cap => cap.numero === numCapitulo);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(Number(numero)) || Number(numero) <= 0) {
      Alert.alert('Error', 'El número de capítulo debe ser un número positivo');
      return false;
    }
    if (!selectedLibroId) {
      Alert.alert('Error', 'Debe seleccionar un libro');
      return false;
    }
    return true;
  };

  const actualizarCapitulo = async () => {
    if (!validarFormulario()) return;

    const numCapitulo = parseInt(numero);
    
    try {
      // Verificar si ya existe un capítulo con ese número
      const existe = await existeCapitulo(selectedLibroId, numCapitulo);
      if (existe) {
        Alert.alert('Error', `Ya existe un capítulo ${numCapitulo} en este libro`);
        return;
      }
      
      setSaving(true);
      
      const capituloActualizado = {
        libro_id: selectedLibroId,
        numero: numCapitulo
      };
      
      await db.updateCapitulo(capituloId, capituloActualizado);
      
      Alert.alert('Éxito', 'Capítulo actualizado correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al actualizar capítulo:', error);
      Alert.alert('Error', 'No se pudo actualizar el capítulo');
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
      <Text style={styles.title}>Editar Capítulo</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Libro *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedLibroId}
            onValueChange={(itemValue) => setSelectedLibroId(itemValue)}
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
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de capítulo *</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
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
          onPress={actualizarCapitulo}
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
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
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
});

export default EditarCapitulo;
````

## Paso 4: Implementar pantallas para gestión de Versículos

### 1. Lista de versículos

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const VersiculosList = ({ navigation, route }) => {
  const { capituloId } = route.params;
  const [versiculos, setVersiculos] = useState([]);
  const [capituloInfo, setCapituloInfo] = useState(null);
  const [libroInfo, setLibroInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const cargarDatos = async () => {
    try {
      setLoading(true);
      
      // Cargar información del capítulo
      const capitulo = await db.getCapituloById(capituloId);
      setCapituloInfo(capitulo);
      
      if (capitulo) {
        // Cargar información del libro
        const libro = await db.getLibroById(capitulo.libro_id);
        setLibroInfo(libro);
        
        // Cargar versículos
        const data = await db.getVersiculosByCapitulo(capituloId);
        setVersiculos(data);
      } else {
        Alert.alert('Error', 'No se encontró el capítulo');
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
      Alert.alert('Error', 'No se pudieron cargar los datos');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    cargarDatos();
    
    const unsubscribe = navigation.addListener('focus', cargarDatos);
    return unsubscribe;
  }, [capituloId, navigation]);
  
  const eliminarVersiculo = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar este versículo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteVersiculo(id);
              cargarDatos();
              Alert.alert('Éxito', 'Versículo eliminado correctamente');
            } catch (error) {
              console.error('Error al eliminar versículo:', error);
              Alert.alert('Error', 'No se pudo eliminar el versículo');
            }
          }
        }
      ]
    );
  };
  
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versículos...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
            {libroInfo ? libroInfo.nombre : 'Libro'} {capituloInfo ? capituloInfo.numero : ''}
          </Text>
          <Text style={styles.subtitle}>Versículos</Text>
        </View>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('NuevoVersiculo', { capituloId })}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Nuevo</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={versiculos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.versiculoItem}>
            <Text style={styles.versiculoNumero}>{item.numero}</Text>
            <View style={styles.versiculoContent}>
              <Text style={styles.versiculoTexto}>{item.texto}</Text>
              <View style={styles.actions}>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editButton]}
                  onPress={() => navigation.navigate('EditarVersiculo', { versiculoId: item.id })}
                >
                  <Ionicons name="create-outline" size={18} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => eliminarVersiculo(item.id)}
                >
                  <Ionicons name="trash-outline" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
        refreshing={loading}
        onRefresh={cargarDatos}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>
            No hay versículos para este capítulo
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  versiculoItem: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  versiculoNumero: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginRight: 10,
    minWidth: 24,
    textAlign: 'center',
  },
  versiculoContent: {
    flex: 1,
  },
  versiculoTexto: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
    fontSize: 16,
  },
});

export default VersiculosList;
````

### 2. Formulario para Nuevo Versículo:

````javascript
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

const NuevoVersiculo = ({ navigation, route }) => {
  const { capituloId } = route.params;
  
  const [numero, setNumero] = useState('');
  const [texto, setTexto] = useState('');
  const [capituloInfo, setCapituloInfo] = useState(null);
  const [libroInfo, setLibroInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(true);
  
  useEffect(() => {
    const cargarInfo = async () => {
      try {
        // Cargar información del capítulo
        const capitulo = await db.getCapituloById(capituloId);
        setCapituloInfo(capitulo);
        
        if (capitulo) {
          // Cargar información del libro
          const libro = await db.getLibroById(capitulo.libro_id);
          setLibroInfo(libro);
          
          // Sugerir el siguiente número de versículo
          const versiculos = await db.getVersiculosByCapitulo(capituloId);
          if (versiculos.length > 0) {
            const maxNumero = Math.max(...versiculos.map(v => v.numero));
            setNumero((maxNumero + 1).toString());
          } else {
            setNumero('1');
          }
        } else {
          Alert.alert('Error', 'No se encontró el capítulo');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error al cargar información:', error);
        Alert.alert('Error', 'No se pudo cargar la información del capítulo');
        navigation.goBack();
      } finally {
        setLoadingInfo(false);
      }
    };

    cargarInfo();
  }, [capituloId, navigation]);
  
  // Función para verificar si ya existe un versículo con ese número en el capítulo
  const existeVersiculo = async (capituloId, numVersiculo) => {
    const versiculos = await db.getVersiculosByCapitulo(capituloId);
    return versiculos.some(v => v.numero === numVersiculo);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(Number(numero)) || Number(numero) <= 0) {
      Alert.alert('Error', 'El número de versículo debe ser un número positivo');
      return false;
    }
    if (!texto.trim()) {
      Alert.alert('Error', 'El texto del versículo no puede estar vacío');
      return false;
    }
    return true;
  };

  const guardarVersiculo = async () => {
    if (!validarFormulario()) return;

    const numVersiculo = parseInt(numero);
    
    try {
      // Verificar si ya existe un versículo con ese número
      const existe = await existeVersiculo(capituloId, numVersiculo);
      if (existe) {
        Alert.alert('Error', `Ya existe un versículo ${numVersiculo} en este capítulo`);
        return;
      }
      
      setLoading(true);
      
      const nuevoVersiculo = {
        capitulo_id: capituloId,
        numero: numVersiculo,
        texto
      };
      
      await db.addVersiculo(nuevoVersiculo);
      
      Alert.alert('Éxito', 'Versículo añadido correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al guardar versículo:', error);
      Alert.alert('Error', 'No se pudo guardar el versículo');
    } finally {
      setLoading(false);
    }
  };

  if (loadingInfo) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando información...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevo Versículo</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {libroInfo ? libroInfo.nombre : ''} {capituloInfo ? capituloInfo.numero : ''}
        </Text>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de versículo *</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Texto del versículo *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={texto}
          onChangeText={setTexto}
          placeholder="Escribe el texto del versículo aquí..."
          multiline={true}
          numberOfLines={5}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={guardarVersiculo}
          disabled={loading}
        >
          {loading ? (
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
  infoBox: {
    backgroundColor: '#e8f4fd',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c2e0ff',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    color: '#4a90e2',
    fontWeight: '500',
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

export default NuevoVersiculo;
````

### 3. Formulario para Editar Versículo:

````javascript
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

const EditarVersiculo = ({ navigation, route }) => {
  const { versiculoId } = route.params;
  
  const [numero, setNumero] = useState('');
  const [texto, setTexto] = useState('');
  const [versiculo, setVersiculo] = useState(null);
  const [capituloInfo, setCapituloInfo] = useState(null);
  const [libroInfo, setLibroInfo] = useState(null);
  const [originalNumero, setOriginalNumero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar datos del versículo
        const versiculoData = await db.getVersiculoById(versiculoId);
        if (!versiculoData) {
          Alert.alert('Error', 'No se encontró el versículo');
          navigation.goBack();
          return;
        }
        
        setVersiculo(versiculoData);
        setNumero(versiculoData.numero.toString());
        setTexto(versiculoData.texto || '');
        setOriginalNumero(versiculoData.numero);
        
        // Cargar información del capítulo
        const capitulo = await db.getCapituloById(versiculoData.capitulo_id);
        setCapituloInfo(capitulo);
        
        if (capitulo) {
          // Cargar información del libro
          const libro = await db.getLibroById(capitulo.libro_id);
          setLibroInfo(libro);
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [versiculoId, navigation]);
  
  // Función para verificar si ya existe un versículo con ese número en el capítulo
  const existeVersiculo = async (capituloId, numVersiculo) => {
    // Si el número no ha cambiado, no necesitamos verificar
    if (numVersiculo === originalNumero) return false;
    
    const versiculos = await db.getVersiculosByCapitulo(capituloId);
    return versiculos.some(v => v.numero === numVersiculo);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(Number(numero)) || Number(numero) <= 0) {
      Alert.alert('Error', 'El número de versículo debe ser un número positivo');
      return false;
    }
    if (!texto.trim()) {
      Alert.alert('Error', 'El texto del versículo no puede estar vacío');
      return false;
    }
    return true;
  };

  const actualizarVersiculo = async () => {
    if (!validarFormulario()) return;

    const numVersiculo = parseInt(numero);
    
    try {
      // Verificar si ya existe un versículo con ese número
      const existe = await existeVersiculo(versiculo.capitulo_id, numVersiculo);
      if (existe) {
        Alert.alert('Error', `Ya existe un versículo ${numVersiculo} en este capítulo`);
        return;
      }
      
      setSaving(true);
      
      const versiculoActualizado = {
        ...versiculo,
        numero: numVersiculo,
        texto
      };
      
      await db.updateVersiculo(versiculoId, versiculoActualizado);
      
      Alert.alert('Éxito', 'Versículo actualizado correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al actualizar versículo:', error);
      Alert.alert('Error', 'No se pudo actualizar el versículo');
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
      <Text style={styles.title}>Editar Versículo</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {libroInfo ? libroInfo.nombre : ''} {capituloInfo ? capituloInfo.numero : ''}
        </Text>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de versículo *</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Texto del versículo *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={texto}
          onChangeText={setTexto}
          placeholder="Escribe el texto del versículo aquí..."
          multiline={true}
          numberOfLines={5}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancel// filepath: c:\AppCel\MiPrimeraApp\src\screens\admin\versiculos\EditarVersiculo.js
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

const EditarVersiculo = ({ navigation, route }) => {
  const { versiculoId } = route.params;
  
  const [numero, setNumero] = useState('');
  const [texto, setTexto] = useState('');
  const [versiculo, setVersiculo] = useState(null);
  const [capituloInfo, setCapituloInfo] = useState(null);
  const [libroInfo, setLibroInfo] = useState(null);
  const [originalNumero, setOriginalNumero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar datos del versículo
        const versiculoData = await db.getVersiculoById(versiculoId);
        if (!versiculoData) {
          Alert.alert('Error', 'No se encontró el versículo');
          navigation.goBack();
          return;
        }
        
        setVersiculo(versiculoData);
        setNumero(versiculoData.numero.toString());
        setTexto(versiculoData.texto || '');
        setOriginalNumero(versiculoData.numero);
        
        // Cargar información del capítulo
        const capitulo = await db.getCapituloById(versiculoData.capitulo_id);
        setCapituloInfo(capitulo);
        
        if (capitulo) {
          // Cargar información del libro
          const libro = await db.getLibroById(capitulo.libro_id);
          setLibroInfo(libro);
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [versiculoId, navigation]);
  
  // Función para verificar si ya existe un versículo con ese número en el capítulo
  const existeVersiculo = async (capituloId, numVersiculo) => {
    // Si el número no ha cambiado, no necesitamos verificar
    if (numVersiculo === originalNumero) return false;
    
    const versiculos = await db.getVersiculosByCapitulo(capituloId);
    return versiculos.some(v => v.numero === numVersiculo);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(Number(numero)) || Number(numero) <= 0) {
      Alert.alert('Error', 'El número de versículo debe ser un número positivo');
      return false;
    }
    if (!texto.trim()) {
      Alert.alert('Error', 'El texto del versículo no puede estar vacío');
      return false;
    }
    return true;
  };

  const actualizarVersiculo = async () => {
    if (!validarFormulario()) return;

    const numVersiculo = parseInt(numero);
    
    try {
      // Verificar si ya existe un versículo con ese número
      const existe = await existeVersiculo(versiculo.capitulo_id, numVersiculo);
      if (existe) {
        Alert.alert('Error', `Ya existe un versículo ${numVersiculo} en este capítulo`);
        return;
      }
      
      setSaving(true);
      
      const versiculoActualizado = {
        ...versiculo,
        numero: numVersiculo,
        texto
      };
      
      await db.updateVersiculo(versiculoId, versiculoActualizado);
      
      Alert.alert('Éxito', 'Versículo actualizado correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al actualizar versículo:', error);
      Alert.alert('Error', 'No se pudo actualizar el versículo');
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
      <Text style={styles.title}>Editar Versículo</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {libroInfo ? libroInfo.nombre : ''} {capituloInfo ? capituloInfo.numero : ''}
        </Text>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de versículo *</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Texto del versículo *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={texto}
          onChangeText={setTexto}
          placeholder="Escribe el texto del versículo aquí..."
          multiline={true}
          numberOfLines={5}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancel

RafaelG1986: La respuesta era muy larga, mandame el codigo de Editar Versiculo completo, solamente

GitHub Copilot: # Código de EditarVersiculo.js completo

````javascript
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
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const EditarVersiculo = ({ navigation, route }) => {
  const { versiculoId } = route.params;
  
  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState('');
  const [selectedCapituloId, setSelectedCapituloId] = useState(null);
  const [capitulos, setCapitulos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar datos del versículo
        const versiculo = await db.getVersiculoById(versiculoId);
        
        if (versiculo) {
          setTexto(versiculo.texto || '');
          setNumero(versiculo.numero ? versiculo.numero.toString() : '');
          setSelectedCapituloId(versiculo.capitulo_id || null);
          
          // Cargar capitulos
          const capitulosData = await db.getCapitulos();
          setCapitulos(capitulosData);
          
          // Cargar libros para el selector
          const librosData = await db.getLibros();
          setLibros(librosData);
          
          // Si tenemos un capítulo seleccionado, buscar su libro
          if (versiculo.capitulo_id) {
            const capituloSeleccionado = capitulosData.find(c => c.id === versiculo.capitulo_id);
            if (capituloSeleccionado) {
              setSelectedLibroId(capituloSeleccionado.libro_id);
            }
          }
        } else {
          Alert.alert('Error', 'No se encontró el versículo');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [versiculoId, navigation]);

  const filtrarCapitulos = () => {
    if (!selectedLibroId) return [];
    return capitulos.filter(c => c.libro_id === selectedLibroId);
  };

  const validarFormulario = () => {
    if (!texto.trim()) {
      Alert.alert('Error', 'El texto es obligatorio');
      return false;
    }
    if (!numero.trim() || isNaN(Number(numero))) {
      Alert.alert('Error', 'El número debe ser un valor numérico');
      return false;
    }
    if (!selectedCapituloId) {
      Alert.alert('Error', 'Debe seleccionar un capítulo');
      return false;
    }
    return true;
  };

  const actualizarVersiculo = async () => {
    if (!validarFormulario()) return;

    try {
      setSaving(true);
      
      const versiculoActualizado = {
        capitulo_id: selectedCapituloId,
        numero: parseInt(numero),
        texto
      };
      
      await db.updateVersiculo(versiculoId, versiculoActualizado);
      
      Alert.alert('Éxito', 'Versículo actualizado correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al actualizar versículo:', error);
      Alert.alert('Error', 'No se pudo actualizar el versículo');
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

  const capitulosFiltrados = filtrarCapitulos();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Editar Versículo</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Libro *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedLibroId}
            onValueChange={(itemValue) => {
              setSelectedLibroId(itemValue);
              setSelectedCapituloId(null); // Reset capítulo al cambiar libro
            }}
            style={styles.picker}
          >
            <Picker.Item label="Seleccione un libro" value={null} />
            {libros.map(libro => (
              <Picker.Item 
                key={libro.id} 
                label={`${libro.nombre} (${libro.abreviatura})`} 
                value={libro.id} 
              />
            ))}
          </Picker>
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Capítulo *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCapituloId}
            onValueChange={(itemValue) => setSelectedCapituloId(itemValue)}
            style={styles.picker}
            enabled={capitulosFiltrados.length > 0}
          >
            <Picker.Item label="Seleccione un capítulo" value={null} />
            {capitulosFiltrados.map(capitulo => (
              <Picker.Item 
                key={capitulo.id} 
                label={`Capítulo ${capitulo.numero}`} 
                value={capitulo.id} 
              />
            ))}
          </Picker>
        </View>
        {selectedLibroId && capitulosFiltrados.length === 0 && (
          <Text style={styles.warningText}>
            No hay capítulos disponibles para este libro. Por favor, añada capítulos primero.
          </Text>
        )}
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de versículo *</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Texto del versículo *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={texto}
          onChangeText={setTexto}
          placeholder="Ingrese el texto del versículo"
          multiline={true}
          numberOfLines={6}
        />
      </View>
      
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
          onPress={actualizarVersiculo}
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
    minHeight: 120,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  warningText: {
    color: '#e67e22',
    marginTop: 6,
    fontSize: 14,
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
});

export default EditarVersiculo;
````

RafaelG1986: siguiente paso

GitHub Copilot: # Siguiente paso: Implementar la gestión completa de versículos

Veo que ya tienes el componente EditarVersiculo.js implementado. Ahora deberías completar la funcionalidad CRUD para los versículos con los siguientes pasos:

## Paso 1: Crear el componente VersiculosList.js

````javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../../database/database';

const VersiculosList = ({ navigation, route }) => {
  const [versiculos, setVersiculos] = useState([]);
  const [capitulos, setCapitulos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [selectedCapituloId, setSelectedCapituloId] = useState(null);
  const [loading, setLoading] = useState(true);

  const cargarLibros = async () => {
    try {
      const data = await db.getLibros();
      setLibros(data);
      if (data.length > 0 && !selectedLibroId) {
        setSelectedLibroId(data[0].id);
        cargarCapitulos(data[0].id);
      } else if (data.length === 0) {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      setLoading(false);
    }
  };

  const cargarCapitulos = async (libroId) => {
    try {
      const data = await db.getCapitulosByLibro(libroId || selectedLibroId);
      setCapitulos(data);
      if (data.length > 0 && !selectedCapituloId) {
        setSelectedCapituloId(data[0].id);
        cargarVersiculos(data[0].id);
      } else if (data.length === 0) {
        setVersiculos([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      setLoading(false);
    }
  };

  const cargarVersiculos = async (capituloId) => {
    try {
      setLoading(true);
      const data = await db.getVersiculosByCapitulo(capituloId || selectedCapituloId);
      setVersiculos(data);
    } catch (error) {
      console.error('Error al cargar versículos:', error);
      Alert.alert('Error', 'No se pudieron cargar los versículos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarLibros();
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedCapituloId) {
        cargarVersiculos(selectedCapituloId);
      } else if (selectedLibroId) {
        cargarCapitulos(selectedLibroId);
      } else {
        cargarLibros();
      }
    });
    return unsubscribe;
  }, [navigation]);

  const eliminarVersiculo = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar este versículo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteVersiculo(id);
              cargarVersiculos(selectedCapituloId);
              Alert.alert('Éxito', 'Versículo eliminado correctamente');
            } catch (error) {
              console.error('Error al eliminar versículo:', error);
              Alert.alert('Error', 'No se pudo eliminar el versículo');
            }
          }
        }
      ]
    );
  };

  const cambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    setSelectedCapituloId(null);
    setVersiculos([]);
    cargarCapitulos(libroId);
  };

  const cambiarCapitulo = (capituloId) => {
    setSelectedCapituloId(capituloId);
    cargarVersiculos(capituloId);
  };

  if (loading && !versiculos.length && !capitulos.length) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestionar Versículos</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('NuevoVersiculo', { capituloId: selectedCapituloId })}
          disabled={!selectedCapituloId}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Nuevo</Text>
        </TouchableOpacity>
      </View>

      {/* Selector de Libro */}
      <View style={styles.selectorContainer}>
        <Text style={styles.selectorLabel}>Libro:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorScrollView}>
          {libros.map(libro => (
            <TouchableOpacity
              key={libro.id}
              style={[
                styles.selectorButton,
                selectedLibroId === libro.id && styles.selectedButton
              ]}
              onPress={() => cambiarLibro(libro.id)}
            >
              <Text 
                style={[
                  styles.selectorButtonText,
                  selectedLibroId === libro.id && styles.selectedButtonText
                ]}
              >
                {libro.abreviatura}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Selector de Capítulo */}
      {selectedLibroId && (
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Capítulo:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorScrollView}>
            {capitulos.length > 0 ? (
              capitulos.map(capitulo => (
                <TouchableOpacity
                  key={capitulo.id}
                  style={[
                    styles.selectorButton,
                    selectedCapituloId === capitulo.id && styles.selectedButton
                  ]}
                  onPress={() => cambiarCapitulo(capitulo.id)}
                >
                  <Text 
                    style={[
                      styles.selectorButtonText,
                      selectedCapituloId === capitulo.id && styles.selectedButtonText
                    ]}
                  >
                    {capitulo.numero}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No hay capítulos para este libro</Text>
                <TouchableOpacity 
                  style={styles.createButton}
                  onPress={() => navigation.navigate('CapitulosList')}
                >
                  <Text style={styles.createButtonText}>Crear Capítulos</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </View>
      )}

      {/* Lista de versículos */}
      {selectedCapituloId && (
        <FlatList
          data={versiculos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.versiculoItem}>
              <Text style={styles.versiculoNumero}>{item.numero}</Text>
              <View style={styles.versiculoInfo}>
                <Text style={styles.versiculoTexto}>{item.texto}</Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editButton]}
                  onPress={() => navigation.navigate('EditarVersiculo', { versiculoId: item.id })}
                >
                  <Ionicons name="create-outline" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => eliminarVersiculo(item.id)}
                >
                  <Ionicons name="trash-outline" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.list}
          refreshing={loading}
          onRefresh={() => cargarVersiculos(selectedCapituloId)}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyMessage}>No hay versículos en este capítulo</Text>
              <TouchableOpacity
                style={styles.createButton}
                onPress={() => navigation.navigate('NuevoVersiculo', { capituloId: selectedCapituloId })}
              >
                <Text style={styles.createButtonText}>Añadir Versículo</Text>
              </TouchableOpacity>
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  selectorContainer: {
    marginBottom: 16,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selectorScrollView: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  selectorButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minWidth: 44,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#4a90e2',
  },
  selectorButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  selectedButtonText: {
    color: 'white',
  },
  list: {
    paddingBottom: 20,
  },
  versiculoItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  versiculoNumero: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 12,
    color: '#4a90e2',
    minWidth: 26,
    textAlign: 'center',
  },
  versiculoInfo: {
    flex: 1,
  },
  versiculoTexto: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#777',
    marginBottom: 16,
    textAlign: 'center',
  },
  noDataContainer: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  noDataText: {
    color: '#777',
    marginBottom: 8,
  },
  createButton: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  createButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default VersiculosList;
````

## Paso 2: Crear el componente NuevoVersiculo.js

````javascript
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
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const NuevoVersiculo = ({ navigation, route }) => {
  const { capituloId } = route.params || {};
  
  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState('');
  const [selectedCapituloId, setSelectedCapituloId] = useState(capituloId || null);
  const [capitulos, setCapitulos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Cargar libros
        const librosData = await db.getLibros();
        setLibros(librosData);
        
        // Cargar capitulos
        const capitulosData = await db.getCapitulos();
        setCapitulos(capitulosData);
        
        // Si tenemos un capítulo seleccionado, buscar su libro
        if (capituloId) {
          setSelectedCapituloId(capituloId);
          const capituloSeleccionado = capitulosData.find(c => c.id === capituloId);
          if (capituloSeleccionado) {
            setSelectedLibroId(capituloSeleccionado.libro_id);
          }
          
          // Obtener el último número de versículo para sugerir el siguiente
          const ultimosVersiculos = await db.getVersiculosByCapitulo(capituloId);
          if (ultimosVersiculos.length > 0) {
            const ultimoNumero = Math.max(...ultimosVersiculos.map(v => v.numero));
            setNumero((ultimoNumero + 1).toString());
          } else {
            setNumero('1');
          }
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos necesarios');
      } finally {
        setLoadingData(false);
      }
    };

    cargarDatos();
  }, [capituloId]);

  const filtrarCapitulos = () => {
    if (!selectedLibroId) return [];
    return capitulos.filter(c => c.libro_id === selectedLibroId);
  };

  const validarFormulario = () => {
    if (!texto.trim()) {
      Alert.alert('Error', 'El texto es obligatorio');
      return false;
    }
    if (!numero.trim() || isNaN(Number(numero))) {
      Alert.alert('Error', 'El número debe ser un valor numérico');
      return false;
    }
    if (!selectedCapituloId) {
      Alert.alert('Error', 'Debe seleccionar un capítulo');
      return false;
    }
    return true;
  };

  const guardarVersiculo = async () => {
    if (!validarFormulario()) return;

    try {
      setLoading(true);
      
      const nuevoVersiculo = {
        capitulo_id: selectedCapituloId,
        numero: parseInt(numero),
        texto
      };
      
      await db.addVersiculo(nuevoVersiculo);
      
      Alert.alert('Éxito', 'Versículo añadido correctamente', [
        { 
          text: 'OK', 
          onPress: () => navigation.goBack() 
        }
      ]);
    } catch (error) {
      console.error('Error al guardar versículo:', error);
      Alert.alert('Error', 'No se pudo guardar el versículo');
    } finally {
      setLoading(false);
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

  const capitulosFiltrados = filtrarCapitulos();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevo Versículo</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Libro *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedLibroId}
            onValueChange={(itemValue) => {
              setSelectedLibroId(itemValue);
              setSelectedCapituloId(null); // Reset capítulo al cambiar libro
            }}
            style={styles.picker}
          >
            <Picker.Item label="Seleccione un libro" value={null} />
            {libros.map(libro => (
              <Picker.Item 
                key={libro.id} 
                label={`${libro.nombre} (${libro.abreviatura})`} 
                value={libro.id} 
              />
            ))}
          </Picker>
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Capítulo *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCapituloId}
            onValueChange={(itemValue) => setSelectedCapituloId(itemValue)}
            style={styles.picker}
            enabled={capitulosFiltrados.length > 0}
          >
            <Picker.Item label="Seleccione un capítulo" value={null} />
            {capitulosFiltrados.map(capitulo => (
              <Picker.Item 
                key={capitulo.id} 
                label={`Capítulo ${capitulo.numero}`} 
                value={capitulo.id} 
              />
            ))}
          </Picker>
        </View>
        {selectedLibroId && capitulosFiltrados.length === 0 && (
          <Text style={styles.warningText}>
            No hay capítulos disponibles para este libro. Por favor, añada capítulos primero.
          </Text>
        )}
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de versículo *</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Texto del versículo *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={texto}
          onChangeText={setTexto}
          placeholder="Ingrese el texto del versículo"
          multiline={true}
          numberOfLines={6}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
          disabled={loading}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.submitButton}
          onPress={guardarVersiculo}
          disabled={loading}
        >
          {loading ? (
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
    minHeight: 120,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  warningText: {
    color: '#e67e22',
    marginTop: 6,
    fontSize: 14,
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

export default NuevoVersiculo;
````

## Paso 3: Actualizar el AdminNavigator.js para incluir las nuevas rutas

````javascript
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from './AdminScreen';
import VersionesList from './versiones/VersionesList';
import NuevaVersion from './versiones/NuevaVersion';
import EditarVersion from './versiones/EditarVersion';
import LibrosList from './libros/LibrosList';
import NuevoLibro from './libros/NuevoLibro';
import EditarLibro from './libros/EditarLibro';
import VersiculosList from './versiculos/VersiculosList';
import NuevoVersiculo from './versiculos/NuevoVersiculo';
import EditarVersiculo from './versiculos/EditarVersiculo';

const Stack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="AdminHome" 
        component={AdminScreen} 
        options={{ headerTitle: 'Administración' }}
      />
      
      {/* Rutas para Versiones */}
      <Stack.Screen 
        name="VersionesList" 
        component={VersionesList} 
        options={{ headerTitle: 'Versiones Bíblicas' }}
      />
      <Stack.Screen 
        name="NuevaVersion" 
        component={NuevaVersion} 
        options={{ headerTitle: 'Nueva Versión' }}
      />
      <Stack.Screen 
        name="EditarVersion" 
        component={EditarVersion} 
        options={{ headerTitle: 'Editar Versión' }}
      />
      
      {/* Rutas para Libros */}
      <Stack.Screen 
        name="LibrosList" 
        component={LibrosList} 
        options={{ headerTitle: 'Libros Bíblicos' }}
      />
      <Stack.Screen 
        name="NuevoLibro" 
        component={NuevoLibro} 
        options={{ headerTitle: 'Nuevo Libro' }}
      />
      <Stack.Screen 
        name="EditarLibro" 
        component={EditarLibro} 
        options={{ headerTitle: 'Editar Libro' }}
      />
      
      {/* Rutas para Versículos */}
      <Stack.Screen 
        name="VersiculosList" 
        component={VersiculosList} 
        options={{ headerTitle: 'Versículos' }}
      />
      <Stack.Screen 
        name="NuevoVersiculo" 
        component={NuevoVersiculo} 
        options={{ headerTitle: 'Nuevo Versículo' }}
      />
      <Stack.Screen 
        name="EditarVersiculo" 
        component={EditarVersiculo} 
        options={{ headerTitle: 'Editar Versículo' }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
````

## Paso 4: Actualizar AdminScreen.js para mostrar la opción de gestionar versículos

````javascript
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
        
        <TouchableOpacity 
          style={styles.adminButton}
          onPress={() => navigation.navigate('VersiculosList')}
        >
          <Ionicons name="document-text" size={24} color="white" style={styles.buttonIcon} />
          <Text style={styles.adminButtonText}>Gestionar Versículos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Mantén los estilos existentes
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
````

## Paso 5: Actualizar la base de datos con funciones para gestionar versículos

Asegúrate de que tu archivo database.js incluya las funciones necesarias para manejar versículos:

````javascript
// Añadir estas funciones a tu módulo db

// Funciones para gestionar versículos
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
}
````

¡Con estos pasos completados, ahora tendrás un CRUD completo para gestionar versículos en tu aplicación de Biblia Interactiva!

## Próximo paso

Para completar la funcionalidad básica, deberías implementar la gestión de capítulos (si aún no lo has hecho) y luego mejorar la pantalla de lectura para navegar por versiones, libros, capítulos y versículos de manera intuitiva.

RafaelG1986: mira, tengo Capitulos list, Editar capitulo, nuevo capitulo

GitHub Copilot: # Actualización del proyecto: Gestión de Capítulos y Versículos

Veo que ya tienes implementada la gestión de capítulos con CapitulosList.js y mencionas que también tienes `EditarCapitulo.js` y `NuevoCapitulo.js`. Esto es excelente para la administración de contenido de tu Biblia Interactiva.

## Estructura CRUD completa

Ya cuentas con el CRUD completo para:

- **Versiones Bíblicas**: VersionesList, NuevaVersion, EditarVersion
- **Libros Bíblicos**: LibrosList, NuevoLibro, EditarLibro
- **Capítulos**: CapitulosList, NuevoCapitulo, EditarCapitulo
- **Versículos**: VersiculosList, NuevoVersiculo, EditarVersiculo

## Próximo paso: Pantalla de lectura

Ahora que tienes toda la infraestructura de administración, el siguiente paso lógico es mejorar la experiencia de lectura en tu aplicación:

1. **Mejorar ReadScreen.js** para permitir:
   - Selección de versión bíblica
   - Navegación entre libros
   - Selección de capítulos
   - Visualización de versículos con formato adecuado

## Implementación de ReadScreen.js mejorado

````javascript
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

const ReadScreen = () => {
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

  // Cargar versiones al inicio
  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        setLoading(true);
        const data = await db.getVersiones();
        setVersiones(data);
        
        // Seleccionar primera versión por defecto
        if (data.length > 0) {
          setSelectedVersion(data[0]);
          cargarLibros(data[0].id);
        }
      } catch (error) {
        console.error('Error al cargar versiones:', error);
      }
    };
    
    cargarVersiones();
  }, []);

  // Cargar libros cuando cambia la versión
  const cargarLibros = async (versionId) => {
    try {
      setLoading(true);
      const data = await db.getLibrosByVersion(versionId);
      setLibros(data);
      
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
      setCapitulos(data);
      
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
      setVersiculos(data);
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
          setCapitulos(caps);
          if (caps.length > 0) {
            const ultimoCapitulo = caps[caps.length - 1];
            setSelectedCapitulo(ultimoCapitulo);
            cargarVersiculos(ultimoCapitulo.id);
          }
        });
      }
    }
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
            <Text style={styles.modalItemTitle}>{item.nombre}</Text>
            <Text style={styles.modalItemSubtitle}>{item.abreviatura} - {item.idioma}</Text>
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
            <Text style={styles.modalItemTitle}>{item.nombre}</Text>
            <Text style={styles.modalItemSubtitle}>{item.abreviatura} - {item.testamento}</Text>
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
        <Text style={styles.loadingText}>Cargando...</Text>
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
                <Text style={styles.versiculoNumero}>{versiculo.numero}</Text>
                <Text style={styles.versiculoTexto}>{versiculo.texto}</Text>
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
    height

Código similar encontrado con 1 tipo de licencia

RafaelG1986: Pero en el panel de CRUD no aparece la gestion de capitulos

GitHub Copilot: # Agregar la gestión de capítulos al panel CRUD

Necesitas actualizar el archivo `AdminScreen.js` para incluir la opción de gestionar capítulos en el panel principal. Actualmente sólo estás mostrando opciones para versiones, libros y versículos, pero te falta incluir la opción para capítulos.

## Actualiza el AdminScreen.js

````javascript
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
        
        <TouchableOpacity 
          style={styles.adminButton}
          onPress={() => navigation.navigate('CapitulosList')}
        >
          <Ionicons name="bookmark" size={24} color="white" style={styles.buttonIcon} />
          <Text style={styles.adminButtonText}>Gestionar Capítulos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.adminButton}
          onPress={() => navigation.navigate('VersiculosList')}
        >
          <Ionicons name="document-text" size={24} color="white" style={styles.buttonIcon} />
          <Text style={styles.adminButtonText}>Gestionar Versículos</Text>
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
````

## Asegúrate que la ruta esté definida en AdminNavigator.js

También verifica que en tu archivo `AdminNavigator.js` tengas la ruta para `CapitulosList` definida correctamente:

````javascript
// En AdminNavigator.js
// ...
<Stack.Screen 
  name="CapitulosList" 
  component={CapitulosList} 
  options={{ headerTitle: 'Gestionar Capítulos' }}
/>
<Stack.Screen 
  name="NuevoCapitulo" 
  component={NuevoCapitulo} 
  options={{ headerTitle: 'Nuevo Capítulo' }}
/>
<Stack.Screen 
  name="EditarCapitulo" 
  component={EditarCapitulo} 
  options={{ headerTitle: 'Editar Capítulo' }}
/>
// ...
````

Con estos cambios, la opción de gestionar capítulos aparecerá en tu panel de administración CRUD y podrás navegar correctamente a la pantalla de gestión de capítulos.

RafaelG1986: Listo, necesito actualizar repositorio.

GitHub Copilot: # Actualizar el repositorio con los cambios

Ahora que tienes el CRUD completo para versiones, libros, capítulos y versículos, vamos a actualizar el repositorio para guardar todos estos cambios.

## Pasos para actualizar el repositorio

1. **Verificar los cambios pendientes**:

```bash
git status
```

Este comando te mostrará todos los archivos modificados y nuevos.

2. **Añadir todos los archivos al área de stage**:

```bash
git add .
```

Esto añade todos los archivos modificados y nuevos al área de preparación.

3. **Realizar el commit con un mensaje descriptivo**:

```bash
git commit -m "Implementación completa del CRUD para versiones, libros, capítulos y versículos"
```

4. **Subir los cambios al repositorio remoto**:

```bash
git push origin main
```

Si estás usando una rama diferente, reemplaza `main` con el nombre de tu rama actual.

## Verificar que todo se haya subido correctamente

```bash
git log --oneline -5
```

Este comando te mostrará los últimos 5 commits para verificar que se haya registrado correctamente tu último commit.

## Resumen del proyecto actual

Has implementado correctamente:

- **Gestión de versiones bíblicas** (crear, editar, eliminar)
- **Gestión de libros bíblicos** (crear, editar, eliminar)
- **Gestión de capítulos** (crear, editar, eliminar)
- **Gestión de versículos** (crear, editar, eliminar)

El siguiente paso recomendado sería mejorar la interfaz de lectura para permitir a los usuarios navegar y leer la Biblia de manera intuitiva, con selección de versiones, libros, capítulos y versículos.

RafaelG1986: Ahora, se supone que lo que se gestionó en el CRUD, se pueda visualizar en el panel de lectura, asimismo, si en el panel de inicio, selecciono la version que quiero.

GitHub Copilot: # Implementación del panel de lectura con selector de versión

Para visualizar todo el contenido que has gestionado en el CRUD, vamos a crear un sistema de lectura completo. Vamos a implementar:

1. Un selector de versión en la pantalla de inicio
2. Una pantalla de lectura mejorada

## 1. Actualización del HomeScreen para seleccionar versiones

````javascript
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  Image,
  ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../../database/database';

const HomeScreen = ({ navigation }) => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        setLoading(true);
        const data = await db.getVersiones();
        setVersiones(data);
      } catch (error) {
        console.error('Error al cargar versiones:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarVersiones();
    
    // Recargar cuando el usuario vuelva a esta pantalla
    const unsubscribe = navigation.addListener('focus', cargarVersiones);
    return unsubscribe;
  }, [navigation]);

  const irALectura = (versionId) => {
    navigation.navigate('Read', { versionId });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versiones bíblicas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/bible-icon.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Biblia Interactiva</Text>
        <Text style={styles.subtitle}>Selecciona una versión para comenzar</Text>
      </View>

      {versiones.length > 0 ? (
        <FlatList
          data={versiones}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.versionCard}
              onPress={() => irALectura(item.id)}
            >
              <View style={styles.versionInfo}>
                <Text style={styles.versionName}>{item.nombre}</Text>
                <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#4a90e2" />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.list}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="book-outline" size={60} color="#ccc" />
          <Text style={styles.emptyText}>No hay versiones disponibles</Text>
          <Text style={styles.emptySubtext}>
            Añade versiones desde el panel de administración
          </Text>
        </View>
      )}

      <TouchableOpacity 
        style={styles.adminButton}
        onPress={() => navigation.navigate('Admin')}
      >
        <Ionicons name="settings-outline" size={20} color="white" />
        <Text style={styles.adminButtonText}>Panel de Administración</Text>
      </TouchableOpacity>
    </View>
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
  header: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  list: {
    padding: 16,
  },
  versionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  versionInfo: {
    flex: 1,
  },
  versionName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  versionDetails: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
  },
  adminButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 16,
  },
  adminButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  }
});

export default HomeScreen;
````

## 2. Implementación del ReadScreen para visualizar el contenido

````javascript
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
import { db } from '../../database/database';

const ReadScreen = ({ navigation, route }) => {
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
````

## 3. Actualización del AppNavigator para incluir las nuevas rutas

````javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/home/HomeScreen';
import ReadScreen from '../screens/read/ReadScreen';
import SearchScreen from '../screens/search/SearchScreen';
import BookmarksScreen from '../screens/bookmarks/BookmarksScreen';
import AdminNavigator from '../screens/admin/AdminNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Read') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Bookmarks') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Admin') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4a90e2',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Inicio',
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Read" 
          component={ReadScreen} 
          options={{ 
            title: 'Leer',
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ title: 'Buscar' }}
        />
        <Tab.Screen 
          name="Bookmarks" 
          component={BookmarksScreen} 
          options={{ title: 'Marcadores' }}
        />
        <Tab.Screen 
          name="Admin" 
          component={AdminNavigator} 
          options={{ 
            title: 'Admin',
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
````

## 4. Asegúrate de tener un icono de la Biblia para la pantalla de inicio

Deberás crear la carpeta `assets` en tu proyecto y guardar ahí un icono llamado `bible-icon.png`. Si no tienes uno, puedes usar cualquier imagen de la Biblia que descargues de internet o crear un placeholder por ahora.

```bash
mkdir -p src/assets
```

Con estos cambios, ahora tendrás:

1. Una pantalla de inicio que muestra todas las versiones bíblicas que has creado en el CRUD
2. Al seleccionar una versión, te lleva a la pantalla de lectura con esa versión seleccionada
3. En la pantalla de lectura puedes navegar entre libros, capítulos y versículos
4. Controles para ajustar el tamaño del texto para una mejor experiencia de lectura

Todo el contenido que has creado en el sistema CRUD ahora se visualiza correctamente en la interfaz de lectura, creando una experiencia completa de aplicación de Biblia.

Código similar encontrado con 1 tipo de licencia

RafaelG1986: mira, este archivo es el mismo HomeScreen pero en otra carpeta

GitHub Copilot: # Actualización de la estructura del proyecto

Veo que tienes el archivo HomeScreen.js directamente en la carpeta `src/screens/` mientras que en mi propuesta anterior sugerí crear uno en HomeScreen.js. Para mantener la coherencia del proyecto, vamos a actualizar el archivo existente en lugar de crear uno nuevo.

## Actualiza el HomeScreen.js existente

````javascript
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  Image,
  ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../database/database';

const HomeScreen = ({ navigation }) => {
  const [versiones, setVersiones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        setLoading(true);
        const data = await db.getVersiones();
        setVersiones(data);
      } catch (error) {
        console.error('Error al cargar versiones:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarVersiones();
    
    // Recargar cuando el usuario vuelva a esta pantalla
    const unsubscribe = navigation.addListener('focus', cargarVersiones);
    return unsubscribe;
  }, [navigation]);

  const irALectura = (versionId) => {
    navigation.navigate('Read', { versionId });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versiones bíblicas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Biblia Interactiva</Text>
        <Text style={styles.subtitle}>Tu compañero de estudio bíblico</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Versiones disponibles</Text>
        {versiones.length > 0 ? (
          <FlatList
            data={versiones}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.versionItem}
                onPress={() => irALectura(item.id)}
              >
                <View style={styles.versionInfo}>
                  <Text style={styles.versionName}>{item.nombre}</Text>
                  <Text style={styles.versionDetails}>{item.abreviatura} - {item.idioma}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#4a90e2" />
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.list}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay versiones disponibles</Text>
            <Text style={styles.emptySubtext}>
              Añade versiones desde el panel de administración
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity 
        style={styles.adminButton}
        onPress={() => navigation.navigate('Admin')}
      >
        <Ionicons name="settings-outline" size={20} color="white" />
        <Text style={styles.adminButtonText}>Panel de Administración</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    padding: 20,
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
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  sectionContainer: {
    width: '100%',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  versionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  versionInfo: {
    flex: 1,
  },
  versionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  versionDetails: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
  },
  adminButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  adminButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  }
});

export default HomeScreen;
````

## Crear la pantalla de lectura ReadScreen.js

````javascript
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

const ReadScreen = ({ navigation, route }) => {
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
````

## Actualizar el AppNavigator para reflejar las ubicaciones correctas

````javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ReadScreen from '../screens/ReadScreen';
import SearchScreen from '../screens/SearchScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import AdminNavigator from '../screens/admin/AdminNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Read') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Bookmarks') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Admin') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4a90e2',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Inicio',
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Read" 
          component={ReadScreen} 
          options={{ 
            title: 'Leer',
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ title: 'Buscar' }}
        />
        <Tab.Screen 
          name="Bookmarks" 
          component={BookmarksScreen} 
          options={{ title: 'Marcadores' }}
        />
        <Tab.Screen 
          name="Admin" 
          component={AdminNavigator} 
          options={{ 
            title: 'Admin',
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
````

Con estos cambios, habrás actualizado tu aplicación para mostrar las versiones bíblicas en la pantalla de inicio y permitir al usuario seleccionar una para verla en la pantalla de lectura. También has implementado una interfaz completa de lectura con todas las funcionalidades necesarias para navegar entre libros, capítulos y versículos.

Esta implementación refleja correctamente la estructura de archivos existente en tu proyecto en lugar de crear duplicados en otras carpetas.

Código similar encontrado con 1 tipo de licencia

RafaelG1986: mira este archivo antes de implementar App navigator

GitHub Copilot: # Revisión del AdminNavigator antes de implementar AppNavigator

Veo que el archivo AdminNavigator.js ya tiene todas las rutas configuradas correctamente para las funcionalidades CRUD:

1. ✅ **Gestión de versiones**: VersionesList, NuevaVersion, EditarVersion
2. ✅ **Gestión de libros**: LibrosList, NuevoLibro, EditarLibro
3. ✅ **Gestión de capítulos**: CapitulosList, NuevoCapitulo, EditarCapitulo
4. ✅ **Gestión de versículos**: VersiculosList, NuevoVersiculo, EditarVersiculo

Esta estructura es perfecta para integrarla en el AppNavigator principal como una pestaña de administración. Para el AppNavigator, necesitamos:

1. Crear una navegación por pestañas que incluya:
   - **Inicio**: Muestra versiones bíblicas disponibles
   - **Leer**: Para visualizar el contenido según versión, libro y capítulo
   - **Buscar**: Para búsqueda de contenidos (implementación futura)
   - **Marcadores**: Favoritos (implementación futura)
   - **Admin**: El AdminNavigator que ya tiene configurado

## AppNavigator ajustado a tu estructura existente

````javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ReadScreen from '../screens/ReadScreen';
import SearchScreen from '../screens/SearchScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import AdminNavigator from '../screens/admin/AdminNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Read') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Bookmarks') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Admin') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4a90e2',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Inicio',
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Read" 
          component={ReadScreen} 
          options={{ 
            title: 'Leer',
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ title: 'Buscar' }}
        />
        <Tab.Screen 
          name="Bookmarks" 
          component={BookmarksScreen} 
          options={{ title: 'Marcadores' }}
        />
        <Tab.Screen 
          name="Admin" 
          component={AdminNavigator} 
          options={{ 
            title: 'Admin',
            headerShown: false
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
````

Este AppNavigator integra perfectamente el AdminNavigator existente y mantiene la coherencia en la estructura de navegación de tu aplicación.

Código similar encontrado con 1 tipo de licencia

RafaelG1986: ERROR  The action 'NAVIGATE' with payload {"name":"Read","params":{"versionId":1}} was not handled by any navigator.

Do you have a screen named 'Read'?

If you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.

If you're using conditional rendering, navigation will happen automatically and you shouldn't navigate manually, see.

This is a development-only warning and won't be shown in production.

GitHub Copilot: # Solución al error de navegación a Read

El error ocurre porque estás intentando navegar a la pantalla 'Read' desde `HomeScreen` pero la navegación no encuentra la pantalla. Esto es común cuando trabajas con navegadores anidados en React Navigation.

## Problema identificado

En tu `HomeScreen.js`, probablemente tienes un código como este:

```javascript
const irALectura = (versionId) => {
  navigation.navigate('Read', { versionId });
};
```

Pero cuando tienes navegadores anidados, debes ser más específico sobre la ruta de navegación.

## Solución

Modifica la función `irALectura` en tu archivo `HomeScreen.js`:

````javascript
// Busca la función irALectura y reemplázala por esta:

const irALectura = (versionId) => {
  // La forma correcta si estamos usando navegación por pestañas
  if (versionId) {
    navigation.navigate('Read', {
      screen: 'ReadMain', // Si tienes un nombre específico para la pantalla dentro de Read
      params: { versionId }
    });
  } else {
    // Simplemente navegar a la pestaña Read sin parámetros
    navigation.navigate('Read');
  }
};
````

## Alternativa más simple

Si no tienes navegación anidada dentro de la pestaña "Read" (es decir, no hay un stack navigator dentro de la pestaña), una solución más sencilla es:

````javascript
const irALectura = (versionId) => {
  // Alternativa más simple si Read no tiene navegación anidada
  navigation.jumpTo('Read', { versionId });
};
````

El método `jumpTo()` es específico para la navegación entre pestañas y ayuda a evitar este tipo de errores.

## Verificación del ReadScreen

También debes asegurarte de que el componente `ReadScreen` esté capturando correctamente los parámetros:

````javascript
// Al inicio del componente ReadScreen, verifica los parámetros:

const ReadScreen = ({ route, navigation }) => {
  // Extraer parámetros de manera segura con valores por defecto
  const { versionId } = route.params || {};
  
  console.log("ReadScreen recibió versionId:", versionId); // Agrega logs para depuración
  
  // Resto del código...
};
````

Con estos cambios, la navegación desde la pantalla de inicio a la pantalla de lectura debería funcionar correctamente con el parámetro de versión.

RafaelG1986:  ERROR  The action 'NAVIGATE' with payload {"name":"Read","params":{"screen":"ReadMain","params":{"versionId":1}}} was not handled by any navigator.

Do you have a screen named 'Read'?

If you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.

If you're using conditional rendering, navigation will happen automatically and you shouldn't navigate manually, see.

This is a development-only warning and won't be shown in production.

GitHub Copilot: # Solución al error de navegación entre pestañas

El error persiste porque estamos intentando navegar a una pantalla anidada "ReadMain" dentro de "Read", pero tu implementación actual de navegación no tiene esa estructura anidada. El componente `ReadScreen` es un componente directo, no un navegador anidado.

## Solución: Usar jumpTo para navegación entre pestañas

Modifica tu función `irALectura` en HomeScreen.js de la siguiente manera:

````javascript
// Reemplazar la función irALectura actual

const irALectura = (versionId) => {
  // Usar jumpTo para navegación entre pestañas
  navigation.jumpTo('Read', { versionId });
};
````

El método `jumpTo()` está diseñado específicamente para navegar entre pestañas de un TabNavigator y pasar parámetros directamente, sin necesidad de especificar pantallas anidadas.

## Verificar la recepción de parámetros en ReadScreen

Asegúrate de que tu `ReadScreen.js` esté configurado para recibir estos parámetros correctamente:

````javascript
// Al inicio del componente ReadScreen

const ReadScreen = ({ route, navigation }) => {
  // Extraer parámetros con un valor predeterminado como objeto vacío
  const { versionId } = route.params || {};
  
  // Resto del código...
};
````

## Estructura de navegación actual vs estructura anidada

Tu error indica que estás intentando usar una estructura de navegación anidada que no existe:
- Estructura actual: Tab > ReadScreen (componente directo)
- Estructura que intentabas usar: Tab > ReadNavigator > ReadMain (navegación anidada)

Si en el futuro necesitas implementar múltiples pantallas dentro de la pestaña Read, deberías crear un navegador anidado (Stack Navigator) para esa pestaña, pero por ahora esta solución más simple resolverá el problema.

RafaelG1986: The action 'NAVIGATE' with payload {"name":"Read","params":{"screen":"ReadMain","params":{"versionId":1}}} was not handled by any navigator.

Do you have a screen named 'Read'?

If you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.

If you're using conditional rendering, navigation will happen automatically and you shouldn't navigate manually, see.

This is a development-only warning and won't be shown in production.
 ERROR  The action 'JUMP_TO' with payload {"name":"Read","params":{"versionId":1}} was not 
handled by any navigator.

Do you have a screen named 'Read'?

If you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.

If you're using conditional rendering, navigation will happen automatically and you shouldn't navigate manually, see.

This is a development-only warning and won't be shown in production.

GitHub Copilot: # Solución al problema de navegación entre pestañas

Parece que hay un problema con la configuración de la navegación. El error muestra que no puede encontrar una pestaña llamada "Read" aunque está definida en el AppNavigator.

## Causas posibles del problema:

1. Caché de la aplicación React Native que no se actualiza correctamente
2. Discrepancia entre los nombres de pantalla definidos y los nombres utilizados para la navegación
3. Errores en la importación/exportación de componentes

## Pasos para solucionar:

### 1. Reinicia la aplicación y limpia el caché

Cierra la aplicación y el servidor de desarrollo, luego reinicia todo con:

```bash
npx react-native start --reset-cache
```

### 2. Revisa y corrige la estructura de navegación en App.js

El problema podría estar en el componente raíz. Verifica que estás usando el AppNavigator correctamente:

````javascript
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
````

### 3. Modifica la función de navegación en HomeScreen

Cambia la implementación de la función de navegación a algo más directo:

````javascript
// Reemplazar la función irALectura con esta versión

const irALectura = (versionId) => {
  // Intenta con la navegación simple sin parámetros primero
  // para verificar si funciona la navegación básica
  navigation.navigate('Read');
};
````

### 4. Crea un archivo de configuración de navegación más simple para pruebas

Crea un archivo de navegación simplificado para identificar dónde está el problema:

````javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ReadScreen from '../screens/ReadScreen';

const Tab = createBottomTabNavigator();

export default function SimpleNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Read" component={ReadScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
````

Y modifica App.js temporalmente para usar este navegador simplificado:

````javascript
import React from 'react';
import SimpleNavigator from './src/navigation/SimpleNavigator';

export default function App() {
  return <SimpleNavigator />;
}
````

### 5. Verifica la estructura actual de navegación

Si después de las pruebas anteriores sigues teniendo problemas, puede ser útil verificar cómo estás configurando la navegación general. Recomiendo revisar:

1. Si estás usando `@react-navigation/native` versión 6 o superior
2. Si hay algún problema con las dependencias
3. Si has hecho la configuración inicial completa según la documentación de React Navigation

### 6. Solución alternativa: Actualiza el componente App y usa el ReadScreen directamente

Si ninguna de las soluciones anteriores funciona, puedes intentar una solución temporal que evita la navegación por pestañas:

````javascript
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ReadScreen from './src/screens/ReadScreen';
import AdminNavigator from './src/screens/admin/AdminNavigator';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [params, setParams] = useState({});
  
  const navigateToScreen = (screenName, screenParams = {}) => {
    setScreen(screenName);
    setParams(screenParams);
  };
  
  // Renderiza la pantalla correspondiente según el estado actual
  const renderScreen = () => {
    switch(screen) {
      case 'read':
        return <ReadScreen route={{ params }} navigation={{ navigate: navigateToScreen }} />;
      case 'admin':
        return <AdminNavigator />;
      case 'home':
      default:
        return <HomeScreen navigation={{ 
          navigate: navigateToScreen,
          jumpTo: navigateToScreen
        }} />;
    }
  };
  
  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
}
````

En esta solución temporal, evitamos usar el sistema de navegación de React Navigation y simplemente cambiamos componentes basados en un estado.

RafaelG1986: revisa App.js

GitHub Copilot: # Revisión de App.js: Problema Identificado

He identificado el problema con la navegación al analizar tu archivo App.js. El error está en la inconsistencia entre los nombres de las rutas en el navegador y los nombres utilizados en los comandos de navegación.

## Problema principal

En tu App.js estás definiendo las pestañas con estos nombres:

```javascript
<Tab.Screen name="Inicio" component={HomeScreen} />
<Tab.Screen name="Lectura" component={ReadScreen} />
<Tab.Screen name="Admin" component={AdminNavigator} />
```

Pero en tu `HomeScreen.js` intentas navegar a una pantalla llamada "Read":

```javascript
navigation.jumpTo('Read', { versionId });
// o
navigation.navigate('Read', { ... });
```

## Solución

Debes utilizar el mismo nombre exacto que definiste en el TabNavigator. Modifica la función `irALectura` en tu `HomeScreen.js`:

````javascript
const irALectura = (versionId) => {
  // Usar el nombre correcto "Lectura" en lugar de "Read"
  navigation.jumpTo('Lectura', { versionId });
};
````

## Recomendación de consistencia

Te recomendaría mantener una convención de nombres consistente. Puedes:

1. **Opción 1**: Usa nombres en español para todo
   - En App.js: `"Inicio"`, `"Lectura"`, `"Admin"` (como tienes ahora)
   - En las funciones de navegación: `navigation.jumpTo('Lectura', ...)`

2. **Opción 2**: Usa nombres en inglés para todo
   - En App.js: cambiar a `"Home"`, `"Read"`, `"Admin"`
   - En las funciones de navegación: `navigation.jumpTo('Read', ...)`

La consistencia en los nombres de rutas es crucial para evitar errores de navegación como el que estás experimentando.

RafaelG1986: Ok, necesito actualizar el repositorio.

GitHub Copilot: # Actualizar el repositorio con los cambios implementados

Ahora que has completado la implementación de tu aplicación Biblia Interactiva con todas las funcionalidades de CRUD y visualización, es momento de actualizar el repositorio Git para guardar tu progreso.

## Pasos para actualizar el repositorio

1. **Revisar los cambios pendientes**:

```bash
git status
```

Este comando te mostrará todos los archivos modificados, creados o eliminados que aún no se han registrado en el repositorio.

2. **Añadir todos los cambios al área de preparación (staging)**:

```bash
git add .
```

Esto añade todos los cambios al área de staging, preparándolos para el commit.

3. **Hacer commit con un mensaje descriptivo**:

```bash
git commit -m "Implementación completa de la Biblia Interactiva: CRUD de versiones, libros, capítulos y versículos con visualización en el lector"
```

El mensaje debe ser descriptivo sobre los cambios realizados.

4. **Subir los cambios al repositorio remoto**:

```bash
git push origin main
```

Si estás trabajando en otra rama diferente a "main", reemplaza "main" con el nombre de tu rama actual.

## Resumen de los cambios implementados

Has completado la implementación de:

- ✅ **Administración completa (CRUD)** para:
  - Versiones bíblicas
  - Libros
  - Capítulos
  - Versículos

- ✅ **Interfaz de usuario** con:
  - Pantalla de inicio con selección de versión
  - Pantalla de lectura con navegación entre libros, capítulos y versículos
  - Panel de administración con acceso a todas las funciones CRUD

- ✅ **Navegación funcional** entre todas las pantallas

## Próximos pasos sugeridos

Para continuar mejorando tu aplicación, podrías considerar:

1. Implementar búsqueda de versículos
2. Añadir sistema de marcadores/favoritos
3. Implementar funcionalidad de notas
4. Mejorar la UI/UX con temas personalizables
5. Añadir soporte para modo oscuro

¡Felicidades por completar esta implementación completa de la Biblia Interactiva! 📱📖

RafaelG1986: Falta implementar la gestion de versiculos masivos, es decir, integrar a un capitulo mas de un versiculo.

GitHub Copilot: # Implementación de la gestión de versículos masivos

Para implementar una funcionalidad que permita añadir múltiples versículos a un capítulo de forma simultánea, necesitamos crear una nueva pantalla que facilite esta tarea. Esta función es especialmente útil cuando quieres cargar capítulos enteros de una vez.

## Paso 1: Crear componente para carga masiva de versículos

````javascript
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
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [capitulos, setCapitulos] = useState([]);
  const [selectedCapituloId, setSelectedCapituloId] = useState(null);
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
        
        if (librosData.length > 0) {
          setSelectedLibroId(librosData[0].id);
          cargarCapitulos(librosData[0].id);
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los libros');
      } finally {
        setLoadingData(false);
      }
    };

    cargarDatos();
  }, []);

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

  // Guardar todos los versículos procesados
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
      
      // Verificar si ya existen versículos en este capítulo
      const versiculosExistentes = await db.getVersiculosByCapitulo(selectedCapituloId);
      
      if (versiculosExistentes.length > 0) {
        // Preguntar si desea reemplazar los versículos existentes
        return new Promise((resolve) => {
          Alert.alert(
            'Versículos existentes',
            `Este capítulo ya tiene ${versiculosExistentes.length} versículos. ¿Desea reemplazarlos?`,
            [
              {
                text: 'Cancelar',
                style: 'cancel',
                onPress: () => {
                  setLoading(false);
                  resolve(false);
                }
              },
              {
                text: 'Reemplazar',
                style: 'destructive',
                onPress: async () => {
                  // Eliminar versículos existentes
                  for (const versiculo of versiculosExistentes) {
                    await db.deleteVersiculo(versiculo.id);
                  }
                  
                  // Continuar con la adición de nuevos versículos
                  await agregarNuevosVersiculos();
                  resolve(true);
                }
              }
            ]
          );
        });
      } else {
        // No hay versículos existentes, simplemente añadir los nuevos
        await agregarNuevosVersiculos();
      }
    } catch (error) {
      console.error('Error al guardar versículos:', error);
      Alert.alert('Error', 'No se pudieron guardar los versículos');
    } finally {
      setLoading(false);
    }
  };

  const agregarNuevosVersiculos = async () => {
    try {
      // Añadir los nuevos versículos
      for (const versiculo of versiculosProcesados) {
        await db.addVersiculo({
          capitulo_id: selectedCapituloId,
          numero: versiculo.numero,
          texto: versiculo.texto
        });
      }
      
      Alert.alert(
        'Éxito', 
        `Se han guardado ${versiculosProcesados.length} versículos correctamente`,
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
      throw error;
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
````

## Paso 2: Actualizar VersiculosList.js para añadir el botón de carga masiva

````javascript
// Añadir en la sección del header lo siguiente:

{selectedCapituloId && (
  <TouchableOpacity 
    style={styles.massImportButton}
    onPress={() => navigation.navigate('CargaMasivaVersiculos', { capituloId: selectedCapituloId })}
  >
    <Ionicons name="document-text" size={20} color="white" />
    <Text style={styles.massImportButtonText}>Carga Masiva</Text>
  </TouchableOpacity>
)}

// Agregar estos estilos al objeto styles
massImportButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#32a852',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 6,
  marginLeft: 8,
},
massImportButtonText: {
  color: 'white',
  marginLeft: 4,
  fontWeight: '500',
  fontSize: 12,
},
````

## Paso 3: Actualizar AdminNavigator.js para añadir la nueva ruta

````javascript
// Importar el nuevo componente
import CargaMasivaVersiculos from './versiculos/CargaMasivaVersiculos';

// Añadir la nueva ruta dentro del Stack.Navigator
<Stack.Screen 
  name="CargaMasivaVersiculos" 
  component={CargaMasivaVersiculos} 
  options={{ headerTitle: 'Carga Masiva de Versículos' }}
/>
````

## Paso 4: Modificar el componente VersiculosList para mostrar la opción de carga masiva

Necesitamos actualizar el componente VersiculosList.js para incluir un botón que permita acceder a la función de carga masiva. Vamos a modificar la sección del encabezado para incluir este botón cuando hay un capítulo seleccionado:

````javascript
// Busca la sección del header y reemplázala con esto:

<View style={styles.header}>
  <Text style={styles.title}>Gestionar Versículos</Text>
  <View style={styles.headerButtons}>
    {selectedCapituloId && (
      <TouchableOpacity 
        style={styles.massImportButton}
        onPress={() => navigation.navigate('CargaMasivaVersiculos', { capituloId: selectedCapituloId })}
      >
        <Ionicons name="document-text" size={20} color="white" />
        <Text style={styles.massImportButtonText}>Carga Masiva</Text>
      </TouchableOpacity>
    )}
    <TouchableOpacity 
      style={styles.addButton}
      onPress={() => navigation.navigate('NuevoVersiculo', { capituloId: selectedCapituloId })}
      disabled={!selectedCapituloId}
    >
      <Ionicons name="add" size={24} color="white" />
      <Text style={styles.addButtonText}>Nuevo</Text>
    </TouchableOpacity>
  </View>
</View>

// Añade estos estilos al objeto de estilos
headerButtons: {
  flexDirection: 'row',
  alignItems: 'center',
},
massImportButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#32a852',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 6,
  marginRight: 8,
},
massImportButtonText: {
  color: 'white',
  marginLeft: 4,
  fontWeight: '500',
  fontSize: 12,
},
````

## Funcionalidades implementadas

Esta implementación te permite:

1. **Seleccionar libro y capítulo** donde deseas cargar los versículos
2. **Ingresar texto en formato** número + contenido de cada versículo
3. **Ver una vista previa** de los versículos procesados antes de guardarlos
4. **Detectar y reemplazar versículos existentes** si ya hay contenido en ese capítulo
5. **Validar que los números de versículos sean consecutivos**

Con esta nueva funcionalidad, podrás cargar rápidamente capítulos enteros sin tener que añadir cada versículo individualmente, ahorrando tiempo significativo en la gestión del contenido bíblico.

RafaelG1986: hay un problema en la carga masiva de versiculos, primero que sobreescribe lo que estaba antes, se supone que si ya tengo versiculos, esos los omite.

GitHub Copilot: # Solución para la carga masiva de versículos sin sobrescribir existentes

Veo que el problema está en la lógica de carga masiva de versículos, donde actualmente se ofrece reemplazar todo en lugar de respetar los versículos existentes. Vamos a modificar el componente `CargaMasivaVersiculos.js` para que:

1. Respete los versículos ya existentes
2. Solo agregue los nuevos
3. Informe al usuario sobre qué se ha añadido y qué se ha omitido

## Implementación del componente CargaMasivaVersiculos.js

````javascript
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
````

## Actualización del método en la base de datos

También necesitamos añadir el método `getCapituloById` a nuestro archivo `database.js`:

````javascript
// Agregar este método a la clase Database en tu archivo database.js
getCapituloById: (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM capitulos WHERE id = ?',
        [id],
        (_, result) => {
          if (result.rows.length > 0) {
            resolve(result.rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
},
````

## Cambios realizados

1. **Cambio principal**: Modificar la lógica para **respetar los versículos existentes** y solo añadir los nuevos.

2. **Nueva funcionalidad**:
   - Identificación de versículos por número
   - Separación clara entre versículos a agregar y versículos a omitir
   - Mensajes informativos mostrando qué se añadirá y qué se omitirá

3. **Mejoras adicionales**:
   - Si todos los versículos ya existen, se muestra un mensaje indicándolo
   - Si se proporciona un ID de capítulo en los parámetros, se preselecciona ese capítulo
   - Información más clara en la vista previa

Estos cambios permitirán agregar versículos masivamente sin riesgo de perder los existentes, respetando la integridad de los datos ya cargados.

Código similar encontrado con 1 tipo de licencia

RafaelG1986: Error al cargar datos: [TypeError: db.transaction is not a function (it is undefined)]

GitHub Copilot: # Corrección del error en database.js

El error que estás experimentando se debe a que hay dos implementaciones diferentes del método `getCapituloById` en tu archivo database.js. La segunda implementación al final del archivo está intentando usar sintaxis de SQLite (`db.transaction`), pero tu proyecto está utilizando AsyncStorage como base de datos.

## Solución: Eliminar el método duplicado

````javascript
// Elimina completamente este bloque de código al final del archivo:
// getCapituloById: (id) => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT * FROM capitulos WHERE id = ?',
//         [id],
//         (_, result) => {
//           if (result.rows.length > 0) {
//             resolve(result.rows.item(0));
//           } else {
//             resolve(null);
//         }
//       },
//       (_, error) => {
//         reject(error);
//       }
//     );
//   });
// });
// },
````

Ya tienes una implementación correcta del método `getCapituloById` en tu código (línea ~141) que sigue el mismo patrón que el resto de tu API:

```javascript
getCapituloById: async (id) => {
  const capitulos = await db.getCapitulos();
  return capitulos.find(c => c.id === id);
},
```

Esta es la implementación correcta que usa AsyncStorage y es coherente con el resto de tu código. El error surgió porque se añadió una segunda implementación incompatible al final del archivo.

## Recordatorio de importancia

Cuando añadimos nuevo código a tu proyecto, es importante asegurarse de que sea compatible con la arquitectura existente. En este caso:

1. Tu app usa AsyncStorage como base de datos simulada
2. No estás utilizando SQLite directamente
3. Todos tus métodos de base de datos son funciones asíncronas que acceden a AsyncStorage

Con esta corrección, la funcionalidad de carga masiva de versículos debería funcionar correctamente, respetando los versículos existentes.

RafaelG1986: actualizar repositorio.

GitHub Copilot: # Actualización del Repositorio Git

Ahora que has implementado correctamente la funcionalidad de carga masiva de versículos (que respeta los versículos existentes), es momento de actualizar tu repositorio Git para guardar todos estos cambios.

## Pasos para actualizar el repositorio

1. **Verificar los cambios realizados**:

```bash
git status
```

Este comando mostrará todos los archivos modificados y nuevos.

2. **Agregar todos los cambios al área de preparación**:

```bash
git add .
```

3. **Realizar el commit con un mensaje descriptivo**:

```bash
git commit -m "Implementación de carga masiva de versículos que respeta los existentes"
```

4. **Subir los cambios al repositorio remoto**:

```bash
git push origin main
```
(Si estás trabajando en otra rama, sustituye `main` por el nombre de tu rama)

## Resumen de las funcionalidades implementadas

La aplicación Biblia Interactiva ahora cuenta con:

✅ **Gestión completa de contenido bíblico**:
- Versiones bíblicas (Reina Valera, Nueva Versión Internacional, etc.)
- Libros bíblicos 
- Capítulos
- Versículos individuales
- **¡NUEVO!** Carga masiva de versículos sin sobrescribir los existentes

✅ **Interfaz de usuario amigable**:
- Pantalla principal con lista de versiones disponibles
- Lector bíblico con navegación entre libros y capítulos
- Panel administrativo para gestión de contenidos

✅ **Navegación fluida** entre todas las secciones de la aplicación

## Próximas mejoras sugeridas

Para continuar con el desarrollo podrías considerar:

1. Implementar la funcionalidad de búsqueda de versículos
2. Añadir marcadores y notas personales
3. Mejorar el rendimiento con paginación para grandes cantidades de datos
4. Incorporar opciones de estilo de texto (tamaño, fuente, temas)

¿Quieres que te ayude con alguna otra funcionalidad específica para tu aplicación?

RafaelG1986: Sí, en el CRUD, identifique que los capitulos y los vesiculos, no se los puedo integrar a la nueva version que ingrese, porque solamente me ingresa a la reina valera.

GitHub Copilot: # Solución: Integrar Capítulos y Versículos a Nuevas Versiones Bíblicas

El problema que identificas es importante: cuando creas una nueva versión bíblica (además de Reina Valera), no puedes asignarle libros, capítulos y versículos propios.

## La causa del problema

Analizando el modelo de datos en database.js:

1. Los libros están directamente vinculados a una versión (mediante `version_id`)
2. Los capítulos están vinculados a un libro (mediante `libro_id`)
3. Los versículos están vinculados a un capítulo (mediante `capitulo_id`)

Por tanto, cuando creas una nueva versión, debes crear nuevos libros específicamente para esa versión.

## Solución: Copiar libros entre versiones

Vamos a implementar una función que te permita copiar los libros (y opcionalmente sus capítulos y versículos) de una versión existente a una nueva.

### 1. Primero, añadamos la función en database.js

````javascript
// Añadir este método al objeto db después de deleteVersiculo

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
````

### 2. Creemos un componente para copiar libros entre versiones

````javascript
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
````

### 3. Actualizar AdminNavigator.js para incluir la nueva ruta

````javascript
// Importar el componente
import CopiarLibros from './versiones/CopiarLibros';

// Añadir la nueva ruta al Stack.Navigator
<Stack.Screen 
  name="CopiarLibros" 
  component={CopiarLibros} 
  options={{ headerTitle: 'Copiar Libros' }}
/>
````

### 4. Modificar la pantalla de edición de versiones (EditarVersion.js)

Vamos a añadir un botón para acceder a la nueva funcionalidad:

````javascript
// Añadir este botón después del formulario y antes del botón de guardar

<TouchableOpacity 
  style={styles.copyBooksButton}
  onPress={() => navigation.navigate('CopiarLibros', { targetVersionId: id })}
>
  <Ionicons name="copy-outline" size={20} color="white" />
  <Text style={styles.copyBooksButtonText}>Copiar libros de otra versión</Text>
</TouchableOpacity>

// Y añadir estos estilos
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
````

### 5. También modificar la pantalla de nueva versión (NuevaVersion.js)

````javascript
// Modificar la función handleSubmit para navegar a CopiarLibros después de crear la versión

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
````

## Beneficios de esta implementación

1. **Ahorro de tiempo**: Podrás utilizar los libros, capítulos y versículos existentes sin tener que recrearlos para cada nueva versión
  
2. **Flexibilidad**: Puedes elegir si quieres copiar solo la estructura (libros) o también el contenido (capítulos y versículos)

3. **Integración completa**: La funcionalidad está disponible tanto al crear nuevas versiones como al editar versiones existentes

Esta solución te permitirá integrar correctamente los capítulos y versículos a cualquier nueva versión bíblica que añadas, no solo a Reina Valera.

RafaelG1986: no me deja agregar capitulos y versiculos a la nueva version.

GitHub Copilot: # Corrección para añadir capítulos y versículos a nuevas versiones

Veo que has implementado la función de preguntar al usuario si desea copiar libros después de crear una nueva versión bíblica, pero aún hay un problema que impide que funcione correctamente. Vamos a solucionar esto implementando correctamente el componente `CopiarLibros.js` y haciendo las modificaciones necesarias.

## 1. Crear el componente CopiarLibros.js

````javascript
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
          Esta herramienta te permite copiar todos los libros de una versión bíblica existente a "{targetVersionName}".
          También puedes elegir copiar los capítulos y versículos asociados.
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
````

## 2. Agregar la función copyLibrosToVersion a database.js

````javascript
// Añadir después de deleteVersiculo y antes del cierre del objeto db

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
````

## 3. Actualizar AdminNavigator.js para incluir la ruta CopiarLibros

````javascript
// Asegúrate de importar CopiarLibros al principio del archivo
import CopiarLibros from './versiones/CopiarLibros';

// Y dentro del Stack.Navigator, añade esta ruta
<Stack.Screen 
  name="CopiarLibros" 
  component={CopiarLibros} 
  options={{ headerTitle: 'Copiar Libros' }}
/>
````

## 4. Actualizar EditarVersion.js para añadir un botón de copia

````javascript
// Añadir este botón después del formulario y antes del botón de guardar

<TouchableOpacity 
  style={styles.copyBooksButton}
  onPress={() => navigation.navigate('CopiarLibros', { targetVersionId: id })}
>
  <Ionicons name="copy-outline" size={20} color="white" />
  <Text style={styles.copyBooksButtonText}>Copiar libros de otra versión</Text>
</TouchableOpacity>

// Y añadir estos estilos
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
````

## Posibles problemas y soluciones

Si después de implementar estos cambios sigues teniendo problemas, podría deberse a:

1. **Error al navegar**: Verifica que la función `navigation.replace('CopiarLibros', { targetVersionId: newVersion.id })` en NuevaVersion.js funcione correctamente. Prueba cambiando `navigation.replace` por `navigation.navigate`.

2. **Error en la función de copia**: Añade logs detallados en la función `copyLibrosToVersion`:

````javascript
// En la función copyLibrosToVersion de database.js
console.log('Iniciando copia con sourceId:', sourceVersionId, 'targetId:', targetVersionId);
console.log('Libros origen encontrados:', librosSource.length);
// Y antes de cada bucle for
console.log('Libro a copiar:', libro);
````

3. **Verificar que la versión destino existe**: Añade una validación al inicio de la función:

````javascript
// En copyLibrosToVersion
const targetVersion = await db.getVersionById(targetVersionId);
if (!targetVersion) {
  throw new Error('La versión destino no existe');
}
````

Con estas implementaciones y sugerencias de solución de problemas, deberías poder copiar libros, capítulos y versículos de una versión existente a tu nueva versión bíblica.

RafaelG1986: no, lo mejor es implementar en cada ventana, sea libro, sea capitulo o versiculo, que version va a agregar.

GitHub Copilot: # Implementación de selección de versión en cada componente

Entiendo que prefieres un enfoque diferente: implementar selectores de versión en cada pantalla de creación (libro, capítulo, versículo) para que el usuario pueda especificar exactamente dónde quiere agregar el contenido. Este enfoque es más flexible y directo.

Vamos a implementar esto para cada componente:

## 1. Modificar NuevoLibro.js para seleccionar versión

````javascript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const NuevoLibro = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [abreviatura, setAbreviatura] = useState('');
  const [orden, setOrden] = useState('');
  const [testamento, setTestamento] = useState('Antiguo');
  const [versiones, setVersiones] = useState([]);
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const cargarVersiones = async () => {
      try {
        setLoading(true);
        const data = await db.getVersiones();
        setVersiones(data);
        if (data.length > 0) {
          setSelectedVersionId(data[0].id);
        }
      } catch (error) {
        console.error('Error al cargar versiones:', error);
        Alert.alert('Error', 'No se pudieron cargar las versiones bíblicas');
      } finally {
        setLoading(false);
      }
    };

    cargarVersiones();
  }, []);

  const validarFormulario = () => {
    if (!nombre.trim()) {
      Alert.alert('Error', 'El nombre es obligatorio');
      return false;
    }
    if (!abreviatura.trim()) {
      Alert.alert('Error', 'La abreviatura es obligatoria');
      return false;
    }
    if (!orden.trim() || isNaN(parseInt(orden))) {
      Alert.alert('Error', 'El orden debe ser un número válido');
      return false;
    }
    if (!selectedVersionId) {
      Alert.alert('Error', 'Debe seleccionar una versión bíblica');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validarFormulario()) return;

    try {
      setSubmitting(true);
      await db.addLibro({
        version_id: selectedVersionId,
        nombre,
        abreviatura,
        testamento,
        orden: parseInt(orden)
      });
      
      Alert.alert('Éxito', 'Libro creado correctamente', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.error('Error al guardar libro:', error);
      Alert.alert('Error', 'No se pudo guardar el libro');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versiones bíblicas...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevo Libro Bíblico</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Versión Bíblica:</Text>
        <View style={styles.pickerContainer}>
          {versiones.length > 0 ? (
            <Picker
              selectedValue={selectedVersionId}
              onValueChange={(value) => setSelectedVersionId(value)}
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
              No hay versiones disponibles. Cree una versión primero.
            </Text>
          )}
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Ej: Génesis"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Abreviatura:</Text>
        <TextInput
          style={styles.input}
          value={abreviatura}
          onChangeText={setAbreviatura}
          placeholder="Ej: Gen"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Orden:</Text>
        <TextInput
          style={styles.input}
          value={orden}
          onChangeText={setOrden}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Testamento:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={testamento}
            onValueChange={(value) => setTestamento(value)}
            style={styles.picker}
          >
            <Picker.Item label="Antiguo Testamento" value="Antiguo" />
            <Picker.Item label="Nuevo Testamento" value="Nuevo" />
          </Picker>
        </View>
      </View>
      
      <TouchableOpacity
        style={[styles.button, submitting && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={submitting || versiones.length === 0}
      >
        {submitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Guardar Libro</Text>
        )}
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
    marginBottom: 20,
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
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
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
    padding: 15,
    color: '#e74c3c',
    fontStyle: 'italic',
  },
});

export default NuevoLibro;
````

## 2. Modificar NuevoCapitulo.js para selección de versión y libro

````javascript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const NuevoCapitulo = ({ navigation, route }) => {
  const { libroId: libroIdParam } = route.params || {};
  
  const [numero, setNumero] = useState('');
  const [versiones, setVersiones] = useState([]);
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(libroIdParam || null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        
        // Cargar versiones
        const versionesData = await db.getVersiones();
        setVersiones(versionesData);
        
        if (versionesData.length > 0) {
          // Si ya tenemos un libroId, necesitamos obtener su versionId
          if (libroIdParam) {
            const libro = await db.getLibroById(libroIdParam);
            if (libro) {
              setSelectedVersionId(libro.version_id);
              setSelectedLibroId(libroIdParam);
              
              // Cargar libros de esa versión
              const librosData = await db.getLibrosByVersion(libro.version_id);
              setLibros(librosData);
            } else {
              // Si no se encuentra el libro, usar la primera versión
              setSelectedVersionId(versionesData[0].id);
              const librosData = await db.getLibrosByVersion(versionesData[0].id);
              setLibros(librosData);
              if (librosData.length > 0) {
                setSelectedLibroId(librosData[0].id);
              }
            }
          } else {
            // Si no hay libroId, usar primera versión y cargar sus libros
            setSelectedVersionId(versionesData[0].id);
            const librosData = await db.getLibrosByVersion(versionesData[0].id);
            setLibros(librosData);
            if (librosData.length > 0) {
              setSelectedLibroId(librosData[0].id);
            }
          }
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos necesarios');
      } finally {
        setLoading(false);
      }
    };
    
    cargarDatos();
  }, [libroIdParam]);

  const cargarLibrosPorVersion = async (versionId) => {
    try {
      setLoading(true);
      const librosData = await db.getLibrosByVersion(versionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        setSelectedLibroId(librosData[0].id);
      } else {
        setSelectedLibroId(null);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      Alert.alert('Error', 'No se pudieron cargar los libros');
    } finally {
      setLoading(false);
    }
  };

  const cambiarVersion = (versionId) => {
    setSelectedVersionId(versionId);
    cargarLibrosPorVersion(versionId);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(parseInt(numero))) {
      Alert.alert('Error', 'El número de capítulo debe ser un valor numérico');
      return false;
    }
    if (!selectedLibroId) {
      Alert.alert('Error', 'Debe seleccionar un libro');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validarFormulario()) return;

    try {
      setSubmitting(true);
      
      // Verificar si el capítulo ya existe
      const capitulos = await db.getCapitulosByLibro(selectedLibroId);
      const capituloExistente = capitulos.find(c => c.numero === parseInt(numero));
      
      if (capituloExistente) {
        Alert.alert('Error', `El capítulo ${numero} ya existe para este libro`);
        setSubmitting(false);
        return;
      }
      
      await db.addCapitulo({
        libro_id: selectedLibroId,
        numero: parseInt(numero)
      });
      
      Alert.alert('Éxito', 'Capítulo creado correctamente', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.error('Error al guardar capítulo:', error);
      Alert.alert('Error', 'No se pudo guardar el capítulo');
    } finally {
      setSubmitting(false);
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
      <Text style={styles.title}>Nuevo Capítulo</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Versión Bíblica:</Text>
        <View style={styles.pickerContainer}>
          {versiones.length > 0 ? (
            <Picker
              selectedValue={selectedVersionId}
              onValueChange={cambiarVersion}
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
              No hay versiones disponibles. Cree una versión primero.
            </Text>
          )}
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Libro:</Text>
        <View style={styles.pickerContainer}>
          {libros.length > 0 ? (
            <Picker
              selectedValue={selectedLibroId}
              onValueChange={(value) => setSelectedLibroId(value)}
              style={styles.picker}
              enabled={libros.length > 0}
            >
              {libros.map(libro => (
                <Picker.Item 
                  key={libro.id} 
                  label={libro.nombre} 
                  value={libro.id} 
                />
              ))}
            </Picker>
          ) : (
            <Text style={styles.noDataText}>
              No hay libros disponibles para esta versión.
            </Text>
          )}
        </View>
      </View>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de Capítulo:</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 1"
          keyboardType="numeric"
        />
      </View>
      
      <TouchableOpacity
        style={[
          styles.button, 
          (submitting || !selectedLibroId) && styles.disabledButton
        ]}
        onPress={handleSubmit}
        disabled={submitting || !selectedLibroId}
      >
        {submitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Guardar Capítulo</Text>
        )}
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
    marginBottom: 20,
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
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#a0a0a0',
  }
});

export default NuevoCapitulo;
````

## 3. Modificar NuevoVersiculo.js para selección de versión, libro y capítulo

````javascript
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
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const NuevoVersiculo = ({ navigation, route }) => {
  const { capituloId: capituloIdParam } = route.params || {};
  
  const [numero, setNumero] = useState('');
  const [texto, setTexto] = useState('');
  
  const [versiones, setVersiones] = useState([]);
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  
  const [libros, setLibros] = useState([]);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  
  const [capitulos, setCapitulos] = useState([]);
  const [selectedCapituloId, setSelectedCapituloId] = useState(capituloIdParam || null);
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        
        // Cargar versiones
        const versionesData = await db.getVersiones();
        setVersiones(versionesData);
        
        if (versionesData.length > 0) {
          // Si ya tenemos un capituloId, tenemos que obtener su libro y versión
          if (capituloIdParam) {
            const capitulo = await db.getCapituloById(capituloIdParam);
            if (capitulo) {
              const libro = await db.getLibroById(capitulo.libro_id);
              if (libro) {
                // Establecer la versión primero
                setSelectedVersionId(libro.version_id);
                
                // Cargar libros de esa versión
                const librosData = await db.getLibrosByVersion(libro.version_id);
                setLibros(librosData);
                
                // Establecer el libro
                setSelectedLibroId(libro.id);
                
                // Cargar capítulos de ese libro
                const capitulosData = await db.getCapitulosByLibro(libro.id);
                setCapitulos(capitulosData);
                
                // Establecer el capítulo
                setSelectedCapituloId(capituloIdParam);
              }
            } else {
              await cargarDatosPorDefecto(versionesData);
            }
          } else {
            await cargarDatosPorDefecto(versionesData);
          }
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        Alert.alert('Error', 'No se pudieron cargar los datos necesarios');
      } finally {
        setLoading(false);
      }
    };
    
    const cargarDatosPorDefecto = async (versiones) => {
      // Usar la primera versión
      const primerVersionId = versiones[0].id;
      setSelectedVersionId(primerVersionId);
      
      // Cargar libros de esa versión
      const librosData = await db.getLibrosByVersion(primerVersionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        // Usar el primer libro
        setSelectedLibroId(librosData[0].id);
        
        // Cargar capítulos de ese libro
        const capitulosData = await db.getCapitulosByLibro(librosData[0].id);
        setCapitulos(capitulosData);
        
        if (capitulosData.length > 0) {
          // Usar el primer capítulo
          setSelectedCapituloId(capitulosData[0].id);
        }
      }
    };
    
    cargarDatos();
  }, [capituloIdParam]);

  const cargarLibrosPorVersion = async (versionId) => {
    try {
      setLoading(true);
      const librosData = await db.getLibrosByVersion(versionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        setSelectedLibroId(librosData[0].id);
        
        // Al cambiar el libro, también debemos actualizar los capítulos
        const capitulosData = await db.getCapitulosByLibro(librosData[0].id);
        setCapitulos(capitulosData);
        
        if (capitulosData.length > 0) {
          setSelectedCapituloId(capitulosData[0].id);
        } else {
          setSelectedCapituloId(null);
        }
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

  const cambiarVersion = (versionId) => {
    setSelectedVersionId(versionId);
    cargarLibrosPorVersion(versionId);
  };

  const cambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    cargarCapitulosPorLibro(libroId);
  };

  const validarFormulario = () => {
    if (!numero.trim() || isNaN(parseInt(numero))) {
      Alert.alert('Error', 'El número de versículo debe ser un valor numérico');
      return false;
    }
    if (!texto.trim()) {
      Alert.alert('Error', 'El texto del versículo es obligatorio');
      return false;
    }
    if (!selectedCapituloId) {
      Alert.alert('Error', 'Debe seleccionar un capítulo');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validarFormulario()) return;

    try {
      setSubmitting(true);
      
      // Verificar si el versículo ya existe
      const versiculos = await db.getVersiculosByCapitulo(selectedCapituloId);
      const versiculoExistente = versiculos.find(v => v.numero === parseInt(numero));
      
      if (versiculoExistente) {
        Alert.alert('Error', `El versículo ${numero} ya existe para este capítulo`);
        setSubmitting(false);
        return;
      }
      
      await db.addVersiculo({
        capitulo_id: selectedCapituloId,
        numero: parseInt(numero),
        texto: texto.trim()
      });
      
      Alert.alert('Éxito', 'Versículo creado correctamente', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.error('Error al guardar versículo:', error);
      Alert.alert('Error', 'No se pudo guardar el versículo');
    } finally {
      setSubmitting(false);
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Nuevo Versículo</Text>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Versión Bíblica:</Text>
          <View style={styles.pickerContainer}>
            {versiones.length > 0 ? (
              <Picker
                selectedValue={selectedVersionId}
                onValueChange={cambiarVersion}
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
                No hay versiones disponibles. Cree una versión primero.
              </Text>
            )}
          </View>
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Libro:</Text>
          <View style={styles.pickerContainer}>
            {libros.length > 0 ? (
              <Picker
                selectedValue={selectedLibroId}
                onValueChange={cambiarLibro}
                style={styles.picker}
                enabled={libros.length > 0}
              >
                {libros.map(libro => (
                  <Picker.Item 
                    key={libro.id} 
                    label={libro.nombre} 
                    value={libro.id} 
                  />
                ))}
              </Picker>
            ) : (
              <Text style={styles.noDataText}>
                No hay libros disponibles para esta versión.
              </Text>
            )}
          </View>
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Capítulo:</Text>
          <View style={styles.pickerContainer}>
            {capitulos.length > 0 ? (
              <Picker
                selectedValue={selectedCapituloId}
                onValueChange={(value) => setSelectedCapituloId(value)}
                style={styles.picker}
                enabled={capitulos.length > 0}
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
                No hay capítulos disponibles para este libro.
              </Text>
            )}
          </View>
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Número de Versículo:</Text>
          <TextInput
            style={styles.input}
            value={numero}
            onChangeText={setNumero}
            placeholder="Ej: 1"
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Texto del Versículo:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={texto}
            onChangeText={setTexto}
            placeholder="Texto del versículo"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
        </View>
        
        <TouchableOpacity
          style={[
            styles.button, 
            (submitting || !selectedCapituloId) && styles.disabledButton
          ]}
          onPress={handleSubmit}
          disabled={submitting || !selectedCapituloId}
        >
          {submitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Guardar Versículo</Text>
          )}
        </TouchableOpacity>
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
    padding: 16,
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
    marginBottom: 20,
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
    minHeight: 120,
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
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#a0a0a0',
  }
});

export default NuevoVersiculo;
````

## Ventajas de este enfoque

1. **Mayor control** - El usuario puede elegir exactamente qué versión, libro o capítulo quiere utilizar para cada elemento nuevo.

2. **Flexibilidad** - No estás limitado a copiar estructuras completas; puedes personalizar el contenido libro por libro o capítulo por capítulo.

3. **UX consistente** - Todas las pantallas de creación siguen el mismo patrón de selección jerárquica.

4. **Prevención de errores** - Al seleccionar la versión desde el principio, se evitan confusiones sobre dónde se está añadiendo el contenido.

Con estos cambios, tendrás un sistema más flexible que permite crear libros, capítulos y versículos en cualquier versión bíblica de tu aplicación.

RafaelG1986: Necesitamos crear una gestion mixta, en una ventana crear todo, un libro, un capitulo, un versiculo o versiculos.

GitHub Copilot: # Gestor Bíblico Integrado: Creando Todo en Una Ventana

Voy a crear un componente integrado que permita gestionar versiones, libros, capítulos y versículos en una sola pantalla, con un flujo paso a paso pero flexible.

## Implementación del nuevo componente GestorBiblicoIntegrado.js

````javascript
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
````

## Añadir la ruta al AdminNavigator.js

````javascript
// Importar el nuevo componente
import GestorBiblicoIntegrado from './GestorBiblicoIntegrado';

// Añadir dentro de Stack.Navigator
<Stack.Screen 
  name="GestorBiblicoIntegrado" 
  component={GestorBiblicoIntegrado} 
  options={{ headerTitle: 'Gestor Bíblico Integrado' }}
/>
````

## Añadir botón de acceso en AdminScreen.js

````javascript
// Añadir un nuevo botón para acceder al gestor integrado
<TouchableOpacity
  style={styles.menuItem}
  onPress={() => navigation.navigate('GestorBiblicoIntegrado')}
>
  <View style={[styles.iconContainer, { backgroundColor: '#8e44ad' }]}>
    <Ionicons name="layers" size={28} color="white" />
  </View>
  <Text style={styles.menuItemText}>Gestor Integrado</Text>
  <Ionicons name="chevron-forward" size={22} color="#999" />
</TouchableOpacity>
````

## Características del Gestor Bíblico Integrado

1. **Proceso guiado paso a paso con 4 etapas**:
   - Selección/creación de versión bíblica
   - Selección/creación de libro
   - Selección/creación de capítulo
   - Añadir versículos (individual o masivamente)

2. **Interfaz intuitiva**:
   - Indicador visual de progreso
   - Opciones para usar elementos existentes o crear nuevos
   - Vista previa de versículos antes de guardarlos
   - Resumen de versículos añadidos durante la sesión

3. **Flexibilidad**:
   - Posibilidad de retroceder a pasos anteriores
   - Navegación intuitiva entre pasos 
   - Opciones de carga individual o masiva de versículos

4. **Validaciones**:
   - Comprueba datos obligatorios
   - Detecta versículos duplicados
   - Verifica el formato en carga masiva

Esta solución te permite realizar todo el proceso de creación de contenido bíblico en una sola ventana, con un flujo lógico y guiado que facilita enormemente la administración de tu aplicación.

RafaelG1986: Ahora que podemos hacer con los demas gestores, por ejemplo: en gestionar libros, me diferencia al comienzo las versiones, pero en gestionar capitulos, no me hace la acepcion de que version es la que esta cargando, al comienzo, sin ir a +nuevo; y gestionar versiculos, me suma todos los libros de todas las versiones, cuando solamente deberia verse la version que eliga.

GitHub Copilot: # Mejora de los gestores para manejar correctamente las versiones

Tienes razón. Actualmente hay inconsistencias en cómo se gestionan las versiones en las diferentes pantallas. Vamos a mejorar cada gestor para mantener una experiencia coherente y organizada.

## 1. Modificar CapitulosList.js para filtrar por versión

````javascript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const CapitulosList = ({ navigation }) => {
  const [capitulos, setCapitulos] = useState([]);
  const [libros, setLibros] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Cargar datos iniciales
  useEffect(() => {
    cargarVersiones();
    
    // Actualizar al volver a la pantalla
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedVersionId) {
        cargarLibrosPorVersion(selectedVersionId);
        if (selectedLibroId) {
          cargarCapitulosPorLibro(selectedLibroId);
        }
      }
    });

    return unsubscribe;
  }, [navigation]);

  // Cargar versiones bíblicas disponibles
  const cargarVersiones = async () => {
    try {
      setLoading(true);
      const versionesData = await db.getVersiones();
      setVersiones(versionesData);
      
      if (versionesData.length > 0) {
        setSelectedVersionId(versionesData[0].id);
        await cargarLibrosPorVersion(versionesData[0].id);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar versiones:', error);
      Alert.alert('Error', 'No se pudieron cargar las versiones bíblicas');
      setLoading(false);
    }
  };

  // Cargar libros de una versión específica
  const cargarLibrosPorVersion = async (versionId) => {
    try {
      const librosData = await db.getLibrosByVersion(versionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        setSelectedLibroId(librosData[0].id);
        await cargarCapitulosPorLibro(librosData[0].id);
      } else {
        setCapitulos([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      Alert.alert('Error', 'No se pudieron cargar los libros');
      setLoading(false);
    }
  };

  // Cargar capítulos de un libro específico
  const cargarCapitulosPorLibro = async (libroId) => {
    try {
      setRefreshing(true);
      const capitulosData = await db.getCapitulosByLibro(libroId);
      
      // Enriquecer datos con información del libro
      const capitulosEnriquecidos = await Promise.all(capitulosData.map(async (capitulo) => {
        const libro = await db.getLibroById(capitulo.libro_id);
        return {
          ...capitulo,
          libroNombre: libro ? libro.nombre : 'Desconocido'
        };
      }));
      
      setCapitulos(capitulosEnriquecidos);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      Alert.alert('Error', 'No se pudieron cargar los capítulos');
      setRefreshing(false);
      setLoading(false);
    }
  };

  // Cambiar la versión seleccionada
  const handleCambiarVersion = (versionId) => {
    setSelectedVersionId(versionId);
    cargarLibrosPorVersion(versionId);
  };

  // Cambiar el libro seleccionado
  const handleCambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    cargarCapitulosPorLibro(libroId);
  };

  // Eliminar un capítulo
  const handleEliminarCapitulo = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro de que desea eliminar este capítulo? Esta acción eliminará también todos los versículos asociados.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteCapitulo(id);
              setCapitulos(capitulos.filter(c => c.id !== id));
              Alert.alert('Éxito', 'Capítulo eliminado correctamente');
            } catch (error) {
              console.error('Error al eliminar capítulo:', error);
              Alert.alert('Error', 'No se pudo eliminar el capítulo');
            }
          }
        }
      ]
    );
  };

  // Navegación a la pantalla de edición
  const handleEditarCapitulo = (capitulo) => {
    navigation.navigate('EditarCapitulo', { id: capitulo.id });
  };

  // Renderizar un ítem de la lista
  const renderItem = ({ item }) => (
    <View style={styles.capituloItem}>
      <View style={styles.capituloInfo}>
        <Text style={styles.capituloNumero}>Capítulo {item.numero}</Text>
        <Text style={styles.libroNombre}>{item.libroNombre}</Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.editButton]}
          onPress={() => handleEditarCapitulo(item)}
        >
          <Ionicons name="create-outline" size={20} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => handleEliminarCapitulo(item.id)}
        >
          <Ionicons name="trash-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando capítulos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.selectors}>
        {/* Selector de Versión */}
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Versión:</Text>
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
              <Text style={styles.noDataText}>No hay versiones disponibles</Text>
            )}
          </View>
        </View>
        
        {/* Selector de Libro */}
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Libro:</Text>
          <View style={styles.pickerContainer}>
            {libros.length > 0 ? (
              <Picker
                selectedValue={selectedLibroId}
                onValueChange={handleCambiarLibro}
                style={styles.picker}
                enabled={libros.length > 0}
              >
                {libros.map(libro => (
                  <Picker.Item 
                    key={libro.id} 
                    label={libro.nombre} 
                    value={libro.id} 
                  />
                ))}
              </Picker>
            ) : (
              <Text style={styles.noDataText}>
                No hay libros para esta versión
              </Text>
            )}
          </View>
        </View>
      </View>
      
      {capitulos.length > 0 ? (
        <FlatList
          data={capitulos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing={refreshing}
          onRefresh={() => cargarCapitulosPorLibro(selectedLibroId)}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="book-outline" size={60} color="#ccc" />
          <Text style={styles.emptyStateText}>
            No hay capítulos para este libro
          </Text>
        </View>
      )}
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NuevoCapitulo', { 
          libroId: selectedLibroId 
        })}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 16,
  },
  selectors: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  selectorContainer: {
    marginBottom: 12,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 6,
  },
  pickerContainer: {
    backgroundColor: '#f9f9f9',
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
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  capituloItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  capituloInfo: {
    flex: 1,
  },
  capituloNumero: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  libroNombre: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  }
});

export default CapitulosList;
````

## 2. Modificar VersiculosList.js para filtrar por versión

````javascript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { db } from '../../../database/database';

const VersiculosList = ({ navigation }) => {
  const [versiculos, setVersiculos] = useState([]);
  const [versiones, setVersiones] = useState([]);
  const [libros, setLibros] = useState([]);
  const [capitulos, setCapitulos] = useState([]);
  
  const [selectedVersionId, setSelectedVersionId] = useState(null);
  const [selectedLibroId, setSelectedLibroId] = useState(null);
  const [selectedCapituloId, setSelectedCapituloId] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Cargar datos iniciales
  useEffect(() => {
    cargarVersiones();
    
    // Actualizar al volver a la pantalla
    const unsubscribe = navigation.addListener('focus', () => {
      if (selectedCapituloId) {
        cargarVersiculosPorCapitulo(selectedCapituloId);
      }
    });

    return unsubscribe;
  }, [navigation]);

  // Cargar versiones bíblicas disponibles
  const cargarVersiones = async () => {
    try {
      setLoading(true);
      const versionesData = await db.getVersiones();
      setVersiones(versionesData);
      
      if (versionesData.length > 0) {
        setSelectedVersionId(versionesData[0].id);
        await cargarLibrosPorVersion(versionesData[0].id);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar versiones:', error);
      Alert.alert('Error', 'No se pudieron cargar las versiones bíblicas');
      setLoading(false);
    }
  };

  // Cargar libros de una versión específica
  const cargarLibrosPorVersion = async (versionId) => {
    try {
      const librosData = await db.getLibrosByVersion(versionId);
      setLibros(librosData);
      
      if (librosData.length > 0) {
        setSelectedLibroId(librosData[0].id);
        await cargarCapitulosPorLibro(librosData[0].id);
      } else {
        setCapitulos([]);
        setVersiculos([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar libros:', error);
      Alert.alert('Error', 'No se pudieron cargar los libros');
      setLoading(false);
    }
  };

  // Cargar capítulos de un libro específico
  const cargarCapitulosPorLibro = async (libroId) => {
    try {
      const capitulosData = await db.getCapitulosByLibro(libroId);
      setCapitulos(capitulosData);
      
      if (capitulosData.length > 0) {
        setSelectedCapituloId(capitulosData[0].id);
        await cargarVersiculosPorCapitulo(capitulosData[0].id);
      } else {
        setVersiculos([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al cargar capítulos:', error);
      Alert.alert('Error', 'No se pudieron cargar los capítulos');
      setLoading(false);
    }
  };

  // Cargar versículos de un capítulo específico
  const cargarVersiculosPorCapitulo = async (capituloId) => {
    try {
      setRefreshing(true);
      const versiculosData = await db.getVersiculosByCapitulo(capituloId);
      setVersiculos(versiculosData);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar versículos:', error);
      Alert.alert('Error', 'No se pudieron cargar los versículos');
      setRefreshing(false);
      setLoading(false);
    }
  };

  // Manejar cambios en los selectores
  const handleCambiarVersion = (versionId) => {
    setSelectedVersionId(versionId);
    cargarLibrosPorVersion(versionId);
  };

  const handleCambiarLibro = (libroId) => {
    setSelectedLibroId(libroId);
    cargarCapitulosPorLibro(libroId);
  };

  const handleCambiarCapitulo = (capituloId) => {
    setSelectedCapituloId(capituloId);
    cargarVersiculosPorCapitulo(capituloId);
  };

  // Eliminar un versículo
  const handleEliminarVersiculo = async (id) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Está seguro de que desea eliminar este versículo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await db.deleteVersiculo(id);
              setVersiculos(versiculos.filter(v => v.id !== id));
              Alert.alert('Éxito', 'Versículo eliminado correctamente');
            } catch (error) {
              console.error('Error al eliminar versículo:', error);
              Alert.alert('Error', 'No se pudo eliminar el versículo');
            }
          }
        }
      ]
    );
  };

  // Navegación a la pantalla de edición
  const handleEditarVersiculo = (versiculo) => {
    navigation.navigate('EditarVersiculo', { id: versiculo.id });
  };

  // Filtrar versículos por búsqueda
  const versiculosFiltrados = versiculos.filter(v => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      v.texto.toLowerCase().includes(query) ||
      v.numero.toString().includes(query)
    );
  });

  // Renderizar un ítem de la lista
  const renderItem = ({ item }) => (
    <View style={styles.versiculoItem}>
      <View style={styles.versiculoInfo}>
        <Text style={styles.versiculoNumero}>{item.numero}</Text>
        <Text style={styles.versiculoTexto}>{item.texto}</Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.editButton]}
          onPress={() => handleEditarVersiculo(item)}
        >
          <Ionicons name="create-outline" size={20} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => handleEliminarVersiculo(item.id)}
        >
          <Ionicons name="trash-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Cargando versículos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.selectors}>
        {/* Selector de Versión */}
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Versión:</Text>
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
              <Text style={styles.noDataText}>No hay versiones disponibles</Text>
            )}
          </View>
        </View>
        
        {/* Selector de Libro */}
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Libro:</Text>
          <View style={styles.pickerContainer}>
            {libros.length > 0 ? (
              <Picker
                selectedValue={selectedLibroId}
                onValueChange={handleCambiarLibro}
                style={styles.picker}
                enabled={libros.length > 0}
              >
                {libros.map(libro => (
                  <Picker.Item 
                    key={libro.id} 
                    label={libro.nombre} 
                    value={libro.id} 
                  />
                ))}
              </Picker>
            ) : (
              <Text style={styles.noDataText}>
                No hay libros para esta versión
              </Text>
            )}
          </View>
        </View>
        
        {/* Selector de Capítulo */}
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Capítulo:</Text>
          <View style={styles.pickerContainer}>
            {capitulos.length > 0 ? (
              <Picker
                selectedValue={selectedCapituloId}
                onValueChange={handleCambiarCapitulo}
                style={styles.picker}
                enabled={capitulos.length > 0}
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
                No hay capítulos para este libro
              </Text>
            )}
          </View>
        </View>
        
        {/* Buscador */}
        {versiculos.length > 0 && (
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Buscar versículos..."
              placeholderTextColor="#999"
            />
            {searchQuery ? (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color="#666" />
              </TouchableOpacity>
            ) : null}
          </View>
        )}
      </View>
      
      {versiculos.length > 0 ? (
        <FlatList
          data={versiculosFiltrados}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing={refreshing}
          onRefresh={() => cargarVersiculosPorCapitulo(selectedCapituloId)}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="document-text-outline" size={60} color="#ccc" />
          <Text style={styles.emptyStateText}>
            No hay versículos para este capítulo
          </Text>
        </View>
      )}
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NuevoVersiculo', { 
          capituloId: selectedCapituloId 
        })}
        disabled={!selectedCapituloId}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 16,
  },
  selectors: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  selectorContainer: {
    marginBottom: 12,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 6,
  },
  pickerContainer: {
    backgroundColor: '#f9f9f9',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: '#333',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  versiculoItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  versiculoInfo: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  versiculoNumero: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginRight: 12,
    minWidth: 30,
    textAlign: 'right',
  },
  versiculoTexto: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    lineHeight: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#4a90e2',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  }
});

export default VersiculosList;
````

## 3. Actualizar AdminScreen.js para mejorar el diseño del botón del Gestor Integrado

````javascript
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
        
        <TouchableOpacity 
          style={styles.adminButton}
          onPress={() => navigation.navigate('CapitulosList')}
        >
          <Ionicons name="bookmark" size={24} color="white" style={styles.buttonIcon} />
          <Text style={styles.adminButtonText}>Gestionar Capítulos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.adminButton}
          onPress={() => navigation.navigate('VersiculosList')}
        >
          <Ionicons name="document-text" size={24} color="white" style={styles.buttonIcon} />
          <Text style={styles.adminButtonText}>Gestionar Versículos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.adminButton, styles.integratedButton]}
          onPress={() => navigation.navigate('GestorBiblicoIntegrado')}
        >
          <Ionicons name="layers" size={24} color="white" style={styles.buttonIcon} />
          <Text style={styles.adminButtonText}>Gestor Integrado</Text>
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
  integratedButton: {
    backgroundColor: '#8e44ad', // Color diferente para destacar el gestor integrado
    marginTop: 10, // Espacio adicional para separarlo visualmente
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
````

## Beneficios de estos cambios

1. **Consistencia en la experiencia**: Ahora todos los gestores tendrán una experiencia coherente donde primero selecciona la versión, luego (si aplica) el libro, y finalmente trabaja con los elementos específicos.

2. **Organización por versiones**: Los contenidos quedan claramente organizados por versión bíblica, evitando mezclar versículos o capítulos de distintas versiones.

3. **Flujo de trabajo más lógico**: Sigue la jerarquía natural: Versión > Libro > Capítulo > Versículo.

4. **Facilidad de uso**: El usuario verá exactamente qué versión está gestionando en cada momento, eliminando confusiones.

5. **Búsqueda contextualizada**: En el caso de versículos, la búsqueda ahora se hace dentro del contexto de la versión y capítulo seleccionados.

Con estos cambios, la aplicación tendrá una interfaz más coherente y una organización de datos más clara para los usuarios que gestionan el contenido bíblico.

RafaelG1986: Listo, tenemos la primera version estable de la aplicacion.

GitHub Copilot: # ¡Felicidades por la primera versión estable! 🎉

Has logrado implementar una aplicación bíblica completa con todas las funcionalidades CRUD necesarias para gestionar versiones, libros, capítulos y versículos. La estructura jerárquica queda clara y organizada, y el nuevo Gestor Bíblico Integrado ofrece un flujo de trabajo muy práctico para agilizar la carga de contenido.

## Logros destacados de esta versión

1. **Estructura de datos coherente** - Organización jerárquica clara: Versión → Libro → Capítulo → Versículo
2. **Interfaz consistente** - Todos los gestores siguen el mismo patrón de selección y visualización
3. **Gestor Integrado** - Facilita enormemente la carga de contenido con un proceso guiado paso a paso
4. **Validaciones robustas** - Previenen errores en la entrada de datos y duplicados
5. **Experiencia de usuario mejorada** - Filtros, búsquedas y organización lógica del contenido

## Posibles mejoras para futuras versiones

Si estás considerando continuar el desarrollo, aquí hay algunas ideas:

1. **Importación/exportación masiva** - Añadir funcionalidad para importar textos bíblicos desde archivos CSV/JSON
2. **Sistema de notas** - Permitir añadir notas o comentarios a los versículos
3. **Marcado y favoritos** - Funcionalidad para marcar versículos favoritos
4. **Referencias cruzadas** - Permitir vincular versículos relacionados entre sí
5. **Estadísticas y dashboard** - Un panel con estadísticas de contenido por versión

## Conclusión

Has establecido una base sólida para tu aplicación bíblica con todas las herramientas necesarias para gestionar el contenido. El código está bien estructurado y la interfaz de usuario es intuitiva y funcional.

¡Enhorabuena por este importante hito y mucho éxito con tu proyecto!

RafaelG1986: Actualicemos repositorio.

GitHub Copilot: # Actualización del Repositorio de la Aplicación Bíblica

Para mantener un control de versiones adecuado de tu aplicación, vamos a preparar y actualizar un repositorio Git. Esto te permitirá hacer seguimiento de los cambios, colaborar con otros desarrolladores y tener un respaldo seguro de tu código.

## Inicialización del Repositorio (si es la primera vez)

Si aún no has inicializado un repositorio Git para tu proyecto:

```bash
# Navegar al directorio raíz del proyecto
cd c:\AppCel\MiPrimeraApp

# Inicializar el repositorio Git
git init
```

## Configuración del archivo .gitignore

Crea un archivo `.gitignore` en la raíz del proyecto para evitar que archivos innecesarios se incluyan en el repositorio:

```bash
# Crear archivo .gitignore
echo "# Dependencias y archivos temporales
node_modules/
.expo/
dist/
npm-debug.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
web-build/
.DS_Store
.env

# Archivos de configuración específicos del IDE
.idea/
.vscode/
*.swp
*.swo
" > .gitignore
```

## Hacer commit de los cambios actuales

```bash
# Agregar todos los archivos al staging
git add .

# Crear un commit con un mensaje descriptivo
git commit -m "Primera versión estable: Aplicación Bíblica con gestión completa de versiones, libros, capítulos y versículos"
```

## Conectar con un repositorio remoto (GitHub, GitLab, etc.)

Si ya tienes un repositorio remoto creado:

```bash
# Añadir el repositorio remoto (reemplaza la URL con la de tu repositorio)
git remote add origin https://github.com/tuusuario/MiPrimeraApp.git

# Enviar los cambios al repositorio remoto
git push -u origin main  # o master, según la rama predeterminada de tu repositorio
```

Si necesitas crear un nuevo repositorio:

1. Ve a [GitHub](https://github.com/) y crea una cuenta si no la tienes
2. Haz clic en el botón "New repository"
3. Nombra tu repositorio (por ejemplo, "aplicacion-biblica")
4. Deja la opción "Initialize this repository with a README" sin marcar
5. Haz clic en "Create repository"
6. Sigue las instrucciones que GitHub te proporciona para subir un repositorio existente

## Etiquetado de la versión estable

Es una buena práctica etiquetar las versiones estables de tu aplicación:

```bash
# Crear una etiqueta para la versión 1.0.0
git tag -a v1.0.0 -m "Primera versión estable de la aplicación bíblica"

# Enviar la etiqueta al repositorio remoto
git push origin v1.0.0
```

## Estructura de ramas recomendada para desarrollo futuro

Para el desarrollo continuo, considera utilizar esta estructura de ramas:

- `main` (o `master`): Código estable y probado
- `develop`: Rama de desarrollo activo
- `feature/nombre-caracteristica`: Ramas para nuevas características
- `bugfix/nombre-bug`: Ramas para corrección de errores
- `release/v1.x.x`: Ramas para preparar nuevas versiones

## Resumen

Con estos pasos tendrás tu repositorio Git configurado correctamente y la primera versión estable de tu aplicación bíblica registrada. Esto te permitirá:

1. Tener un historial completo de cambios
2. Colaborar más fácilmente con otros desarrolladores
3. Revertir cambios si es necesario
4. Trabajar en nuevas características sin afectar el código estable
5. Mantener versiones etiquetadas para futuras referencias

¿Necesitas ayuda con algún paso específico del proceso de actualización del repositorio?