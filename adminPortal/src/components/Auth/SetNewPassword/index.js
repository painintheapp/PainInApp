import React from 'react'
import { Button, Form, Input, Spin, message } from 'antd'
import Widget from '../../Widget'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DataRequestAction } from 'redux/actions/http';

import swal from 'sweetalert';
const Index = () => {

    const history = useHistory();
    const params = useParams()
    console.log("============ params =========",params);
    const dispatch = useDispatch();
    const authProp = useSelector(state => state.auth);
    const {  loginDetailChangeSuccessfully,loginDetailChangeFail, savingLoginDetail } = authProp
    const redirectToLogin = () => {
        history.push('/login')
    }

    const onFinish = (values) => {
        values.forgetPasswordAuthToken = params.token
        dispatch(DataRequestAction('POST', 'setNewPassword', values, '', 'changingLoginDetail', false))
    }

    if (loginDetailChangeSuccessfully) {

        swal({
            icon: "success",
            title: "Your Password Successfully Change.",
            text: "click okay to continue & login again",
            className: "userDetailAlert"
        }).then(() => {
            history.push("/login")
        });

        dispatch({
            type: "update_auth"
        })
    }

    if (loginDetailChangeFail) {
        message.error("some error occur while updating the info. kindly try again")
        dispatch({
            type: "update_auth"
        })
    }

    console.log("========= here =======")
    return (
        <Widget styleName="gx-paddingAuth">
            <div className="SignInVerification gx-p-5">

                <div className="welcomeMessage gx-text-center gx-mb-5">
                    <h2 className="gx-font-weight-bold gx-mb-0">Set New Password</h2>
                    <p className="gx-mt-3">Change your account password for swppp portal</p>
                </div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Password"/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Confirm Password"/>
                    </Form.Item>


                    <Form.Item className="gx-p-0 gx-m-0 ">
                        {!savingLoginDetail && <Button
                            type="primary"
                            className="gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center gx-pt-0"
                            htmlType="submit"
                        >Submit</Button>}
                        {savingLoginDetail && <Spin><Button type="primary" htmlType="button" className="gx-d-flex gx-w-100 gx-align-self-center gx-flex-row gx-justify-content-center" style={{ lineHeight: '0px' }}>
                            Submit
                        </Button></Spin>}

                        <p className="gx-text-center">Already have an account?
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
