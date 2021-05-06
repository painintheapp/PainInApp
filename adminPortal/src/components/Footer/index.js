import React from 'react'
import { Row, Col } from 'antd';
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Modal from '../Modal/SimpleModal';
import SignIn from '../Auth/Signin'
import Signup from '../Auth/Signup'
import { useSelector } from 'react-redux'


const Index = () => {


    const LoginVisible = useSelector(state => state.commonR.LoginVisible)
    const SignUpVisible = useSelector(state => state.commonR.SignUpVisible)

    console.log("======================== ",LoginVisible, SignUpVisible)

    return (
        <Row>
            <Col xl={24} md={24} sm={24} xs={24}>
                <Menu
                    mode="horizontal"
                    className="gx-text-center gx-mt-4 gx-mb-3"
                    style={{
                        borderBottom: '0px',

                    }}
                >
                    <Menu.Item key="about">
                        <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="faq">
                        <Link to="/faq">FAQ</Link>
                    </Menu.Item>
                    <Menu.Item key="term">
                        <Link to="/term">Terms</Link>
                    </Menu.Item>
                    <Menu.Item key="private">
                        <Link to="/privatePolicy">Private policy</Link>
                    </Menu.Item>
                </Menu>
            </Col>
            <Col xl={24} md={24} sm={24} xs={24}>
                <div className="gx-text-center gx-mb-3"><span>Social Icons</span></div>
            </Col>
            <Col xl={24} md={24} sm={24} xs={24}>
                <p className="gx-text-center gx-mb-3" style={{ color: "#22343D" }}>Copyright© UB4I 2020. All rights reserved</p>
            </Col>

            <Modal visible={LoginVisible || false} modalFor="login"> <SignIn /> </Modal>
            <Modal visible={SignUpVisible || false} modalFor="signUp"> <Signup /> </Modal>
        </Row>
    )
}

export default Index
