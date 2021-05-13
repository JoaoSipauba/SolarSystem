import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Icon from 'react-native-vector-icons/Feather';

import { styles as Styles } from './styles'
import { TextInput } from 'react-native-gesture-handler';

interface SearchProps {
  placeholder: string
}
export default function Search(props: SearchProps) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={Styles.container}>
      <Icon style={Styles.icon} name="search" color="#fff" size={20} />
      <TextInput
        style={Styles.input}
        placeholder={props.placeholder}
        placeholderTextColor="rgba(255, 255, 255, 0.65)"
        maxLength={50}
      />
    </View>
  );
}
