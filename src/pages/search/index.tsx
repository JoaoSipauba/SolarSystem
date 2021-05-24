import React from 'react';
import { Image, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/Feather';

import SearchComponent from '../../components/Search';
import backgroundImg from '../../../assets/Stars.png';
import { styles as Styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import ResultCard from '../../components/ResultCard';

export default function Search() {
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
        <Icon name="arrow-left" color="#fff" size={25} />
        <Icon name="settings" color="#fff" size={20} />
      </View>
      <Text style={Styles.pageText}>Resultados da busca</Text>
      <SearchComponent placeholder="Procure planetas, asteroides, estrelas..." />

      <ScrollView style={Styles.resultsContainer}>
        <ResultCard />
      </ScrollView>
    </View>
  );
}
