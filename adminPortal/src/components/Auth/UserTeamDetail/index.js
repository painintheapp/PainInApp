import React from 'react'
import { Button, Form, Input, Spin, message } from 'antd'
import Widget from '../../Widget'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DataRequestAction } from 'redux/actions/http';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';
const Index = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    console.log("========= params ========", params);
    const { token } = params;
    var decoded = jwt_decode(token);

    const authProp = useSelector(state => state.auth);
    const { userRegisterSuccessfully, userRegisterFail, savingDetail } = authProp

    const redirectToLogin = () => {
        history.push('/login')
    }

    const onFinish = (values) => {
        values._id = decoded._id;
        values.status = "active"
        dispatch(DataRequestAction('POST', 'signUp', values, '', 'savingUserDetail', false))
    }

    if (userRegisterSuccessfully) {

        swal({
            icon: "success",
            title: "Registration request successfully submitted. Your request has been sent for admin approval.",
            text: "Once approved you will get confirmation email.",
            className: "userDetailAlert"
        }).then(() => {
            history.push("/login")
        });

        dispatch({
            type: "update_auth"
        })
    }

    if (userRegisterFail) {
        message.error("some error occur while updating the info. kindly try again")
        dispatch({
            type: "update_auth"
        })
    }

    const initialValue = {
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        email: decoded.email,
        _id: decoded._id
    }

    return (
        <Widget styleName="gx-paddingAuth">
            <div className="SignInVerification gx-p-5">

                <div className="welcomeMessage gx-text-center gx-mb-5">
                    <h2 className="gx-font-weight-bold gx-mb-0 gx-font-sans-bold gx-blue-font gx-font-35">Sign up</h2>
                    <p className="gx-mt-3 gx-font-gray gx-font-sans-regular">Set up your account in our portal</p>
                </div>
                <Form
                    name="basic"
                    initialValues={initialValue}
                    onFinish={onFinish}
                >

                    <Form.Item name={'firstName'} className="gx-ml-0 gx-mr-0" rules={[{
                        required: true,
                        message: 'Please input your Name',
                    }]}>
                        <Input placeholder="First Name" prefix={<UserOutlined style={{
                            marginRight: '5px'
                        }} />} />
                    </Form.Item>
                    <Form.Item name={'lastName'} className="gx-ml-0 gx-mr-0" rules={[{
                        required: true,
                        message: 'Please input your Name',
                    }]}>
                        <Input placeholder="Last Name" prefix={<UserOutlined style={{
                            marginRight: '5px'
                        }} />} />
                    </Form.Item>
                    <Form.Item name={'email'} className="gx-ml-0 gx-mr-0" rules={[{
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    }]}>
                        <Input placeholder="Email" disabled prefix={<MailOutlined style={{
                            marginRight: '5px'
                        }} />} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        className="gx-ml-0 gx-mr-0"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined style={{
                            marginRight: '5px'
                        }} />} />
                    </Form.Item>

                    <div
                        className="gx-d-flex gx-mt-5  gx-flex-column gx-align-items-center">
                        {!savingDetail && <Button
                            type="primary"
                            className="login-form-button gx-pt-0 gx-w-75 gx-mr-0 gx-font-sans-regular"
                            htmlType="submit"
                        >Submit</Button>}
                        {savingDetail && <Spin><Button
                            type="primary"
                            className="login-form-button gx-pt-0 gx-w-75 gx-mr-0"
                        >Submit</Button></Spin>}

                        <p className="gx-font-sans-regular">Already have an account?
                        <span onClick={() => redirectToLogin()} style={{
                                cursor: 'pointer',
                                color: '#3FD4A2',
                                marginLeft: '4px'
                            }}>Sign In</span></p>
                    </div>
                </Form>
            </div>
        </Widget>
    )
}

export default Index
