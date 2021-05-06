import React, { useState } from "react";
import { Menu } from "antd";
//import {Link} from "react-router-dom";
import _ from 'lodash';
import SidebarLogo from "./SidebarLogo";


import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import MenuList from './Menu'
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = () => {

  const location = useLocation();

  const logInUser = useSelector(state => state.auth.authUser);
  // const messageProps = useSelector(state => state.MessagesR);
  const role = logInUser && logInUser.role ;
  const MenuData = MenuList[role];
  const [changeSelectedKey, setSelectedKey] = useState('');
  //const [selectedUrl, setSelectedUrl] = useState(location && location.pathname);
 

  const renderBadge = () => {
   console.log('=====')
  }

  const singleMenuItem = (Item) => {
    
    return <Menu.Item key={Item.url} >
      <Link to={{ pathname: Item.url, state: { key: Item.key } }} key={Item.url + "key"}>
        <i className={`icon icon-${Item.icon}`} style={{
          top: Item.top,
          position: 'relative'
        }} />
        <span>{Item.title} {Item.badges ? renderBadge() : ""}</span>
      </Link>
    </Menu.Item>
  }


  const renderSubMenu = (Item) => {
    return <SubMenu key={Item.title}
      onTitleClick={() => {
        console.log("======== Item ======", Item);
        setSelectedKey(Item.title);
      }}
      title={<span> <i className={`icon icon-${Item.icon}`} />
        <span>{Item.title}</span></span>}>
      {Item.subMenu.map(x => {
        return singleMenuItem(x)
      })}
    </SubMenu>
  }




  const renderMenu = () => {


      return MenuData.map(Item => {
        if (Item.subMenu) {
          return (
            renderSubMenu(Item)
          )
        } else {
          return singleMenuItem(Item)
        }
      })
    
  }


  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">

        <div className="gx-layout-sider-scrollbar gx-mt-4">
          <Menu
            defaultOpenKeys={location.state && location.state.key}
            defaultSelectedKeys={[location.pathname]}
            selectedKeys={[location.pathname]}
            openKeys={[changeSelectedKey, location.state && location.state.key]}
            theme='dark'
            mode="inline">
            {renderMenu()}
          </Menu>
        </div>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

