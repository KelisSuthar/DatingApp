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
import Home from './src/Screens/HomeScrrens/BottomTabs'
import VideoCall from './src/Screens/Videocall/Videocall'
import JistiView from './src/Screens/Videocall/JitsiView'
import Setting from './src/Screens/HomeScrrens/SettingScreen/Setting'
import ProfileInfo from './src/Screens/HomeScrrens/Profile/ProfileInfo'
import Membership from './src/Screens/HomeScrrens/SettingScreen/MemberShip'
import AddCard from './src/Screens/HomeScrrens/PaymentScreens/AddCard'
import CardLists from './src/Screens/HomeScrrens/PaymentScreens/CardLists'
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
    <Stack.Screen name={stringAssets.Home} component={Home} options = {{headerShown:false}}/>
    <Stack.Screen name={stringAssets.Settings} component={Setting} options = {{headerShown:false}}/>
    <Stack.Screen name={stringAssets.CardList} component={CardLists} options = {{headerShown:false}}/>
    <Stack.Screen name={stringAssets.AddCard} component={AddCard} options = {{headerShown:false}}/>
    <Stack.Screen name={stringAssets.ProfileInfo} component={ProfileInfo} options = {{headerShown:false}}/>
    <Stack.Screen name={stringAssets.Membership} component={Membership} options = {{headerShown:false}}/>
    
  
  </Stack.Navigator>
</NavigationContainer>
);
};



export default App;
