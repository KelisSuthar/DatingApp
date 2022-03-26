import React from 'react';
import {
  stringAssets,
  getHeightPer,
  getWidthPer,
  getAsyncData,
  AsyncStorageStrings,
} from '../Strings/strings';
import {coomonStyles} from '../Styles/commonStyles';
import {CommonButton, CommonImgs} from '../Designs/CommonDesigns';
import {View, Text, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = props => {
  return (
    <View style={coomonStyles.parentView}>
      <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
      <CommonImgs
        path={require('../ImgAssets/splash.png')}
        height={getHeightPer(100)}
        width={getWidthPer(100)}
      />

      <Text
        style={{
          color: '#F65E7F',
          fontSize: 30,
          position: 'absolute',
          fontWeight: 'bold',
          elevation: 10,
          top: 10,
          textAlign: 'center',
          marginTop: getHeightPer(3),
        }}>
        {stringAssets.Splash_text}
      </Text>

      <CommonButton
        onPress={() => {
          // const Data = getAsyncData(AsyncStorageStrings.IS_LOGIN) 
          
          // console.log(Data)
          // if (getAsyncData(AsyncStorageStrings.IS_LOGIN) == '1') {
          //   props.navigation.replace(stringAssets.Home);
          // } else {
          
          // }
            props.navigation.replace(stringAssets.Home);
        }}
        button_text={stringAssets.Splash_Button}
        alignSelf={'center'}
        width={getWidthPer(90)}
        backgroundColor="#F65E7F"
        position={'absolute'}
        bottom={getHeightPer(3)}
      />
    </View>
  );
};
export default Splash;
