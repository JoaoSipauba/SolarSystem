import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    position: 'relative',
    height: 200,
    width: '100%',
  },
  content: {
    // backgroundColor: '#fff',
    // height: '100%',
    width: '55%',
    paddingVertical: '4%',
    // justifyContent: 'space-between'
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '8%'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40%',
    height: '90%'
  },
  name: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
  },
  description: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    opacity: 0.65,
    marginTop: 10
  },
  lecture: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 14,
  },
  lectureText: {
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginRight: 10
  }
});
