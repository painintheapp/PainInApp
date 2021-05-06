import React from 'react'
import { Popover, Button } from 'antd'
const Index = ({ children,className }) => {
    return <div className="myPopover">
        <Popover placement="bottom" content={children} title="" trigger="click"  overlayClassName={className}>
            <Button className="gx-pt-0" style={{ marginLeft: '10px', padding: '4px 7px 0px 8px', backgroundColor: '#3FD4A2', color: 'white' }}  ><span className="icon icon-filter"></span></Button>
        </Popover>
    </div>
}

export default Index
