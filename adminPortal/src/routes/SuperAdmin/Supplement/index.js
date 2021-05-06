
import React from 'react'
import Layout from 'components/LayoutForPortal'
import Widget from "components/Widget";
import SupplementTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditModal from './components/EditSupplement'
import TableAction from 'components/Table/Actions'
import AddNewSupplement from './components/AddNewSupplement'
import UploadCSV from 'components/uploadCSV'
import { useDispatch } from 'react-redux'
const Supplement = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Supplement ID',
            render: (record) => <span>{record.supplementId && record.supplementId}</span>,
            key: "categoryId",
        },
        {
            title: 'Name',
            render: (record) => <span>{record.supplementName}</span>,
            key: "symptomName",
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
            ModalName: "EditSupplement_Modal"
        })

    }

    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
            <DeleteConfirm
                type="deleteSupplement"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this Supplement?"
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
                        Supplements
                    </h4>
                }
                extra={
                    <div className="gx-d-flex" style={{gap : '10px'}}>

                        <div style={{ height: '100%', width: '220px' }} >
                            <SelectFilter
                                isShowingAll={true}
                                className="select-filter"
                                apiName="getSupplements"
                                searchKey="status"
                                options={[
                                    { status: "active", label: "Active" },
                                    { status: "blocked", label: "Blocked" }
                                ]} placeholder="Search by status" ItemValue="status" label="label" />
                        </div>
                        <UploadCSV type="getAllSkills" url="bulkImportSkills" table="Supplement"/>
                        <AddNewSupplement />
                    </div>}
            >
                <SupplementTable apiName="getSupplements"  scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditModal/>
        </Layout>
    )
}
export default Supplement