import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
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
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Row_Item = ({img_path, uname, age, address, distance, like}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {/* // <View  flexDirection = 'row'> */}
      <Image
        source={{uri: img_path}}
        style={{
          alignSelf: 'center',
          height: getHeightPer(100),
          width: getWidthPer(100),
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          position: 'absolute',
          marginLeft: 30,
          bottom: 0,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '800'}}>
          {uname},{age}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image
            source={require('../../ImgAssets/pen.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={{marginLeft: 15, color: 'white'}}>{address}</Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 20}}>
          <SimpleLineIcons name="location-pin" color={'white'} size={25} />
          <Text style={{marginLeft: 15, color: 'white', fontSize: 14}}>
            {distance}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: getWidthPer(15),
          width: getWidthPer(15),
          position: 'absolute',
          justifyContent: 'center',
          bottom: 35,
          right: 25,
          borderRadius: getHeightPer(15) / 2,
        }}>
        <LinearGradient
          colors={['#fde6f2', '#f3edf8', '#e6f5ff']}
          style={{
            position: 'absolute',
            height: getWidthPer(15),
            width: getWidthPer(15),
            borderRadius: getHeightPer(15) / 2,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            (like = !like), console.log(like);
          }}>
          <Image
            source={
              like
                ? require('../../ImgAssets/heart_selected.png')
                : require('../../ImgAssets/heart.png')
            }
            style={{
              alignSelf: 'center',
              width: getWidthPer(8),
              height: getHeightPer(8),
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Favourite = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');
  const refrance = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    refrance.current.scrollToIndex({animated: true, index: index});
  }, [index]);
  // React.useEffect(()=>{
  //   refrance.current.scrollToIndex({animated: true, index: index});
  // },index)

  return (
    <View style={[coomonStyles.parentView, {justifyContent: 'center'}]}>
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

      <FlatList
      scrollEnabled = {false}
        onEndReached={reach => {
          // console.log(reach);
        }}
        keyExtractor={(item, index) => console.log(index.toString())}
        ref={refrance}
        data={chatListData}
        onScroll={item => {
          // console.log('/////////////////' + item);
        }}
        initialScrollIndex={index}
        renderItem={({item}) => (
          <Row_Item
            uname={item.name}
            img_path={item.path}
            message={item.message}
            distance={item.distance}
            age={item.age}
            address={item.address}
            like={item.like}
          />
        )}
        horizontal={true}
      />

      <View
        style={{
          flexDirection: 'row',
          width: getWidthPer(100),
          
          position: 'absolute',
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            height: getWidthPer(10),
            width: getWidthPer(10),
            borderRadius: getHeightPer(5),
            opacity : 0.5
          }}
          onPress={() => {
            if (index != 0) {
              setIndex(index - 1);
            }
          }}>
          <Image source={require('../../ImgAssets/arrow_left.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (index == chatListData.length - 1) {
              return;
            }
            setIndex(index + 1);
          }}
          style={{
            position: 'absolute',
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            height: getWidthPer(10),
            width: getWidthPer(10),
            borderRadius: getHeightPer(5),
            opacity : 0.5
            
          }}>
          <Image source={require('../../ImgAssets/arrow_right.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Favourite;
