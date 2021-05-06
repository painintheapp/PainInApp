
import React from 'react'
import Layout from 'components/LayoutForPortal'
import Widget from "components/Widget";
import CommunityTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditModal from '../Community/components/EditComminuty'
import TableAction from 'components/Table/Actions'
import AddCommunity from './components/AddNewCommunity'
import { useDispatch } from 'react-redux'


const Community = () => {
    
    const columns = [
        {
            title: <IntlMessages id="community.id" />,
            render: (record) => <span>{record.id}</span>,
            key: "id",
        },
        {
            title: <IntlMessages id="community.fullName" />,
            render: (record) => <span>{record.communityName}</span>,
            key: "fullName",
        },
        {
            title: <IntlMessages id="community.users" />,
            render: (record) => <span>{record.users}</span>,
            key: "users",
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
            ModalName: "EditCommunity_Modal"
        })

    }

    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
            <DeleteConfirm
                type="deleteCommunity"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this Community?"
                content=""
                Icon={<span className="gx-font-gilory-regular gx-link" style={{ fontSize: '14px', color: '#545454', verticalAlign: 'top' }}><IntlMessages id="community.actions.remove" /></span>}
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
                        <IntlMessages id="community.pageTitle" />
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
                        <AddCommunity />
                    </div>}
            >
                <CommunityTable apiName="getCommunity" scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditModal/>
        </Layout>
    )
}
export default Community