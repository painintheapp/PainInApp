import styled from 'styled-components/native';
import {BLUE} from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';
const SplashStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    justify-content: center;
  `,
  ActivityProcessing: styled.ActivityIndicator`
    align-self: center;
    position: absolute;
  `,
  SplashImage: styled.Image`
    height: 100px;
    width: 100px;
    alignSelf: center;
  `,
};

export default SplashStyles;
