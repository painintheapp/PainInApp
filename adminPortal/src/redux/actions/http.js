const ROOT_URL = process.env.REACT_APP_ROOT_URL;

export const DataRequestAction = (method, type, data, redirectUrl, Loading = "LOADING", showNotification = true) => {
    return function (dispatch) {
        RequestProgress(dispatch, `${Loading}_START`);
        const token = localStorage.getItem('token');
        try {
            fetch(`${ROOT_URL}/${type}`, {
                method: method,
                headers: new Headers({
                    "Content-Type": "application/json",
                    'Authorization': token,
                    'APIType':"web"
                }),
                body: JSON.stringify(data)
            }).then((response) => {
                response.json().then((response) => {
                    if (response.status === "ERROR") {
                        RequestProgress(dispatch, `${Loading}_STOP`);
                        RequestFail(dispatch, type, response.message, "error");

                        if (showNotification) {
                            addNotification(dispatch, response.message, "error");
                        }
                    } else {
                        RequestSuccess(dispatch, type, response, data);
                        if (showNotification) {
                            addNotification(dispatch, response.message, "success", redirectUrl);
                        }
                    }
                })

            }).catch((err) => {
                RequestProgress(dispatch, `${Loading}_STOP`);
                RequestFail(dispatch, type, "", "error");

                if (showNotification) {
                    addNotification(dispatch, err, "error");
                }

            })
        } catch (error) {

            RequestProgress(dispatch, `${Loading}_STOP`);
            RequestFail(dispatch, type, "", "error");

            if (showNotification) {
                addNotification(dispatch, error, "error");
            }
        }
    };
};

export const FormDataRequestAction = (type, data, imgList, redirectUrl, Loading = "LOADING") => {
    return function (dispatch) {
        RequestProgress(dispatch, `${Loading}_START`);
        const token = localStorage.getItem('token');
        try {
            const dataObj = new FormData();
            if (data.resume) dataObj.append("myFile", data.resume.file);
            if (data.image) dataObj.append("myFile", data.image);
            dataObj.append("data", JSON.stringify(data));
            if (imgList) {
                imgList.map(file => {
                    console.log("---file---", file)
                    return file.originFileObj ? dataObj.append("images[]", file.originFileObj) : ''
                })
            }

            fetch(`${ROOT_URL}/${type}`, {
                method: "POST",
                headers: new Headers({
                    'Authorization': token,
                }),
                body: dataObj
            }).then((response) => {
                response.json().then((response) => {

                    if (response.status === "ERROR") {
                        RequestProgress(dispatch, `${Loading}_STOP`);
                        RequestFail(dispatch, type, response.message, "error");
                        addNotification(dispatch, response.message, "error");
                    } else {
                        RequestSuccess(dispatch, type, response, data);
                        addNotification(dispatch, response.message, "success", redirectUrl);
                    }
                })

            }).catch((err) => {
                RequestProgress(dispatch, `${Loading}_STOP`);
                RequestFail(dispatch, type, "", "error");

                addNotification(dispatch, err, "error");

            })
        } catch (error) {
            RequestProgress(dispatch, `${Loading}_STOP`);
            RequestFail(dispatch, type, "", "error");

            addNotification(dispatch, error, "error");
        }
    };
};

export const DataGetAction = (type, data, Loading = "Nothing") => {
    return function (dispatch) {
        RequestProgress(dispatch, `${Loading}_START`);
        const token = localStorage.getItem('token');
        let param = "";
        if (data) {
            param = `/${JSON.stringify(data)}`
        }
        let headers = {
            "Content-Type": "application/json",
            'Authorization': token,
            'APIType':"web"

        };

        try {
            fetch(`${ROOT_URL}/${type}${param}`, { headers })
                .then((response) => {
                    response.json().then((response) => {
                        RequestProgress(dispatch, `${Loading}_STOP`);
                        RequestSuccess(dispatch, type, response, data)
                    })
                }).catch(err => {
                    RequestProgress(dispatch, `${Loading}_STOP`);
                    RequestFail(dispatch, type, "Request Fail outer", err);
                })
        } catch (error) {
            RequestProgress(dispatch, `${Loading}_STOP`);
            RequestFail(dispatch, type, "Request Fail", error);
        }
    };
};

export const DataGetActionAPI = (API, type, data, Loading = "Nothing") => {
    return function (dispatch) {
        RequestProgress(dispatch, `${Loading}_START`);
        const token = localStorage.getItem('token');
        let param = "";
        if (data) {
            param = `/${JSON.stringify(data)}`
        }
        let headers = {
            "Content-Type": "application/json",
            'Authorization': token,
        };

        try {
            fetch(`${ROOT_URL}/${API}${param}`, { headers })
                .then((response) => {
                    response.json().then((response) => {
                        RequestProgress(dispatch, `${Loading}_STOP`);
                        RequestSuccess(dispatch, type, response, data)
                    })
                }).catch(err => {
                    RequestProgress(dispatch, `${Loading}_STOP`);
                    RequestFail(dispatch, type, "Request Fail outer", err);
                })
        } catch (error) {
            RequestProgress(dispatch, `${Loading}_STOP`);
            RequestFail(dispatch, type, "Request Fail", error);
        }
    };
};


export const updateAllState = (type) => {
    return function (dispatch) {
        dispatch({
            type: `${type}_UPDATE`,
        });
    }
}

export const DataSelectUser = (type, Item) => {
    return function (dispatch) {
        dispatch({
            type: `${type}_SUCCESS`,
            payload: Item
        });
    }
}

export const restNotificationState = () => {
    return function (dispatch) {
        dispatch({
            type: `REST_NOTIFICATION`,
        });
    }
}


function addNotification(dispatch, message, level, redirectUrl = "") {
    dispatch({
        type: 'SHOW_NOTIFICATION',
        message,
        level,
        redirectUrl
    });
}


function RequestFail(dispatch, type, message, error) {
    console.log("============ Fail ==========", type);
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

export const SocketResponseState = (type, payload) => {
    return function (dispatch) {
        dispatch({
            type: `${type}_SUCCESS`,
            payload: payload
        });
    }
}