
const INIT_STATE = {
    LoginVisible:false,
    SignUpVisible:false,
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case 'Simple_Modal_State_login': {
            return { ...state, LoginVisible: action.payload };
        }
        case 'Simple_Modal_State_signUp': {
            return { ...state, SignUpVisible: action.payload };
        }
        

        default:
            return state;
    }
}
