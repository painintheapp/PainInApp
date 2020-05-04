/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import StoreStyles from './StoreStyles';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      completedItem: [
        {name: 'Jewelry', progress: 'delieved'},
        {name: 'Sculptures', progress: 'delieved'},
        {name: 'clothing', progress: 'delieved'},
        {name: 'Wooden Toys', progress: 'delieved'}],
    };
  }

  render() {
    return(
    <StoreStyles.WrapperViewVertical>
        <StoreStyles.SafeView>
            <StoreStyles.HeaderText style={{alignSelf: 'center'}}>
              Buy
            </StoreStyles.HeaderText>
        </StoreStyles.SafeView>
      </StoreStyles.WrapperViewVertical>
      )
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
)(Store);
