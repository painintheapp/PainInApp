//generalAnalytics/components/RevenueOverview

import React, { useEffect } from 'react'
import RevenuePieChart from "./RevenuePieChart"
import Widget from 'components/Widget'

import { DataGetAction } from 'redux/actions/http'
import { useDispatch, useSelector } from 'react-redux'
import IntlMessages from "util/IntlMessages"
const RevenueOverview = ({ dashboardData }) => {


    const dispatch = useDispatch();
    const adminProps = useSelector(state => state.adminDashboard)

    const { revenueOverview } = adminProps




    const fetchRevenueOverview = () => {
        dispatch(DataGetAction('getRevenueDashboard', '', 'gettingRevenueDashboard'));
    }
    useEffect(fetchRevenueOverview, [])

    const renderRevenueOverview = () => {

        return revenueOverview && revenueOverview.map(item => {
            return <div className="gx-d-flex  gx-mb-3">
                <span className="gx-font-gilory-medium gx-mr-2" style={{ borderBottom: '3px solid #C39FDF' }}>{item.channelName}</span>
                <span >{item.numberOfLead}</span>
            </div>
        })
    }

    return (

        <Widget styleName={'revenueOverview'}>

            <div className="gx-d-flex gx-justify-content-between">
                <div className="gx-d-flex gx-justify-content-between gx-align-items-center gx-p-5" style={{ width: '70%' }}>

                    <div className="gx-mr-3 gx-w-75">
                        <h4 className="gx-blue-font gx-font-sans-bold gx-mb-4"><IntlMessages id="dashboard.revenueOverview" /></h4>

                        {renderRevenueOverview()}


                        {/* <div className="gx-d-flex  gx-mb-3">
                            <span className="gx-font-gilory-medium gx-mr-2" style={{ borderBottom: '3px solid #3FD4A2' }}><IntlMessages id="dashboard.activeLeads" /></span>
                            <span >${revenueOverview && revenueOverview.canadaTotalSale}</span>
                        </div> */}
                    </div>
                    <RevenuePieChart revenueOverview={revenueOverview && revenueOverview} />
                </div>

                <div className="gx-d-flex gx-flex-column" style={{ borderLeft: '1px solid #ddd', width: '30%' }} >
                    <div style={{ borderBottom: '1px solid #ddd' }} className="gx-h-50 gx-d-flex gx-flex-column gx-justify-content-center  gx-align-items-center">
                        <div className="gx-d-flex gx-flex-column gx-align-items-center">
                            <h2 className="gx-mb-0 gx-blue-font gx-font-sans-bold">${(dashboardData.length  && dashboardData[0].totalRevenue) || 0 }</h2>
                            <span style={{ color: '#8293A6' }}><IntlMessages id="dashboard.totalRevenue" /></span>
                        </div>
                    </div>
                    <div className="gx-h-50 gx-d-flex gx-flex-row gx-justify-content-center  gx-align-items-center">
                        <div className="gx-d-flex gx-flex-column gx-mr-4 gx-align-items-center">
                            <h2 className="gx-mb-0 gx-blue-font gx-font-sans-bold">{(dashboardData.length  && dashboardData[0].totalChannel) || 0}</h2>
                            <span style={{ color: '#8293A6' }}><IntlMessages id="dashboard.channels" /></span>
                        </div>
                        <div className="gx-d-flex gx-flex-column gx-align-items-center">
                            <h2 className="gx-mb-0 gx-blue-font gx-font-sans-bold">{(dashboardData.length  && dashboardData[0].approvedLead) || 0}</h2>
                            <span style={{ color: '#8293A6' }}><IntlMessages id="dashboard.activeLeads" /></span>
                        </div>

                    </div>
                </div>
            </div>



        </Widget>
    )
}

export default RevenueOverview
