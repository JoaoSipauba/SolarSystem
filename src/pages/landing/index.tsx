import React from 'react';
import { Image, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Icon from "react-native-vector-icons/Feather";

import backgroundImg from '../../../assets/Background.png';
import { styles, styles as Styles } from './styles'

export default function Landing() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={Styles.container}>
      <Image source={backgroundImg} style={Styles.image} />
      <View>
        <Text style={Styles.subtitle}>Aperte o cinto</Text>
        <Text style={Styles.title} >Comece sua jornada pelo sistema solar.</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Text style={styles.buttonGroupTitle}>Pronto para a decolagem?</Text>
        <LinearGradient colors={['#EF5F53', '#FA8F70']} style={styles.button}>
          <Text style={styles.buttonText}>Começar agora</Text>
          <Icon name="arrow-right" size={24} color="white" />
        </LinearGradient>
      </View>
    </View>
  );
}
