import React, { useEffect } from 'react'
import { Form, Input, Row, Col } from 'antd';
import IntlMessages from '../../../../util/IntlMessages'
import Select from '../../../../../src/components/Select'
import { useSelector, useDispatch } from 'react-redux'
import Quill from '../../../../components/Quill'
import { DataGetAction } from '../../../../redux/actions/CommonHttp';
const PollsForm = () => {
    const dispatch = useDispatch()
    const crudProps = useSelector(state => state.CurdR)
    const { Records } = crudProps
    console.log('==============Records========',Records)

    const getAllCommunity = () => {
        dispatch(DataGetAction('getCommunity', 'FetchRecord', { query: 'all' }))
    }
    useEffect(getAllCommunity, [])

    return (
        <div>
            <Row
                //style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
                className="gx-mx-0 gx-d-flex"
            >
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="community"
                        label={<IntlMessages id="blog.form.community" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="blog.community_message" />
                            },
                        ]}
                    >
                        {/* <Input /> */}
                        <Select data={Records} />
                    </Form.Item>
                </Col>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="title"
                        label={<IntlMessages id="blog.form.title" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="blog.title_message" />
                            },
                        ]}
                    >
                        <Input />

                    </Form.Item>
                </Col>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item
                        name="article"
                        label={<IntlMessages id="blog.form.article" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="blog.article_message" />
                            },
                        ]}
                        initialValue=''
                    >
                        <Quill value="" />

                    </Form.Item>
                </Col>
            </Row>


        </div>
    )
}

export default PollsForm
