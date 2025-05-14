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