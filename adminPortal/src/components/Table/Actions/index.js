import React from 'react'
import { Popover } from 'antd'
import {
    MoreOutlined
} from '@ant-design/icons';
const Index = ({children}) => {
    return <Popover placement="bottom" content={children} title="" trigger="hover" >
        <span className="gx-pointer gx-d-flex" style={{ fontSize: '14px', color : '#038FDE'}}><MoreOutlined className="tableActions" /></span>
    </Popover>
}

export default Index
