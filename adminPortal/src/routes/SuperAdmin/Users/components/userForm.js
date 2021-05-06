import React from 'react'
import { Form, Input, Row, Col } from 'antd';
import IntlMessages from '../../../../util/IntlMessages'
const userForm = () => {
    return (
        <div>
            <Row
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
            //className="gx-mx-0 gx-d-flex"
            >
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="fullName"
                        label={<IntlMessages id="dp.fullName" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="dp.fullname_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="email"
                        label={<IntlMessages id="dp.email" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="dp.email" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
            // className="gx-mx-0"
            >
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="password"
                        label={<IntlMessages id="dp.password" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="dp.password_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="location"
                        label={<IntlMessages id="dp.location" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="dp.location_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
            //className="gx-mx-0"
            >
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="facebook"
                        label={<IntlMessages id="dp.facebook" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="dp.facebook_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="twitter"
                        label={<IntlMessages id="dp.twitter" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="dp.twitter_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
            //  className="gx-mx-0"
            >


                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="youtube"
                        label={<IntlMessages id="dp.youtube" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="dp.youtube_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="linkedIn"
                        label={<IntlMessages id="dp.linkedIn" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="dp.linkedIn_message" />
                            },

                        ]}
                        initialValue=''
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

        </div>
    )
}

export default userForm
