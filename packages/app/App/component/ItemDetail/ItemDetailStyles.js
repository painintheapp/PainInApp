import styled from 'styled-components';
import {SCREEN, isIphoneXorAbove} from '../../helper/Constant';
import {WHITE, BLUE, BLACK} from '../../helper/Color';

const ItemDetailStyles = {
  WrapperView: styled.View`
    width: ${SCREEN.width}px;;
    height: ${SCREEN.height}px;
    position: absolute;
    backgroundColor: ${BLACK.transParent};
    justifyContent: center;
  `,
  ItemText: styled.Text`
  fontSize: 18px;
  marginTop: 10px;
`,
ItemInnerText: styled.Text`
  fontSize: 22px;
`,
};

export default ItemDetailStyles;
