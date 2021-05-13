import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/Feather';


import { styles as Styles } from './styles'
import SunImg from '../../../assets/images/Sun.png';
import MercuryImg from '../../../assets/images/Mercury.png';
import VenusImg from '../../../assets/images/Venus.png';
import EarthImg from '../../../assets/images/Earth.png';
import MarsImg from '../../../assets/images/Mars.png';
import JupiterImg from '../../../assets/images/Jupiter.png';
import SaturnImg from '../../../assets/images/Saturn.png';
import UranusImg from '../../../assets/images/Uranus.png';
import NeptuneImg from '../../../assets/images/Neptune.png';
import PlutoImg from '../../../assets/images/Pluto.png';

interface PlanetCardProps {
  type: 'sun' | 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'pluto'
}
export default function PlanetCard(props: PlanetCardProps) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function img() {
    switch (props.type) {
      case 'sun':
        return SunImg
      case 'mercury':
        return MercuryImg
      case 'venus':
        return VenusImg
      case 'earth':
        return EarthImg
      case 'mars':
        return MarsImg
      case 'jupiter':
        return JupiterImg
      case 'saturn':
        return SaturnImg
      case 'uranus':
        return UranusImg
      case 'neptune':
        return NeptuneImg
      case 'pluto':
        return PlutoImg
    }
  }
  function text() {
    switch (props.type) {
      case 'sun':
        return 'Sol'
      case 'mercury':
        return 'Mercúrio'
      case 'venus':
        return 'Vênus'
      case 'earth':
        return 'Terra'
      case 'mars':
        return 'Marte'
      case 'jupiter':
        return 'Júpiter'
      case 'saturn':
        return 'Saturno'
      case 'uranus':
        return 'Uránio'
      case 'neptune':
        return 'Netuno'
      case 'pluto':
        return 'Plutão'
    }
  }
  return (
    <TouchableOpacity activeOpacity={0.8} style={Styles.container}>
      <Image style={Styles.image} source={img()} />
      <View style={Styles.actionContainer} >
        <Text style={Styles.title}>{text()}</Text>
        <Icon name="arrow-right" color="#EF5F53" size={25} />
      </View>
    </TouchableOpacity>
  );
}
