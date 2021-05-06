import React from 'react'
import { Button, Form, Input, Spin, message } from 'antd'
import Widget from '../../Widget'
import { useHistory } from 'react-router-dom'
import { DataRequestAction } from 'redux/actions/http';
import { useDispatch, useSelector } from 'react-redux'
import { MailOutlined } from '@ant-design/icons';

const Index = () => {

    const history = useHistory();
    const authProps = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const redirectToLogin = () => {
        history.push('/login')
    }

    const onFinish = (values) => {
        dispatch(DataRequestAction('POST', 'forgetPassword', values, '', 'forgot', false));
    }


    if (authProps.success) {
        message.success('Email Sent successfully');
        dispatch({
            type: "update_auth"
        });
    }

    if (authProps.error) {
        message.error(authProps.message);
        dispatch({
            type: "update_auth"
        });
    }

    return (
        <Widget styleName="gx-paddingAuth">
            <div className="SignInVerification gx-p-5">

                <div className="welcomeMessage gx-text-center gx-mb-5">
                    <h2 className="gx-font-weight-bold gx-mb-0 gx-font-sans-bold gx-blue-font gx-font-35">Forgot Password</h2>
                    <p className="gx-mt-3 gx-font-sans-regular gx-gray-font">Set up your account in our portal</p>
                </div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >


                    <Form.Item name='email' className="gx-ml-0 gx-mr-0" rules={[{
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    }]}>
                        <Input placeholder="Email" prefix={<MailOutlined style={{
                            marginRight: '5px'
                        }} />}/>
                    </Form.Item>


                    <Form.Item className="gx-p-0 gx-m-0 ">
                        {!authProps.ShowForgotLoader && <Button
                            type="primary"
                            className="gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center gx-font-sans-regular gx-pt-0"
                            htmlType="submit"
                        >Submit</Button>}
                        {authProps.ShowForgotLoader && <Spin><Button type="primary" htmlType="button" className="gx-d-flex gx-w-100 gx-align-self-center gx-flex-row gx-justify-content-center" style={{ lineHeight: '0px' }}>
                            Submit
                        </Button></Spin>}

                        <p className="gx-text-center gx-font-sans-regular">Already have an account?
                        <span onClick={() => redirectToLogin()} style={{
                                cursor: 'pointer',
                                color: '#3FD4A2',
                                marginLeft: '4px'
                            }}>Sign In</span></p>
                    </Form.Item>
                </Form>
            </div>
        </Widget>
    )
}

export default Index
