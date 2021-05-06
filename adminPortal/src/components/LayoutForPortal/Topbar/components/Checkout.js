import React from 'react'
import { Form, Row, Col } from 'antd';

import pinIcon from 'assets/pinicon.svg'
import cardIcon from 'assets/cardIcon.svg'


const InspectionForm = ({ form, CardNumberElement, CardExpiryElement, CardCvcElement, formData, TotalCost }) => {

 
    const renderSwpppDocumentFee = () => {
        return (
            <div className="gx-px-3 gx-py-2 gx-mb-5 gx-mt-3" style={{ borderRadius: '8px', backgroundColor: 'white' }} >
                <div className="gx-d-flex gx-justify-content-between">
                    <span>Total Inspection Cost</span>
                </div>
                <div className="gx-d-flex gx-justify-content-between">
                    <span><i class="fas fa-parking-circle-slash    "></i></span>
                    <span>${TotalCost}</span>
                </div>
            </div>
        )

    }




    return (
        <Form form={form}
            name="requestInspection"
            layout="vertical"
            initialValues={formData}
        >
            {renderSwpppDocumentFee()}
            <Row className="gx-d-flex gx-flex-row gx-mb-3">
                <Col xl={12} md={12} sm={24} xs={24} style={{ backgroundColor: '#3FD4A2', borderRadius: '8px', color: 'white', padding: '10px' }}>

                    <span className="gx-mb-2 gx-d-inline-block">
                        <img src={pinIcon} alt="icon" />
                    </span>
                    <h3 className="gx-mb-2 gx-font-sans-bold" style={{ color: 'white' }}> <span className="gx-mr-2">1307</span> <span className="gx-mr-2">9113</span> <span className="gx-mr-2">2711</span> <span className="gx-mr-2">6592</span></h3>

                    <div className="gx-font-sans-bold" ><span style={{ fontSize: '9px' }} className="gx-d-block">valid from</span> <span>11/23</span></div>
                    <div className="gx-d-flex gx-justify-content-end">
                        <span><img src={cardIcon} alt="icon" /></span>
                    </div>
                </Col>
                <Col xl={12} md={12} sm={24} xs={24} className="gx-m-0">
                    <Row >
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <div className="cardNumber">
                                <CardNumberElement
                                    options={{
                                        style: {

                                            base: {
                                                border: '1px solid red !important',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                            </div>

                        </Col>
                    </Row>
                    <Row className="gx-mx-0 gx-mt-3 gx-d-flex gx-flex-row">
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <div className="cardNumber">
                                <CardExpiryElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <div className="cardNumber">
                                <CardCvcElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Form>
    )
}

export default InspectionForm
