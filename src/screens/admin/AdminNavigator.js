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
import CapitulosList from './capitulos/CapitulosList';
import NuevoCapitulo from './capitulos/NuevoCapitulo';
import EditarCapitulo from './capitulos/EditarCapitulo';
import CargaMasivaVersiculos from './versiculos/CargaMasivaVersiculos';
import CopiarLibros from './versiones/CopiarLibros';
import GestorBiblicoIntegrado from './GestorBiblicoIntegrado';

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
      <Stack.Screen 
        name="CopiarLibros" 
        component={CopiarLibros} 
        options={{ headerTitle: 'Copiar Libros' }}
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
      <Stack.Screen 
        name="CargaMasivaVersiculos" 
        component={CargaMasivaVersiculos} 
        options={{ headerTitle: 'Carga Masiva de Versículos' }}
      />

      {/* Rutas para Capítulos */}
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

      {/* Ruta para Gestor Bíblico Integrado */}
      <Stack.Screen 
        name="GestorBiblicoIntegrado" 
        component={GestorBiblicoIntegrado} 
        options={{ headerTitle: 'Gestor Bíblico Integrado' }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;