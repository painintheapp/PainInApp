import React from 'react'
import { Input } from 'antd';
import { DataGetAction } from 'redux/actions/CommonHttp'
import { useDispatch } from 'react-redux'

const Index = ({ apiName, requestType, placeholder, customQuery = {} }) => {

    const dispatch = useDispatch();
    const searchRecord = (e) => {
        dispatch(DataGetAction(apiName, requestType, { name: e, ...customQuery }, 'StartSpinner'))
    }

    return (
        <Input.Search
            className="gx-mb-0"
            placeholder={placeholder}
            onChange={(e) => searchRecord(e.target.value)}
        />

    )
}

export default Index
