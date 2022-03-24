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
    flexDirection: 'column',
  },
  otp: {
    backgroundColor: 'white',
    borderRadius: 50,
    height:50,
    width:50,
    color:'black'
  },
  otp_active: {
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#F65E7F',
    borderWidth: 1,
    height:50,
    width:50,
    color:'black'
  },
});
