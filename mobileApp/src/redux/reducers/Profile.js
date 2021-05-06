const initalState={
    firstName:'',
    lastName:'',
    Age:'',
    Weight:'',
    Height:'',
    PrimarySymptoms:'',
    SecondrySymptoms:'',
    listConditions:''

}


export default ProfileReducers=(state=initalState,action)=>{

    switch(action.type){
        case "FIRST_NAME":
            return{
                ...state,
                firstName:state.firstName
            }
            case "LAST_NAME":
                return{
                    ...state,
                    lastName:state.lastName
                }

    }
}