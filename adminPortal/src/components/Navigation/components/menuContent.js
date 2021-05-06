import React from 'react'
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const MenuContent = () => {

    const location = useLocation();

    const selectedKeys = location.pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];


    return (
        <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            mode="horizontal"
            style={{
                borderBottom:'0px'
            }}
            >

            <Menu.Item key="restaurant">
                <Link to="/restaurant">Restaurants</Link>
            </Menu.Item>
            <Menu.Item key="careCenter">
                <Link to="/careCenter">Care Centers</Link>
            </Menu.Item>
        </Menu>
    )
}

export default MenuContent
