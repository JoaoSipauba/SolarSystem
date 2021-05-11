import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: 'absolute'
  },
});
