import React, { useState } from 'react'
import { Button, Steps, Modal, Form, message, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import InspectionForm from './InspectionForm'
import Checkout from './Checkout'
import { DataRequestAction } from 'redux/actions/http'
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
const { Step } = Steps;

const RequestInspection = () => {


    const [formData, setFormData] = useState(null)
    const dispatch = useDispatch();
    const customerProps = useSelector(state => state.customerDashboard);
    const { requestModalVisible, checkoutStart, textMessage, siteAdded, error } = customerProps;

    const inspectionProps = useSelector(state => state.requestedInspection)
    const { inspectionCostDetail } = inspectionProps

    const [form] = Form.useForm();

    const strip = useStripe();
    const elements = useElements();

    const steps = [
        {
            title: 'Inspection',
            content: <InspectionForm form={form} formData={formData} />,
        },
        {
            title: 'Checkout',
            content: <Checkout
                form={form}
                CardNumberElement={CardNumberElement}
                CardExpiryElement={CardExpiryElement}
                CardCvcElement={CardCvcElement}
                formData={formData}
                TotalCost={inspectionCostDetail && inspectionCostDetail.TotalCost}
            />,
        },
    ];

    const [current, setCurrent] = useState(0);

    const next = () => {
        form.validateFields().then(values => {

            setFormData(values)
            setCurrent(current + 1);

        }).catch(error => {
            console.log("========== error ======", error)
        })
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const openModal = () => {
        dispatch({
            type: 'Request_Modal'
        })
    }
    const handleCancel = () => {
        form.resetFields();
        setFormData(null)
        dispatch({
            type: 'Request_Modal'
        })
    }

    if (siteAdded) {
        message.success(textMessage);
    }
    if (error) {
        message.error(textMessage);
    }

    const checkOutSiteOrder = () => {

        form.validateFields().then(values => {

            const cardNumber = elements.getElement(CardNumberElement);
            strip.createToken(cardNumber).then(function (result) {
                if (result.error) {
                    return
                }

                const data = {
                    totalAmount: inspectionCostDetail.TotalCost,
                    tok: result.token.id,
                    customerInfo: inspectionCostDetail.customerInfo,
                    projectName: inspectionCostDetail.projectName
                }

                values.stripInfo = data;
                values.siteId = formData.siteId;
                values.startBefore = formData.date;
                values.endBefore = formData.date

                dispatch(DataRequestAction('POST', 'requestInspection', values, '', 'requestingInspection', false))
            })

        }).catch(error => {
            console.log("========== error ======", error)
        });
    }


    return (
        <>
            <Button className="gx-pt-0 gx-m-0" type="primary" onClick={openModal}>Request Inspection</Button>
            <Modal
                title="Request Inspection"
                visible={requestModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={620}
                className="addSiteModal"
            >
                <>
                    <Steps current={current} progressDot direction={"horizontal"}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}

                    </Steps>
                    <div className="steps-content">{steps[current].content}</div>
                    <div className={current > 0 ? 'steps-action gx-d-flex  gx-justify-content-between' : 'steps-action gx-d-flex gx-justify-content-end'}>
                        {current < steps.length - 1 && (
                            <Button type="primary" className="gx-pt-0 gx-mb-0" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button className="gx-pt-0 gx-mb-0" style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                        {current > 0 && checkoutStart &&

                            <Spin> <Button type="primary" className="gx-pt-0 gx-mb-0" onClick={() => checkOutSiteOrder()}>
                                Checkout
                            </Button></Spin>
                        }
                        {current > 0 && !checkoutStart &&

                            <Button type="primary" className="gx-pt-0 gx-mb-0" onClick={() => checkOutSiteOrder()}>
                                Checkout
                            </Button>
                        }
                    </div>
                </>
            </Modal>
        </>
        // <FormModal
        //     modalTitle={"Request Inspection"}
        //     basicButtonTitle="Request Inspection"
        //     submitButtonText={"Request"}
        //     cancelButtonText="Cancel"
        //     apiMethod="POST"
        //     apiName="addRole"
        //     editApiMethod="PUT"
        //     editApiName="editRole"
        //     apiLoaderName="addingRole"
        //     confirmLoading={invitingUser}
        //     ModalType="Add_Customer_Modal"
        //     visible={ShowModal}
        //     buttonStyleClass="request-inspection"
        // >
        //     <Row>
        //         <Col lg={24} xl={24} md={24} sm={24} xs={24}>
        //             <Form.Item
        //                 name="siteId"
        //                 label="Site"
        //                 rules={[
        //                     {
        //                         required: true,
        //                         message: "Please select the site!",
        //                     },
        //                 ]}

        //             >
        //                 <Select >
        //                     {siteByCustomer && siteByCustomer.map(item => <Option value={item._id}>{item.projectName}</Option>)}
        //                 </Select>
        //             </Form.Item>

        //             <Form.Item
        //                 name="attachments"
        //                 label="Attachments"
        //                 rules={[
        //                     {
        //                         required: false,
        //                         message: "Please upload the attachments!",
        //                     },
        //                 ]}

        //             >
        //                 <Input  />

        //             </Form.Item>

        //             <Form.Item
        //                 name="description"
        //                 label="Description"
        //                 rules={[
        //                     {
        //                         required: true,
        //                         message: "Please enter the description!",
        //                     },
        //                 ]}

        //             >
        //                 <TextArea rows="4" />
        //             </Form.Item>



        //         </Col>
        //     </Row>

        // </FormModal>
    )
}

export default RequestInspection
