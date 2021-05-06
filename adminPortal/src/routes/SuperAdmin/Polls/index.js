import React from "react";
import Widget from "components/Widget";
import PollsTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import Layout from 'components/LayoutForPortal'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditPolls from './components/EditPolls'
import TableAction from 'components/Table/Actions'
import AddNewPolls from './components/AddNewPolls'
import {  useDispatch } from 'react-redux'

const Polls = () => {

    const columns = [
        {
            title: <IntlMessages id="polls.id" />,
            render: (record) => <span>{record.id}</span>,
            key: "id",
        },
        {
            title: <IntlMessages id="polls.user" />,
            render: (record) => <span>{record.user}</span>,
            key: "user",
        },
        {
            title: <IntlMessages id="polls.community" />,
            render: (record) => <span>{record.community}</span>,
            key: "community",
        },
        {
            title: <IntlMessages id="polls.startDate" />,
            render: (record) => <span>{record.startDate}</span>,
            key: "startDate",
        },
        {
            title: <IntlMessages id="polls.endDate" />,
            render: (record) => <span>{record.endDate}</span>,
            key: "endDate",
        },
        {
            title: <IntlMessages id="polls.status" />,
            render: (record) => <span>{record.status}</span>,
            key: "status",
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
            ModalName: "EditPolls_Modal"
        })
        
    }

    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
            <DeleteConfirm
                type="deletePolls"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this Polls?"
                content=""
                Icon={<span className="gx-font-gilory-regular gx-link" style={{ fontSize: '14px', color: '#545454', verticalAlign: 'top' }}><IntlMessages id="polls.actions.remove" /></span>}
            />

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
                        <IntlMessages id="polls.pageTitle" />
                    </h4>
                }
                extra={
                    <div className="gx-d-flex">

                        <div style={{ height: '100%', width: '220px' }} >
                            <SelectFilter
                                isShowingAll={true}
                                className="select-filter"
                                apiName="getPolls"
                                searchKey="status"
                                options={[
                                    { status: "active", label: "Active" },
                                    { status: "blocked", label: "Blocked" }
                                ]} placeholder="Search by status" ItemValue="status" label="label" />
                        </div>
                        <AddNewPolls />
                    </div>}
            >
                <PollsTable apiName="getPolls" scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditPolls />
        </Layout>
    );
};

export default Polls;

