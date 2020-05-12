import styled from 'styled-components/native';
import { SCREEN } from '../../helper/Constant';
import { BLACK, WHITE, BLUE, APPCOLOR, LIGHTBLUE } from '../../helper/Color';
const SignUpStyle = {
  WrapperViewVertical: styled.View`
    flex: 1;
    backgroundColor: ${LIGHTBLUE.light};
  `,
  ScrollViewVertical: styled.ScrollView`
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
  SafeView: styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${LIGHTBLUE.default}
  `,
  TextInputWrapper: styled.View`
    height: 55px;
    width: ${SCREEN.width - 20};
    alignSelf: center;
    marginTop: 8px;
    flexDirection: row;
    alignItems: center;
  `,
  TextInputText: styled.Text`
    fontSize: 17px;
  `,
  LoginText: styled.Text`
    fontSize: 28px;
    width: ${SCREEN.width /2}
    marginTop: ${SCREEN.height / 10};
    marginLeft: 20px;
  `,
  InputField: styled.TextInput`
    height: 40px;
    width: ${SCREEN.width - 120}px;
    paddingLeft: 10px;
    borderWidth: 1px;
    backgroundColor: ${WHITE.dark};
    marginLeft: 10px;
    borderColor: ${WHITE.dark};
  `,
  SignInButton: styled.TouchableOpacity`
    height: 64px;
    width: ${SCREEN.width - 60}px;
    marginTop: 15px;
    marginBottom: 15px;
    alignSelf: center;
    alignItems: center;
    justifyContent: center;
    backgroundColor: ${LIGHTBLUE.default};
  `,
  InputFieldWithIcon: styled.View`
    height: 40px;
    width: ${SCREEN.width / 2}px;
    borderWidth: 1px;
    backgroundColor: ${WHITE.dark};
    marginLeft: 10px;
    borderColor: ${WHITE.dark};
    justifyContent: center;
    alignItems: center;
  `,
  GenderWrapper: styled.View`
    height: 35px;
    width: ${SCREEN.width / 2.5};
    flexDirection: row;
  `,
  ToogleButton: styled.TouchableOpacity`
    flex: 1;
    justifyContent: center;
    alignItems: center;
  `,

  AbsoluteIcon: styled.Image`
    position: absolute;
    right: 5px;
    height: 30px;
    width: 30px;
  `,
  SignInButtonText: styled.Text`
    color: ${WHITE.dark};
    fontSize: 20px;
  `,
  ListConditionTextInput: styled.TextInput`
    height: 100px;
    width: ${SCREEN.width - 30}px;
    alignSelf: center;
    backgroundColor: ${WHITE.dark};
    marginTop: 10px;
    padding: 5px;
  `,
};

export default SignUpStyle;
