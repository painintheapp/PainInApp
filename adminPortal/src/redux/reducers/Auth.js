import {updateProfile} from './CommonFn'
const INIT_STATE = {
  token: localStorage.getItem('token'),
  initURL: '',
  authUser: JSON.parse(localStorage.getItem('userInfo')),
  loginStart: false,
  success: false,
  error: false,
  message: '',
  otpSuccess: false,
  otpLoader: false,
  ShowSetNewLoader: false,
  ShowForgotLoader: false,
  userInfo: null,
  userRegisterSuccessfully: false,
  userRegisterFail: false,
  savingDetail: false,
  savingLoginDetail: false,
  loginDetailChangeSuccessfully: false,
  loginDetailChangeFail: false,
  loginFail: false,
  loginFailMessage: '',
  loginSuccess: false,
  logoutSuccess: false,
  ShowRestLoader: false,
  TokenSaveSuccess:false,

  changePasswordModelVisible : false,
    editProfileModalVisible : false,
    planSettingsCompleted : false,
    isPasswordChanged : false,
    planeSettings : [],
    textMessage:'',
    isPlanSettingsFail:false,
    isPlanSettingsUpdated:false,
    settingsData:[],
    fetchingLoader: false,
    profileEditeSuccess:false,
    updatingProfile : false



};

