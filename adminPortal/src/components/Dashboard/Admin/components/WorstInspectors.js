import React from 'react'
import  {StarFilled} from '@ant-design/icons'
import { Table } from 'antd'
const WorstInspectors = ({worstInspector}) => {




    // const data = [
    //     {
    //         clientName : 'Lucy Francis',
    //         noOfSites : 2,
    //         rating : 4.9,
    //     },
    //     {
    //         clientName : 'Dean Holmes',
    //         noOfSites : 3,
    //         rating : 4.8,
    //     },
    //     {
    //         clientName : 'Terry Bridges',
    //         noOfSites : 4,
    //         rating : 4.8,
    //     }
    // ]

    const columns = [
        {
            title: 'Client name',
            render: record => <span>{record.firstName}</span>,
            key: "clientName",

        },
        {
            title: 'No. of inspections',
            render: record => <span>{record.totalInspection}</span>,
            key: "noOfSites"
        },
        {
            title: '',
            render: record => <span style={{color : '#3FD4A2'}}><StarFilled  />{record.avgRating} </span>,
            key: "rating"
        },

    ];
    return (
        <div>
            
            <h4 className="gx-font-sans-bold gx-blue-font gx-pl-2 gx-mb-0 gx-mt-4">Worst Inspectors</h4>
            <Table className="borderLessTable" dataSource={worstInspector} columns={columns}  bordered={false} pagination={{
                    total: 3,
                    pageSize: 3,
                    hideOnSinglePage: true
                }} />
        </div>
    )
}

export default WorstInspectors
