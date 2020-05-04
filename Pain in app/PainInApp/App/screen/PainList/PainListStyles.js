import styled from 'styled-components/native';
import {WHITE, BLUE, LIGHTBLUE, BLACK} from '../../helper/Color';
import { SCREEN, isIphoneXorAbove } from '../../helper/Constant';
const PainListStyles = {
  WrapperViewVertical: styled.View`
    background-color: ${WHITE.dark};
    flex: 1;
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${LIGHTBLUE.light};
  `,
  TopView: styled.View`
    height: 60;
    width: ${SCREEN.width};
    flexDirection: row;
  `,
  BackView: styled.View`
    flex: 1;
    paddingLeft: 20px;
    justifyContent: center;
    backgroundColor: ${LIGHTBLUE.default}
  `,
  BackButton: styled.TouchableOpacity`
    height: 16px;
    width: 20px;
  `,
  BackIcon: styled.Image`
    height: 16px;
    width: 20px;
  `,
  TextHeader: styled.Text`
    alignSelf: center;
    marginVertical: 10px;
  `,
  SearchTextInputWrapper: styled.View`
    height: 44px;
    width: ${SCREEN.width - 20}px;
    alignSelf: center;
    alignItems: center;
    flexDirection: row;
    backgroundColor: ${WHITE.dark};
    borderRadius: 10px;
  `,
  SearchIcon: styled.Image`
    height: 25px;
    width: 25px;
    marginLeft: 5px;
    resizeMode: contain;
  `,
  SearchTextInput: styled.TextInput`
    height: 44px;
    width: ${SCREEN.width - 70}px;
    marginLeft: 5px;
  `,
  DontKnowText: styled.Text`
    fontSize: 18px;
    color: ${WHITE.dark};
    marginTop: 10px;
  `,

  SelectConditionButton: styled.TouchableOpacity`
    height: 54px;
    width: ${SCREEN.width - 80}px;
    alignSelf: center;
    backgroundColor: ${BLACK.transParent};
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
    position: absolute;
    bottom: 60;
  `,
  SelectConditionText: styled.Text`
    color: ${WHITE.dark};
    fontSize: 20px;
    fontWeight: 400;
  `,

};

export default PainListStyles;
