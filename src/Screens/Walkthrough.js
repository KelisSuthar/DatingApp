import React, {useState, useRef} from 'react';
import {
  stringAssets,
  WalkThroughList,
  getHeightPer,
  getWidthPer,
} from '../Strings/strings';
import {coomonStyles} from '../Styles/commonStyles';
import {CommonImgs, CommonButton, CommonTexts} from '../Designs/CommonDesigns';
import {View, Text, StatusBar, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const walkthrough_row = ({item}) => {
  return (
    <View style={{flexDirection: 'column '}}>
      <Image
        source={item.img}
        style={{width: getWidthPer(80), height: getHeightPer(50)}}></Image>
      <Text>
        {item.text}
      </Text>
    </View>
  );
};

const WalkThrough = props => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={[coomonStyles.parentView, {justifyContent: 'center'}]}>
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
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      {/* <Carousel
        style={{height:getHeightPer(20),backgroundColor:'black',position:'relative'}}
        layout='default'
        
        data={WalkThroughList}
        renderItem={(item)=>{walkthrough_row(item)}}
        sliderWidth={getWidthPer(50)}
        itemWidth={getWidthPer(50)}/>
      <Pagination
        dotsLength={WalkThroughList.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#F65E7F',
        }}
        tappableDots={false}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
      <CommonImgs
        path={require('../ImgAssets/heart_lock.png')}
        height={getHeightPer(30)}
        width={getWidthPer(80)}
        resizeMode="contain"
      />
      <CommonTexts
        string={stringAssets.WalkThrough_Text}
        fontSize={30}
        textAlign="center"
        color="black"
        fontWeight={'700'}
        marginTop={40}
      />
      <CommonButton
        button_text={stringAssets.WalkThrough_Button}
        backgroundColor="#F65E7F"
        width={getWidthPer(50)}
        position={'absolute'}
        bottom={75}
        fontWeight={'500'}
      />
      <Text
        style={{
          color: 'black',
          fontFamily: 'Poppins',
          fontWeight: '600',
          fontSize: 18,
          bottom: 20,
          position: 'absolute',
        }}>
        {stringAssets.Have_an_acc}
        <Text
          onPress={() => {
            props.navigation.navigate(stringAssets.Login);
          }}
          style={{
            color: '#F65E7F',
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: 18,
            bottom: 20,
            position: 'absolute',
          }}>
          {stringAssets.Log_in}
        </Text>
      </Text>
    </View>
  );
};
export default WalkThrough;
