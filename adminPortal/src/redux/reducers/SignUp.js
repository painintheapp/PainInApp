const initialState = {
    subscriptionPlan: '',
    messageModelVisible: false,
    questionnaireModelVisible: false,
    multiStepModelVisible: false,
    memeberShipPlanSuccess: false,
    memberShipPlan: '',
    freemessageModelVisible: false,
    questionsList: [],
    success: false,
    error: false,

    thanksModalSurveyVisible: false,
    showDailyQuestionModal: false,
    planSettings : null,
    isCheckoutSuccess : false,
    checkoutSpinner : false,
    currentPlan : ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'show_daily_question_modal':
            return { ...state, showDailyQuestionModal: !state.showDailyQuestionModal }
        case 'thanks_modal_completion_of_survey':
            return { ...state, thanksModalSurveyVisible: !state.thanksModalSurveyVisible }
        case 'SET_SUBSCRIPTION_PLAN':
            return {
                ...state,
                subscriptionPlan: action.payload
            }
        case 'messageSuccess_modal': {
            return {
                ...state,
                messageModelVisible: !state.messageModelVisible
            }
        }
        case 'freeMessageSuccess_modal': {
            return {
                ...state,
                freemessageModelVisible: !state.freemessageModelVisible
            }
        }

        case 'questionnaire_modal': {
            return {
                ...state,
                questionnaireModelVisible: !state.questionnaireModelVisible
            }
        }
        case 'question-multistep-modal': {
            return {
                ...state,
                multiStepModelVisible: !state.multiStepModelVisible
            }
        }

        case 'updatePlanInfo_SUCCESS': {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            userInfo['memberShipPlan'] = action.payload.memberShipPlan
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            return {
                ...state,
                memeberShipPlanSuccess: true,
                memberShipPlan: action.payload.memberShipPlan
            }
        }
        case 'getPatientQuestion_SUCCESS': {
            return {
                ...state,
                questionsList: action.payload.Record,
                success: true
            }
        }
        case 'getPatientQuestion_FAILURE': {
            return {
                ...state,
                error: true,
                textMessage: 'could not fetch question due to error in api'
            }
        }
        case 'getPlanSetting_SUCCESS':{
            return {
                ...state,
                planSettings : action.payload.Record.planeSettings,
                currentPlan : action.payload.Record.userPlan
            }
        }
        case 'reset_states': {
            return {
                ...state,
                memeberShipPlanSuccess: false,
                error: false,
                success: false,
                isCheckoutSuccess:false
            }
        }
        case 'buyingPlan_START':{
            return{
                ...state,
                checkoutSpinner : true
            }
        }
        case 'buyPlan_SUCCESS':{
            return {
                ...state,
                isCheckoutSuccess : true,
                checkoutSpinner : false
            }
        }
        default:
            return state
    }
}
