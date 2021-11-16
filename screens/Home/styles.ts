import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: '100%',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0)',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    height: '25%',
    width: '100%',
  },
  containerButtons: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-evenly',
    height: '100%',
  }
});
