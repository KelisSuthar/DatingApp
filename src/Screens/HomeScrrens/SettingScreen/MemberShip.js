import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; //Loacation-location
import AntDesign from 'react-native-vector-icons/AntDesign'; //Card -creditcard
import Feather from 'react-native-vector-icons/Feather'; //helpl -help-circle
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'; //settings -settings
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  getWidthPer,
  MemberShipList,
} from '../../../Strings/strings';
import {coomonStyles} from '../../../Styles/commonStyles';
import {
  CommonButton,
  CommonTexts,
  CommonModalDialog,
  CommonHeadder,
  CirculerImageView,
  CommonGredient,
  TwoButtonModalDialog,
} from '../../../Designs/CommonDesigns';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const Row_Layout = ({plan, includeIn, price, time, availability}) => {
  return (
    <View
      style={[
        coomonStyles.whiteBack_redborder,
        {margin: 20, width: getWidthPer(70),alignSelf:'center'},
      ]}>
      <View
        style={{
        margin: 10,
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <CommonTexts
          string={plan}
          color={'black'}
          alignSelf={'center'}
          marginTop={getHeightPer(3)}
          fontSize={14}
        />
        <CommonTexts
          string={includeIn}
          color={'black'}
          alignSelf={'center'}
          fontSize={18}
          fontWeight={'bold'}
        />
        <CommonTexts
          string={'$' + price}
          color={'black'}
          alignSelf={'center'}
          fontSize={48}
          fontWeight={'bold'}
        />
        <CommonTexts
          string={'for' + time}
          color={'black'}
          alignSelf={'center'}
          fontSize={14}
        />
        <CommonTexts
          string={availability}
          color={'black'}
          alignSelf={'center'}
          textAlign={'center'}
          fontSize={16}
          marginTop={getHeightPer(5.5)}
        />
        <CommonButton
          button_text={stringAssets.subscribe}
          backgroundColor="#F65E7F"
          width={'80%'}
          alignSelf={'center'}
          marginTop={getHeightPer(2)}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const MemberShip = props => {
  const [isLogoutDialog, setLogoutDialog] = React.useState(false);
  const [isMessageDialog, setMessageDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');

  const renderItem = ({item}) => (
    <Row_Layout
      plan={item.plan}
      includeIn={item.includeIn}
      price={item.price}
      time={item.time}
      availability={item.availability}
    />
  );
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
        <TouchableOpacity
          onPress={() => {
            setMessageDialog(true), setDialogMsg('Comming Soon!!!');
          }}>
          <CommonTexts
            color={'#F65E7F'}
            fontSize={18}
            fontWeight={'500'}
            string={stringAssets.skip}
            marginTop={StatusBar.currentHeight + 16}
            alignSelf={'flex-end'}
          />
        </TouchableOpacity>

        <CommonTexts
          color={'black'}
          fontSize={24}
          fontWeight={'bold'}
          string={stringAssets.Membership_headding_1}
          marginTop={StatusBar.currentHeight + 16}
          textAlign={'center'}
        />

        <CommonTexts
          color={'black'}
          fontSize={14}
          fontWeight={'400'}
          string={stringAssets.Membership_headding_2}
          marginTop={16}
          textAlign={'center'}
        />
        {/* <FlatList
          horizontal={true}
          data={MemberShipList}
          renderItem={renderItem}

          // style={{backgroundColor: 'black'}}
        /> */}
         <Carousel
          containerCustomStyle={{alignSelf: 'center'}}
          layout="default"
          data={MemberShipList}
          renderItem={renderItem}
          sliderWidth={getWidthPer(90)}
          itemWidth={getWidthPer(70)}
        
          
        />
        <CommonTexts
          color={'black'}
          fontSize={14}
          fontWeight={'400'}
          string={stringAssets.Membership_fotter}
          marginVertical={'10%'}
          textAlign={'center'}
        />
      </View>
    </View>
  );
};
export default MemberShip;
