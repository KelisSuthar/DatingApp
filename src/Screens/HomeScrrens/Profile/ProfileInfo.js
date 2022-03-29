import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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

const ProfileInfo = props => {
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
            isLeftIconShow={true}
            width={'100%'}
            string={stringAssets.my_details}
            isColorBlack={true}
            onPress={() => {
              props.navigation.goBack();
            }}
            onRightPress={() => {
              setDialog(true);
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <CirculerImageView
              source={require('../../../ImgAssets/user.png')}
              size={15}
              backgroundColor={'#F65E7F'}
            />
            <TouchableOpacity
              onPress={() => {
                setMessageDialog(true), setDialogMsg('Comming Soon!!!');
              }}
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: '#F65E7F',
                width: '20%',
                marginTop: 10,
              }}>
              <CommonTexts
                marginVertical={5}
                color={'white'}
                string={stringAssets.change}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: '15%',
              flexDirection: 'row',
            }}>
            <CommonTexts
              position={'absolute'}
              marginVertical={5}
              left={0}
              color={'black'}
              string={stringAssets.f_name}
            />
            <CommonTexts
              position={'absolute'}
              marginVertical={5}
              right={0}
              color={'black'}
              string={'Kelis'}
            />
          </View>
          <View
            style={{
              marginTop: '15%',
              flexDirection: 'row',
            }}>
            <CommonTexts
              position={'absolute'}
              marginVertical={5}
              left={0}
              color={'black'}
              string={stringAssets.l_name}
            />
            <CommonTexts
              position={'absolute'}
              marginVertical={5}
              right={0}
              color={'black'}
              string={'Suthar'}
            />
          </View>
          <View
            style={{
              marginTop: '15%',
              flexDirection: 'row',
            }}>
            <CommonTexts
              position={'absolute'}
              marginVertical={5}
              left={0}
              color={'black'}
              string={stringAssets.loc}
            />
            <CommonTexts
              position={'absolute'}
              marginVertical={5}
              right={0}
              color={'black'}
              string={'India'}
            />
          </View>
          <CommonTexts
            marginTop={'15%'}
            color={'#F65E7F'}
            fontWeight={'800'}
            fontSize={18}
            string={stringAssets.acc_info}
          />
          <View
            style={{
              marginTop: '5%',
              flexDirection: 'row',
            }}>
            <CommonTexts
              marginVertical={5}
              left={0}
              color={'black'}
              string={stringAssets.email}
            />
            <CommonTexts
              position={'absolute'}
              marginVertical={5}
              right={0}
              color={'black'}
              string={'ExampleEmail@gmail.com'}
            />
          </View>
          <CommonTexts
            marginTop={'15%'}
            color={'#F65E7F'}
            fontWeight={'800'}
            fontSize={18}
            string={stringAssets.int_pref}
          />
          <TouchableOpacity
            onPress={() => {
              setMessageDialog(true), setDialogMsg('Comming Soon!!!');
            }}
            style={{
              marginTop: '5%',
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'column', width: '50%'}}>
              <CommonTexts
                marginVertical={5}
                left={0}
                color={'black'}
                string={stringAssets.lang}
              />
              <CommonTexts
                marginVertical={5}
                right={0}
                color={'grey'}
                string={'English'}
              />
            </View>
            <MaterialIcons
              style={{
                right: 0,
                right: 0,
                position: 'absolute',
                alignSelf: 'center',
              }}
              width="10%"
              name={'arrow-forward-ios'}
              size={30}
              onPress={props.onPress}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProfileInfo;
