import React from 'react'
import { Row, Col, Radio, Form } from 'antd'
const RadioButtons = ({ data , initialValue,shouldDisbale}) => {

    const renderOptionWithImage = () => {
        return data.questionOptionImage.map((Item, index) => {
            return <Col xl={8} lg={8} md={12} sm={12} xs={24} className="gx-mb-3 gx-mb-2">
                <div className="radio-image-container">
                    <Radio value={index} id={Item.optionLabel}>{Item.optionLabel}</Radio>
                    <label htmlFor={Item.optionLabel} className="radio-image" style={{ backgroundImage: `url(${Item.image_optionLabel})` }}></label>
                </div>

            </Col>
        })
    }

    const renderOptionWithoutImage = () => {
        return data.questionOption.map((Item, index) => {
            return (
                <Col span={24} className="gx-mb-2">
                    <Radio value={index}>{Item.optionLabel}</Radio>
                </Col>
            )
        })
    }

    const renderQuestion = () => {
        if (data.questionOption) {
            return <Form.Item name={data.questionLabel}
                rules={[{ required: true, message: 'Please select one!' }]}
                initialValue={ initialValue  && parseInt(initialValue.selected[0])}
            >
                <Radio.Group style={{ width: '100%' }} disabled={shouldDisbale}>
                    <Row className="gx-m-0">
                        {renderOptionWithoutImage()}
                    </Row>
                </Radio.Group>
            </Form.Item>
        } else {
            return <Form.Item name={data.questionLabel}
                rules={[{ required: true, message: 'Please select one!' }]}>
                <Radio.Group style={{ width: '100%' }} disabled={shouldDisbale}>
                    <Row className="gx-m-0">
                        {renderOptionWithImage()}
                    </Row>
                </Radio.Group>
            </Form.Item>
        }
    }

    return (
        <div>
            <h5 className="gx-blue-font gx-mb-3">{data.questionLabel}</h5>
            {renderQuestion()}
        </div>
    )
}

export default RadioButtons
