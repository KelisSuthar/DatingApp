import React from 'react';

import {
  stringAssets,
  getHeightPer,
  getWidthPer,
  ErrorMessages,
  countryListAllIsoData,
} from '../Strings/strings';
import {coomonStyles} from '../Styles/commonStyles';
import {Dropdown} from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import {
  CommonImgs,
  CommonButton,
  CommonWhiteBack,
  CommonTexts,
  CommonHeadder,
  CommonModalDialog,
} from '../Designs/CommonDesigns';
import {View, SafeAreaView, TextInput, StatusBar, Text} from 'react-native';

const Login = props => {
  const [hint_visibility, set_hint_visibility] = React.useState(false);
  const [number, setNumber] = React.useState('');
  const [ccp, setCCP] = React.useState('');
  const [isDialogShow, setDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');

  function checkData() {
    if (ccp.length == 0) {
      setDialogMsg(ErrorMessages.ccp_empty);
      setDialog(true);
    } else if (number.length == 0) {
      setDialogMsg(ErrorMessages.num_empty);
      setDialog(true);
    } else if (number.length < 8) {
      setDialogMsg(ErrorMessages.num_length);
      setDialog(true);
    } else {
      setDialogMsg('Succress');
      setDialog(true);
      // props.navigation.navigate(stringAssets.Home)
    }
  }

  return (
    <View
      style={[
        coomonStyles.parentView,
        {marginTop: StatusBar.currentHeight},
        {marginHorizontal: getWidthPer(7)},
      ]}>
      <CommonModalDialog
        message={dialogMsg}
        visible={isDialogShow}
        onRequestClose={() => setDialog(false)}
        onPress={() => setDialog(false)}
      />
      <LinearGradient
        colors={['#F65E7F', '#FF007B', '#00A1FF']}
        style={{
          flex: 1,
          opacity: 0.1,
          position: 'absolute',
          height: getHeightPer(100),
          width: getWidthPer(100),
        }}
      />

      <CommonHeadder
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={{width: '100%'}}>
        <CommonTexts
          string={stringAssets.Welcome_back}
          color="#F65E7F"
          fontWeight="bold"
          fontSize={40}
        />
        <CommonTexts
          string={stringAssets.Log_in_acc}
          color="black"
          fontSize={20}
        />
      </View>

      <View
        style={[
          coomonStyles.whiteBack,
          {flexDirection: 'row'},
          {marginTop: getHeightPer(3)},
        ]}>
        <Dropdown
          placeholderStyle={{color: 'black'}}
          search
          containerStyle={{width: getWidthPer(30)}}
          style={{width: '20%', marginHorizontal: '5%'}}
          data={countryListAllIsoData}
          labelField="number"
          valueField="code"
          placeholder="Select"
          maxHeight={getHeightPer(30)}
          searchPlaceholder="Search..."
          onChange={item => {
            setCCP(item);
          }}
        />
        <View style={{flexDirection: 'column', width: '70%'}}>
          {hint_visibility ? (
            <Text style={{color: 'grey'}}>{stringAssets.Number}</Text>
          ) : null}

          <TextInput
            autoFocus={false}
            placeholder={hint_visibility ? '' : stringAssets.Number}
            placeholderTextColor="grey"
            maxLength={10}
            keyboardType="number-pad"
            defaultValue={number}
            style={{width: '100%'}}
            onFocus={() => {
              set_hint_visibility(true);
            }}
            onBlur={() => {
              set_hint_visibility(false);
            }}
            onChangeText={text => {
              setNumber(text);
            }}
          />
        </View>
      </View>
      <CommonTexts
        color="#6C7072"
        marginTop={15}
        string={stringAssets.ReicieverSMS}
      />

      <CommonButton
        button_text={stringAssets.Log_in}
        backgroundColor="#F65E7F"
        width={getWidthPer(80)}
        position={'absolute'}
        bottom={75}
        fontWeight={'500'}
        onPress={() => checkData()}
      />
      <CommonTexts
        onPress={() => props.navigation.navigate(stringAssets.Login_2)}
        position={'absolute'}
        bottom={30}
        fontSize={16}
        fontWeight={'500'}
        color="#DD5371"
        string={stringAssets.Use_email_insted}
      />
    </View>
  );
};
export default Login;
