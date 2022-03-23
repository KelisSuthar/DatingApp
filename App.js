/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Screens/Splash'
import WalkThrough from './src/Screens/Walkthrough'
import Login from './src/Screens/Login'
import Login2 from './src/Screens/Login2'
import ForgtePass from './src/Screens/Forgotpass'
import {stringAssets,getHeightPer,getWidthPer} from './src/Strings/strings'



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName={stringAssets.Splash} >
    <Stack.Screen name={stringAssets.Splash} component={Splash} options={{headerShown:false  }} />
    <Stack.Screen name={stringAssets.WalkThrough} component={WalkThrough}options={{headerShown:false  }}/>
    <Stack.Screen name={stringAssets.Login} component={Login}options = {{headerShown:false}} />
    <Stack.Screen name={stringAssets.Login_2} component={Login2} options = {{headerShown:false}}/>
    <Stack.Screen name={stringAssets.Forgot_Pass} component={ForgtePass} options = {{headerShown:false}}/>
  
  </Stack.Navigator>
</NavigationContainer>
);
};



export default App;
