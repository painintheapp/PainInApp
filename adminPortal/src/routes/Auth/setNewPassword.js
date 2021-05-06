import React from 'react'
import SetNewPasswordForm from 'components/Auth/SetNewPassword'
import AuthLeftSide from 'components/Auth/InfoAuthLeftSide'
import { Row, Col } from 'antd'
const SetNewPassword = () => {
    return (
        <div className="gx-authBackGround">
            <Row>
                <Col xl={12} lg={12} md={12} sm={24} xs={0}>
                    <AuthLeftSide />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <SetNewPasswordForm />
                </Col>
            </Row>
        </div>
    )
}

export default SetNewPassword
