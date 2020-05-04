/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Calendar } from 'react-native-calendars';

import * as Actions from '../../redux/actions';
import HomeScreenStyles from './HomeStyles';
import Header from '../../component/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      inProgressItem: [
        { name: 'Jewelry', progress: 'inProgress' },
        { name: 'Sculptures', progress: 'ready' },
        { name: 'clothing', progress: 'ready' },
        { name: 'Wooden Toys', progress: 'inprogress' }]
    };
  }

  render() {
    return (
      <HomeScreenStyles.WrapperViewVertical>
        <HomeScreenStyles.SafeView>
          <HomeScreenStyles.HeaderText style={{ alignSelf: 'center' }}>
            Home
            </HomeScreenStyles.HeaderText>
            <HomeScreenStyles.ImageTop source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}} />
          <Calendar
            // Collection of dates that have to be marked. Default = {}
            onDayPress={(day) => this.props.navigation.navigate("PainList")}
            markedDates={{
              '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
              '2012-05-17': { marked: true },
              '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
              '2012-05-19': { disabled: true, disableTouchEvent: true }
            }}
          />
        </HomeScreenStyles.SafeView>
      </HomeScreenStyles.WrapperViewVertical>
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
)(Home);
