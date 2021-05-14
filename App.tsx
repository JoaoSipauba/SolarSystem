import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Landing from './src/pages/landing';
import Home from './src/pages/home';
import Search from './src/pages/search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';

          if (route.name === 'Inicio') {
            iconName = 'home'
          } else if (route.name === 'Buscar') {
            iconName = 'search'
          } else if (route.name === 'Salvos') {
            iconName = 'star'
          } else if (route.name === 'Imagens') {
            iconName = 'image'
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: styles.tabbar
      }}>
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Buscar" component={Search} />
      <Tab.Screen name="Salvos" component={Home} />
      <Tab.Screen name="Imagens" component={Home} />
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


const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#151515',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopWidth: 0,
    position: 'absolute',
    paddingTop: 10,
    paddingBottom: 10,
    height: 65,
  },
})