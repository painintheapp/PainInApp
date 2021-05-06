
const INIT_STATE = {
    activitiesList: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'getRecentActivity_SUCCESS': {
            return {
                ...state,
                activitiesList: action.payload.Record,
                success: true
            }
        }

        case 'newActivityCreated_SUCCESS': {
            const activities = getLatestActivity(state.activitiesList, action.payload);
            return {
                ...state,
                activitiesList: [...activities]
            }
        }

        default: {
            return { ...state }
        }
    }


    function getLatestActivity(oldData, newData) {
        let newArray = oldData;
        const loginUser = JSON.parse(localStorage.getItem('userInfo'));
        if (newData.createdFor === "superAdmin" && (loginUser.role === "superAdmin" ||  loginUser.role === "adminTeam")) {
            if (oldData.length) {
                newArray = [newData, ...oldData]
            } else {
                newArray = [newData];
            }
        } else {
            if (newData.createdFor === "customer" && (loginUser.role === "customer" || loginUser.role === "customerTeam")) {
                if (oldData.length) {
                    newArray = [newData, ...oldData]
                } else {
                    newArray = [newData];
                }
            }
        }

        return newArray;
    }


}
