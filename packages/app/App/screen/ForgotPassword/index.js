/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import ForgotPasswordStyle from './ForgotPasswordStyle';
import { BLACK, WHITE, APPCOLOR } from '../../helper/Color';

class ForgotPassword extends Component {
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
      <ForgotPasswordStyle.WrapperViewVertical>
        <ForgotPasswordStyle.HalfTopView>
         <ForgotPasswordStyle.AbsoluteTopView />
          <ForgotPasswordStyle.TopView>
            <ForgotPasswordStyle.BackView>
              <ForgotPasswordStyle.BackButton onPress={() => this.props.navigation.pop()}>
                <ForgotPasswordStyle.BackIcon source={require('../../assets/back.png')} />
              </ForgotPasswordStyle.BackButton>
            </ForgotPasswordStyle.BackView>
          </ForgotPasswordStyle.TopView>
          <ForgotPasswordStyle.LoginText>
            Send {'\n'}Pin to Email
          </ForgotPasswordStyle.LoginText>
        </ForgotPasswordStyle.HalfTopView>
        <ForgotPasswordStyle.HalfBottomView>
          <ForgotPasswordStyle.TextInputWrapper>
            <ForgotPasswordStyle.TextInputText>
            {this.state.emailSelected && 'EMAIL'}
            </ForgotPasswordStyle.TextInputText>
            <ForgotPasswordStyle.InputFieldAndIconView style={{borderBottomColor: this.state.emailSelected ? APPCOLOR.deafult : BLACK.placeholder}}>
              {this.state.emailSelected ? <ForgotPasswordStyle.InputFieldIcon source={require('../../assets/message_app_color.png')} /> :
                <ForgotPasswordStyle.InputFieldIcon source={require('../../assets/message_black.png')}/>}
              <ForgotPasswordStyle.InputField
                onFocus={() => this.setState({emailSelected: true})}
                onEndEditing={() => this.setState({emailSelected: false})}
                />
            </ForgotPasswordStyle.InputFieldAndIconView>
          </ForgotPasswordStyle.TextInputWrapper>
          <ForgotPasswordStyle.SignInButton>
            <ForgotPasswordStyle.SignInButtonText>
              Send Email
            </ForgotPasswordStyle.SignInButtonText>
          </ForgotPasswordStyle.SignInButton>
        </ForgotPasswordStyle.HalfBottomView>
      </ForgotPasswordStyle.WrapperViewVertical>
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
)(ForgotPassword);
