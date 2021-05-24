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
    width: '100%',
    marginBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageText: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
    marginBottom: '15%',
  },
  resultsContainer: {
    width: '100%',
    marginTop: '10%'
  },
});
