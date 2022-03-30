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
  UserModel,
} from '../../Strings/strings';
import {coomonStyles} from '../../Styles/commonStyles';
import {
  CommonImgs,
  CommonButton,
  CommonWhiteBack,
  CommonTexts,
  
  WhiteTextInput,
  CommonModalDialog,
} from '../../Designs/CommonDesigns';
import {View, Text, StatusBar, Image, TextInput, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Coloumn_Item = ({img_path, uname, profession}) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 10}}>
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
        <Text>{profession}</Text>
      </View>
    </View>
  );
};

const Home = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');

  let array = homeData
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
          marginHorizontal: getWidthPer(7),
          flexDirection: 'column',
          position: 'absolute',
          height: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            top: StatusBar.currentHeight,
            marginTop: 16,
          }}>
          <View
            style={{
              backgroundColor: '#e8e8e8',
              borderRadius: 15,
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AntDesign
              name="search1"
              style={{start: 5, alignSelf: 'center'}}
              size={25}
            />
            <TextInput
            defaultValue={seacrhText}
              style={{width: '80%'}}
              onChangeText={item => {
                setSearchText(item);
              }}></TextInput>
            
              {seacrhText.length>0?<Ionicons
                name="md-close"
              onPress={()=>{setSearchText('') }}
                style={{start: 5, alignSelf: 'center', marginRight: 10}}
                size={25}
              />:null}
          </View>
          <Text onPress={()=>{setSearchText('') }} style={{alignSelf: 'center', marginLeft: 20}}>
            {stringAssets.Cancel}
          </Text>
        </View>
        <FlatList
          // data={seacrhText.length>0?array:homeData}
          showsVerticalScrollIndicator = {false}
          data = {array.filter((array)=>array.name.includes(seacrhText))}
          renderItem={({item}) => (
            <Coloumn_Item
              uname={item.name}
              img_path={item.path}
              profession={item.profession}
            />
          )}
          style={{marginTop: getHeightPer(5)}}
          horizontal={false}
        />
      </View>
    </View>
  );
};
export default Home;
