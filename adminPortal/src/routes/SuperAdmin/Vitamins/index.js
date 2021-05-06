
import React from 'react'
import Layout from 'components/LayoutForPortal'
import Widget from "components/Widget";
import VitaminTable from "components/Table/List";
import IntlMessages from 'util/IntlMessages'
import SelectFilter from 'components/Filters/SelectFilter'
import DeleteConfirm from 'components/Modal/DeleteConfirm';
import EditModal from './components/EditVitamin'
import TableAction from 'components/Table/Actions'
import AddNewVitamin from './components/AddNewVitamin'
import UploadCSV from 'components/uploadCSV'
import { useDispatch } from 'react-redux'
const Vitamin = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Vitamin ID',
            render: (record) => <span>{record.vitaminId && record.vitaminId}</span>,
            key: "categoryId",
        },
        {
            title: 'Name',
            render: (record) => <span>{record.vitaminName}</span>,
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
            ModalName: "EditVitamin_Modal"
        })

    }

    const renderActions = (record) => {
        return <div className="gx-d-flex gx-flex-column">
            <span onClick={() => editRecord(record)} className="gx-link">Edit</span>
            <DeleteConfirm
                type="deleteVitamin"
                method="DELETE"
                selectedItem={record}
                apiRequest="DeleteRecord"
                buttonName="Yes"
                oKText='Delete'
                title="Are you sure you want to delete this Vitamin?"
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
                        Vitamins
                    </h4>
                }
                extra={
                    <div className="gx-d-flex" style={{gap : '10px'}}>

                        <div style={{ height: '100%', width: '220px' }} >
                            <SelectFilter
                                isShowingAll={true}
                                className="select-filter"
                                apiName="getVitamins"
                                searchKey="status"
                                options={[
                                    { status: "active", label: "Active" },
                                    { status: "blocked", label: "Blocked" }
                                ]} placeholder="Search by status" ItemValue="status" label="label" />
                        </div>
                        <UploadCSV type="getAllSkills" url="bulkImportSkills" table="Vitamin"/>
                        <AddNewVitamin />
                    </div>}
            >
                <VitaminTable apiName="getVitamins"  scroll={true} pagination={true} columns={columns} />
            </Widget>
            <EditModal/>
        </Layout>
    )
}
export default Vitamin