import React from 'react';
import { Image, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import backgroundImg from '../../../assets/Background.png';
import { styles as Styles } from './styles'

export default function Home() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={Styles.container}>
      {/* <Image source={backgroundImg} style={Styles.image} /> */}
    </View>
  );
}
