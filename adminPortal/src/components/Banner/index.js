import React from 'react'
import { Row, Col, Button } from 'antd'
import BannerImg from '../../assets/homepage/bannerImg.svg'
const Index = () => {
    return (
        <div className="gx-pt-5 gx-pb-5">
            <div className="gx-container">
                <Row>
                    <Col xl={12} md={12} sm={24} xs={24} className="gx-d-flex gx-flex-column gx-justify-content-center">
                        <h1 className="gx-font-weight-bold">Support local business & front line workers during this Pandemic</h1>
                        <p className="h2">We are all together in this. Lets come together and support each other</p>
                        <Button type="primary" className="gx-primary-button-custom" style={{ width: 162 }}>Donate Now</Button>
                    </Col>
                    <Col xl={12} md={12} sm={24} xs={24} className="gx-d-flex gx-flex-row gx-justify-content-end">
                        <img src={BannerImg} alt="bannerImg"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Index
