import styled from 'styled-components/native';
import { SCREEN } from '../../helper/Constant';
import { BLACK, WHITE, BLUE, APPCOLOR, LIGHTBLUE } from '../../helper/Color';
const LoginOptionStyles = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${BLACK.transParent};
  `,
  AbsoluteImage: styled.Image`
    height: ${SCREEN.height}px;
    width: ${SCREEN.width}px;
    position: absolute;
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
    justifyContent: center;
  `,
  HalfViewTop: styled.View`
    flex: 0.3;
    alignItems: center;
  `,
  HalfViewBottom: styled.View`
    flex: 0.7;
    alignItems: center;
  `,
  AppNameLogo: styled.Image`
    height: 50px;
    width: ${SCREEN.width /2.5}px;
  `,
  InvestText: styled.Text`
    fontSize: 30px;
    fontWeight: bold;
    textAlign: center;
    marginTop: 15px;
    lineHeight: 45px;
    color: ${WHITE.dark};
  `,
  AbsoluteTrendImage: styled.Image`
    width: ${SCREEN.width};
    height: ${SCREEN.height / 4}px;
    position: absolute;
    top: 0;
  `,
  BottomButtonView: styled.View`
    marginTop: ${SCREEN.height / 3.7}px;
    width: ${SCREEN.width}px;
  `,
  SignInButton: styled.TouchableOpacity`
    height: 60px;
    width: ${SCREEN.width - 40}px;
    alignSelf: center;
    borderRadius: 25px;
    backgroundColor: ${WHITE.dark};
    justifyContent: center;
    alignItems: center;
  `,
  SignInText: styled.Text`
    fontSize: 20px;
    color: ${LIGHTBLUE.default};
    fontWeight: bold
  `,
  CreateAccountButton: styled.TouchableOpacity`
    height: 60px;
    width: ${SCREEN.width - 40}px;
    alignSelf: center;
    borderRadius: 25px;
    backgroundColor: ${LIGHTBLUE.default};
    justifyContent: center;
    alignItems: center;
    borderWidth: 1px;
    borderColor: ${WHITE.dark};
    marginTop: 20px;
  `,
  CreateACcountText: styled.Text`
    fontSize: 20px;
    color: ${WHITE.dark};
    fontWeight: bold
  `,
};

export default LoginOptionStyles;
