import React, { useEffect } from 'react'
import { Form, Input, Row, Col, Select } from 'antd';
import IntlMessages from '../../../../util/IntlMessages'
import ImageUploader from '../../../../components/AvatarUploader'
import { DataGetAction } from 'redux/actions/CommonHttp'
import { useDispatch, useSelector } from 'react-redux'
const { Option } = Select

const FAQForm = ({ photoList, setPhotoState, edit }) => {


    const dispatch = useDispatch()
    const pageProps = useSelector(state => state.pageInfoR)

    const { allOccupation, allConditions } = pageProps


    const fetchList = () => {
        dispatch(DataGetAction('getOccupations', 'getOccupations', { query: 'all' }, ''));
        dispatch(DataGetAction('getConditions', 'getConditions', { query: 'all' }, ''));
    }
    useEffect(fetchList, [])
    return (
        <div>
            <Row style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                <Col xl={16} lg={16} md={16} sm={24} xs={24}>

                    <Row
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
                    >
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="fullName"
                                label={<IntlMessages id="dp.fullName" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="dp.fullname_message" />
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="phoneNumber"
                                label={<IntlMessages id="dp.phoneNumber" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="dp.phonenumber_message" />
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
                    >
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="speciality"
                                label={<IntlMessages id="dp.profession" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="dp.profession_message" />
                                    },
                                ]}
                            >
                                <Select >
                                    {allOccupation && allOccupation.map(item => {
                                        return <Option value={item._id} key={item._id}>{item.occupationName}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="conditionKnowledgeBase"
                                label={'Condition Knowledge Base'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter condition knowledge base'
                                    },
                                ]}
                            >
                                <Select 
                                    mode="multiple" 
                                    showSearch
                                    
                                    >
                                    {allConditions && allConditions.map(item => {
                                        return <Option value={item._id} key={item._id}>{item.conditionName}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
                    // className="gx-mx-0"
                    >
                        {edit !== 'edit' && <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="email"

                                label={<IntlMessages id="dp.email" />}
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: <IntlMessages id="dp.email_message" />
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>}
                        {edit !== 'edit' && <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="location"
                                label={<IntlMessages id="dp.location" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="dp.location_message" />
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>}
                        {edit === 'edit' && <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="location"
                                label={<IntlMessages id="dp.location" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="dp.location_message" />
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>}
                    </Row>
                    <Row
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
                    //className="gx-mx-0"
                    >
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="facebook"
                                label={<IntlMessages id="dp.facebook" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="dp.facebook_message" />
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="twitter"
                                label={<IntlMessages id="dp.twitter" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="dp.twitter_message" />
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
                    //  className="gx-mx-0"
                    >


                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="youtube"
                                label={<IntlMessages id="dp.youtube" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="dp.youtube_message" />
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                name="linkedIn"
                                label={<IntlMessages id="dp.linkedIn" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="dp.linkedIn_message" />
                                    },
                                ]}
                                initialValue=''
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>

                    <Row>
                        <Col xl={6} lg={6} md={6} sm={24} xs={24}>
                            <ImageUploader photoList={photoList} setPhotoState={setPhotoState} />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default FAQForm
