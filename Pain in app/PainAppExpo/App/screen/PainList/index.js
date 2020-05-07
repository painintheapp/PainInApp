/* eslint-disable no-undef */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import PainListStyles from './PainListStyles';
import Header from '../../component/Header';

class PainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      inProgressItem: [
        {name: 'Jewelry', progress: 'inProgress'},
        {name: 'Sculptures', progress: 'ready'},
        {name: 'clothing', progress: 'ready'},
        {name: 'Wooden Toys', progress: 'inprogress'}]
    };
  }

  render() {
    return (
      <PainListStyles.WrapperViewVertical>
        <PainListStyles.SafeView>
        <PainListStyles.TopView>
            <PainListStyles.BackView>
              <PainListStyles.BackButton onPress={() => this.props.navigation.pop()}>
                <PainListStyles.BackIcon source={require('../../assets/back.png')} />
              </PainListStyles.BackButton>
            </PainListStyles.BackView>
          </PainListStyles.TopView>
           <PainListStyles.TextHeader style={{fontSize: 22, fontWeight: '500'}}>
             Conditions
           </PainListStyles.TextHeader>
           <PainListStyles.TextHeader style={{fontSize: 16}}>
             Hi Patty, which condition(s) are you dealing with?
           </PainListStyles.TextHeader>
           <PainListStyles.SearchTextInputWrapper>
             <PainListStyles.SearchIcon source={require('../../assets/search.png')} />
             <PainListStyles.SearchTextInput />
           </PainListStyles.SearchTextInputWrapper>
           <PainListStyles.DontKnowText style={{alignSelf: 'center'}}>
             Dont know your condition ?
             <PainListStyles.DontKnowText onPress={()=> alert("Ok")}>
               Click here
             </PainListStyles.DontKnowText>
           </PainListStyles.DontKnowText>
           <PainListStyles.SelectConditionButton onPress={()=> this.props.navigation.navigate('AddPain')}>
             <PainListStyles.SelectConditionText>
               Select Condition
             </PainListStyles.SelectConditionText>
           </PainListStyles.SelectConditionButton>
        </PainListStyles.SafeView>
      </PainListStyles.WrapperViewVertical>
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
)(PainList);
