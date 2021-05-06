import React from 'react'
import { Form, Input, Row, Col } from 'antd';
import IntlMessages from '../../../../util/IntlMessages'
import Select from '../../../../components/Select'
import Quill from '../../../../components/Quill'
const EducationForm = () => {
    return (
        <div>
            <Row
                className="gx-mx-0 gx-d-flex"
            >
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="catagory"
                        label={<IntlMessages id="education.form.catagory" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="education.catagory_message" />
                            },
                        ]}ß
                    >
                        <Select />
                        {/* <Input /> */}
                    </Form.Item>
                </Col>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="subcatagory"
                        label={<IntlMessages id="education.form.subcatagory" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="education.subcatagory_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="article"
                        label={<IntlMessages id="education.form.article" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="education.article_message" />
                            },
                        ]}
                        initialValue=''
                    >
                        <Quill />
                    </Form.Item>
                </Col>
            </Row>



        </div>
    )
}

export default EducationForm
