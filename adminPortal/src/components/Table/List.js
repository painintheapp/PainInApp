import React, { useEffect } from 'react'
import { Table, message } from 'antd';
import { DataGetAction } from '../../redux/actions/CommonHttp'
import { useDispatch, useSelector } from 'react-redux'



const Index = ({ 
    columns,
    scroll,
    pagination,
    apiName,
    callOnCondition,
    customQuery = {}
}) => {

    const dispatch = useDispatch()
    const CurdProps = useSelector(state => state.CurdR)

    const fetchList = () => {
        dispatch(DataGetAction(apiName, 'FetchRecord', { query: 'all', ...customQuery }, 'StartSpinner'));
    }
    useEffect(fetchList, [callOnCondition])


    const { Records, success, error } = CurdProps;
    if (success) {
        message.success(CurdProps.message)
        dispatch({
            type: 'ResetAll_State'
        })
    }

    if (error) {
        message.error(CurdProps.message)
        dispatch({
            type: 'ResetAll_State'
        })
    }


    return <Table
        className="BasicTable gx-table-responsive "
        columns={columns}
        dataSource={Records}
        scroll={scroll}
        pagination={pagination}
    />
}

export default Index
