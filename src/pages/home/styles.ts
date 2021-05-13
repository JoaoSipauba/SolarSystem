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
    position: 'absolute'
  },
  appbar: {
    position: 'relative',
    width: '100%',
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
  }
});
