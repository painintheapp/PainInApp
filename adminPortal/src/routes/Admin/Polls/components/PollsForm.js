import React, { useEffect } from 'react'
import { Form, Input, Row, Col } from 'antd';
import IntlMessages from '../../../../util/IntlMessages'
import Select from '../../../../../src/components/Select'
import DatePicker from '../../../../../src/components/DatePicker'
import { DataGetAction } from '../../../../redux/actions/CommonHttp';
import { useSelector, useDispatch } from 'react-redux'
const PollsForm = () => {
    const crudProps = useSelector(state => state.CurdR)
    const { Records } = crudProps
    const dispatch = useDispatch()
    const getAllCommunity = () => {
        dispatch(DataGetAction('getCommunity', 'FetchRecord', { query: 'all' }))
    }
    useEffect(getAllCommunity, [])
    return (
        <div>
            <Row
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
            //className="gx-mx-0 gx-d-flex"
            >
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="pollname"
                        label={<IntlMessages id="polls.pollname" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="polls.pollname_message" />
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="community"
                        label={<IntlMessages id="polls.form.community" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="polls.community_message" />
                            },
                        ]}
                    >
                        {/* <Input /> */}
                        <Select data={Records} />
                    </Form.Item>
                </Col>
            </Row>
            <Row
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
            // className="gx-mx-0"
            >
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="startDate"
                        label={<IntlMessages id="polls.form.startDate" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="polls.startDate_message" />
                            },
                        ]}
                    >
                        {/* <Input /> */}
                        <DatePicker style={{ width: 270 }} />
                    </Form.Item>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                        name="endDate"
                        label={<IntlMessages id="polls.form.endDate" />}
                        rules={[
                            {
                                required: true,
                                message: <IntlMessages id="polls.endDate_message" />
                            },

                        ]}
                    >
                        {/* <Input /> */}
                        <DatePicker style={{ width: 270 }} />
                    </Form.Item>
                </Col>
            </Row>

        </div>
    )
}

export default PollsForm
