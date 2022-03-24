import React from 'react';
import {
  stringAssets,
  StringRegex,
  getHeightPer,
  getWidthPer,
  ErrorMessages,
} from '../Strings/strings';
import {coomonStyles} from '../Styles/commonStyles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
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

const ForgotPass = props   => {
  const [isDialogShow, setDialog] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState('');
  const [OTP, setOTP] = React.useState('');
  function checkData() {
    if (OTP.length == 0) {
      setDialog(true);
      setDialogMsg(ErrorMessages.otp_empty)
    } else if (OTP.length != 4) {
      setDialog(true);
      setDialogMsg(ErrorMessages.otp_valid)
    } else {
      setDialog(true);
      setDialogMsg('Varification Succssfull')
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
          string={stringAssets.change_pass}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <CommonTexts
          width={'100%'}
          textAlign={'center'}
          string={stringAssets.forgot_headder_1}
          color={'#F65E7F'}
          fontSize={16}
          fontWeight={'bold'}
          marginTop={25}
        />
        <CommonTexts
          width={'100%'}
          textAlign={'center'}
          string={stringAssets.forgot_headder_2}
          color={'black'}
          fontSize={15}
          marginTop={25}
        />
        <OTPInputView
          style={{
            width: '70%',
            alignSelf: 'center',
            height: '10%',
            marginTop: 50,
            
          }}
          pinCount={4}
          autoFocusOnLoad = {false}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged = {code => { setOTP(code)}}
          // secureTextEntry = {true}
          codeInputFieldStyle={coomonStyles.otp}
          codeInputHighlightStyle={coomonStyles.otp_active}
        />
      </View>
      <CommonButton
        button_text={stringAssets.continue}
        backgroundColor="black"
        width={getWidthPer(80)}
        position={'absolute'}
        bottom={75}
        fontWeight={'500'}
        onPress={() => checkData()}
      />
      <CommonTexts
        position={'absolute'}
        bottom={30}
        fontSize={16}
        fontWeight={'500'}
        color="#DD5371"
        string={stringAssets.resend_code}
        onPress={()=>{setDialog(true),setDialogMsg("Code Resend Successfully")}}
      />
    </View>
  );
};
export default ForgotPass;
