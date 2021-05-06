import React from 'react'
import { Table } from 'antd';


const index = ({columns, data, scroll,pagination}) => {
    return <Table className="BasicTable gx-table-responsive " columns={columns} dataSource={data} scroll={scroll} pagination={pagination}  />
}

export default index
