/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../redux/actions';
import AddPainStyles from './AddPainStyles';
import Header from '../../component/Header';
import { BLACK, WHITE} from '../../helper/Color';

class AddPain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      yes: false,
      inProgressItem: [
        { name: 'Jewelry', progress: 'inProgress' },
        { name: 'Sculptures', progress: 'ready' },
        { name: 'clothing', progress: 'ready' },
        { name: 'Wooden Toys', progress: 'inprogress' }]
    };
  }

  render() {
    return (
      <AddPainStyles.WrapperViewVertical>
        <AddPainStyles.SafeView>
          <AddPainStyles.TopView>
            <AddPainStyles.BackView>
              <AddPainStyles.BackButton onPress={() => this.props.navigation.pop()}>
                <AddPainStyles.BackIcon source={require('../../assets/back.png')} />
              </AddPainStyles.BackButton>
            </AddPainStyles.BackView>
          </AddPainStyles.TopView>
          <AddPainStyles.TextHeader style={{ fontSize: 22, fontWeight: '500' }}>
            Conditions
           </AddPainStyles.TextHeader>
          <AddPainStyles.TextHeader style={{ fontSize: 22, alignSelf: 'flex-start', color: 'green', marginVertical: 10, fontWight: 'bold' }}>
            SYRINGOMYELIA
           </AddPainStyles.TextHeader>
          <AddPainStyles.DontKnowText style={{ fontSize: 16, alignSelf: 'flex-start', marginVertical: 10, color: BLACK.dark}}>
            This condition has been added to your journal. Do you suffer from any other condition?
           </AddPainStyles.DontKnowText>
           <AddPainStyles.RowView>
             <AddPainStyles.ToggleButton
               onPress={() => this.setState({yes : true})}
               style={{backgroundColor: this.state.yes ? BLACK.dark : WHITE.dark}}/>
             <AddPainStyles.ToogleButtonText>
               Yes
             </AddPainStyles.ToogleButtonText>
           </AddPainStyles.RowView>

           <AddPainStyles.RowView>
             <AddPainStyles.ToggleButton
               onPress={() => this.setState({yes : false})}
               style={{backgroundColor: !this.state.yes ? BLACK.dark : WHITE.dark}}/>
             <AddPainStyles.ToogleButtonText>
               No
             </AddPainStyles.ToogleButtonText>
           </AddPainStyles.RowView>
           <AddPainStyles.AcceptButton onPress={() => alert("Added")}>
             <AddPainStyles.AcceptButtonText>
               Accept
             </AddPainStyles.AcceptButtonText>
           </AddPainStyles.AcceptButton>
        </AddPainStyles.SafeView>
      </AddPainStyles.WrapperViewVertical>
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
)(AddPain);
