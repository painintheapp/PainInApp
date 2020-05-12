import {
  SET_USER,
  ALTER_USER,
  ALTER_JUST_USER,
  SET_TOKEN,
} from '../actions/types';
import {AsyncStorage} from 'react-native';

const INITIAL_USER = {
  userDetail: '',
  userToken: '',
  loading: true,
};

const userReducer = (state = INITIAL_USER, action) => {
  switch (action.type) {
    case SET_USER:
      console.log('SET_USER', JSON.parse(action.payload));
      state = Object.assign({}, state, {
        userDetail: JSON.parse(action.payload),
        //userToken: JSON.parse(action.payload).token,
        loading: false,
      });
      return state;

    case ALTER_USER:
      //console.log("SET_USER alter", action.payload)
      state = new Object.assign({}, state, {
        userDetail: action.payload.user,
        userToken: action.payload.token,
        loading: false,
      });
      AsyncStorage.setItem('USER', JSON.stringify(action.payload.user));
      AsyncStorage.setItem('TOKEN', JSON.stringify(action.payload.token));
      return state;

    case ALTER_JUST_USER:
      state = Object.assign({}, state, {userDetail: action.payload});
      AsyncStorage.setItem('USER', JSON.stringify(action.payload));
      return state;

    case SET_TOKEN:
      state = Object.assign({}, state, {userToken: action.payload});
      AsyncStorage.setItem('TOKEN', action.payload);
      return state;

    default:
      return state;
  }
};

export default userReducer;
