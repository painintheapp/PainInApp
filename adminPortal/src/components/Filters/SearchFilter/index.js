import React from 'react'
import { Input } from 'antd';
import { DataGetAction } from 'redux/actions/http'
import { useDispatch, useSelector } from 'react-redux'


const { Search } = Input;


const Index = ({ type, query, placeholder, searchByValueChange, searchByClick, maxValueLengthForStartSearch }) => {

    const filterProps = useSelector(state => state.Filter);

    const dispatch = useDispatch();

    const SearchRecord = (e) => {
        if (e.length === maxValueLengthForStartSearch) {
            query.search = e;
            dispatch(DataGetAction(type, query, 'search'))
        }
    }
    const searchRecordByClick = (e) => {
        query.search = e;
        dispatch(DataGetAction(type, query, 'search'))
    }

    const nothingDo = () => {

    }

    return (
        <Search
            placeholder={placeholder}
            loading={filterProps.Loading}
            onChange={(e) => { searchByValueChange ? SearchRecord(e.target.value) : nothingDo() }}
            onSearch={(e) => { searchByClick ? searchRecordByClick(e) : nothingDo() }}
        />

    )
}

export default Index
