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