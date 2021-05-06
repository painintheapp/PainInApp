
const INIT_STATE = {

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

}
export default  (state = INIT_STATE, action) => {
    switch (action.type) {
        
       
        
        default:
            return state
    }
}


 