import React from 'react'
import { Row, Col, Checkbox, Form } from 'antd'
const Checkboxes = ({ data,initialValue,shouldDisbale }) => {

    console.log('===============initialValue==============',initialValue)

    const renderOptionWithImage = () => {
        return data.questionOptionImage.map((Item,index) => {
            return <Col xl={8} lg={8} md={12} sm={12} xs={24} className="gx-mb-3">
                <div className="radio-image-container">
                    <Checkbox value={index} id={Item.optionLabel}>{Item.optionLabel}</Checkbox>
                    <label htmlFor={Item.optionLabel} className="radio-image" style={{ backgroundImage: `url(${Item.image_optionLabel})` }}></label>
                </div>
            </Col>
        })
    }

    const renderOptionWithoutImage = () => {
        return data.questionOption.map((Item,index) => {
            return <Col span={24} className="gx-mb-2">
                <Checkbox value={index}>{Item.optionLabel}</Checkbox>
            </Col>
        })
    }


    const renderQuestion = () => {
        if (data.questionOption) {
            console.log('================data.questionOption',data)
            return <Form.Item name={data.questionLabel}
                rules={[{ required: true, message: 'Please select one!' }]}
                initialValue={ initialValue  && initialValue.selected}
                
            >
                <Checkbox.Group style={{ width: '100%' }} disabled={shouldDisbale}>
                    <Row>
                        {renderOptionWithoutImage()}
                    </Row>
                </Checkbox.Group>
            </Form.Item>
        } else {
            return <Form.Item name={data.questionLabel}
                rules={[{ required: true, message: 'Please select one!' }]} disabled={shouldDisbale}>
                <Checkbox.Group style={{ width: '100%' }}>
                    <Row className="gx-m-0">
                        {renderOptionWithImage()}
                    </Row>
                </Checkbox.Group>
            </Form.Item>
        }
    }

    return (
        <div style={{ padding: '10px 10px 30px 31px' }}>
            <h5 className="gx-blue-font gx-mb-3">{data.questionLabel}</h5>
            {renderQuestion()}
        </div>
    )
}

export default Checkboxes
