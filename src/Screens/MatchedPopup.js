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
} from 'react-native';
const MatchedPopup = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');
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
            width={'100%'}
            isLeftIconShow={true}
            right_img_path={require('../ImgAssets/add_user.png')}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <CommonTexts
          string={stringAssets.you_got_match}
          color={'#F65E7F'}
          fontSize={32}
          fontWeight={'bold'}
          alignSelf={'center'}
          marginTop={'15%'}
        />
        <CommonTexts
          string={'you and Anna both liked each other.'}
          color={'black'}
          fontSize={16}
          alignSelf={'center'}
          marginTop={'5%'}
        />

        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: getHeightPer(10),
          }}>
          <Image
            source={{
              uri: 'https://1.bp.blogspot.com/-Muc21xaQjYg/XluhYO6f6vI/AAAAAAAAPJw/T51WnNCctz4Vxn_9REzJuftkznfuRGKUgCLcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpic%2B%25281%2529.jpg',
            }}
            style={{
              width: getWidthPer(35),
              height: getWidthPer(35),
              borderRadius: getHeightPer(2),
              marginHorizontal: 10,
            }}
          />
          <Image
            source={{
              uri: 'https://1.bp.blogspot.com/-Muc21xaQjYg/XluhYO6f6vI/AAAAAAAAPJw/T51WnNCctz4Vxn_9REzJuftkznfuRGKUgCLcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpic%2B%25281%2529.jpg',
            }}
            style={{
              width: getWidthPer(35),
              height: getWidthPer(35),
              borderRadius: getHeightPer(2),
              marginHorizontal: 10,
            }}
          />
        </View>
        <View style={{bottom: 25, position: 'absolute', width: '100%'}}>
          <CommonButton
            backgroundColor={'#DD5371'}
            button_text={stringAssets.send_message}
            marginTop={20}
          />
          <CommonButtonBorder
            borderColor={'#DD5371'}
            button_text={stringAssets.view_profile}
            marginTop={20}
          />
        </View>
      </View>
    </View>
  );
};
export default MatchedPopup;
