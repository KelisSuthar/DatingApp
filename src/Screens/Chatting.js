import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //calendar-month-outline

import Feather from 'react-native-vector-icons/Feather'; //clock,map-pin

import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  matchedDates,
  getWidthPer,
  exampleChat,
  chatListData,
} from '../Strings/strings';
import {coomonStyles} from '../Styles/commonStyles';
import {
  CommonButton,
  CommonTexts,
  CommonHeadder,
  CommonModalDialog,
  CirculerImageView,
  CommonButtonBorder,
  CommonGredient,
  TwoButtonModalDialog,
} from '../Designs/CommonDesigns';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Chatting = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [text, setText] = React.useState('');
  const route = useRoute();
  const ref = React.useRef(null);
  let array = chatListData.slice;
  const Coloumn_Item = ({sender, reciever, message}) => {
    console.log(message);
    return (
      <View>
        {sender == 'me' ? (
          <View style={{flexDirection: 'row-reverse', margin: 10}}>
            <CirculerImageView
              size={8}
              source={{
                uri: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}
              alignSelf={'center'}
            />
            <Text
              style={{
                color: 'white',
                backgroundColor: '#DD5371',
                borderRadius: 20,
                padding: 10,
                marginRight: 20,
                alignSelf:'center'
              }}>
              {message}
            </Text>
          </View>
        ) : (
          <View style={{flexDirection: 'row', margin: 10}}>
            <CirculerImageView
              size={8}
              source={{uri: route.params.img}}
              alignSelf={'center'}
            />
            <Text
              style={{
                color: 'black',
                backgroundColor: '#d9d9d9',
                borderRadius: 20,
                padding: 10,
                marginLeft: 20,
                alignSelf:'center'
              }}>
              {message}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={[coomonStyles.parentView, {justifyContent: 'center'}]}>
      <Image
        source={require('../ImgAssets/Background.png')}
        style={{width: getWidthPer(100), height: getHeightPer(100)}}
      />
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <CommonModalDialog
        message={dialogMsg}
        visible={isDialogShow}
        onRequestClose={() => setDialog(false)}
        onPress={() => setDialog(false)}
      />
      <View
        style={{
          flexDirection: 'column',
          position: 'absolute',
          height: '100%',
          width: getWidthPer(90),
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: StatusBar.currentHeight,
          }}>
          <CommonHeadder
            width={'95%'}
            string={route.params.name}
            isLeftIconShow={true}
            isColorBlack={true}
            isRightIocnShow={true}
            right_img_path={require('../ImgAssets/add_user.png')}
            onPress={() => {
              props.navigation.goBack();
            }}
            onRightPress={() => {
              props.navigation.navigate(stringAssets.JitsiView)
              
            }}
          />
        </View>
        <FlatList
        showsVerticalScrollIndicator = {false}
          data={exampleChat}
          inverted={true}
          renderItem={({item}) => (
            <Coloumn_Item
              message={item.message}
              sender={item.sender}
              reciever={item.reciever}
            />
          )}
        />
        <TextInput
          ref={ref}
          placeholder={stringAssets.type_message}
          onChangeText={text => setText(text)}
          onSubmitEditing={() => {
            chatListData.push({sender: 'me', reciever: 'other', message: text});
            console.log(text);
          }}
          style={{
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#d9d9d9',
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
        />
      </View>
    </View>
  );
};
export default Chatting;
