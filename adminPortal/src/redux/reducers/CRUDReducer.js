
import { addItemInRecord, recordAfterUpdate, recordAfterDeleted } from './CommonFn'

const initialState = {
    Records: [],
    success: false,
    error: false,
    message: '',
    Loader: false,
    initialValues: null

}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'Show_Modal': {
            return {
                ...state,
                [action.ModalName]: true,
                initialValues: action.payload
            }
        }
        case 'Hide_Modal': {
            return {
                ...state,
                [action.ModalName]: false,
                initialValues: action.ModalName ? null : state.initialValues
            }
        }

        case 'StartSpinner_START': {
            return {
                ...state,
                Loader: true
            }
        }

        case 'FetchSingleRecord_SUCCESS':
            return {
                ...state,
                SingleRecord: action.payload.Record,
                Loader: false
            }

        case 'FetchSingleRecord_FAILURE':
            return {
                ...state,
                error: true,
                SingleRecord: null,
                message: 'Record Fetch Error',
                Loader: false
            }

        case 'FetchRecord_SUCCESS':
            return {
                ...state,
                Records: action.payload.Record,
                Loader: false
            }
        case 'FetchRecord_FAILURE':
            return {
                ...state,
                error: true,
                message: 'Record Fetch Error',
                Loader: false,
                Records : []
            }

        case 'AddRecord_SUCCESS':
            let Record = addItemInRecord(state.Records, action.payload.Record)

            return {
                ...state,
                Records: [...Record],
                Loader: false,
                success: true,
                message: 'Record Added Successfully'
            }
        case 'AddRecord_FAILURE':
            return {
                ...state,
                Loader: false,
                error: true,
                message: 'Record Added Fail'
            }

        case 'EditRecord_SUCCESS':
            let EditRecord = recordAfterUpdate(state.Records, action.payload.Record);
            return {
                ...state,
                Records: [...EditRecord],
                Loader: false,
                success: true,
                message: 'Record Edit Successfully'
            }
        case 'EditRecord_FAILURE':
            return {
                ...state,
                Loader: false,
                error: true,
                message: 'Record Edit Fail'
            }

        case 'DeleteRecord_SUCCESS':
            let deleteRecord = recordAfterDeleted(state.Records, action.payload.Record);
            return {
                ...state,
                Records: [...deleteRecord],
                Loader: false,
                success: true,
                message: 'Record Delete Successfully'
            }
        case 'DeleteRecord_FAILURE':
            return {
                ...state,
                Loader: false,
                error: true,
                message: 'Record Edit Fail'
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
