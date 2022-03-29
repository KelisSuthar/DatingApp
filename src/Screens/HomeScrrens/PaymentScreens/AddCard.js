import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign'; //checkcircle -checkcircle

import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  getWidthPer,
  ErrorMessages,
} from '../../../Strings/strings';
import {coomonStyles} from '../../../Styles/commonStyles';
import {
  CommonButton,
  CommonTexts,
  CommonModalDialog,
  CirculerImageView,
  CommonGredient,
  CommonHeadder,
  TwoButtonModalDialog,
} from '../../../Designs/CommonDesigns';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

 

const AddCard = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [isMessageDialogShow, setMessageDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [isCancelShow, setCancelShow] = React.useState(false);
  const [isChecked, setChecked] = React.useState(false);
  const [number, setNumber] = React.useState('');
  const [name, setNAme] = React.useState('');
  const [date, setDate] = React.useState('');
  const [cvv, setCVV] = React.useState('');
  const date_ref = React.useRef(null);
  const cvv_ref = React.useRef(null);
  const name_ref = React.useRef(null);


  function checkData(){
    if(number.length==0)
    {
      setMessageDialog(true)
      setDialogMsg(ErrorMessages.card_num_empty)
    }else if(number.length<19)
    {
      setMessageDialog(true)
      setDialogMsg(ErrorMessages.card_num_valid)
    }else if(date.length=0){
      setMessageDialog(true)
      setDialogMsg(ErrorMessages.date_empty)
    }else if(cvv.length=0){
      setMessageDialog(true)
      setDialogMsg(ErrorMessages.cvv_empty)
    }else if(cvv.length<3){
      setMessageDialog(true)
      setDialogMsg(ErrorMessages.cvv_valid)
    }
    else if(name.length<0){
      setMessageDialog(true)
      setDialogMsg(ErrorMessages.name_Empty)
    }
    else if(name.length<6){
      setMessageDialog(true)
      setDialogMsg(ErrorMessages.name_valid)
    }
    else if(!isChecked){
      setMessageDialog(true)
      setDialogMsg("Please Check Below to Save Card Details")
    }else{
      setMessageDialog(false)
    }
  }

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
        visible={isMessageDialogShow}
        onRequestClose={() => setMessageDialog(false)}
        onPress={() => setMessageDialog(false)}
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
            string={stringAssets.add_card}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <View style={{marginTop: 16, flexDirection: 'column'}}>
          <CommonTexts
            string={stringAssets.card_num}
            fontWeight={'700'}
            color={'black'}
            fontSize={16}
          />
          <TextInput
          defaultValue={number}
            style={[
              coomonStyles.whiteBack_redborder,
              {paddingHorizontal: 20, marginTop: 5},
            ]}
            returnKeyType="next"
            keyboardType="numeric"
            onSubmitEditing={() => {date_ref.current.focus()}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 16, flexDirection: 'column', width: '60%'}}>
            <CommonTexts
              string={stringAssets.exp_date}
              fontWeight={'700'}
              color={'black'}
              fontSize={16}
            />
            <TextInput
            ref={date_ref}
            // ref={date}
            defaultValue={date}
              style={[
                coomonStyles.whiteBack_redborder,
                {paddingHorizontal: 20, marginTop: 5, marginRight: 40},
              ]}
              returnKeyType="next"
              onSubmitEditing={() => {cvv_ref.current.focus()}}
              // onFocus = {()=>{}}
              // editable = {false}
            />
          </View>
          <View style={{marginTop: 16, flexDirection: 'column', width: '40%'}}>
            <CommonTexts
              string={stringAssets.cvv}
              fontWeight={'700'}
              color={'black'}
              fontSize={16}
            />
            <TextInput
            ref = {cvv_ref}
            // ref={cvv}
            defaultValue={cvv}
              style={[
                coomonStyles.whiteBack_redborder,
                {paddingHorizontal: 20, marginTop: 5},
              ]}
              returnKeyType="next"
              keyboardType="numeric"
              maxLength={3}
              onSubmitEditing={() => {name_ref.current.focus()}}
            />
          </View>
        </View>
        <View style={{marginTop: 16, flexDirection: 'column'}}>
          <CommonTexts
            string={stringAssets.name}
            fontWeight={'700'}
            color={'black'}
            fontSize={16}
          />
          <TextInput
          ref = {name_ref}
          // ref={name}
          defaultValue={name}
            style={[
              coomonStyles.whiteBack_redborder,
              {paddingHorizontal: 20, marginTop: 5},
            ]}
            returnKeyType="done"
          />
        </View>
        <CommonTexts string={stringAssets.add_card_text} marginTop={16} />
        <View style={{flexDirection: 'row', marginTop: 16}}>
          <TouchableOpacity
            onPress={() => {
              setChecked(!isChecked);
            }}>
            <AntDesign
              name={isChecked ? 'checkcircle' : 'checkcircleo'}
              color={'#F65E7F'}
              size={30}
            />
          </TouchableOpacity>
          <CommonTexts
            string={stringAssets.save_card_details}
            color={'black'}
            fontWeight={'bold'}
            fontSize={16}
            alignSelf={'center'}
            marginLeft={16}
          />
        </View>
      </View>
      <CommonButton
      onPress = {()=>{checkData()}}
        width={getWidthPer(90)}
        backgroundColor={'#F65E7F'}
        button_text={stringAssets.add_card}
        bottom={50}
      />
    </View>
  );
};
export default AddCard;
