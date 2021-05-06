import React from 'react'
import { DatePicker } from 'antd';
 const index = (props) => {

    function onChange(date, dateString) {
        console.log(date, dateString);
      }
    return (
        <DatePicker style={props.style} size={'large'} onChange={onChange} />
    )
}
export default index