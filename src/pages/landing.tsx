import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import backgroundImg from '../../assets/Background.png';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function Landing() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Image source={backgroundImg} style={styles.image} />
      <View>
        <Text style={styles.subtitle}>Aperte o cinto</Text>
        <Text style={styles.title} >Comece sua jornada pelo sistema solar.</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: 'absolute'
  },
  subtitle: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
    opacity: 0.65,
  },
  title: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 32,
    lineHeight: 37.5,
    textAlign: 'center',
    maxWidth: '80%',
  }
});
