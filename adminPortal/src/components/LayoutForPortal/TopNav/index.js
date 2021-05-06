import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SideBarCollapse, logoutFn } from 'redux/actions/Common'
import { updateAllState, DataRequestAction } from 'redux/actions/http'
import { useHistory } from 'react-router-dom'
import alertMessage from 'alerts';
import { Layout, Menu, Dropdown, message, Switch } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined
} from '@ant-design/icons';
import { Socket } from 'socket'
const Logo = 'LetRole'
const { Header } = Layout;

const Index = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const SideBarCollapsed = useSelector(state => state.commonR.SideBarCollapsed);
    const authProps = useSelector(state => state.auth);

    const toggle = () => {
        dispatch(SideBarCollapse());
    }

    const logout = () => {


        let socketIntent = Socket.getInstance(authProps.LogeInUser._id);
        socketIntent.socketDisconnet();

        message.info(alertMessage.Logout)
        dispatch(logoutFn());
    }

    if (authProps.logoutSuccess) {
        dispatch(updateAllState('auth'));
        history.push('/')
    }

    const resetPassword = () => {
        if (authProps.LogeInUser.role === "superAdmin") {
            history.push('/admin/resetPassword');
        }
        if (authProps.LogeInUser.role === "agent") {
            history.push('/agent/resetPassword');
        }
    }

    const menu = (
        <Menu>
            <Menu.Item onClick={() => resetPassword()}>
                <span>Reset Password</span>
            </Menu.Item>
            <Menu.Item onClick={() => logout()}>
                <span className="gx-pointer" >Logout</span>
            </Menu.Item>
        </Menu>
    );

    const updateRestaurantStatus = (value) => {
        dispatch((DataRequestAction('POST','updateRestaurantStatus',{status:value},'')));
    }

    return (
        <Header className="header">
            <div className="logo">
                {React.createElement(SideBarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
                <span className="gx-ml-3">{Logo}</span>
                {/* <img src={Logo} className="gx-ml-3" alt="logo" /> */}
            </div>
            {authProps.LogeInUser.role === "restaurant" && <div className="switch">
               Business Status : <Switch checkedChildren="Open" unCheckedChildren="Close" defaultChecked={authProps.LogeInUser.restaurantStatus} onChange={(e) => { updateRestaurantStatus(e) }} />
            </div>
            }
            <Dropdown overlay={menu} trigger={['click']}>
                <span className="ant-dropdown-link gx-pointer " onClick={e => e.preventDefault()}>
                    {authProps.LogeInUser.firstName + " "+ authProps.LogeInUser.lastName} <DownOutlined />
                </span>
            </Dropdown>
        </Header>
    )
}

export default Index
