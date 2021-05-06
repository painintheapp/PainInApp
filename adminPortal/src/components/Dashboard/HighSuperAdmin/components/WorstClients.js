import React from 'react'
import  {StarFilled} from '@ant-design/icons'
import { Table } from 'antd'
const WorstClients = ({worstClient}) => {




    // const data = [
    //     {
    //         clientName : 'John Smith',
    //         noOfSites : 2,
    //         rating : 1.9,
    //     },
    //     {
    //         clientName : 'Oliver',
    //         noOfSites : 3,
    //         rating : 2.8,
    //     },
    //     {
    //         clientName : 'Tom Moody',
    //         noOfSites : 4,
    //         rating : 2.7,
    //     }
    // ]

    const columns = [
        {
            title: 'Client name',
            render: record => <span>{record.clientName}</span>,
            key: "clientName",

        },
        {
            title: 'No. of sites',
            render: record => <span>{record.totalSite}</span>,
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
            <h4 className="gx-font-sans-bold gx-blue-font gx-pl-2 gx-mb-0 gx-mt-4">Worst Clients</h4>
            <Table className="borderLessTable" dataSource={worstClient} columns={columns}  bordered={false} pagination={{
                    total: 3,
                    pageSize: 3,
                    hideOnSinglePage: true
                }} />
        </div>
    )
}

export default WorstClients
