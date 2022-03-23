import React from 'react';
import {
  stringAssets,
  getHeightPer,
  getWidthPer,
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
} from '../Designs/CommonDesigns';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';

const Login = props => {
  return (
    <View
      style={[
        coomonStyles.parentView,
        {marginTop: StatusBar.currentHeight},
        {marginHorizontal: getWidthPer(7)},
      ]}>
      <StatusBar translucent={true} />

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

      <View style={[coomonStyles.whiteBack, {flexDirection: 'row'}]}>
        <Dropdown
          search={true}
          placeholderStyle={{color:'black'}}
        style = {{width:'20%',marginHorizontal :'5%'}}
          data={countryListAllIsoData}
          labelField="number"
          valueField="code"
          maxHeight={getHeightPer(30)}
          searchPlaceholder="Search..."
          onChange={item => {
            console.log(item);
          }}
        />
        <View style={{flexDirection:'column'}} ></View>
      </View>
    </View>
  );
};
export default Login;
