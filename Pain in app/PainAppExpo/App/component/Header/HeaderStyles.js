import styled from 'styled-components/native';

import {SCREEN, isIphoneXorAbove} from '../../helper/Constant';
import {WHITE, BLUE, APPCOLOR} from '../../helper/Color';

const HeaderStyles = {
  WrapperView: styled.View`
    width: 100%;
    height: ${isIphoneXorAbove ? 90 : 50}px;
    flex-direction: row;
    justify-content: space-between;
    marginTop: ${isIphoneXorAbove ? 10 : 0}px;
    align-items: center;
    border-bottom-width: 1px;
    border-color: ${WHITE.borderLight};
  `,
  Flex1View: styled.View`
    flex: 1;
    justifyContent: center;
  `,
  LeftText: styled.Text`
    fontSize: 16px;
    marginLeft: 15px;
    color: ${WHITE.dark};
    fontWeight: 600;
  `,
  LeftImage: styled.Image`
    height: 30px;
    width: 35px;
    marginLeft: 15px;
  `,
  RightText: styled.Text`
    alignSelf: flex-end;
    fontSize: 16px;
    marginRight: 15px;
    color: ${WHITE.dark};
    fontWeight: 600;
  `,
  RightImage: styled.Text`
    alignSelf: flex-end;
    height: 30px;
    width: 35px;
    marginRight: 15px;
  `,
  TitleImage: styled.Image`
    height: 40px;
    width: ${SCREEN.width / 3.2}px;
    alignSelf: center;
    resizeMode: contain;
  `,
};

export default HeaderStyles;
