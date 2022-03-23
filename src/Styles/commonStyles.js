import react from 'react';
import {StyleSheet, StatusBar} from 'react-native';

export const coomonStyles = StyleSheet.create({
  parentView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  whiteBack: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 1,
    width: '100%',
    height: 50,
    flexDirection: 'column',
  },
});
