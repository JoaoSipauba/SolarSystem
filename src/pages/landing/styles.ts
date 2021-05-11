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
  subtitle: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
    opacity: 0.65,
  },
  title: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 32,
    lineHeight: 37.5,
    textAlign: 'center',
    maxWidth: '80%',
  },
  buttonGroup: {
    position: 'absolute',
    bottom: '10%'
  },
  buttonGroupTitle: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    marginRight: 8,
  },
});
