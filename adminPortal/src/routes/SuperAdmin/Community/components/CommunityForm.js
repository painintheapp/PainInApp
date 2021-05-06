import React from 'react'
import { Form, Input, Row, Col } from 'antd';
import IntlMessages from '../../../../util/IntlMessages'
const CommunityForm = () => {
    return (
        <div>
            <Row className="gx-mx-0 gx-d-flex">
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="communityName"
                        label={<IntlMessages id="community.fullName" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="community.fullname_message" />
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

export default CommunityForm
