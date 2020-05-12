/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import MyJournalStyles from './MyJournalStyles';

class MyJournal extends Component {
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
      <MyJournalStyles.WrapperViewVertical>
        <MyJournalStyles.SafeView>
            <MyJournalStyles.HeaderText style={{alignSelf: 'center'}}>
            My Journal
            </MyJournalStyles.HeaderText>
        </MyJournalStyles.SafeView>
      </MyJournalStyles.WrapperViewVertical>
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
)(MyJournal);
