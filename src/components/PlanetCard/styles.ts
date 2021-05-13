import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 190,
    width: 140,
    borderRadius: 8,
    marginRight: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  actionContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
  },
});
