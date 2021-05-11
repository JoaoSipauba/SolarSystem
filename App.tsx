import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Landing from './src/pages/landing';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>

  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Landing" component={Landing} options={{ tabBarVisible: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}