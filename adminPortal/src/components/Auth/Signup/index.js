import React,{useState} from 'react';
import { Form, Input, Button, Spin, Checkbox, Row, Col } from 'antd';
import Widget from '../../Widget'
import { useDispatch, useSelector } from 'react-redux'
import { DataRequestAction } from 'redux/actions/http'
import { useHistory } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import {Socket} from '../../../socket'

const SignUp = (props) => {

    const dispatch = useDispatch();
    const authProps = useSelector(state => state.auth);
    const history = useHistory();
    const [phoneNumber, setPhoneNumber] = useState();
    //When click on the Login button it call the onFinish action
    const { savingDetail, userRegisterSuccessfully } = authProps;
    const onFinish = values => {
        //Pass value to action function
        
        dispatch(DataRequestAction('POST', 'signUp', values, '', 'savingUserDetail', false));
    };

    if(userRegisterSuccessfully){
        history.push('/subscription')
    }
    const redirectToSignIn = () => {
        history.push('/login')
    }
    // const redirectToForgotPage = () => {
    //     history.push('/forgotPassword')
    // }

    const styles ={
        inputIcon : {
            display: 'flex',
            marginRight: '10px'
        }
    }


    return (
        <Widget styleName="gx-paddingAuth">
            <div className="SignIn gx-px-5 gx-pb-5">
                <div className="welcomeMessage gx-text-center gx-mb-4">
                    <h2 className="gx-font-weight-light gx-mb-0 gx-font-sans-regular gx-blue-font gx-font-35">Sign up your account</h2>
                    <p className="gx-mb-0 gx-gray-font gx-font-sans-regular">create an account</p>
                    
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="fullName"
                        className="gx-p-0 gx-m-0 gx-mb-3"
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                        <Input placeholder="Full Name" prefix={<span style={styles.inputIcon} className="icon icon-avatar"></span>} />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        className="gx-p-0 gx-m-0 gx-mb-3"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            type="email"
                            placeholder="Email"
                            prefix={<span style={styles.inputIcon} className="icon icon-email"></span>}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        className="gx-p-0 gx-m-0 gx-mb-3"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password
                            
                            placeholder="Password"
                            prefix={<span style={styles.inputIcon} className="icon icon-forgot-password"></span>}
                        />
                    </Form.Item>
                    <Form.Item
                        name="phoneNumber"
                        className="gx-p-0 gx-m-0 gx-mb-3"
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
                    <Row>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-pl-5">
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>
                                    <span className="gx-mr-1">by signing up, I accept</span>  
                                    <span style={{color: '#3FD4A2'}}>Terms and conditions</span>
                                </Checkbox>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item className="gx-p-0 gx-m-0">
                        {!savingDetail && <Button type="primary" htmlType="submit" className="login-form-button gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center gx-font-sans-regular" style={{ lineHeight: '0px' }}>
                        Sign up 
                        </Button>}
                        {savingDetail && <Spin><Button type="primary" htmlType="button" className="login-form-button gx-mb-0 gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center gx-font-sans-regular" style={{ lineHeight: '0px' }}>
                            Sign up
                        </Button></Spin>}
                    </Form.Item>
                    <p className="gx-text-center gx-font-sans-regular" onClick={() => redirectToSignIn()}>Already have an account? <span className="gx-pointer gx-link gx-font-sans-regular" style={{
                        color: '#3FD4A2'
                    }}>Sign In</span></p>
                </Form>
                
            </div>
        </Widget>
    );
};

export default SignUp;