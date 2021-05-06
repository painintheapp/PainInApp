import { combineReducers } from 'redux';
import CurdR from './CRUDReducer'
import auth from './auth'
const rootReducer = combineReducers({
    auth: auth,
    CurdR: CurdR,
});

export default rootReducer;