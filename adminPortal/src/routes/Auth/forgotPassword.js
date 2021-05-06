import React from 'react'
import AuthLeftSide from 'components/Auth/InfoAuthLeftSide'
import ForgotPasswordForm from 'components/Auth/ForgotPasswordForm'
import { Row, Col } from 'antd'
const ForgotPassword = () => {
    return (
        <div className="gx-authBackGround">
            <Row>
                <Col xl={12} lg={12} md={12} sm={24} xs={0}>
                    <AuthLeftSide />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <ForgotPasswordForm />
                </Col>
            </Row>
        </div>
    )
}

export default ForgotPassword
