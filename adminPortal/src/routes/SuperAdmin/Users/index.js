import React from "react";
import Widget from "components/Widget";
import SpecialistTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SearchBox from 'components/Filters/SearchBox'
import Layout from 'components/LayoutForPortal'
// import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditUser from './components/editUser'
// import TableAction from 'components/Table/Actions'
// import AddNewSpecialist from './components/AddNewSpecialist'
// import { useDispatch } from 'react-redux'

const Index = () => {

    const columns = [
        {
            title: <IntlMessages id="user.id" />,
            render: (record) => <span>{record.userId}</span>,
            key: "id",
        },
        {
            title: <IntlMessages id="user.fullName" />,
            render: (record) => <span>{record.fullName}</span>,
            key: "fullName",
        },
        {
            title: <IntlMessages id="user.email" />,
            render: (record) => <span>{record.email}</span>,
            key: "email",
        },

        // {
        //     title: '',
        //     render: (record) => <TableAction> {renderActions(record)}</TableAction>,
        //     key: "action"
        // },
    ];

    // const dispatch = useDispatch()
    // const editRecord = (record) => {
    //     dispatch({
    //         type: 'Show_Modal',
    //         payload: record,
    //         ModalName: "EditUser_Modal"
    //     })

    // }

    // const renderActions = (record) => {
    //     return <div className="gx-d-flex gx-flex-column">
    //         <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
    //         <DeleteConfirm
    //             type="deleteUsers"
    //             method="DELETE"
    //             selectedItem={record}
    //             apiRequest="DeleteRecord"
    //             buttonName="Yes"
    //             oKText='Delete'
    //             title="Are you sure you want to delete this User?"
    //             content=""
    //             Icon={<span className="gx-font-gilory-regular gx-link" style={{ fontSize: '14px', color: '#545454', verticalAlign: 'top' }}><IntlMessages id="users.actions.remove" /></span>}
    //         />

    //     </div>
    // }

    return (
        <Layout>
            <Widget
                styleName="mainTable"
                title={
                    <h4
                        className="gx-mb-0 gx-font-gilory-bold"
                        style={{ color: "#14244E" }}>
                        <IntlMessages id="user.pageTitle" />
                    </h4>
                }
                extra={
                    <div className="gx-d-flex">

                        <div style={{ height: '100%', width: '220px' }} >
                            <SearchBox
                                apiName="getUsers"
                                requestType='FetchRecord'
                                placeholder="Name/Email"
                            />
                        </div>
                        {/* <AddNewSpecialist /> */}
                    </div>}
            >
                <SpecialistTable apiName="getUsers" scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditUser />
        </Layout>
    );
};

export default Index;

