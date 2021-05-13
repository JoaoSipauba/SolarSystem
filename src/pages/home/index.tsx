import React from 'react';
import { Image, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/Feather';

import backgroundImg from '../../../assets/home-bg.svg';
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
      <Image source={backgroundImg} style={Styles.image} />
      <View style={Styles.appbar}>
        <View style={Styles.appbarTitle}>
          <Text style={Styles.appbarTitleRegular}>Olá, </Text>
          <Text style={Styles.appbarTitleBold}>João Sipauba</Text>
        </View>
        <Text style={Styles.appbarText}>O que você vai aprender hoje?</Text>
        <Icon style={Styles.appbarIcon} name="settings" color="#fff" size={25} />
      </View>
    </View>
  );
}
