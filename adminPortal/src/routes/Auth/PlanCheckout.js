import React from 'react'
import Checkout from 'components/Auth/Checkout'
import AuthLeftSide from 'components/Auth/InfoAuthLeftSide'
import { Row, Col } from 'antd'
const SetNewPassword = () => {
    

    const styles = {
        checkout : {
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            background: 'white',
            height : '100%'
        }
    }
    return (
        <div className="gx-authBackGround">
            <Row>
                <Col xl={12} lg={12} md={12} sm={24} xs={0}>
                    <AuthLeftSide />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div style={styles.checkout}>
                    <Checkout />
                    </div>
                    
                </Col>
            </Row>
        </div>
    )
}

export default SetNewPassword
