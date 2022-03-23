import React from 'react';
import {View, Button, TouchableOpacity, Text, Image} from 'react-native';
import {getHeightPer, getWidthPer} from '../Strings/strings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const CommonButton = ({button_text, ...props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderRadius: 30,
        alignSelf: props.alignSelf,
        backgroundColor: props.backgroundColor,
        height: getHeightPer(7),
        width: props.width,
        position: props.position,
        justifyContent: 'center',
        bottom: props.bottom,
      }}>
      <Text
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          color: 'white',
          fontSize: 17,
          fontWeight: '600',
          fontFamily: 'Poppins',
        }}>
        {button_text}
      </Text>
    </TouchableOpacity>
  );
};

export const CommonImgs = ({path, ...props}) => {
  return (
    <Image
      style={{
        height: props.height,
        resizeMode: props.resizeMode,
        width: props.width,
        flex: props.flex,
      }}
      source={path}
    />
  );
};

export const CommonTexts = ({string, ...props}) => {
  return (
    <Text
      style={{
        color: props.color,
        fontSize: props.fontSize,
        position: props.position,
        fontWeight: props.fontWeight,
        textAlign: props.textAlign,
        marginTop: props.marginTop,
        fontFamily: 'Poppins',
      }}>
      {string}
    </Text>
  );
};

export const CommonHeadder = ({string, ...props}) => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'auto'}}>
      <MaterialIcons
        name="arrow-back-ios"
        color={'#F65E7F'}
        size={30}
        onPress={props.onPress}
      />
      <Text
        style={{
          color: '#F65E7F',
          fontWeight: '600',
          fontSize: 18,
          width: '100%',
          textAlign: 'center',
        }}>
        {string}
      </Text>
    </View>
  );
};


