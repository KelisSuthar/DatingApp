import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import FavList from './Favourite';
import Message from './Messege';
import MatchedDates from './MatchedDate';
import Profile from './Profile';
import {NavigationContainer} from '@react-navigation/native';

import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  getWidthPer,
} from '../../Strings/strings';
import {coomonStyles} from '../../Styles/commonStyles';
import {
  CommonImgs,
  CommonButton,
  CommonTexts,
} from '../../Designs/CommonDesigns';
import {View, Text, StatusBar, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Tab = createBottomTabNavigator();

const BottomTabs = props => {
  

  return (
    // <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
    <Tab.Navigator
      screenOptions={{
        tabBarBackground: () => (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#fde6f2', '#f3edf8', '#e6f5ff']}
            style={{
              flexDirection: 'row',
              height: getHeightPer(100),
              width: getWidthPer(100),
            }}
          />
        ),
      }}>
      <Tab.Screen
        name={stringAssets.Tab_Home}
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <Image
            source={ focused? require('../../ImgAssets/search_selected.png'): require('../../ImgAssets/search.png')}
              style={{tintColor: {color}}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={stringAssets.Tab_MatchedDates}
        component={MatchedDates}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <Image
            source={ focused? require('../../ImgAssets/calendar_selected.png'): require('../../ImgAssets/calendar.png')}
              style={{tintColor: {color}}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={stringAssets.Tab_Favlist}
        component={FavList}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <Image
            source={ focused? require('../../ImgAssets/heart_selected.png'): require('../../ImgAssets/heart.png')}
              style={{tintColor: {color}}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={stringAssets.Tab_Message}
        component={Message}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size,focused}) => (
              
            <Image
              source={ focused? require('../../ImgAssets/message_selected.png'): require('../../ImgAssets/message.png')}
              style={{tintColor: {color}}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={stringAssets.Tab_Profile}
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <Image
            source={ focused? require('../../ImgAssets/user_selected.png'): require('../../ImgAssets/user.png')}
              style={{tintColor: {color}}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
