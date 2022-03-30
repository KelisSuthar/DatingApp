import React from 'react';

import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {getHeightPer, getWidthPer} from '../Strings/strings';
import {coomonStyles} from '../Styles/commonStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export const CommonButton = ({button_text, ...props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderRadius: 30,
        alignSelf: props.alignSelf,
        backgroundColor: props.backgroundColor,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginVertical: props.marginVertical,
        height: getHeightPer(7),
        width: props.width,
        position: props.position,
        justifyContent: 'center',
        bottom: props.bottom,
      }}>
      <Text
        style={{
          marginVertical: props.textMarginVertical,
          alignItems: 'center',
          alignSelf: 'center',
          color: 'white',
          textAlign: 'center',
          fontSize: 17,
          fontWeight: '600',
          fontFamily: 'Poppins',
        }}>
        {button_text}
      </Text>
    </TouchableOpacity>
  );
};
export const CommonButtonBorder = ({button_text, ...props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderRadius: 30,
        alignSelf: props.alignSelf,
        borderColor : props.borderColor,
        borderWidth :3,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginVertical: props.marginVertical,
        height: getHeightPer(7),
        width: props.width,
        position: props.position,
        justifyContent: 'center',
        bottom: props.bottom,
      }}>
      <Text
        style={{
          marginVertical: props.textMarginVertical,
          alignItems: 'center',
          alignSelf: 'center',
          color: '#DD5371',
          textAlign: 'center',
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
      onPress={props.onPress}
      style={{
        color: props.color,
        fontSize: props.fontSize,
        position: props.position,
        fontWeight: props.fontWeight,
        textAlign: props.textAlign,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft,
        fontFamily: 'poppins',
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        marginVertical: props.marginVertical,
        alignSelf: props.alignSelf,
        width : props.width,
        // backgroundColor:'green',
      }}>
      {string}
    </Text>
  );
};

export const CommonHeadder = ({string, ...props}) => {
  return (
    <View
      style={{
        marginTop: 16,
        height: props.height,
        width: props.width,
        flexDirection: 'row',
        top: props.top,
        position: props.position,
      }}>
      {props.isLeftIconShow ? (
        <MaterialIcons
          style
          width="10%"
          name={props.isCloseShow ? 'close' : 'arrow-back-ios'}
          color={'#F65E7F'}
          size={30}
          onPress={props.onPress}
        />
      ) : null}
      {props.isColorBlack ? (
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            fontSize: 18,
            alignSelf: 'center',
            textAlign: 'center',
            width: '90%',
          }}>
          {string}
        </Text>
      ) : (
        <Text
          style={{
            color: '#F65E7F',
            fontWeight: '600',
            fontSize: 18,
            alignSelf: 'center',
            textAlign: 'center',
            width: '90%',
          }}>
          {string}
        </Text>
      )}

      {props.isRightIocnShow ? (
        <TouchableOpacity onPress={props.onRightPress}>
          <Image source={props.right_img_path} onPress />
        </TouchableOpacity>
      ) : null}
      {props.isAddIconShow ? (
        <TouchableOpacity onPress={props.onRightPress}>
          <Ionicons name="ios-add-outline" size={30} color={'#F65E7F'} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export const CommonModalDialog = ({message, ...props}) => {
  return (
    <Modal
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
      }}
      animationType="slide"
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View
        style={{
          marginTop: getHeightPer(30),
          width: getWidthPer(70),
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 35,
          alignSelf: 'center',
          alignItems: 'center',
          shadowColor: '#000',

          shadowOffset: {
            width: 0,
            height: 2,
          },

          shadowRadius: 4,
          elevation: 5,
        }}>
        <Text style={{color: 'black'}}>{message}</Text>
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            borderRadius: 20,
            marginTop: 40,
            height: 40,
            width: '60%',
            backgroundColor: '#F65E7F',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', alignSelf: 'center'}}>{'Close'}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export const TwoButtonModalDialog = ({...props}) => {
  return (
    <Modal
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
      }}
      animationType="slide"
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View
        style={{
          marginTop: getHeightPer(30),
          width: getWidthPer(70),
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 35,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',

          shadowOffset: {
            width: 0,
            height: 2,
          },

          shadowRadius: 4,
          elevation: 5,
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'black', alignSelf: 'center'}}>
            {props.message}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              onPress={props.onPressPositive}
              style={{
                borderRadius: 20,
                marginTop: 40,
                height: 40,
                width: 100,
                backgroundColor: '#F65E7F',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', alignSelf: 'center'}}>
                {props.positiveText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.onPressNegetive}
              style={{
                borderRadius: 20,
                marginTop: 40,
                height: 40,
                width: 100,
                backgroundColor: '#F65E7F',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', alignSelf: 'center'}}>
                {props.negitveText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const WhiteTextInput = ({onSubmit,refrance,...props}) => {
  const [hint_visibility, set_hint_visibility] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [secureEntry, setsecureEntry] = React.useState(true);
  const pass_ref = React.useRef(null);
  return (
    <View style={[coomonStyles.whiteBack, {marginTop: getHeightPer(3)}]}>
      <View style={{flexDirection: 'column', marginHorizontal: 20}}>
        {hint_visibility ? (
          <Text style={{color: 'grey'}}>{props.Hint}</Text>
        ) : null}
        <View style={{flexDirection: 'row'}}>
          <TextInput
            autoFocus={false}
            secureTextEntry={props.iseyeshow ? secureEntry : false}
            returnKeyType={props.returnKeyType}
            placeholder={hint_visibility ? '' : props.Hint}
            placeholderTextColor="grey"
            keyboardType={props.keyboardType}
            defaultValue={props.defaultValue}
            style={{width: '95%'}}
            onFocus={() => set_hint_visibility(true)}
            onBlur={() => set_hint_visibility(false)}
            onChangeText={props.onChangeText}
            // onSubmitEditing={() => {pass_ref.current.focus()}}
            onSubmitEditing={onSubmit}
            ref={refrance}
            // ref = {pass_ref}
          />
          {props.iseyeshow ? (
            <Octicons
              onPress={() =>
                secureEntry ? setsecureEntry(false) : setsecureEntry(true)
              }
              name={secureEntry ? 'eye-closed' : 'eye'}
              size={30}
              color="black"
              style={{alignSelf: 'center'}}></Octicons>
          ) : null}
        </View>
      </View>
    </View>
  );
};
export const CirculerImageView = ({...props}) => {
  return (
    <Image
      source={props.source}
      style={{
        borderRadius: getHeightPer(props.size) / 2,
        height: getWidthPer(props.size),
        width: getWidthPer(props.size),
        backgroundColor: props.backgroundColor,
        alignSelf:props.alignSelf,
      }}
    />
  );
};

export const CommonGredient = ({...props}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={props.color}
      style={{
        marginHorizontal: props.marginHorizontal,
        marginVertical: props.marginVertical,
        flex: props.flex,
        opacity: props.opacity,
        position: props.position,
        height: props.height,
        width: props.width,
      }}
    />
  );
};

