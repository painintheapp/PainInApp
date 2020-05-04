import styled from 'styled-components/native';
import { SCREEN } from '../../helper/Constant';
import { BLACK, WHITE, BLUE, APPCOLOR, LIGHTBLUE } from '../../helper/Color';
const SignUpStyle = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${WHITE.dark};
  `,
  ScrollViewVertical: styled.ScrollView`
  flex: 1;
  backgroundColor: ${WHITE.dark};
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
  SafeView: styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${LIGHTBLUE.default}
  `,
  TextInputWrapper: styled.View`
    height: 55px;
    width: ${SCREEN.width - 40};
    alignSelf: center;
    marginTop: 5px;
  `,
  TextInputText: styled.Text`
    fontSize: 13px;
    color: ${LIGHTBLUE.default};
    marginLeft: 40px;
  `,
  LoginText: styled.Text`
    fontSize: 28px;
    width: ${SCREEN.width /2}
    marginTop: ${SCREEN.height / 10};
    marginLeft: 20px;
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
};

export default SignUpStyle;
