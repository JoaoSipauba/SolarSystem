import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import StarIcon from 'react-native-vector-icons/FontAwesome';

import NeptuneImg from '../../../assets/images/Neptune.png';
import { styles as Styles } from './styles'

export default function ResultCard() {
  const [favorite, setFavorite] = useState(false)

  let [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={NeptuneImg} />
      <View style={Styles.content}>
        <View style={Styles.contentHeader}>
          <Text style={Styles.name}>Netuno</Text>
          <StarIcon
            name={favorite ? "star" : "star-o"}
            color={favorite ? "#EF5F53" : "#a3a3a3"}
            size={25}
            onPress={() => setFavorite(!favorite)}
          />
        </View>
        <Text style={Styles.description}>Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação...</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={Styles.lecture}>
            <Text style={Styles.lectureText}>Continue lendo</Text>
            <Icon name="arrow-right" color="#EF5F53" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
}
