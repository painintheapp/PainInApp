
import React from 'react'
import Layout from 'components/LayoutForPortal'
import Widget from "components/Widget";
import CategoryTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditModal from './components/EditCategory'
import TableAction from 'components/Table/Actions'
import AddNewCategory from './components/AddNewCategory'
import { useDispatch } from 'react-redux'
const Category = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: <IntlMessages id="catagory.no" />,
            render: (record) => <span>{record.categoryId && record.categoryId}</span>,
            key: "categoryId",
        },
        {
            title: <IntlMessages id="catagory.id" />,
            render: (record) => <span>{record._id && record._id}</span>,
            key: "categoryId",
        },
        {
            title: <IntlMessages id="catagory.catagory" />,
            render: (record) => <span>{record.categoryName}</span>,
            key: "categoryName",
        },
        
        {
            title: '',
            render: (record) => <TableAction> {renderActions(record)}</TableAction>,
            key: "action"
        },
    ];

    const editRecord = (record) => {
        dispatch({
            type: 'Show_Modal',
            payload: record,
            ModalName: "EditCategory_Modal"
        })

    }

    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
            <DeleteConfirm
                type="deleteHealthCategory"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this Catagory?"
                content=""
                Icon={<span className="gx-font-gilory-regular gx-link" style={{ fontSize: '14px', color: '#545454', verticalAlign: 'top' }}><IntlMessages id="catagory.actions.remove" /></span>}
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
                        Health Care
                    </h4>
                }
                extra={
                    <div className="gx-d-flex" style={{gap : '10px'}}>

                        <div style={{ height: '100%', width: '220px' }} >
                            <SelectFilter
                                isShowingAll={true}
                                className="select-filter"
                                apiName="getHealthCategory"
                                searchKey="status"
                                options={[
                                    { status: "active", label: "Active" },
                                    { status: "blocked", label: "Blocked" }
                                ]} placeholder="Search by status" ItemValue="status" label="label" />
                        </div>
                        <AddNewCategory />
                    </div>}
            >
                <CategoryTable apiName="getHealthCategory"  scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditModal/>
        </Layout>
    )
}
export default Category