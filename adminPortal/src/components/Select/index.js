import React from 'react'
import { Select } from 'antd';
const index = (props) => {
  //const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }


  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {
        props.data && props.data.length > 0 &&  props.data.map(( item ) => {
          return <Select key={item._id} value={item._id}>{item.communityName}</Select>
        })

      }





    </Select>

  )
}
export default index