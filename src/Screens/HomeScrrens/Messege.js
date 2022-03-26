import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  getWidthPer,
} from '../Strings/strings';
import {coomonStyles} from '../../Styles/commonStyles';
import {CommonImgs, CommonButton, CommonTexts} from '../Designs/CommonDesigns';
import {View, Text, StatusBar, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Tab = createBottomTabNavigator();

const Message = props => {
  return (
    <View style={[coomonStyles.parentView, {backgroundColor: 'red'}]}>
      
    </View>
  );
};
export default Message;
