/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import SignInStyle from './SignInStyle';
import { BLACK, WHITE, APPCOLOR, LIGHTBLUE } from '../../helper/Color';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      emailSelected: false,
      passwordSelected: false,
    };
  }

  render() {
    return(
      <SignInStyle.WrapperViewVertical>
        <SignInStyle.HalfTopView>
         <SignInStyle.AbsoluteTopView />
          <SignInStyle.TopView>
            <SignInStyle.BackView>
              <SignInStyle.BackButton onPress={() => this.props.navigation.pop()}>
                <SignInStyle.BackIcon source={require('../../assets/back.png')} />
              </SignInStyle.BackButton>
            </SignInStyle.BackView>
          </SignInStyle.TopView>
          <SignInStyle.LoginText>
            Login to {'\n'}Your Account
          </SignInStyle.LoginText>
        </SignInStyle.HalfTopView>
        <SignInStyle.HalfBottomView>
          <SignInStyle.TextInputWrapper>
            <SignInStyle.TextInputText>
            {this.state.emailSelected && 'EMAIL'}
            </SignInStyle.TextInputText>
            <SignInStyle.InputFieldAndIconView style={{borderBottomColor: this.state.emailSelected ? LIGHTBLUE.default : BLACK.placeholder}}>
              {this.state.emailSelected ? <SignInStyle.InputFieldIcon source={require('../../assets/message_app_color.png')} /> :
                <SignInStyle.InputFieldIcon source={require('../../assets/message_black.png')}/>}
              <SignInStyle.InputField
                onFocus={() => this.setState({emailSelected: true})}
                onEndEditing={() => this.setState({emailSelected: false})}
                />
            </SignInStyle.InputFieldAndIconView>
          </SignInStyle.TextInputWrapper>
          <SignInStyle.TextInputWrapper style={{marginTop: 10}}>
            <SignInStyle.TextInputText>
            {this.state.passwordSelected && 'PIN'}
            </SignInStyle.TextInputText>
            <SignInStyle.InputFieldAndIconView style={{borderBottomColor: this.state.passwordSelected ? LIGHTBLUE.default : BLACK.placeholder}}>
              {this.state.passwordSelected ? <SignInStyle.InputFieldIcon source={require('../../assets/lock_app_color.png')} /> :
                <SignInStyle.InputFieldIcon source={require('../../assets/lock_black.png')}/>}
              <SignInStyle.InputField
                 onFocus={() => this.setState({passwordSelected: true})}
                 onEndEditing={() => this.setState({passwordSelected: false})}
                 />
            </SignInStyle.InputFieldAndIconView>
          </SignInStyle.TextInputWrapper>
          <SignInStyle.ForgotText onPress={() => this.props.navigation.navigate("Forgot")}>
            Forgot Pin?
          </SignInStyle.ForgotText>
          <SignInStyle.SignInButton onPress={() => this.props.navigation.navigate("Home")}>
            <SignInStyle.SignInButtonText>
              SIGN IN
            </SignInStyle.SignInButtonText>
          </SignInStyle.SignInButton>
          <SignInStyle.DontHaveAccountText>
            Don't have account?{'  '}
            <SignInStyle.ForgotText onPress={() => this.props.navigation.navigate("SignUp")}>
              Sign Up >>
            </SignInStyle.ForgotText>
          </SignInStyle.DontHaveAccountText>
        </SignInStyle.HalfBottomView>
      </SignInStyle.WrapperViewVertical>
      );
  }
}

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
