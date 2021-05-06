const INIT_STATE = {
    success: false,
    error: false,
    message: "",
    userData: [],

    checkingLoginInfoLoader: false,
    loginSuccess: false,
    loginError: false,

    accountCreatingLoader: false,
    accountCreateSuccess: false,
    accountCreateError: false,

    forgotPasswordLoader: false,
    forgotPasswordSuccess: false,
    forgotPasswordError: false,

    otpMatchLoader: false,
    otpMatchSuccess: false,
    otpMatchError: false,
    otpUserId: null,

    settingNewPasswordLoader: false,
    setNewPasswordSuccess: false,
    setNewPasswordError: false,

    isUserExit: false,
    showUpdateProfile: false,
    profileResetSuccess: false,
    profileResetError: false,
    profileResetLoader: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'profileUpdating_START': {
            return {
                ...state,
                profileResetLoader: false
            }

        }
        case 'profileResetUpdating_START': {
            return {
                ...state,
                profileResetLoader: false,
                profileResetSuccess: false
            }

        }
        case 'profileUpdate_SUCCESS': {


            return {
                ...state,
                userData: action.payload.Record,
                profileResetSuccess: true,
                profileResetLoader: false
            }
        }
        case 'show_update_profile': {
            return {
                ...state,
                showUpdateProfile: !state.showUpdateProfile
            }
        }

        case 'User_Exit': {
            return { ...state, isUserExit: true, userData: action.payload }
        }
        case 'User_Not_Exit': {
            return { ...state, isUserExit: false, userData: [] }
        }
        case 'settingNewPassword_START': {
            return {
                ...state,
                settingNewPasswordLoader: true
            }
        }
        case 'setNewPassword_SUCCESS': {
            return {
                ...state,
                setNewPasswordSuccess: true,
                message: "Password set successfully",
                otpUserId: null
            }
        }
        case 'setNewPassword_FAILURE': {
            return {
                ...state,
                setNewPasswordError: true,
                message: "Some Error Occur Try again"
            }
        }
        case 'sendingOTPInfo_START': {
            return {
                ...state,
                otpMatchLoader: true
            }
        }
        case 'verifyCustomerForgetOtp_SUCCESS': {
            return {
                ...state,
                otpMatchSuccess: true,
                message: "OTP Matched Successfully",
                otpUserId: action.payload.userId
            }
        }
        case 'verifyCustomerForgetOtp_FAILURE': {
            return {
                ...state,
                otpMatchError: true,
                message: "Some Error Occur Try again"
            }
        }

        case 'sendingForgotPasswordInfo_START': {
            return {
                ...state,
                forgotPasswordLoader: true
            }
        }
        case 'forgetCustomerPassword_SUCCESS': {
            return {
                ...state,
                forgotPasswordSuccess: true,
                message: "Email Send Successfully."
            }
        }
        case 'forgetCustomerPassword_FAILURE': {
            return {
                ...state,
                forgotPasswordError: true,
                message: "Email send fail try again."
            }
        }
        case 'checkingLoginInfo_START': {
            return {
                ...state,
                checkingLoginInfoLoader: true
            }
        }
        case 'login_SUCCESS': {
            console.log("======== login =======Success", action);
            return {
                ...state,
                checkingLoginInfoLoader: false,
                loginSuccess: true,
                loginError: false,
                message: "Welcome back",
                userData: action.payload.user
            }
        }
        case 'login_FAILURE': {
            return {
                ...state,
                checkingLoginInfoLoader: false,
                loginSuccess: false,
                loginError: true,
                message: "Email/Password incorrect",
                userData: null
            }
        }

        case 'creatingAccount_START': {
            return { ...state, accountCreatingLoader: true }
        }
        case 'registerUser_SUCCESS': {
            console.log("========== success =====",action)
           
            return {
                ...state,
                accountCreateSuccess: true,
                message: "Account created successfully.",
                accountCreatingLoader: false,
                userData: action.payload.user,
            }
        }
        case 'registerUser_FAILURE': {
            console.log("========== error =====",action)
            return {
                ...state,
                accountCreateError: true,
                message: action.payload,
                accountCreatingLoader: false
            }
        }

        case 'update_auth_props': {
            return {
                ...state,
                accountCreatingLoader: false,
                accountCreateSuccess: false,
                accountCreateError: false,

                checkingLoginInfoLoader: false,
                loginSuccess: false,
                loginError: false,

                forgotPasswordLoader: false,
                forgotPasswordSuccess: false,
                forgotPasswordError: false,

                otpMatchLoader: false,
                otpMatchSuccess: false,
                otpMatchError: false,

                settingNewPasswordLoader: false,
                setNewPasswordSuccess: false,
                setNewPasswordError: false
            }
        }

        default: {
            return { ...state }
        }
    }
}