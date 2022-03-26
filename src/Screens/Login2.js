import React from 'react';
import {
  stringAssets,
  StringRegex,
  getHeightPer,
  getWidthPer,
  ErrorMessages,
  AsyncStorageStrings,
} from '../Strings/strings';
import {coomonStyles} from '../Styles/commonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {
  CommonImgs,
  CommonButton,
  CommonWhiteBack,
  CommonTexts,
  CommonHeadder,
  WhiteTextInput,
  CommonModalDialog,
} from '../Designs/CommonDesigns';
import {View, SafeAreaView, TextInput, StatusBar, Text} from 'react-native';
import { parseComponentStack } from 'react-native/Libraries/LogBox/Data/parseLogBoxLog';
const Login2 = props => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  function checkData() {
    if (email.length == 0) {
      setDialog(true);
      setDialogMsg(ErrorMessages.email_empty);
    } else if (pass.length == 0) {
      setDialog(true);
      setDialogMsg(ErrorMessages.pass_empty);
    } else if (!StringRegex.email_regex.test(email)) {
      setDialog(true);
      setDialogMsg(ErrorMessages.email_valid);
    } else if (!StringRegex.pass_regex.test(pass)) {
      setDialog(true);
      setDialogMsg(ErrorMessages.pass_valid);
    } else {
      setDialogMsg('Succress');
      setDialog(true);
      props.navigation.replace(stringAssets.Home)
      AsyncStorage.setItem(AsyncStorageStrings.IS_LOGIN, '1');
    }
  }
  return (
    <View
      style={[
        coomonStyles.parentView,
        {justifyContent: 'center'},
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
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          position: 'absolute',
          alignSelf: 'center',
          top: StatusBar.currentHeight,
        }}>
        <CommonHeadder
          width={'100%'}
          string={stringAssets.Log_in}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <WhiteTextInput
          returnKeyType="next"
          Hint={stringAssets.email}
          onChangeText={text => {
            setEmail(text);
          }}
          defaultValue={email}
          onSubmitEditing={() => {
            pass.focus();
          }}
        />
        <WhiteTextInput
          Hint={stringAssets.password}
          onChangeText={text => {
            setPass(text);
          }}
          iseyeshow={true}
          defaultValue={pass}
          // ref={input => {
          //   pass = input;
          // }}
        />

        <CommonTexts
          marginTop={getHeightPer(1)}
          string={stringAssets.Forgot_Pass_q}
          color={'#DD5371'}
          fontWeight={'700'}
          fontSize={16}
          onPress={() => {
            props.navigation.navigate(stringAssets.Forgot_Pass);
          }}
        />
      </View>
      <CommonButton
        button_text={stringAssets.Log_in}
        backgroundColor="#F65E7F"
        width={getWidthPer(80)}
        position={'absolute'}
        bottom={75}
        fontWeight={'500'}
        onPress={() => checkData()}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          position: 'absolute',
          fontWeight: '600',
          fontFamily: 'Poppins',
          bottom: 150,
        }}>
        By continuing, you agree to our
        <Text
          onPress={() => {
            setDialog(true), setDialogMsg('Comming Soon');
          }}
          style={{
            color: '#F65E7F',
          }}>
          {stringAssets.Terms_conditaion}
          <Text
            style={{
              color: 'black',
            }}>
            And
            <Text
              onPress={() => {
                setDialog(true), setDialogMsg('Comming Soon');
              }}
              style={{
                color: '#F65E7F',
              }}>
              {stringAssets.Prpivacy_policy}
            </Text>
          </Text>
        </Text>
      </Text>
    </View>
  );
};
export default Login2;
