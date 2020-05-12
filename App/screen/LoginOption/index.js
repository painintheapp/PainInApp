/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import LoginOptionStyles from './LoginOptionStyles';
import { BLACK, WHITE } from '../../helper/Color';
import { SCREEN } from '../../helper/Constant';

class LoginOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  render() {
    return(
      <LoginOptionStyles.WrapperViewVertical>
        <LoginOptionStyles.AbsoluteImage source={require('../../assets/appLogo.png')}  />
        <LoginOptionStyles.HalfViewTop style={{paddingTop: SCREEN.height / 4.2}}>
        </LoginOptionStyles.HalfViewTop>
        <LoginOptionStyles.HalfViewBottom>
          <LoginOptionStyles.BottomButtonView>
            <LoginOptionStyles.SignInButton onPress={() => this.props.navigation.navigate("SignIn")}>
              <LoginOptionStyles.SignInText>
                Sign In
              </LoginOptionStyles.SignInText>
            </LoginOptionStyles.SignInButton>
            <LoginOptionStyles.CreateAccountButton onPress={() => this.props.navigation.navigate('SignUp')}>
              <LoginOptionStyles.CreateACcountText>
                Create Account
              </LoginOptionStyles.CreateACcountText>
            </LoginOptionStyles.CreateAccountButton>
          </LoginOptionStyles.BottomButtonView>
        </LoginOptionStyles.HalfViewBottom>
      </LoginOptionStyles.WrapperViewVertical>
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
)(LoginOption);
