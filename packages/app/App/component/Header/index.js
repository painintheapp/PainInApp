import React from 'react';

import HeaderStyles from './HeaderStyles';

const Header = ({
  backColor,
  leftType,
  leftImage,
  leftText,
  rightType,
  rightImage,
  rightText,
  HeaderText,
  leftPress,
  rightPress,
}) => (
  <HeaderStyles.WrapperView>
    <HeaderStyles.Flex1View>
      {leftType === 'text' ? 
         <HeaderStyles.LeftText onPress = {leftPress}>
            {leftText}
         </HeaderStyles.LeftText> :
         <HeaderStyles.LeftImage />}
    </HeaderStyles.Flex1View>
    <HeaderStyles.Flex1View>
      <HeaderStyles.TitleImage source={require('../../assets/name_app_white2.png')}/>
    </HeaderStyles.Flex1View>
    <HeaderStyles.Flex1View>
    {rightType === 'text' ? 
         <HeaderStyles.RightText onPress = {rightPress}>
            {rightText}
         </HeaderStyles.RightText> :
         <HeaderStyles.RightImage />}
    </HeaderStyles.Flex1View>
  </HeaderStyles.WrapperView>)

export default Header;
