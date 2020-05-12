import styled from 'styled-components/native';
import {WHITE, BLUE, APPCOLOR} from '../../helper/Color';
import { SCREEN, isIphoneXorAbove } from '../../helper/Constant';
const StoreStyles = {
  WrapperViewVertical: styled.View`
    background-color: ${WHITE.dark};
    flex: 1;
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
    marginBottom: ${isIphoneXorAbove ? 70: 50}px;
  `,
  HeaderView: styled.View`
    height: 44px;
    width: ${SCREEN.width}px;
    backgroundColor: ${APPCOLOR.deafult};
    justifyContent: center;
    paddingHorizontal: 10px; 
  `,
  HeaderText: styled.Text`
    fontSize: 22px;
    fontWeight: bold;
  `,
  List: styled.FlatList`
    minHeight: ${SCREEN.height /2.2}px;
    width: ${SCREEN.width}px;
  `,
  ItemWrapper: styled.TouchableOpacity`
    minHeight: 100px;
    width: ${SCREEN.width -20}px;
    alignSelf: center;
    borderRadius: 10px;
    borderWidth: 0.2px;
    marginTop: 10px;
    paddingBottom: 10px;
    `,
  ItemText: styled.Text`
    fontSize: 18px;
    marginTop: 10px;
  `,
  ItemInnerText: styled.Text`
    fontSize: 22px;
  `,

};

export default StoreStyles;
