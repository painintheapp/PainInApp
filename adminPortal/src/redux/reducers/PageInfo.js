


const initialState = {
    allCategory: [],
    allHealthCategories:[],
    allOccupation : [],
    allConditions : [],
    success: false,
    error: false,
    message: '',
    Loader: false,

}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'getExerciseCategory_SUCCESS': {
            return {
                ...state,
                allCategory: action.payload.Record
            }
        }
        case 'getHealthCategory_SUCCESS': {
            return {
                ...state,
                allHealthCategories: action.payload.Record
            }
        }
        case 'getOccupations_SUCCESS': {
            return {
                ...state,
                allOccupation: action.payload.Record
            }
        }
        case 'getConditions_SUCCESS': {
            return {
                ...state,
                allConditions: action.payload.Record
            }
        }

        case 'ResetAll_State':
            return {
                ...state,
                success: false,
                error: false,
                message: '',
                Loader: false,

            }

        default:
            return state
    }
}
