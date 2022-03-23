import React from 'react';
import {stringAssets,getHeightPer,getWidthPer} from '../Strings/strings'
import {coomonStyles} from '../Styles/commonStyles'
import {View,
    Text} from 'react-native'
const ForgotPass = ()=>{
    return(
        <View style = {coomonStyles.parentView}>
            <Text style = {{color:'red',fontSize:10}}>{stringAssets.Splash_text}</Text>
            </View>
    );
};
export default ForgotPass;