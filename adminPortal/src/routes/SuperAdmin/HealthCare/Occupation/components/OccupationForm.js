import React, { useEffect } from 'react'
import { Form, Input, Row, Col, Select } from 'antd';
import { DataGetAction } from 'redux/actions/CommonHttp'
import { useDispatch, useSelector } from 'react-redux'
const { Option } = Select

const OccupationForm = () => {

    const dispatch = useDispatch()
    const pageProps = useSelector(state => state.pageInfoR)

    const {allHealthCategories} = pageProps

    const fetchList = () => {
        dispatch(DataGetAction('getHealthCategory', 'getHealthCategory', { query: 'all' }, ''));
    }
    useEffect(fetchList, [])
  

    return (
        <div>
            <Row
                className="gx-mx-0 gx-d-flex"
            >
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="categoryId"
                        label={'Category Name'}
                        rules={[
                            {
                                required: true,
                                message: 'please select the category!'
                            },
                        ]}
                    >
                        <Select >
                            {allHealthCategories && allHealthCategories.map(item=>{
                                return <Option value={item._id} key={item._id}>{item.categoryName}</Option>
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="occupationName"
                        label={'Occupation Name'}
                        rules={[
                            {
                                required: true,
                                message: 'please enter the occupation name!'
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

export default OccupationForm
