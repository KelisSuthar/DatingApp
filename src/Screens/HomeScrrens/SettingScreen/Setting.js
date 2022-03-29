import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; //Loacation-location
import AntDesign from 'react-native-vector-icons/AntDesign'; //Card -creditcard
import Feather from 'react-native-vector-icons/Feather'; //bell -bell,Lock - lock,Star-star
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  getWidthPer,
} from '../../../Strings/strings';
import {coomonStyles} from '../../../Styles/commonStyles';
import {
  CommonButton,
  CommonTexts,
  CommonHeadder,
  CommonModalDialog,
  CirculerImageView,
  CommonGredient,
  TwoButtonModalDialog,
} from '../../../Designs/CommonDesigns';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Tab = createBottomTabNavigator();

const Setting = props => {
  const [isLogoutDialog, setLogoutDialog] = React.useState(false);
  const [isMessageDialog, setMessageDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');
  return (
    <View style={[coomonStyles.parentView, {justifyContent: 'center'}]}>
      <Image
        source={require('../../../ImgAssets/Background.png')}
        style={{width: getWidthPer(100), height: getHeightPer(100)}}
      />
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <CommonModalDialog
        message={dialogMsg}
        visible={isMessageDialog}
        onRequestClose={() => setMessageDialog(false)}
        onPress={() => setMessageDialog(false)}
      />
      <TwoButtonModalDialog
        message={stringAssets.want_to_logout}
        visible={isLogoutDialog}
        onRequestClose={() => setDialog(false)}
        positiveText={stringAssets.yes}
        negitveText={stringAssets.no}
        onPressPositive={() => {
          setLogoutDialog(false), setMessageDialog(false);
          props.navigation.replace(stringAssets.Login);
        }}
        onPressNegetive={() => {
          setLogoutDialog(false);
        }}
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
          isLeftIconShow = {true}
            width={'100%'}
            string={stringAssets.Settings}
            isColorBlack={true}
            onPress={() => {
              props.navigation.goBack();
            }}
            onRightPress={() => {
              setDialog(true);
            }}
          />
          <CommonButton
            button_text={stringAssets.premium_membership_upgrade}
            backgroundColor="#F65E7F"
            width={'100%'}
            alignSelf={'center'}
            fontWeight={'500'}
            marginVertical={'7%'}
            onPress={() => {
              props.navigation.navigate(stringAssets.Membership);
            }}
          />
          <CommonTexts
            color={'#F65E7F'}
            fontWeight={'800'}
            fontSize={18}
            string={stringAssets.Account}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(stringAssets.ProfileInfo);
            }}
            style={{flexDirection: 'row', marginTop: 25}}>
            <Image
              source={require('../../../ImgAssets/user.png')}
              style={{alignSelf: 'center'}}
            />
            <CommonTexts
              marginLeft={15}
              string={stringAssets.Profile}
              color={'black'}
              fontSize={20}
              fontWeight={'400'}
            />
            <MaterialIcons
              style={{right: 0, position: 'absolute'}}
              width="10%"
              name={'arrow-forward-ios'}
              size={30}
              onPress={props.onPress}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMessageDialog(true), setDialogMsg('Comming Soon!!!!');
            }}
            style={{flexDirection: 'row', marginTop: 25}}>
            <Feather name={'lock'} style={{alignSelf: 'center'}} size={30} />
            <CommonTexts
              marginLeft={15}
              string={stringAssets.password}
              color={'black'}
              fontSize={20}
              fontWeight={'400'}
            />
            <MaterialIcons
              style={{right: 0, position: 'absolute'}}
              width="10%"
              name={'arrow-forward-ios'}
              size={30}
              onPress={props.onPress}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{setMessageDialog(true) ,setDialogMsg('Comming Soon!!!!')}}
           style={{flexDirection: 'row', marginTop: 25}}>
            <Feather name={'bell'} style={{alignSelf: 'center'}} size={30} />
            <CommonTexts
              marginLeft={15}
              string={stringAssets.Notification}
              color={'black'}
              fontSize={20}
              fontWeight={'400'}
            />
            <MaterialIcons
              style={{right: 0, position: 'absolute'}}
              width="10%"
              name={'arrow-forward-ios'}
              size={30}
              onPress={props.onPress}
            />
          </TouchableOpacity>
          <CommonTexts
            marginTop={30}
            color={'#F65E7F'}
            fontWeight={'800'}
            fontSize={18}
            string={stringAssets.More}
          />
          <TouchableOpacity
            onPress={() => {
              setMessageDialog(true), setDialogMsg('Comming Soon!!!!');
            }}
            style={{flexDirection: 'row', marginTop: 25}}>
            <Feather name={'star'} style={{alignSelf: 'center'}} size={30} />
            <CommonTexts
              marginLeft={15}
              string={stringAssets.Rate_Review}
              color={'black'}
              fontSize={20}
              fontWeight={'400'}
            />
            <MaterialIcons
              style={{right: 0, position: 'absolute'}}
              width="10%"
              name={'arrow-forward-ios'}
              size={30}
              onPress={props.onPress}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMessageDialog(true), setDialogMsg('Comming Soon!!!!');
            }}
            style={{flexDirection: 'row', marginTop: 25}}>
            <Feather
              name="help-circle"
              style={{alignSelf: 'center'}}
              size={30}
            />
            <CommonTexts
              marginLeft={15}
              string={stringAssets.help}
              color={'black'}
              fontSize={20}
              fontWeight={'400'}
            />
            <MaterialIcons
              style={{right: 0, position: 'absolute'}}
              width="10%"
              name={'arrow-forward-ios'}
              size={30}
              onPress={props.onPress}
            />
          </TouchableOpacity>
        </View>
      </View>
      <CommonTexts
        position={'absolute'}
        string={stringAssets.log_out}
        color={'grey'}
        fontSize={20}
        fontWeight={'400'}
        bottom={75}
        onPress={() => {
          setLogoutDialog(true);
          setMessageDialog(false);
        }}
      />
    </View>
  );
};
export default Setting;
