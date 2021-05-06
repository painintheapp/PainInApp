
import React from 'react'
import Layout from 'components/LayoutForPortal'
import Widget from "components/Widget";
import ExerciseTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditModal from './components/EditOccupation'
import TableAction from 'components/Table/Actions'
import AddNewOccupation from './components/AddNewOccupation'
import UploadCSV from 'components/uploadCSV'
import { useDispatch } from 'react-redux'

const Index = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Exercise ID',
            render: (record) => <span>{record.occupationId && record.occupationId}</span>,
            key: "categoryNo",
        },
        {
            title: 'Category',
            render: (record) => <span>{record.categoryName && record.categoryName}</span>,
            key: "categoryName",
        },
        {
            title: 'Exercise',
            render: (record) => <span>{record.occupationName}</span>,
            key: "occupationName",
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
            ModalName: "EditOccupation_Modal"
        })

    }

    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
            <DeleteConfirm
                type="deleteOccupation"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this Exercise?"
                content=""
                Icon={<span className="gx-font-gilory-regular gx-link" style={{ fontSize: '14px', color: '#545454', verticalAlign: 'top' }}>Delete</span>}
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
                        Occupation
                    </h4>
                }
                extra={
                    <div className="gx-d-flex" style={{gap : '10px'}}>

                        <div style={{ height: '100%', width: '220px' }} >
                            <SelectFilter
                                isShowingAll={true}
                                className="select-filter"
                                apiName="getOccupations"
                                searchKey="status"
                                options={[
                                    { status: "active", label: "Active" },
                                    { status: "blocked", label: "Blocked" }
                                ]} placeholder="Search by status" ItemValue="status" label="label" />
                        </div>
                        <UploadCSV type="getAllSkills" url="bulkImportSkills" table="Occupation"/>
                        <AddNewOccupation />
                    </div>}
            >
                <ExerciseTable apiName="getOccupations"  scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditModal/>
        </Layout>
    )
}
export default Index