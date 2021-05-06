const ROOT_URL = process.env.REACT_APP_ROOT_URL;

export const DataRequestAction = (method, apiName, requestType, data, Loading = "LOADING", ModalName = "Nothing") => {
    return function (dispatch) {
        RequestProgress(dispatch, `${Loading}_START`);

        if(localStorage.getItem('hospitalId')){
            data.hospitalId = localStorage.getItem('hospitalId')
        }
        const token = localStorage.getItem('token');

        try {
            fetch(`${ROOT_URL}/${apiName}`, {
                method: method,
                headers: new Headers({
                    "Content-Type": "application/json",
                    'Authorization': token,
                }),
                body: JSON.stringify(data)

            }).then((response) => {
                response.json().then((response) => {
                    
                    if (response.status === "ERROR") {
                        RequestFail(dispatch, requestType, response.message, "error");
                        RequestModalClose(dispatch, ModalName)

                    } else {
                        RequestSuccess(dispatch, requestType, response, data);
                        RequestModalClose(dispatch, ModalName)
                    }
                })
            }).catch((err) => {

               
                RequestFail(dispatch, requestType, "", "error");
                RequestModalClose(dispatch, ModalName)
            })
        }
        catch (error) {
            
            RequestFail(dispatch, requestType, "", "error");
            RequestModalClose(dispatch, ModalName)
        }
    };
};

export const DataGetAction = (apiName, requestType, data, Loading = "Nothing", ModalName = "") => {
    return function (dispatch) {

        RequestProgress(dispatch, `${Loading}_START`);
        const token = localStorage.getItem('token');
        
        if(localStorage.getItem('hospitalId') && data !== ''){
            data.hospitalId = localStorage.getItem('hospitalId')
        }

        let param = "";
        if (data) {
            param = `/${JSON.stringify(data)}`
        }

        let headers = {
            "Content-Type": "application/json",
            'Authorization': token,
            'APIType': "web"

        };

        try {
            fetch(`${ROOT_URL}/${apiName}${param}`, { headers })
                .then((response) => {
            console.log('==============response===========',response)
                    if (response.status === 401) {
                       
                        RequestUnAuthorized(dispatch, `showUnauthorized`);
                    } 
                    else if (response.status === 404){
                        RequestFail(dispatch, requestType, "Request Fail outer");
                    }
                    else {
                        response.json().then((response) => {
                            RequestSuccess(dispatch, requestType, response, data)
                            RequestModalClose(dispatch, ModalName)
                        })
                    }

                }).catch(err => {
            
                    RequestFail(dispatch, requestType, "Request Fail outer", err);
                    RequestModalClose(dispatch, ModalName)
                })
        } catch (error) {
            
            RequestFail(dispatch, requestType, "Request Fail", error);
            RequestModalClose(dispatch, ModalName)
        }
    };
};

function RequestFail(dispatch, type, message, error) {
    dispatch({
        type: `${type}_FAILURE`,
        payload: message,
        error
    });
}

function RequestSuccess(dispatch, type, data, reqData) {
    dispatch({
        type: `${type}_SUCCESS`,
        payload: data,
        reqData
    });
}

function RequestProgress(dispatch, type) {
    dispatch({
        type: `${type}`,
    });
}
function RequestModalClose(dispatch, ModalName) {
    if (ModalName !== "Nothing") {
        dispatch({
            type: 'Hide_Modal',
            payload: null,
            ModalName: ModalName
        })
    }
}
function RequestUnAuthorized(dispatch, type) {
    dispatch({
        type: `UN_AUTHORIZED`,
    });
}