import React from "react";
import Widget from "components/Widget";
import SpecialistTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import SearchBox from 'components/Filters/SearchBox'
import Layout from 'components/LayoutForPortal'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditModal from './components/EditSpecialist'
import TableAction from 'components/Table/Actions'
import AddNewSpecialist from './components/AddNewSpecialist'
import { useDispatch } from 'react-redux'
import { DataRequestAction } from 'redux/actions/CommonHttp'
import { renderStatus } from 'utils/commonUseFunction'
const Index = () => {
    const styles = {
        btn: {

            display: 'inlineBlock',
            padding: '2px 10px',
            borderRadius: '14px',
            textTransform: 'capitalize'
        },
        blue: {
            color: '#0c7dd9',
            border: '1px solid #0c7dd9',
        },
    }

    const renderKnowledgeBase = (conditions) =>{
        return conditions && conditions.map(item=>{
            return <span className="gx-d-block">{item.conditionName}</span>
        })
    }

    const columns = [
        {
            title: <IntlMessages id="specialist.id" />,
            render: (record) => <span>{record.specialistId}</span>,
            key: "id",
        },
        {
            title: <IntlMessages id="specialist.fullName" />,
            render: (record) => <span>{record.fullName}</span>,
            key: "fullName",
            width : 100
        },
        {
            title: 'Speciality',
            render: (record) => <span>{record.specialityName}</span>,
            key: "fullName",
        },
        {
            title: 'knowledge Base',
            render: (record) => <span>{renderKnowledgeBase(record.conditionInfo) }</span>,
            key: "fullName",
        },
        {
            title: <IntlMessages id="specialist.PhoneNo" />,
            render: (record) => <span>{record.phoneNumber}</span>,
            key: "PhoneNo",
        },
        {
            title: <IntlMessages id="specialist.Email" />,
            render: (record) => <span>{record.email}</span>,
            key: "Email",
        },
        {
            title: <IntlMessages id="specialist.Location" />,
            render: (record) => <span>{record.location}</span>,
            key: "Location",
        },
        {
            title: <IntlMessages id="specialist.facebook" />,
            render: (record) => <a href={record.facebook} target="_blank" rel="noopener noreferrer" style={{ ...styles.blue, ...styles.btn }}>view</a>,
            key: "facebook",
        },
        {
            title: <IntlMessages id="specialist.twitter" />,
            render: (record) => <a href={record.twitter} target="_blank" rel="noopener noreferrer" style={{ ...styles.blue, ...styles.btn }}>view</a>,
            key: "twitter",
        },
        {
            title: <IntlMessages id="specialist.youtube" />,
            render: (record) => <a href={record.youtube} target="_blank" rel="noopener noreferrer" style={{ ...styles.blue, ...styles.btn }}>view</a>,
            key: "youtube",
        },
        {
            title: <IntlMessages id="specialist.linkedin" />,
            render: (record) => <a href={record.linkedin} target="_blank" rel="noopener noreferrer" style={{ ...styles.blue, ...styles.btn }}>view</a>,
            key: "linkedin",
        },
        {
            title: <IntlMessages id="specialist.status" />,
            render: (record) => <span>{renderStatus(record.status)}</span>,
            key: "Location",
        },
        {
            title: '',
            render: (record) => <TableAction> {renderActions(record)}</TableAction>,
            key: "action"
        },
    ];

    const dispatch = useDispatch()
    const editRecord = (record) => {
        dispatch({
            type: 'Show_Modal',
            payload: record,
            ModalName: "EditSpecialist_Modal"
        })

    }
    const updateUserStatus = (data, status) => {
        dispatch(DataRequestAction('PUT', 'updateSpecialist', 'EditRecord', { _id: data._id, status: status }, ''));
    }
    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            {record.status !== 'deleted' && <span className="action-link first gx-link" onClick={() => editRecord(record)} className="gx-link">Edit</span>}
            {record.status !== 'deleted' && <DeleteConfirm
                type="deleteSpecialist"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this specialist?"
                content=""
                Icon={<span style={{ fontSize: '14px' }}><IntlMessages id="specialist.actions.remove" /></span>}
            />}
            {record.status !== 'block' && record.status !== 'deleted' && <span className="action-link  gx-link" onClick={() => updateUserStatus(record, 'block')}>Block</span>}
            {record.status !== 'active' && <span className="action-link  gx-link" onClick={() => updateUserStatus(record, 'active')}>Active</span>}
        </div>
    }

    return (
        <Layout>
            <Widget
                styleName="mainTable"
                title={
                    <h4
                        className="gx-mb-0 gx-font-gilory-bold"
                        style={{ color: "#14244E" }}>
                        <IntlMessages id="specialist.pageTitle" />
                    </h4>
                }
                extra={
                    <div className="gx-d-flex" style={{ gap: '10px' }}>

                        <div style={{ height: '100%', width: '220px' }} >
                            <SelectFilter
                                isShowingAll={true}
                                apiName="getSpecialist"
                                searchKey="status"
                                options={[

                                    { status: "deleted", label: "Deleted" },
                                    { status: "active", label: "Active" },
                                    { status: "block", label: "Blocked" }
                                ]} placeholder="Search by status" ItemValue="status" label="label" />
                        </div>

                        <div style={{ height: '100%', width: '220px' }} >
                            <SearchBox
                                apiName="getSpecialist"
                                requestType='FetchRecord'
                                placeholder="Name/Email/Phone"
                            />
                        </div>

                        <AddNewSpecialist />
                    </div>}
            >
                <SpecialistTable apiName="getSpecialist" scroll={{x : 1400}} pagination={true} columns={columns} />
            </Widget>
            <EditModal />
        </Layout>
    );
};

export default Index;

