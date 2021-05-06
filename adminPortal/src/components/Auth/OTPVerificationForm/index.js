import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { Button, Form, Spin } from 'antd'
import Widget from '../../Widget'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DataRequestAction } from 'redux/actions/http'


const Index = () => {
    const [OTPCode, setOTPCode] = useState();
    const dispatch = useDispatch();
    const authProps = useSelector(state => state.auth)
    const history = useHistory();
    const location = useLocation();
    const { otpSuccess, otpLoader } = authProps;
    const { phoneNumber } = location.state
    const onFinish = (values) => {
        values.phoneNumber = phoneNumber.phone
        dispatch(DataRequestAction('POST', 'verifyCode', values, '', 'sendOTP'));
    }
    if (otpSuccess) {
        dispatch({
            type: "update_auth"
        })
        history.push('/userDetail');
    }

    return (
        <Widget styleName="gx-paddingAuth">
            <div className="SignInVerification gx-p-5">

                <div className="welcomeMessage gx-text-center gx-mb-5">
                    <h2 className="gx-font-weight-bold gx-mb-0 gx-font-sans-bold gx-blue-font gx-font-35">Enter verification code</h2>
                    <p className="gx-mt-3 gx-font-sans-regular gx-font-gray">We just sent otp code to {phoneNumber.phone} <span>Edit number</span></p>
                </div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="otpCode"
                        className="gx-mt-5 gx-mb-5"
                        rules={[{ required: true, message: 'Please insert a valid code!' }]}
                    >
                        <OtpInput
                            value={OTPCode}
                            onChange={(e) => { setOTPCode(e) }}
                            numInputs={6}
                            containerStyle={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            inputStyle={{
                                width: '60px',
                                height: '60px',
                                marginLeft: '15px',
                                background: '#F6F6F6 0% 0% no-repeat padding-box',
                                border: '1px solid #D2D2D2',
                                borderRadius: '6px',
                                opacity: 1
                            }}
                            separator={<span> </span>}
                        />
                    </Form.Item>

                    <Form.Item className="gx-p-0 gx-m-0">
                        <div className="gx-d-flex gx-mt-5  gx-flex-column gx-align-items-center">
                            {!otpLoader && <Button
                                type="primary"
                                className="login-form-button gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center gx-font-sans-regular" style={{ lineHeight: '0px' }}
                                htmlType="submit"
                            >Submit</Button>}
                            {otpLoader && <Spin><Button
                                type="primary"
                                className="login-form-button gx-mb-0 gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center gx-font-sans-regular" 
                                style={{ lineHeight: '0px' }}
                                htmlType="button"
                            >Submit</Button></Spin>}
                            <p className="gx-font-sans-regular"><span style={{
                                cursor: 'pointer',
                                color: '#3FD4A2'
                            }}>Resend Verification Code</span></p>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </Widget>
    )
}

export default Index
