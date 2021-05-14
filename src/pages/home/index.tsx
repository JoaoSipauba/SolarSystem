import React from 'react';
import { Image, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryCard from '../../components/CategoryCard';
import PlanetCard from '../../components/PlanetCard';

import Search from '../../components/Search';
import backgroundImg from '../../../assets/Stars.png';
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
      <Search placeholder="Procure planetas, asteroides, estrelas..." />
      <View style={Styles.categorias}>
        <Text style={Styles.categoriasTitle}>Categorias</Text>
        <View style={Styles.categoriasCardsContainer}>
          <CategoryCard type='planet' />
          <CategoryCard type='asteroid' />
          <CategoryCard type='star' />
          <CategoryCard type='galaxy' />
        </View>
      </View>
      <View style={Styles.planetas}>
        <Text style={Styles.categoriasTitle}>Planetas</Text>
        <ScrollView horizontal style={Styles.planetasCardsContainer}>
          <PlanetCard type='sun' />
          <PlanetCard type='mercury' />
          <PlanetCard type='venus' />
          <PlanetCard type='earth' />
          <PlanetCard type='mars' />
          <PlanetCard type='jupiter' />
          <PlanetCard type='saturn' />
          <PlanetCard type='uranus' />
          <PlanetCard type='neptune' />
          <PlanetCard type='pluto' />
        </ScrollView>
      </View>
    </View>
  );
}
