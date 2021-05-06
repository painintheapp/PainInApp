import React, { useEffect } from 'react';
import { Form, Input, Button, Spin, message } from 'antd';
import { DataRequestAction, updateAllState } from 'redux/actions/http';
import { useDispatch, useSelector } from 'react-redux'

const ResetPassword = (props) => {

    const authProps = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const LoadPage = () => {
        return () => {
            dispatch(updateAllState('auth'));
        }
    }
    useEffect(LoadPage, [])

    const onFinish = values => {
        dispatch(DataRequestAction('POST', 'resetPassword', values, '', 'reset', false));
    };

    if(authProps.success){
        message.success("You are successfully reset password");

        dispatch({
            type:'update_auth'
        })
    }

    if(authProps.error){
        message.error(authProps.message);

        dispatch({
            type:'update_auth'
        })
    }




    return (
        <div className="SignIn gx-p-5 gx-w-50 gx-m-auto">

            <div className="welcomeMessage gx-text-center gx-mb-5">
                <h2 className="gx-font-weight-bold gx-mb-3">Reset Your Password </h2>
                <p className={`gx-text-center ${authProps.error ? "error" : ""}`}> {authProps.message}</p>
            </div>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="oldPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your old password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Old Password" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'password not match!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Password not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm Password" />
                </Form.Item>


                <Form.Item>
                    {!authProps.ShowRestLoader && <Button type="primary" htmlType="submit" className="login-form-button gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center" style={{ lineHeight: '0px' }}>
                        Reset
                 </Button>}
                    {authProps.ShowRestLoader && <Spin><Button type="primary" htmlType="button" className="login-form-button gx-d-flex gx-w-100 gx-flex-row gx-justify-content-center" style={{ lineHeight: '0px' }}>
                        Reset
                 </Button></Spin>}
                </Form.Item>
            </Form>
        </div>
    );
};

export default ResetPassword;