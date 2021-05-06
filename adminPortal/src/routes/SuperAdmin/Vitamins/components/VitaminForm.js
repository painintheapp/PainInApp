import React from 'react'
import { Form, Input, Row, Col, Select } from 'antd';


const VitaminForm = () => {

    return (
        <div>
            <Row
                className="gx-mx-0 gx-d-flex"
            >
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="vitaminName"
                        label={'Vitamin Name'}
                        rules={[
                            {
                                required: true,
                                message: 'please enter the vitamin name!'
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

export default VitaminForm