export default (state = INIT_STATE, action) => {
  switch (action.type) {


    case 'logout_success': {
      localStorage.clear()
      return { ...state, logoutSuccess: true, initURL: '/', token: null, authUser: null }
    }

    case 'saveEvent': {
      console.log("==============",action);
      localStorage.setItem('userInfo', JSON.stringify(action.userInfo));
      return { ...state, token: action.token, authUser: action.userInfo, TokenSaveSuccess:true }
    }

    case 'reset_START': {
      return { ...state, ShowRestLoader: true };
    }
    case 'reset_STOP': {
      return { ...state, ShowRestLoader: false };
    }

    // case 'resetPassword_SUCCESS': {
    //   return { ...state, ShowRestLoader: false, error: false, success: true, message: "You are Successfully Reset Password." };
    // }
    case 'resetPassword_FAILURE': {
      return { ...state, ShowRestLoader: false, error: true, success: false, message: action.payload };
    }

    case 'login_SUCCESS': {
      localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.user.token)
     
      return { ...state, loginFailMessage: '', loginSuccess: true, token: action.payload.user.token, authUser: action.payload.user }
    }
    case 'login_FAILURE': {
      console.log("============ Login Fail========", action);
      return { ...state, loginFail: true, loginFailMessage: action.payload }
    }
    case 'changingLoginDetail_START': {
      return { ...state, savingLoginDetail: true }
    }
    case 'setNewPassword_SUCCESS': {
      return { ...state, savingLoginDetail: false, loginDetailChangeSuccessfully: true, loginDetailChangeFail: false }
    }
    case 'setNewPassword_FAILURE': {
      return { ...state, savingLoginDetail: false, loginDetailChangeSuccessfully: false, loginDetailChangeFail: true }
    }

    case 'savingUserDetail_START': {
      return { ...state, savingDetail: true }
    }
    case 'signUp_SUCCESS': {
      localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.user.token)
      return { ...state, savingDetail: false, userRegisterSuccessfully: true }
    }
    case 'signUp_FAILURE': {
      return { ...state, savingDetail: false, userRegisterFail: true }
    }

    case 'forgetPassword_SUCCESS': {
      return { ...state, ShowForgotLoader: false, error: false, success: true, message: "You are Successfully Reset Password." };
    }
    case 'forgetPassword_FAILURE': {
      return { ...state, ShowForgotLoader: false, error: true, success: false, message: action.payload };
    }

    case 'forgot_START': {
      return { ...state, ShowForgotLoader: true };
    }
    case 'forgot_STOP': {
      return { ...state, ShowForgotLoader: false };
    }

    case 'setNew_START': {
      return { ...state, ShowSetNewLoader: true };
    }
    case 'setNew_STOP': {
      return { ...state, ShowSetNewLoader: false };
    }

    case 'sendOTP_START': {
      return { ...state, otpLoader: true }
    }
    case 'sendOTP_STOP': {
      return { ...state, otpLoader: false }
    }
    case 'verifyCode_SUCCESS': {
      return { ...state, otpSuccess: true, userInfo: action.payload.Record }
    }
    case 'signUpByNumber_SUCCESS': {
      return { ...state, message: "Success", success: true }
    }
    case 'signUpByNumber_FAILURE': {
      return { ...state, message: "fail", error: true }
    }
    case 'INIT_URL': {
      return { ...state, initURL: action.payload };
    }
    case 'loginStart_START': {
      return { ...state, loginStart: true }
    }
    case 'loginStart_STOP': {
      return { ...state, loginStart: false }
    }

    case 'update_auth': {
      return {
        ...state,
        success: false,
        error: false,
        message: '',
        otpSuccess: false,
        otpLoader: false,
        ShowSetNewLoader: false,
        ShowForgotLoader: false,
        userRegisterSuccessfully: false,
        userRegisterFail: false,
        savingDetail: false,
        savingLoginDetail: false,
        loginDetailChangeSuccessfully: false,
        loginDetailChangeFail: false,
        loginFail: false,
        loginSuccess: false,
        logoutSuccess: false,
        loginStart: false,
        ShowRestLoader: false,
        TokenSaveSuccess:false

      }
    }


    case 'gettingProfile_START': {
      return {
          ...state,
          fetchingLoader: true
      }
  }
  case 'getProfile_SUCCESS':{
      return{
          ...state,
          settingsData : action.payload.Record,
          isPlanSettingsUpdated : false,
          fetchingLoader: false
      }
  }

      case 'changePassword_Modal':{
          return {
              ...state,
              changePasswordModelVisible : !state.changePasswordModelVisible,
              isPlanSettingsUpdated : false,
              fetchingLoader: false
          }
      }
      case 'EditProfile_Modal':{
          return {
              ...state,
              editProfileModalVisible : !state.editProfileModalVisible,
              isPlanSettingsUpdated : false,
              fetchingLoader: false
          }
      }
      case 'planSettings_SUCCESS':{
          return{
              ...state,
              planSettingsCompleted : true,
              isPlanSettingsUpdated : false,
              fetchingLoader: false
          }
      }
      case 'resetPassword_SUCCESS':{
          return{
              ...state,
              changePasswordModelVisible : !state.changePasswordModelVisible,
              isPasswordChanged : true,
              isPlanSettingsUpdated : false,
              fetchingLoader: false,
              textMessage : 'your password has been changed successfully'
          }
      }
      case 'updateSetting_SUCCESS':{
          return{
              ...state,
              
              isPlanSettingsUpdated : true,
              textMessage : 'Plan settings have been updated successfully',
              fetchingLoader: false
          }
      }
      case 'updateSetting_FAILURE':{
          return{
              ...state,
              isPlanSettingsFail : true,
              textMessage : action.payload.message,
              isPlanSettingsUpdated:false,
              fetchingLoader: false
          }
      }
      case 'updatingProle_START':{
          return{
              ...state,
              updatingProfile : true,
          }
      }
      case 'updateProfile_SUCCESS':{
          const updatedValue = updateProfile (state.authUser, action.payload.Record)
          return{
              ...state,
              editProfileModalVisible : !state.editProfileModalVisible,
              settingsData: action.payload.Record,
              authUser : {...updatedValue},
              profileEditeSuccess : true,
              textMessage:'Admin profile has been updated successfully',
              updatingProfile : false,
          }
      }

      case 'reset_profilesettings':{
          return{
              ...state,
              isPlanSettingsFail : false,
              isPlanSettingsUpdated:false,
              fetchingLoader: false,
              isPasswordChanged : false,
              profileEditeSuccess:false,
              updatingProfile : false
              
          }
      }

    default:
      return state;
  }

}
