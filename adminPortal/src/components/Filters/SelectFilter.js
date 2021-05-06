import React from 'react'
import { Select } from 'antd'
import { DataGetAction } from 'redux/actions/CommonHttp'
import { useDispatch } from 'react-redux'
const CallFilters = ({ showAll, placeholder, marginRight, options, ItemValue,searchId, label, apiName, searchKey, isShowingAll,className ,defaultValue}) => {

    const dispatch = useDispatch();
    const handleChange = (data) => {
        const query = { query: "search", "key": searchKey, "value": data };
        if (data === "all") {
            query.query = "all";
            if(showAll){
                return showAll()
            }
        }
        dispatch(DataGetAction(apiName, 'FetchRecord', query, "searching"))
    }


    return (
        <Select placeholder={placeholder} onChange={(e) => { handleChange(e) }} defaultValue={defaultValue} className={className} style={{ width: '100%' }} >
            {isShowingAll && <Select.Option value="all">All</Select.Option> }
            {options && options.map(Item => {

                return <Select.Option value={Item[`${ItemValue}`]}>{Item[`${label}`]}</Select.Option>
            })}
        </Select>
    )
}

export default CallFilters
