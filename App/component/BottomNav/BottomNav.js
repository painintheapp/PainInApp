/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';

import BottomNavStyle from './BottomNavStyle';
import {BLUE, APPCOLOR, WHITE} from '../../helper/Color';

const BottomNav = ({navigation, index, isIphoneXorAbove, opacityActually}) => (
  <BottomNavStyle.WrapperView
    style={{
      height: isIphoneXorAbove ? 70 : 50,
      opacity: opacityActually,
      backgroundColor: WHITE.dark,
    }}>
    <BottomNavStyle.LinkWrapper
      style={{marginBottom: isIphoneXorAbove ? 15 : 0}}>
      <TouchableOpacity
        style={{
          borderRadius: 5,
        }}
        onPress={() => {
          if (opacityActually == 1) {
            navigation('HomeTab', 0);
          }
        }}>
        <BottomNavStyle.IconWrapperView>
          <BottomNavStyle.IconInner source={require('../../assets/home_app_color_1.png')}/>
          <BottomNavStyle.InnerText style={{alignSelf: 'center'}}>Home</BottomNavStyle.InnerText>
        </BottomNavStyle.IconWrapperView>
      </TouchableOpacity>
    </BottomNavStyle.LinkWrapper>
    <BottomNavStyle.LinkWrapper
      style={{marginBottom: isIphoneXorAbove ? 15 : 0}}>
      <TouchableOpacity
        style={{
          borderRadius: 5,
        }}
        onPress={() => {
          if (opacityActually == 1) {
            navigation('StoreTab', 1);
          }
        }}>
        <BottomNavStyle.IconWrapperView>
          <BottomNavStyle.IconInner source={require('../../assets/store_app_color.png')}/>
          {/* <BottomNavStyle.InnerText style={{alignSelf: 'center'}}>Buy</BottomNavStyle.InnerText> */}
        </BottomNavStyle.IconWrapperView>
      </TouchableOpacity>
    </BottomNavStyle.LinkWrapper>
    <BottomNavStyle.LinkWrapper
      style={{marginBottom: isIphoneXorAbove ? 15 : 0}}>
      <TouchableOpacity
        style={{
          borderRadius: 5,
        }}
        onPress={() => {
          if (opacityActually == 1) {
            navigation('EarnTab', 2);
          }
        }}>
        <BottomNavStyle.IconWrapperView>
          <BottomNavStyle.IconInner source={require('../../assets/invest_app_color.png')}/>
          <BottomNavStyle.InnerText style={{alignSelf: 'center'}}>Earn</BottomNavStyle.InnerText>
        </BottomNavStyle.IconWrapperView>
      </TouchableOpacity>
    </BottomNavStyle.LinkWrapper>

    <BottomNavStyle.LinkWrapper
      style={{marginBottom: isIphoneXorAbove ? 15 : 0}}>
      <TouchableOpacity
        style={{
          borderRadius: 5,
        }}
        onPress={() => {
          if (opacityActually == 1) {
            navigation('ProfileTab', 3);
          }
        }}>
        <BottomNavStyle.IconWrapperView>
          <BottomNavStyle.IconInner source={require('../../assets/person_app_color.png')}/>
          <BottomNavStyle.InnerText style={{alignSelf: 'center'}}>Profile</BottomNavStyle.InnerText>
        </BottomNavStyle.IconWrapperView>
      </TouchableOpacity>
    </BottomNavStyle.LinkWrapper>
  </BottomNavStyle.WrapperView>
);

export default BottomNav;
