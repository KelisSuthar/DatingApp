import React from 'react';
import {stringAssets, getHeightPer, getWidthPer} from '../Strings/strings';
import {coomonStyles} from '../Styles/commonStyles';
import {CommonButton, CommonImgs} from '../Designs/CommonDesigns';
import {View, Text,StatusBar} from 'react-native';
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
          top:10,
          textAlign: 'center',
          marginTop: getHeightPer(3),
        }}>
        {stringAssets.Splash_text}
      </Text>

      <CommonButton
        onPress={() => props.navigation.replace(stringAssets.WalkThrough)}
        button_text={stringAssets.Splash_Button}
        alignSelf = {'center'}
        width={getWidthPer(90)}
        backgroundColor="#F65E7F"
        position={'absolute'}
        bottom={getHeightPer(3)}
      />
    </View>
  );
};
export default Splash;
