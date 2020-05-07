import styled from 'styled-components/native';
import {SCREEN} from '../../helper/Constant';
import {WHITE, BLUE, APPCOLOR, BLACK} from '../../helper/Color';

const BottomNavStyle = {
  WrapperView: styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top-width: 1px;
    border-color: ${WHITE.transParent};
  `,

  LinkWrapper: styled.View`
    flex: 1;
    background-color: ${WHITE.dark};
  `,

  IconWrapperView: styled.View`
    align-items: center;
    justify-content: center;
    align-content: center;
  `,

  CreateView: styled.View`
    position: relative;
    align-items: center;
    justify-content: center;
  `,

  DotView: styled.View`
    position: absolute;
    align-self: center;
  `,

  IconInner: styled.Image`
    height: ${SCREEN.width / 14}px;
    width: ${SCREEN.width / 14}px;
    resizeMode: contain;
  `,
  InnerText: styled.Text`
    color: ${BLACK.placeholder};
    fontSize: 12px;
  `,
};

export default BottomNavStyle;
