import React, { useState } from 'react'
import { Form, Button, Spin } from 'antd';
import Widget from '../../Widget'
import { useDispatch, useSelector } from 'react-redux'
import { DataRequestAction } from 'redux/actions/http'
import { useHistory } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'




const Index = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const dispatch = useDispatch();
    const history = useHistory();

    const signUpProps = useSelector(state => state.auth);

    const onFinish = (values) => {
        dispatch(DataRequestAction('POST', 'signUpByNumber', values, '', 'sendOTP'));
    }

    const redirectToLogin = () => {
        history.push('/login')
    }

    if (signUpProps.success) {
        dispatch({
            type: 'update_auth'
        })
        history.push("/otpVerification", { phoneNumber })
    }

    const { Loader } = signUpProps;


    return (
        <Widget styleName="gx-paddingAuth">
            <div className="SignIn gx-p-5">

                <div className="welcomeMessage gx-text-center gx-mb-5">
                    <h2 className="gx-font-weight-bold gx-mb-0">Enter your phone number</h2>
                    <p>We will send your verification code to</p>
                </div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="phoneNumber"
                        className="gx-mt-5 gx-mb-5"
                        style={{
                            marginLeft: '0px',
                            marginRight: '0px'
                        }}
                        rules={[{ required: true, message: 'Please insert a valid number!' }]}
                    >
                        <PhoneInput
                            inputStyle={{
                                width: '100%'
                            }}
                            country={'us'}
                            value={phoneNumber}
                            onChange={phone => setPhoneNumber({ phone })}
                        />
                    </Form.Item>
                    <Form.Item className="gx-p-0 gx-m-0">
                        {!Loader && <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center "
                            style={{ lineHeight: '0px' }}>
                            Send verification code
                 </Button>}

                 <p className="gx-text-center gx-font-sans-regular">Already have an account?
                        <span onClick={() => redirectToLogin()} style={{
                                cursor: 'pointer',
                                color: '#3FD4A2',
                                marginLeft: '4px'
                            }}>Sign In</span></p>


                        {Loader && <Spin><Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center "
                            style={{ lineHeight: '0px' }}>
                            Send verification code
                 </Button></Spin>}
                    </Form.Item>
                </Form>
            </div>
        </Widget >
    )
}

export default Index
