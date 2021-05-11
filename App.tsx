import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Landing from './src/pages/landing';
import Home from './src/pages/home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Buscar" component={Home} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}
