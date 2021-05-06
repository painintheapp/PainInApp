import React from 'react'
import AuthLeftSide from 'components/Auth/InfoAuthLeftSide'
import SignUp from 'components/Auth/Signup'
import { Row, Col } from 'antd'
const PhoneNumber = () => {
    return (
        <div className="gx-authBackGround">
            <Row>
                <Col xl={12} lg={12} md={12} sm={24} xs={0}>
                    <AuthLeftSide />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <SignUp />
                </Col>
            </Row>
        </div>
    )
}

export default PhoneNumber
