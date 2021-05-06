import React from 'react'
import { Popover } from 'antd'
import {
    DownOutlined,
} from '@ant-design/icons';
const Index = ({children, status}) => {
    return <Popover placement="bottom" content={children} title="" trigger="click" >
        <span className="gx-pointer gx-p-2 gx-d-inline-block" style={{ fontSize: '14px', color : '#038FDE'}}>{status} <DownOutlined /></span>
    </Popover>
}

export default Index