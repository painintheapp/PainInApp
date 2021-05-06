import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { logoutFn } from 'redux/actions/Common'
import alertMessage from '../../constants';
import { Menu, Dropdown, message } from 'antd';
import { DataGetAction } from 'redux/actions/http'
import {  DownOutlined } from '@ant-design/icons';
import dummy from 'assets/images/dummyImage.jpeg'
const UserInfo = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const authProps = useSelector(state => state.auth);
  console.log('===============authProps===========',authProps)

  const {authUser} = authProps

  const logout = () => {
    
    dispatch(DataGetAction('logout', '', 'loggingOut'));
    message.info(alertMessage.Logout)
    dispatch(logoutFn());
  }

  if (authProps.logoutSuccess) {
    dispatch({
      type:'update_auth'
    });
    history.push('/')
  }

  const resetPassword = () => {


  
      history.push('/settings');

   
  }

  const menu = (
    <Menu>
      <Menu.Item onClick={() => resetPassword()}>
        <span >Reset Password</span>
      </Menu.Item>
      <Menu.Item onClick={() => logout()}>
        <span className="gx-pointer" >Logout</span>
      </Menu.Item>
    </Menu>
  );


  const getName = () => {
   
    let name = "";
      name = authUser.firstName + " "+ authUser.lastName
    return name
  }
  const styles = {
    profileimg : {
      width : '30px',
      height : '30px',
      borderRadius : '50%',
      marginRight : '3px'
    }
  }
  const renderImage = () =>{
   
      if(authUser.profileImageUrl){
        return  <img src={authUser.profileImageUrl} alt=""  style={styles.profileimg}/>
      }
      else{
        return  <img src={dummy} alt=""  style={styles.profileimg}/>
      }
  }

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <span className="ant-dropdown-link gx-pointer " style={{
        textTransform: 'capitalize'
      }} onClick={e => e.preventDefault()}>
         {renderImage()}
        {getName()} <DownOutlined />
      </span>
    </Dropdown>
  )

}

export default UserInfo;
