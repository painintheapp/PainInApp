import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import Auth from "./Auth";
import Common from './Common'
import Settings from './Settings'
import activities from './Activities'
import AdminDashboard from "./AdminDashboard";
import SignUp from "./SignUp";
import CurdReducer from './CRUDReducer'
import PageInfo from './PageInfo'
import AdminSettings from "./AdminSettings";
export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  commonR: Common,
  activities: activities,
  adminDashboard: AdminDashboard,
  signUp: SignUp,
  adminSettings: AdminSettings,
  CurdR: CurdReducer,
  pageInfoR: PageInfo,
});
