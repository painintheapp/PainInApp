import React from 'react'
import { Form, Input, Row, Col } from 'antd';
import IntlMessages from '../../../../util/IntlMessages'
const CatagoryForm = () => {
    return (
        <div>
            <Row
                className="gx-mx-0 gx-d-flex"
            >
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="catagoryName"
                        label={<IntlMessages id="catagory.catagoryName" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="catagory.fullname_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="subcatagory"
                        label={<IntlMessages id="catagory.subcatagory" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="catagory.fullname_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>

            </Row>

        </div>
    )
}

export default CatagoryForm
