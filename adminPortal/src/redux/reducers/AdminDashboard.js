
import moment from 'moment'
const INIT_STATE = {
    dashboardData: [],
    weeklyAnalysis : [],
    textMessage : [],
    success : false,
    error : false,
    fetchingLoader : false,
    revenueOverview : []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case 'gettingAdminDashboard_START':{
            return {
                ...state,
                fetchingLoader:true,
                error : false,
                success : false,
            };
        }

        case 'getAdminDashboard_SUCCESS':{
            return {
                ...state,
                dashboardData: [...action.payload.Record] ,
                fetchingLoader:false,
                error : false,
                success : true,
            };
        }
        case 'getAdminDashboard_FAILURE':{
            return {
                ...state,
                textMessage: 'could not fetch data due to api failure' ,
                error:true,
                success : false
            };
        }
        case 'getWeeklyOverview_SUCCESS':{
            let data = action.payload.Record.map(item=>{
                if(item.name !== ''){
                    item.name = moment(item.name).format('dddd')
                }
                return item
                
            })
            return {
                ...state,
                weeklyAnalysis: data ,
                fetchingLoader:false
            };
        }
        case 'getRevenueDashboard_SUCCESS':{
            return {
                ...state,
                revenueOverview: action.payload.Record ,
                
            };
        }
        case 'reset-admin-dashboard' :{
            return{
                ...state,
                error : false,
                success : false,
                fetchingLoader : false
            }
        }

        


        
        default:
            return state;
    }
}
