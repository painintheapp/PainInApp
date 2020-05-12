import styled from 'styled-components/native';
import { SCREEN } from '../../helper/Constant';
import { BLACK, WHITE, APPCOLOR, LIGHTBLUE } from '../../helper/Color';
const LoginStyle = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${WHITE.dark};
  `,
  SafeView: styled.SafeAreaView`
    flex: 1;
    justifyContent: center;
  `,
  AbsoluteTopView: styled.View`
    height: 40px;
    width: ${SCREEN.width};
    position: absolute;
    backgroundColor: ${LIGHTBLUE.default};
    top: 0;
  `,
  HalfTopView: styled.View`
    flex: 0.35;
  `,
  AbsoluteBackImage: styled.Image`
    width: ${SCREEN.width + 30};
    height: ${SCREEN.height / 3.3};
    position: absolute;
    right: 0;
    top: 10;
  `,
  AbsoluteFrontImage: styled.Image`
    width: ${SCREEN.width + 20};
    height: ${SCREEN.height / 3.8};
    position: absolute;
    top: 10;
    right: 0;
  `,
  TopView: styled.View`
    height: 60;
    width: ${SCREEN.width};
    flexDirection: row;
    marginTop: 20px;
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
  AppIconTextView: styled.View`
   flexDirection: row;
   justifyContent: flex-end;
   paddingRight: 20px;
   alignItems: center;
  `,
  AppIcontop: styled.Image`
    height: 42px;
    width: 135px;
  `,
  PeopleText: styled.Text`
    fontSize: 16px;
    marginTop: 5px;
    color: ${WHITE.dark};
    alignSelf: flex-end;
    marginRight: 20px;
  `,
  LoginText: styled.Text`
    fontSize: 28px;
    width: ${SCREEN.width /2}
    marginTop: ${SCREEN.height / 10};
    marginLeft: 20px;
  `,
  HalfBottomView: styled.View`
    flex: 0.65;
  `,
  TextInputWrapper: styled.View`
    height: 55px;
    width: ${SCREEN.width - 40};
    alignSelf: center;
  `,
  TextInputText: styled.Text`
    fontSize: 13px;
    color: ${LIGHTBLUE.default};
    marginLeft: 40px;
  `,
  InputFieldAndIconView: styled.View`
    flexDirection: row;
    flex: 1;
    borderBottomWidth: 1px;
    borderBottomColor: ${BLACK.placeholder};
    alignItems: center;
  `,
  InputFieldIcon: styled.Image`
    height: 20;
    width: 30;
    resizeMode: contain;
  `,
  InputField: styled.TextInput`
    height: 40px;
    width: ${SCREEN.width - 80}px;
    paddingLeft: 10px;
  `,
  ForgotText: styled.Text`
    marginTop: 5px;
    alignSelf: flex-end;
    marginRight: 13px;
    fontSize: 14px;
    color: ${LIGHTBLUE.default};
    textDecorationLine: underline;
  `,
  SignInButton: styled.TouchableOpacity`
    height: 64px;
    width: ${SCREEN.width - 60}px;
    marginTop: 60px;
    alignSelf: center;
    alignItems: center;
    justifyContent: center;
    borderRadius: 32px;
    backgroundColor: ${LIGHTBLUE.default};
  `,
  SignInButtonText: styled.Text`
    color: ${WHITE.dark};
    fontSize: 20px;
  `,
  ThumbImage: styled.Image`
    height: 80px;
    width: 80px;
    alignSelf: center;
    marginTop: 10px;
  `,
  DontHaveAccountText: styled.Text`
    position: absolute;
    bottom: 40px;
    alignSelf: center;
  `,
};

export default LoginStyle;
