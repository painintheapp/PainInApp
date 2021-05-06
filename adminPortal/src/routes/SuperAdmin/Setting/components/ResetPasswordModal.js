import React from 'react'
import SimpleModal from "components/Modal/SimpleModal";
import { useDispatch, useSelector } from "react-redux";
import IntlMessages from 'util/IntlMessages'
import { Form, Input, Row, Col, Button } from 'antd';
import { DataRequestAction } from "redux/actions/http";
const ResetPasswordModal = () => {

    const settingsProps = useSelector(state => state.auth)
    const { changePasswordModelVisible } = settingsProps
    
    const dispatch = useDispatch();


    const changePassword = values => {
        dispatch(DataRequestAction('POST', 'resetPassword', values, '', 'changingPassword', false))
    };
    const toggleChangePasswordModal = () => {
        dispatch({
            type: 'changePassword_Modal'
        })
    }
    return (
        <>
        <small className="gx-text-primary gx-link" onClick={() => toggleChangePasswordModal()}>Change password</small>
        <SimpleModal
            width={500}
            title={<span style={{ color: '#041649' }} className="gx-font-sans-bold">{<IntlMessages id="settings.passwordModal.changePassword" />} </span>}
            modalFor="changePassword_Modal"
            visible={changePasswordModelVisible}>

            <Form
                layout="vertical"
                name="resetPasswprd"
                onFinish={changePassword}
            >
                <Row>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24} className="gx-px-0">
                        <Form.Item
                            name="oldPassword"
                            label={<IntlMessages id="settings.passwordModal.currentPassword" />}
                            rules={[
                                {
                                    required: true,
                                    message: <IntlMessages id="settings.passwordModal.currentPassword_message" />,
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>
                <Row className="gx-d-flex gx-flex-row">
                    <Col xl={12} lg={12} md={12} sm={24} xs={24} className="gx-px-0">
                        <Form.Item
                            name="password"
                            label={<IntlMessages id="settings.passwordModal.newPassword" />}
                            rules={[
                                {
                                    required: true,
                                    message: <IntlMessages id="settings.passwordModal.newPassword_message" />,
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24} className="gx-px-0">
                        <Form.Item
                            name="confirmPassword"
                            label={<IntlMessages id="settings.passwordModal.confirmPassword" />}
                            dependencies={['password']}
                            rules={[
                                {
                                    required: true,
                                    message: <IntlMessages id="settings.passwordModal.confirmPassword_message" />,
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(<IntlMessages id="settings.passwordModal.passwordNotMatchMessage" />);
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-px-0">
                        <div className="gx-flex gx-flex-row gx-align-items-center gx-justify-content-end ">
                            <Form.Item className="gx-mb-0">
                                <Button type="default" className="gx-pt-0 gx-mb-0 gx-mr-2" htmlType="button" onClick={() => toggleChangePasswordModal()}>
                                    <IntlMessages id="settings.passwordModal.cancel" />
                                </Button>
                            </Form.Item>
                            <Form.Item className="gx-mb-0">
                                <Button type="primary" className="gx-pt-0 gx-mb-0" htmlType="submit">
                                    <IntlMessages id="settings.passwordModal.save" />
                                </Button>
                            </Form.Item>
                        </div>
                    </Col>
                </Row>
            </Form>
        </SimpleModal>
        </>
    )
}

export default ResetPasswordModal
