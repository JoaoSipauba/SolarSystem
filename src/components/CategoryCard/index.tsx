import React from 'react';
import { Image, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';


import { styles as Styles } from './styles'
import planetIcon from '../../../assets/icons/planet.png';
import asteroidIcon from '../../../assets/icons/asteroid.png';
import starIcon from '../../../assets/icons/star.png';
import galaxyIcon from '../../../assets/icons/galaxy.png';

interface CategoryCardProps {
  type: 'planet' | 'asteroid' | 'star' | 'galaxy'
}
export default function CategoryCard(props: CategoryCardProps) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function icon() {
    switch (props.type) {
      case 'planet':
        return planetIcon
      case 'asteroid':
        return asteroidIcon
      case 'star':
        return starIcon
      case 'galaxy':
        return galaxyIcon
    }
  }
  function text() {
    switch (props.type) {
      case 'planet':
        return 'Planetas'
      case 'asteroid':
        return 'Asteróides'
      case 'star':
        return 'Estrelas'
      case 'galaxy':
        return 'Galáxias'
    }
  }
  function color() {
    switch (props.type) {
      case 'planet':
        return ['#5935FF', '#47408E']
      case 'asteroid':
        return ['#FF6CD9', '#FF2184']
      case 'star':
        return ['#01D4E4', '#009DE0']
      case 'galaxy':
        return ['#F9C270', '#FFAA2B']
    }
  }
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <LinearGradient colors={color()} style={Styles.container}>
        <Image source={icon()} />
        <Text style={Styles.title}>{text()}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
