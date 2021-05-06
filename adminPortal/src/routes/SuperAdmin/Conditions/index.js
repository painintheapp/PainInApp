
import React from 'react'
import Layout from 'components/LayoutForPortal'
import Widget from "components/Widget";
import ConditionTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditModal from './components/EditCondition'
import TableAction from 'components/Table/Actions'
import AddNewCondition from './components/AddNewCondition'
import UploadCSV from 'components/uploadCSV'
import { useDispatch } from 'react-redux'
const Condition = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Condition ID',
            render: (record) => <span>{record.conditionId && record.conditionId}</span>,
            key: "categoryId",
        },
        {
            title: 'Name',
            render: (record) => <span>{record.conditionName}</span>,
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
            ModalName: "EditCondition_Modal"
        })

    }

    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
            <DeleteConfirm
                type="deleteCondition"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this Condition?"
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
                        Conditions
                    </h4>
                }
                extra={
                    <div className="gx-d-flex" style={{gap : '10px'}}>

                        <div style={{ height: '100%', width: '220px' }} >
                            <SelectFilter
                                isShowingAll={true}
                                className="select-filter"
                                apiName="getConditions"
                                searchKey="status"
                                options={[
                                    { status: "active", label: "Active" },
                                    { status: "blocked", label: "Blocked" }
                                ]} placeholder="Search by status" ItemValue="status" label="label" />
                        </div>
                        <UploadCSV type="getAllSkills" url="bulkImportSkills" table="Condition"/>
                        <AddNewCondition />
                    </div>}
            >
                <ConditionTable apiName="getConditions"  scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditModal/>
        </Layout>
    )
}
export default Condition