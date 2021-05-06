import React from "react";
import Widget from "components/Widget";
import Educationtable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import Layout from 'components/LayoutForPortal'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditEducation from '../Education/components/EditEducation'
import TableAction from 'components/Table/Actions'
import AddNewEducation from '../Education/components/AddNewEducation'
import { useDispatch } from 'react-redux'

const Education = () => {
   
    const columns = [
        {
            title: <IntlMessages id="education.no" />,
            render: (record) => <span>{record.no}</span>,
            key: "no",
        },
        {
            title: <IntlMessages id="education.catagory" />,
            render: (record) => <span>{record.catagory}</span>,
            key: "catagory",
        },
        {
            title: <IntlMessages id="education.subcatagory" />,
            render: (record) => <span>{record.subcatagory}</span>,
            key: "subcatagory",
        },
        {
            title: <IntlMessages id="education.article" />,
            render: (record) => <span>{record.article}</span>,
            key: "article",
        },
        {
            title: <IntlMessages id="education.views" />,
            render: (record) => <span>{record.views}</span>,
            key: "views",
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
            ModalName: "EditEducation_Modal"
        })

    }

    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
            <DeleteConfirm
                type="deleteSpecialist"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this Education?"
                content=""
                Icon={<span className="gx-font-gilory-regular gx-link" style={{ fontSize: '14px', color: '#545454', verticalAlign: 'top' }}><IntlMessages id="education.actions.remove" /></span>}
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
                        <IntlMessages id="education.pageTitle" />
                    </h4>
                }
                extra={
                    <div className="gx-d-flex">

                        <div style={{ height: '100%', width: '220px' }} >
                            <SelectFilter
                                isShowingAll={true}
                                className="select-filter"
                                apiName="getChannel"
                                searchKey="status"
                                options={[
                                    { status: "active", label: "Active" },
                                    { status: "blocked", label: "Blocked" }
                                ]} placeholder="Search by status" ItemValue="status" label="label" />
                        </div>
                        <AddNewEducation />
                    </div>}
            >
                <Educationtable apiName="getSpecialist" scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditEducation />
        </Layout>
    );
};

export default Education;

