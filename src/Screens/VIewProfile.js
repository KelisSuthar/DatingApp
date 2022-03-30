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
  tag_list,
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
  ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Viewprofile = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');
  const route = useRoute();
  const ref = React.useRef(null);
  let array = chatListData.slice;
  const FlatList_Item = ({tag}) => {
    return (
      <View
        style={{
          backgroundColor: '#F65E7F',
          borderRadius: 5,
          margin: 10,
        }}>
        <Text style={{color: 'white', padding: 10}}>{tag}</Text>
      </View>
    );
  };
  let payments = [];

  for (let i = 0; i < tag_list.length; i++) {
    payments.push(
      <View
        key={i}
        style={{
          backgroundColor: '#F65E7F',
          borderRadius: 5,
          margin: 10,
        }}>
        <Text style={{color: 'white', padding: 10}}>{tag_list[i].tag}</Text>
      </View>,
    );
  }

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
          width: getWidthPer(100),
        }}>
        <Image source={{uri: route.params.img, height: getHeightPer(80)}} />
        <Text
          style={{
            color: '#F65E7F',
            fontSize: 18,
            fontWeight: 'bold',
            marginVertical: 10,
            marginLeft: getWidthPer(10),
          }}>
          {route.params.name + ', ' + route.params.age}
        </Text>
        <ScrollView>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
           
              marginHorizontal: getWidthPer(10),
            }}>
            {payments}
          </View>
        </ScrollView>
        {/* <FlatList
          data={tag_list}
          renderItem={({item}) => <FlatList_Item tag={item.tag} />}
          style={{marginTop: 20, alignSelf: 'center', width: getWidthPer(90)}}
        /> */}
      </View>
    </View>
  );
};
export default Viewprofile;
