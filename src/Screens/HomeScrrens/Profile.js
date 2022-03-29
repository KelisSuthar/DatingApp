import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; //Loacation-location
import AntDesign from 'react-native-vector-icons/AntDesign'; //Card -creditcard
import Feather from 'react-native-vector-icons/Feather'; //helpl -help-circle
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'; //settings -settings
import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  getWidthPer,
} from '../../Strings/strings';
import {coomonStyles} from '../../Styles/commonStyles';
import {
  CommonButton,
  CommonTexts,
  CommonModalDialog,
  CirculerImageView,
  CommonGredient,
  TwoButtonModalDialog,
} from '../../Designs/CommonDesigns';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Tab = createBottomTabNavigator();

const Profile = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [isMessageDialogShow, setMessageDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');
  return (
    <View style={[coomonStyles.parentView, {justifyContent: 'center'}]}>
      <Image
        source={require('../../ImgAssets/Background.png')}
        style={{width: getWidthPer(100), height: getHeightPer(100)}}
      />
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <CommonModalDialog
        message={dialogMsg}
        visible={isMessageDialogShow}
        onRequestClose={() => setMessageDialog(false)}
        onPress={() => setMessageDialog(false)}
      />
      <TwoButtonModalDialog
        message={stringAssets.want_to_logout}
        visible={isDialogShow}
        onRequestClose={() => setDialog(false)}
        positiveText={stringAssets.yes}
        negitveText={stringAssets.no}
        onPressPositive={() => {
          setDialog(false), setMessageDialog(true);
          props.navigation.replace(stringAssets.Login);
        }}
        onPressNegetive={() => {
          setDialog(false);
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
            flexDirection: 'row',
            width: '100%',
            marginTop: StatusBar.currentHeight + 16,
          }}>
          <CirculerImageView
            size={20}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU',
            }}
          />
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 20}}>
              {stringAssets.user_name}
            </Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 20}}>
              {stringAssets.ex_email}
            </Text>
          </View>
        </View>

        <CommonButton
          button_text={stringAssets.view_profile}
          backgroundColor="#F65E7F"
          width={'100%'}
          alignSelf={'center'}
          fontWeight={'500'}
          marginVertical={'7%'}
          onPress={() => {
            props.navigation.navigate(stringAssets.ProfileInfo);
          }}
        />
        <TouchableOpacity
        onPress={() => {
          setMessageDialog(true)
          setDialogMsg("Comming Soon!!!")
        }}
         style={{flexDirection: 'row', marginTop: 25}}>
          <EvilIcons
            name="location"
            style={{alignSelf: 'center'}}
            size={30}
            color="#F65E7F"
          />
          <CommonTexts
            marginLeft={15}
            string={stringAssets.address}
            color={'black'}
            fontSize={20}
            fontWeight={'400'}
          />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(stringAssets.CardList);
        }}
         style={{flexDirection: 'row', marginTop: 25}}>
          <AntDesign
            name="creditcard"
            style={{alignSelf: 'center'}}
            size={30}
            color="#F65E7F"
          />
          <CommonTexts
            marginLeft={15}
            string={stringAssets.payment_methods}
            color={'black'}
            fontSize={20}
            fontWeight={'400'}
          />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => {
          setMessageDialog(true)
          setDialogMsg("Comming Soon!!!")
        }}
         style={{flexDirection: 'row', marginTop: 25}}>
          <Feather
            name="help-circle"
            style={{alignSelf: 'center'}}
            size={30}
            color="#F65E7F"
          />
          <CommonTexts
            marginLeft={15}
            string={stringAssets.help}
            color={'black'}
            fontSize={20}
            fontWeight={'400'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', marginTop: 25}}
          onPress={() => {
            props.navigation.navigate(stringAssets.Settings);
          }}>
          <SimpleLineIcons
            name="settings"
            style={{alignSelf: 'center'}}
            size={30}
            color="#F65E7F"
          />
          <CommonTexts
            marginLeft={15}
            string={stringAssets.settings}
            color={'black'}
            fontSize={20}
            fontWeight={'400'}
          />
        </TouchableOpacity>
        <CommonGredient
          height={1}
          marginVertical={40}
          width={getWidthPer(85)}
          color={['#dee1e3', 'white']}
        />
        <CommonTexts
          string={stringAssets.about}
          color={'black'}
          fontSize={20}
          fontWeight={'400'}
        />
        <CommonTexts
          marginTop={20}
          string={stringAssets.log_out}
          color={'black'}
          fontSize={20}
          fontWeight={'400'}
          onPress={() => {
            setDialog(true);
          }}
        />
      </View>
    </View>
  );
};
export default Profile;
