/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
// @flow

import { Dimensions } from 'react-native';

export const BASE_URL = 'https://devlab-backend.000webhostapp.com/public/api/';
export const SCREEN = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};
export const TOKEN = "TOKENSAVE";
export const USERDETAIL = "USERDETAIL";
export const isIphoneXorAbove = (SCREEN.height === 812 || SCREEN.width === 812 || (SCREEN.height === 896 || SCREEN.width === 896)) ? true : false;
