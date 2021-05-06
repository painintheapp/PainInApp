import React, { useEffect } from 'react'
import decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import Widget from '../Widget'
import { Spin } from 'antd';
/**
* @author
* @function SaveToken
**/

const SaveToken = (props) => {

    const dispatch = useDispatch();
    const authProps = useSelector(state => state.auth)
    const storeToken = () => {
        localStorage.setItem("token", props.match.params.token);
        const decded = decode(props.match.params.token);
        let obj = { "_id": decded._id, "clientName": decded.clientName, "firstName": decded.firstName, "lastName": decded.lastName, "email": decded.email, "role": decded.role }
        dispatch({
            type: "saveEvent",
            userInfo: obj,
            token: props.match.params.token
        })
    }

    useEffect(storeToken, [])

    if (authProps.TokenSaveSuccess) {
        props.history.push('/dashboard');
    }

    return (
        <Widget styleName="gx-w-50 gx-mt-5 gx-mx-auto gx-p-5">
            <Spin size="large"/>Saving Information.....

        </Widget>
    )
}


export default SaveToken