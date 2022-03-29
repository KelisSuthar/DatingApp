import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  getWidthPer,
  cardList,
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

const Column_Item = ({name, id, card_type, card_num}) => {
  let ans = id % 2;

  return (
    <View style={{margin: 20}}>
      {ans == 0 ? (
        <TouchableOpacity
          style={[
            coomonStyles.whiteBack_redborder,
            {
              backgroundColor: 'white',
              padding: 20,
              flexDirection: 'column',
            },
          ]}>
          <CommonTexts
            string={card_type + ' Card'}
            color={'black'}
            fontWeight={'600'}
          />
          <CommonTexts
            string={card_num}
            color={'black'}
            fontSize={20}
            fontWeight={'bold'}
            marginTop={getHeightPer(5)}
          />
          <View style={{marginTop: getHeightPer(5), flexDirection: 'row'}}>
            <CommonTexts string={name} color={'black'} fontWeight={'100'} />
            <FontAwesome
              size={30}
              name="cc-visa"
              color={'black'}
              style={{right: 0, position: 'absolute'}}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: '#F65E7F',
            borderRadius: 20,
            padding: 20,
            flexDirection: 'column',
          }}>
          <CommonTexts
            string={card_type + ' Card'}
            color={'white'}
            fontWeight={'600'}
          />
          <CommonTexts
            string={card_num}
            color={'white'}
            fontSize={20}
            fontWeight={'bold'}
            marginTop={getHeightPer(5)}
          />
          <View style={{marginTop: getHeightPer(5), flexDirection: 'row'}}>
            <CommonTexts string={name} color={'white'} fontWeight={'100'} />
            <FontAwesome
              size={30}
              name="cc-visa"
              color={'white'}
              style={{right: 0, position: 'absolute'}}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const CardList = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [isMessageDialogShow, setMessageDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [seacrhText, setSearchText] = React.useState('');

  const renderItem = ({item}) => (
    <Column_Item
      id={item.id}
      name={item.name}
      card_type={item.card_type}
      card_num={item.card_num}
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
        message={stringAssets.log_out_success}
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
        <View style={{marginTop: StatusBar.currentHeight}}>
          <CommonHeadder
            isColorBlack={true}
            isLeftIconShow={true}
            string={stringAssets.select_payment_method}
            onPress={() => {
              props.navigation.goBack();
            }}
            isAddIconShow={true}
            onRightPress={() => {
              props.navigation.navigate(stringAssets.AddCard);
            }}
          />
        </View>

        <FlatList
          horizontal={false}
          data={cardList}
          style={{marginVertical: 10}}
          renderItem={renderItem}></FlatList>
        <CommonButton
          button_text={stringAssets.confirm}
          backgroundColor={'#F65E7F'}
          marginBottom={30}
        />
        <TouchableOpacity
          style={{
            height: getWidthPer(10),
            width: getWidthPer(10),
            borderRadius: getHeightPer(5),
            backgroundColor: '#F65E7F',
            position :'absolute',
            right:getWidthPer(5),
            bottom:getHeightPer(15),
            shadowColor:'black',
            shadowRadius: 10,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            elevation: 10,
            justifyContent:'center'
          }}
        >
          <FontAwesome size={25} name = {'trash-o'} color= {'white'} style = {{opacity:0.7,alignSelf:'center'}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CardList;
