import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Icon from "react-native-vector-icons/Feather";

import backgroundImg from '../../../assets/Background.png';
import { styles, styles as Styles } from './styles'
import { useNavigation } from '@react-navigation/core';

export default function Landing() {
  const navigation = useNavigation()

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }


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
        <TouchableOpacity activeOpacity={0.9} onPress={handleNavigateToHome}>
          <LinearGradient colors={['#EF5F53', '#FA8F70']} style={styles.button}>
            <Text style={styles.buttonText}>Começar agora</Text>
            <Icon name="arrow-right" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
