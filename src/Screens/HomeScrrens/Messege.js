import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  getWidthPer,
  homeData,
  chatListData,
} from '../../Strings/strings';
import {coomonStyles} from '../../Styles/commonStyles';
import {
  CommonImgs,
  CommonButton,
  CommonWhiteBack,
  CommonTexts,
  CommonHeadder,
  WhiteTextInput,
  CommonModalDialog,
} from '../../Designs/CommonDesigns';
import {View, Text, StatusBar, Image, TextInput, FlatList, Touchable, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Message = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');
  const Coloumn_Item = ({img_path, uname, message}) => {
    return (
      <View style={{flexDirection: 'row'}} >
        <TouchableOpacity
        style = {{width:'100%',flexDirection: 'row', marginVertical: 10}}
        onPress = {()=>props.navigation.navigate(stringAssets.Chatting,{name:uname,img:img_path})}>
        <Image
          source={{uri: img_path}}
          style={{
            borderRadius: getHeightPer(10) / 2,
            alignSelf: 'center',
            height: getWidthPer(10),
            width: getWidthPer(10),
          }}
        />
        <View style={{marginLeft: 10, flexDirection: 'column',alignSelf:'center'}}>
          <Text style={{color: 'black'}}>{uname}</Text>
          <Text>{message}</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  };
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
            string={stringAssets.Tab_Message}
            isRightIocnShow={true}
            right_img_path={require('../../ImgAssets/add_user.png')}
            onPress={() => {
              props.navigation.goBack();
            }}
            onRightPress={() => {
              console.log('adjndjjsd'),
                setDialogMsg('CoomingSoon'),
                setDialog(true);
            }}
          />
          <FlatList
          showsVerticalScrollIndicator = {false}
            style={{height: '90%', marginTop: 16}}
            data={chatListData}
            renderItem={({item}) => (
              <Coloumn_Item
                uname={item.name}
                img_path={item.path}
                message={item.message}
              />
            )}
            horizontal={false}
          />
        </View>
      </View>
    </View>
  );
};
export default Message;
