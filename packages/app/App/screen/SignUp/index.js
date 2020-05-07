/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PhoneInput from 'react-native-phone-input';

import * as Actions from '../../redux/actions';
import SignUpStyle from './SignUpStyle';
import { BLACK, WHITE, APPCOLOR, LIGHTBLUE } from '../../helper/Color';
import Header from '../../component/Header';
import Loader from '../../component/Loader';

//0039F8
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      email_selected: false,
      password: '',
      pin_selected: false,
      f_name: '',
      f_name_selected: false,
      l_name: '',
      l_name_selected: false,
      phone_no: '',
      phone_selected: false,
      isLoading: false,
    };
  }

  render() {
    return (
      <SignUpStyle.WrapperViewVertical>
        <SignUpStyle.SafeView>
          <SignUpStyle.ScrollViewVertical>
            <SignUpStyle.TopView>
              <SignUpStyle.BackView>
                <SignUpStyle.BackButton onPress={() => this.props.navigation.pop()}>
                  <SignUpStyle.BackIcon source={require('../../assets/back.png')} />
                </SignUpStyle.BackButton>
              </SignUpStyle.BackView>
            </SignUpStyle.TopView>
            <SignUpStyle.LoginText>
              Sign up {'\n'}to use App
          </SignUpStyle.LoginText>
            <SignUpStyle.TextInputWrapper>
              <SignUpStyle.TextInputText>
                {this.state.email_selected && 'EMAIL'}
              </SignUpStyle.TextInputText>
              <SignUpStyle.InputFieldAndIconView style={{ borderBottomColor: this.state.email_selected ? LIGHTBLUE.default : BLACK.placeholder }}>
                {this.state.email_selected ? <SignUpStyle.InputFieldIcon source={require('../../assets/message_app_color.png')} /> :
                  <SignUpStyle.InputFieldIcon source={require('../../assets/message_black.png')} />}
                <SignUpStyle.InputField
                  onFocus={() => this.setState({ email_selected: true })}
                  onEndEditing={() => this.setState({ email_selected: false })}
                />
              </SignUpStyle.InputFieldAndIconView>
            </SignUpStyle.TextInputWrapper>

            <SignUpStyle.TextInputWrapper>
              <SignUpStyle.TextInputText>
                {this.state.f_name_selected && 'First Name'}
              </SignUpStyle.TextInputText>
              <SignUpStyle.InputFieldAndIconView style={{ borderBottomColor: this.state.f_name_selected ? LIGHTBLUE.default : BLACK.placeholder }}>
                {this.state.f_name_selected ? <SignUpStyle.InputFieldIcon source={require('../../assets/person_app_color.png')} /> :
                  <SignUpStyle.InputFieldIcon source={require('../../assets/person_black.png')} />}
                <SignUpStyle.InputField
                  onFocus={() => this.setState({ f_name_selected: true })}
                  onEndEditing={() => this.setState({ f_name_selected: false })}
                />
              </SignUpStyle.InputFieldAndIconView>
            </SignUpStyle.TextInputWrapper>

            <SignUpStyle.TextInputWrapper>
              <SignUpStyle.TextInputText>
                {this.state.l_name_selected && 'Last Name'}
              </SignUpStyle.TextInputText>
              <SignUpStyle.InputFieldAndIconView style={{ borderBottomColor: this.state.emailSelected ? LIGHTBLUE.default : BLACK.placeholder }}>
                {this.state.l_name_selected ? <SignUpStyle.InputFieldIcon source={require('../../assets/person_app_color.png')} /> :
                  <SignUpStyle.InputFieldIcon source={require('../../assets/person_black.png')} />}
                <SignUpStyle.InputField
                  onFocus={() => this.setState({ l_name_selected: true })}
                  onEndEditing={() => this.setState({ l_name_selected: false })}
                />
              </SignUpStyle.InputFieldAndIconView>
            </SignUpStyle.TextInputWrapper>

            <SignUpStyle.TextInputWrapper>
              <SignUpStyle.TextInputText>
                {this.state.pin_selected && 'Password'}
              </SignUpStyle.TextInputText>
              <SignUpStyle.InputFieldAndIconView style={{ borderBottomColor: this.state.pin_selected ? LIGHTBLUE.default : BLACK.placeholder }}>
                {this.state.pin_selected ? <SignUpStyle.InputFieldIcon source={require('../../assets/lock_app_color.png')} /> :
                  <SignUpStyle.InputFieldIcon source={require('../../assets/lock_black.png')} />}
                <SignUpStyle.InputField
                  onFocus={() => this.setState({ pin_selected: true })}
                  onEndEditing={() => this.setState({ pin_selected: false })}
                />
              </SignUpStyle.InputFieldAndIconView>
            </SignUpStyle.TextInputWrapper>

            <SignUpStyle.TextInputWrapper>
              <SignUpStyle.TextInputText>
                {this.state.phone_selected && 'Phone No.'}
              </SignUpStyle.TextInputText>
              <SignUpStyle.InputFieldAndIconView style={{ borderBottomColor: this.state.phone_selected ? LIGHTBLUE.default : BLACK.placeholder }}>
                {this.state.phone_selected ? <SignUpStyle.InputFieldIcon source={require('../../assets/phone_app_color.png')} /> :
                  <SignUpStyle.InputFieldIcon source={require('../../assets/phone_black.png')} />}
                <SignUpStyle.InputField
                  onFocus={() => this.setState({ phone_selected: true })}
                  onEndEditing={() => this.setState({ phone_selected: false })}
                />
              </SignUpStyle.InputFieldAndIconView>
            </SignUpStyle.TextInputWrapper>

            <SignUpStyle.SignInButton>
              <SignUpStyle.SignInButtonText>
                SIGN UP
            </SignUpStyle.SignInButtonText>
            </SignUpStyle.SignInButton>
          </SignUpStyle.ScrollViewVertical>
        </SignUpStyle.SafeView>
        {this.state.isLoading && <Loader loadingText='Registering' />}
      </SignUpStyle.WrapperViewVertical>
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
)(SignUp);
