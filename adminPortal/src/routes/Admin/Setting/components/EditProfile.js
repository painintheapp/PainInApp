import React from 'react'
import { DataRequestAction } from "redux/actions/http";
import SimpleModal from "components/Modal/SimpleModal";
import { useDispatch, useSelector } from "react-redux";
import IntlMessages from 'util/IntlMessages'
import AvatarUploader from 'components/AvatarUploader'
import { Form, Input, Row, Col, Button,Spin } from 'antd';

const EditProfile = ({ setPhotoState, photoList }) => {


    const settingsProps = useSelector(state => state.auth)
    const { editProfileModalVisible, settingsData, updatingProfile } = settingsProps
    const dispatch = useDispatch();

    const toggleEditProfile = () => {
        dispatch({
            type: 'EditProfile_Modal'
        })
    }

    const updateProfle = values => {
        values.profileImageUrl = photoList.imageUrl
        dispatch(DataRequestAction('PUT', 'updateProfile', values, '', 'updatingProle', false))
    };

    return (
        <div>

            <span style={{ color: 'grey' }} className="icon icon-edit gx-link" onClick={() => toggleEditProfile()}></span>
            <SimpleModal width={500} title={
                <span style={{ color: '#041649' }} className="gx-font-sans-bold">{<IntlMessages id="settings.editModal.updateProfile" />} </span>
            }
                modalFor="EditProfile_Modal"
                visible={editProfileModalVisible}>

                <span></span>
                <Form
                    layout="vertical"
                    name="editProfile"
                    onFinish={updateProfle}
                    initialValues={settingsData && settingsData}
                >



                    <Row className="gx-d-flex gx-flex-row gx-align-items-center">
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="gx-pl-0">

                            <Form.Item
                                name="firstName"
                                label={<IntlMessages id="settings.editModal.clientName" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="settings.editModal.clientName_message" />,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
{/* 
                            <Form.Item
                                name="lastName"
                                label={<IntlMessages id="settings.editModal.clientName" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="settings.editModal.clientName_message" />,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item> */}
                            <Form.Item
                                name="email"
                                label={<IntlMessages id="settings.editModal.email" />}
                                rules={[
                                    {
                                        type: 'email',
                                        required: true,
                                        message: <IntlMessages id="settings.editModal.email_message" />,
                                    },
                                ]}

                            >
                                <Input disabled />
                            </Form.Item>

                            <Form.Item
                                name="phoneNumber"
                                label={<IntlMessages id="settings.editModal.phone" />}
                                rules={[
                                    {
                                        required: true,
                                        message: <IntlMessages id="settings.editModal.phone_message" />,
                                    },
                                ]}

                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="gx-pr-0">
                            <Form.Item
                                name="photo"
                            >
                                <AvatarUploader setPhotoState={setPhotoState} photoList={photoList} />
                            </Form.Item>
                        </Col>
                    </Row>



                    <Row>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-px-0">
                            <div className="gx-flex gx-flex-row gx-align-items-center gx-justify-content-end ">

                                <Form.Item className="gx-mb-0">
                                    <Button type="default" className="gx-pt-0 gx-mb-0 gx-mr-2" htmlType="button" onClick={() => toggleEditProfile()}>
                                        <IntlMessages id="settings.editModal.cancel" />
                                    </Button>
                                </Form.Item>
                                <Form.Item className="gx-mb-0">
                                    {updatingProfile && <Spin>   <Button type="primary" className="gx-pt-0 gx-mb-0" htmlType="button" disbaled>
                                        <IntlMessages id="settings.editModal.save" />
                                    </Button></Spin>}

                                    {!updatingProfile && <Button type="primary" className="gx-pt-0 gx-mb-0" htmlType="submit">
                                        <IntlMessages id="settings.editModal.save" />
                                    </Button>}
                                </Form.Item>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </SimpleModal>
        </div>
    )
}

export default EditProfile
