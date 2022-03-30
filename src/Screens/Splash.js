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
  const [IS_LOGIN, set_is_login] = React.useState('');

  const getAsyncData = async key => {
    
    set_is_login(await AsyncStorage.getItem(key));
  };


  React.useEffect(() => {
    getAsyncData(AsyncStorageStrings.IS_LOGIN)
  });
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
          
          console.log(IS_LOGIN);
          if (IS_LOGIN == '1') {
            props.navigation.replace(stringAssets.Home);
          } else {
            props.navigation.replace(stringAssets.Login_2);
          }

            // props.navigation.replace(stringAssets.Login_2);
            // props.navigation.replace(stringAssets.MatchedPopup);
            // props.navigation.replace(stringAssets.Chatting);
            // props.navigation.replace(stringAssets.WalkThrough);
            // props.navigation.replace(stringAssets.Home);
            // props.navigation.replace(stringAssets.AddCard);
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
