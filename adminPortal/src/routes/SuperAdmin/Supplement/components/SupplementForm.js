import React from 'react'
import { Form, Input, Row, Col } from 'antd';


const SupplementForm = () => {

    return (
        <div>
            <Row
                className="gx-mx-0 gx-d-flex"
            >
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="supplementName"
                        label={'Supplement Name'}
                        rules={[
                            {
                                required: true,
                                message: 'please enter the supplement name!'
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                
            </Row>
        </div>
    )
}

export default SupplementForm
