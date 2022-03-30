import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //calendar-month-outline
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather'; //clock,map-pin

import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  matchedDates,
  getWidthPer,
} from '../../Strings/strings';
import {coomonStyles} from '../../Styles/commonStyles';
import {
  CommonButton,
  CommonTexts,
  CommonHeadder,
  CommonModalDialog,
  CirculerImageView,
  CommonButtonBorder,
  CommonGredient,
  TwoButtonModalDialog,
} from '../../Designs/CommonDesigns';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';


const MatchedDates = props => {
  const [isLogoutDialog, setLogoutDialog] = React.useState(false);
  const [isMessageDialog, setMessageDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const Row_item = ({
    name,
    age,
    meeting_time,
    address,
    available_time,
    date_time,
    desc,
    img,
    posted_date,
  }) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          margin: 10,
          justifyContent: 'center',
          width: getWidthPer(100),
        }}>
        <CommonTexts string={'Posted ' + posted_date + ' Ago'} fontSize={12} />
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Image
            source={{uri: img}}
            style={{
              height: getWidthPer(20),
              width: getWidthPer(20),
              borderRadius: getHeightPer(3),
            }}
          />
          <CommonTexts
            string={name + ', ' + age}
            fontSize={18}
            marginLeft={30}
            alignSelf={'center'}
            fontWeight={'bold'}
            color={'#DD5371'}
          />
        </View>
        <CommonTexts
          string={meeting_time}
          fontSize={18}
          marginVertical={16}
          fontWeight={'bold'}
          color={'#DD5371'}
        />
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <MaterialCommunityIcons
            name={'calendar-month-outline'}
            color={'#F65E7F'}
            size={25}
          />
          <CommonTexts
            string={date_time}
            color={'black'}
            fontSize={16}
            marginLeft={16}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Feather name={'clock'} color={'#F65E7F'} size={25} />
          <CommonTexts
            string={available_time}
            color={'black'}
            fontSize={16}
            marginLeft={16}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Feather name={'map-pin'} color={'#F65E7F'} size={25} />
          <CommonTexts
            string={address}
            color={'black'}
            fontSize={16}
            marginLeft={16}
          />
        </View>
        <CommonTexts
          width={'80%'}
          string={desc}
          color={'black'}
          fontSize={16}
          marginTop={20}
        />
        <CommonButton
        onPress = {()=>props.navigation.navigate(stringAssets.Chatting,{name:name,img:img})}
          backgroundColor={'#DD5371'}
          width={'80%'}
          button_text={stringAssets.send_message}
          marginTop={20}
        />
        <CommonButtonBorder
        onPress = {()=>props.navigation.navigate(stringAssets.view_profile,{name:name,img:img,age:age})}
          borderColor={'#DD5371'}
          width={'80%'}
          button_text={stringAssets.view_profile}
          marginTop={20}
        />
      </View>
    );
  };
  

  const renderItem = ({item}) => (
    <Row_item
      img={item.img}
      name={item.name}
      age={item.age}
      meeting_time={item.meeting_time}
      address={item.address}
      available_time={item.available_time}
      date_time={item.date_time}
      desc={item.desc}
      posted_date={item.posted_date}></Row_item>
  );
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
            string={stringAssets.matched_date_online}
            isColorBlack={false}
            onPress={() => {
              props.navigation.goBack();
            }}
            onRightPress={() => {
              setDialog(true);
            }}
          />
        </View>
        
        <Carousel
          ref={isCarousel}
          containerCustomStyle={{alignSelf: 'center'}}
          layout="default"
          data={matchedDates} renderItem={renderItem}
          onSnapToItem={index => setIndex(index)}
          sliderWidth={getWidthPer(90)}
          itemWidth={getWidthPer(90)}
        />
        <Pagination
          // containerStyle={{position: 'absolute'}}
          dotsLength={WalkThroughList.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: '#F65E7F',
          }}
          tappableDots={false}
          inactiveDotStyle={{
            backgroundColor: 'black',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};
export default MatchedDates;
