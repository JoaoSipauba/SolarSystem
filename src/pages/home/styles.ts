import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
    height: '100%',
    paddingTop: '15%',
    paddingHorizontal: '5%',
    paddingBottom: '5%',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: 'absolute',
    top: '5%',
    opacity: 0.65
  },
  appbar: {
    position: 'relative',
    width: '100%',
    marginBottom: '15%'
  },
  appbarTitle: {
    display: 'flex',
    flexDirection: 'row'
  },
  appbarTitleRegular: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 32
  },
  appbarTitleBold: {
    color: '#FF6CD9',
    fontFamily: 'Roboto_700Bold',
    fontSize: 32
  },
  appbarText: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16
  },
  appbarIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  categorias: {
    width: '100%',
    marginTop: '10%',
  },
  categoriasTitle: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },
  categoriasCardsContainer: {
    width: '100%',
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  planetas: {
    width: '100%',
    marginTop: '10%',
  },
  planetasTitle: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },
  planetasCardsContainer: {
    width: '100%',
    marginTop: '5%',
  },
});
