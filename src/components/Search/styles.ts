import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
  },
})