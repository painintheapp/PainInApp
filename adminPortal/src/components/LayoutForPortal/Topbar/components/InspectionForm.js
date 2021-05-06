import React, { useEffect } from 'react'
import { Form, Select, Row, Col, DatePicker } from 'antd';
import { DataGetAction } from 'redux/actions/http';
import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;
const InspectionForm = ({ form, formData }) => {




    const dispatch = useDispatch();
    const tasksProps = useSelector(state => state.tasks)
    const { siteByCustomer } = tasksProps
    const customerId = JSON.parse(localStorage.getItem('userInfo'))._id;
    const fetchCustomerSite = () => {
        dispatch(DataGetAction('getSiteByCustomer', { userId: customerId, "planeName": "onDemand" }, 'gettingSiteByCustomer'));
    }
    useEffect(fetchCustomerSite, [])

    function disabledDate(current) {
        var d = new Date();
        var yesterday = d.setDate(d.getDate() - 1);
        return current.valueOf() < yesterday;
    }

    const getSelectedBmpsAndPrice = (data) => {
        dispatch(DataGetAction('getSelectedSiteInspectionCharges', { siteId: data }, 'fetchingCharges'));
    }

    return (
        <Form form={form}
            name="requestInspection"
            layout="vertical"
            initialValues={formData}
        >
            <Row>
                <Col xl={24} md={24} sm={24} xs={24} >
                    <Form.Item
                        name="siteId"
                        label="Site"
                        rules={[
                            {
                                required: true,
                                message: "Please select the site!",
                            },
                        ]}
                    >

                        <Select onChange={(data) => getSelectedBmpsAndPrice(data)}>
                            {siteByCustomer && siteByCustomer.map(item => <Option value={item._id}>{item.projectName}</Option>)}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row className="gx-d-flex gx-flex-row">
                <Col xl={24} md={24} sm={24} xs={24} >
                    <Form.Item
                        label="Select Date:"
                        name="date"
                        rules={[{ required: true, message: 'Please select the date!' }]}

                    >
                        <DatePicker disabledDate={disabledDate} />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default InspectionForm
