/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import EarnStyles from './EarnStyles';

class Earn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  render() {
    return (
      <EarnStyles.WrapperViewVertical>
        <EarnStyles.SafeView>
            <EarnStyles.HeaderText style={{alignSelf: 'center'}}>
              Comunity  Discusion
            </EarnStyles.HeaderText>
        </EarnStyles.SafeView>
      </EarnStyles.WrapperViewVertical>
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
)(Earn);
