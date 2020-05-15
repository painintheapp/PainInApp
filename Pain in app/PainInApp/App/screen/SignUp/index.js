/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../redux/actions';
import SignUpStyle from './SignUpStyle';
import { BLACK, WHITE, APPCOLOR, LIGHTBLUE } from '../../helper/Color';
import Loader from '../../component/Loader';
import { SCREEN } from '../../helper/Constant';

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
      male: false,
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
          <SignUpStyle.TextInputWrapper>
            <SignUpStyle.TextInputText style={{width: SCREEN.width / 4.5}}>
              First name
            </SignUpStyle.TextInputText>
            <SignUpStyle.InputField placeholder= "First"/>
          </SignUpStyle.TextInputWrapper>

          <SignUpStyle.TextInputWrapper>
            <SignUpStyle.TextInputText style={{width: SCREEN.width / 4.5}}>
              Last name
            </SignUpStyle.TextInputText>
            <SignUpStyle.InputField placeholder= "Last"/>
          </SignUpStyle.TextInputWrapper>

          <SignUpStyle.TextInputWrapper>
            <SignUpStyle.TextInputText style={{width: SCREEN.width / 4.5}}>
              Age
            </SignUpStyle.TextInputText>
            <SignUpStyle.InputField keyboardType= "numeric" placeholder= "Age" />
          </SignUpStyle.TextInputWrapper>

          <SignUpStyle.TextInputWrapper>
            <SignUpStyle.TextInputText style={{width: SCREEN.width / 4.5}}>
              Weight
            </SignUpStyle.TextInputText>
            <SignUpStyle.InputField keyboardType= "numeric" placeholder= "Weight" />
          </SignUpStyle.TextInputWrapper>

          <SignUpStyle.TextInputWrapper>
            <SignUpStyle.TextInputText style={{width: SCREEN.width / 4.5}}>
              Height
            </SignUpStyle.TextInputText>
            <SignUpStyle.InputField placeholder= "Height" />
          </SignUpStyle.TextInputWrapper>

          <SignUpStyle.TextInputWrapper>
            <SignUpStyle.TextInputText style={{width: SCREEN.width / 2.5}}>
              Gender
            </SignUpStyle.TextInputText>
            <SignUpStyle.InputFieldWithIcon style={{backgroundColor: LIGHTBLUE.light, borderWidth: 0}}>
              <SignUpStyle.GenderWrapper>
                <SignUpStyle.ToogleButton
                  onPress={() => this.setState({male: true})}
                  style={{backgroundColor: this.state.male ? LIGHTBLUE.default : LIGHTBLUE.dull, borderWidth: 1, borderColor: WHITE.dark}}>
                  <SignUpStyle.SignInButtonText>
                    Male
                  </SignUpStyle.SignInButtonText>
                  </SignUpStyle.ToogleButton>
                <SignUpStyle.ToogleButton
                  onPress={() => this.setState({male: false})}
                  style={{backgroundColor: this.state.male ? LIGHTBLUE.dull : LIGHTBLUE.default, borderWidth: 1, borderColor: WHITE.dark}}>
                <SignUpStyle.SignInButtonText>
                    Female
                  </SignUpStyle.SignInButtonText>
                  </SignUpStyle.ToogleButton>
              </SignUpStyle.GenderWrapper>
            </SignUpStyle.InputFieldWithIcon>
          </SignUpStyle.TextInputWrapper>

          <SignUpStyle.TextInputWrapper>
            <SignUpStyle.TextInputText style={{width: SCREEN.width / 2.5}}>
              Primary Symptom
            </SignUpStyle.TextInputText>
            <SignUpStyle.InputFieldWithIcon>
              <SignUpStyle.InputField
                placeholder= "Symptom"
                style={{width: SCREEN.width / 2, marginLeft: 0}}/>
              <SignUpStyle.AbsoluteIcon source={require ('../../assets/search.png')} />
            </SignUpStyle.InputFieldWithIcon>
          </SignUpStyle.TextInputWrapper>

          <SignUpStyle.TextInputWrapper>
            <SignUpStyle.TextInputText style={{width: SCREEN.width / 2.5}}>
              Search Condition(s)
            </SignUpStyle.TextInputText>
            <SignUpStyle.InputFieldWithIcon>
              <SignUpStyle.InputField
                placeholder= "Symptom"
                style={{width: SCREEN.width / 2, marginLeft: 0}}/>
              <SignUpStyle.AbsoluteIcon source={require ('../../assets/search.png')} />
            </SignUpStyle.InputFieldWithIcon>
          </SignUpStyle.TextInputWrapper>
          <SignUpStyle.TextInputText style={{marginLeft: 10}}>
              List Conditions(s)
            </SignUpStyle.TextInputText>
            <SignUpStyle.ListConditionTextInput 
                placeholder= "Enter Conditions"
                multiline={true} />
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
