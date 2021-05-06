import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import Widget from '../../Widget'
import { useDispatch, useSelector } from 'react-redux'
import { DataRequestAction } from 'redux/actions/http'
import { setInitUrl } from '../../../redux/actions/Auth'
import { useHistory } from 'react-router-dom'
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { Socket } from '../../../socket'

const SignIn = (props) => {

    const dispatch = useDispatch();
    const authProps = useSelector(state => state.auth);
    const history = useHistory();
    //When click on the Login button it call the onFinish action
    const { loginFailMessage, loginFail, loginSuccess } = authProps;
    const onFinish = values => {
        //Pass value to action function
        dispatch(DataRequestAction('POST', 'login', values, '', 'loginStart', false));
        console.log('Received values of form: ', values);
    };




    // const checkPermissionForUser = (userInfo) => {

    //     const Result = [];
    //     const permission = userInfo.permission;
    //     let permissionOnly = _.omitBy(permission, v => (_.isBoolean(v) || _.isFinite(v)) ? false : _.isEmpty(v))
    //     const allKeys = _.keys(permissionOnly);
    //     let notData = ["_id", "createdAt", "roleName", "__v", "roleColor", "userCount", "createdBy", "roleType"];
    //     allKeys.map(Item => {
    //         if (!notData.includes(Item)) {
    //             Result.push(Item);
    //         }
    //         return Item
    //     })

    //     if (Result.includes('dashboard')) {
    //         history.push("/admin/dashboard")
    //     } else {
    //         history.push(`/${Result[0]}`)
    //     }

    // }


    // const checkPermissionForCustomer = (userInfo) => {
    //     const permission = userInfo.permission.permission;
    //     if (permission.includes("dashboard")) {
    //         history.push("/dashboard")
    //     } else {
    //         history.push("/" + permission[0]);
    //     }
    // }


    if (loginSuccess) {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log("========= userInfo", userInfo);


        Socket.getInstance(userInfo._id)
        dispatch({
            type: 'update_auth'
        })
        if (userInfo.role === "superAdmin") {
            dispatch(setInitUrl('/dashboard'));
            history.push('/dashboard')
        }
        if (userInfo.role === "highSuperAdmin") {
            dispatch(setInitUrl('/superAdmin'));
            history.push('/dashboard')
        }


    }

    return (

        <Widget styleName="gx-paddingAuth">

            <div className="SignIn gx-px-5 gx-pb-5">

                <div className="welcomeMessage gx-text-center gx-mb-4">

                    {loginFail && <span style={{
                        color: 'red'
                    }}>{loginFailMessage}</span>}
                </div>

                <div style={{ borderWidth: 1, borderColor: 'red', marginVertical: '20%', }} className="gx-text-center gx-mb-4">
                    <h2>Welcome Back!</h2>
                    <p>Log in to Your account </p>
                </div>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        className="gx-p-0 gx-m-0 gx-mb-3 lower-case-email"

                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" prefix={<MailOutlined style={{
                            marginRight: '5px',
                            color: 'blue'
                        }} />} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        className="gx-p-0 gx-m-0 gx-mb-2"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            type="password"
                            placeholder="Password"
                            prefix={<LockOutlined style={{
                                marginRight: '5px',
                                color: 'blue'
                            }} />}
                        />
                    </Form.Item>
                    {/* <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={24} className="gx-pl-5">
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Col>
                    </Row> */}


                    <Form.Item className="gx-p-0 gx-m-0 gx-mt-4">
                        {!authProps.loginStart && <Button type="primary" htmlType="submit" className="login-form-button gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center gx-font-sans-regular" style={{ lineHeight: '0px' }}>
                            Login
                        </Button>}
                        {authProps.loginStart && <Spin><Button type="primary" htmlType="button" className="login-form-button gx-mb-0 gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center gx-font-sans-regular" style={{ lineHeight: '0px' }}>
                            Login
                        </Button></Spin>}

                    </Form.Item>
                </Form>

            </div>

        </Widget>

    );
};

export default SignIn;