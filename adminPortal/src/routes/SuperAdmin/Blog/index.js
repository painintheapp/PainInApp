import React from "react";
import Widget from "components/Widget";
import PollsTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import Layout from 'components/LayoutForPortal'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditBlog from './components/EditBlog'
import TableAction from 'components/Table/Actions'
import AddNewBlog from './components/AddNewBlog'
import {  useDispatch } from 'react-redux'

const Blog = () => {

    const columns = [
        {
            title: <IntlMessages id="blog.id" />,
            render: (record) => <span>{record.id}</span>,
            key: "id",
        },
        {
            title: <IntlMessages id="blog.community" />,
            render: (record) => <span>{record.community}</span>,
            key: "community",
        },
        {
            title: <IntlMessages id="blog.title" />,
            render: (record) => <span>{record.title}</span>,
            key: "title",
        },
        {
            title: <IntlMessages id="blog.article" />,
            render: (record) => <span>{record.article}</span>,
            key: "article",
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
            ModalName: "EditBlog_Modal"
        })
        
    }

    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
            <DeleteConfirm
                type="deleteBlogs"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this specialist?"
                content=""
                Icon={<span className="gx-font-gilory-regular gx-link" style={{ fontSize: '14px', color: '#545454', verticalAlign: 'top' }}><IntlMessages id="blog.actions.remove" /></span>}
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
                        <IntlMessages id="blog.pageTitle" />
                    </h4>
                }
                extra={
                    <div className="gx-d-flex">

                        <div style={{ height: '100%', width: '220px' }} >
                            <SelectFilter
                                isShowingAll={true}
                                className="select-filter"
                                apiName="getBlog"
                                searchKey="status"
                                options={[
                                    { status: "active", label: "Active" },
                                    { status: "blocked", label: "Blocked" }
                                ]} placeholder="Search by status" ItemValue="status" label="label" />
                        </div>
                        <AddNewBlog />
                    </div>}
            >
                <PollsTable apiName="getBlogs" scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditBlog />
        </Layout>
    );
};

export default Blog;

