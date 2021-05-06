//generalAnalytics index
import React, { useEffect } from 'react'

import ChartCard from 'components/ChartCard'
import RevenueOverview from './components/RevenueOverview'
import { Col, message, Row,Spin } from 'antd'

import WeeklyAanalysis from 'components/AreaChart'

import RecentActivities from 'components/ActivitiesList'
import { DataGetAction } from 'redux/actions/http'
import { useDispatch, useSelector } from 'react-redux'
import IntlMessages from "util/IntlMessages"
const Index = () => {

    const dispatch = useDispatch();
    const adminProps = useSelector(state => state.adminDashboard)
    const { dashboardData,weeklyAnalysis,textMessage,error } = adminProps
    
    const fetchAdminDashboard = () => {
        dispatch(DataGetAction('getAdminDashboard', '', 'gettingAdminDashboard'));
        dispatch(DataGetAction('getWeeklyOverview', '', 'gettingMonthlyOverview'));
        
        
    }
    useEffect(fetchAdminDashboard, [])


    const Data = [
        { name: 'Page A', price: 200 },
        { name: 'Page B', price: 1200 },
        { name: 'Page C', price: 600 },
        { name: 'Page D', price: 1600 },
        { name: 'Page D', price: 1000 },
        { name: 'Page H', price: 2260 },
        { name: 'Page K', price: 800 },
    ];

    // const inspectionData = [
    //     { name: '', 'TNew Leads': 200, 'valid': 10, 'Invalid': 10, 'Revenue': 10 },
    //     { name: 'Monday', 'TNew Leads': 400, 'valid': 12, 'Invalid': 10, 'Revenue': 10 },
    //     { name: 'Tuesday', 'TNew Leads': 150, 'valid': 15, 'Invalid': 10, 'Revenue': 10 },
    //     { name: 'Wednesday', 'TNew Leads': 400, 'valid': 1, 'Invalid': 10, 'Revenue': 10 },
    //     { name: 'Thursday', 'TNew Leads': 1000, 'valid': 23, 'Invalid': 10, 'Revenue': 10 },
    //     { name: 'Friday', 'TNew Leads': 500, 'valid': 34, 'Invalid': 11, 'Revenue': 6 },
    //     { name: 'Saturday', 'TNew Leads': 400, 'valid': 7, 'Invalid': 10, 'Revenue': 10 },
    //     { name: 'Sunday', 'TNew Leads': 1200, 'valid': 34, 'Invalid': 10, 'Revenue': 10 },
    //     { name: '', 'TNew Leads': 70, 'valid': 90, 'Invalid': 10, 'Revenue': 10 },
    // ];

    const recentActivities = [
        {
            id: 1,
            name: 'Mila Alba',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quae?',
            url: "https://picsum.photos/50",
        },
        {
            id: 2,
            name: 'Bob Builder',
            desc: 'Lorem ipsum dolor sit amet.',
            url: "https://picsum.photos/50",
        },
        {
            id: 3,
            name: 'Tom Moody',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: "https://picsum.photos/50",
        },
        {
            id: 4,
            name: 'Norman Dolphi',
            desc: 'Norman Dolphi is looking for a house in New Jersy, USA',
            url: 'https://picsum.photos/50',
        },
        {
            id: 5,
            name: 'Bob Builder',
            desc: 'Lorem ipsum dolor sit amet.',
            url: "https://picsum.photos/50",
        },
        {
            id: 6,
            name: 'Tom Moody',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: "https://picsum.photos/50",
        },
        {
            id: 7,
            name: 'Norman Dolphi',
            desc: 'Norman Dolphi is looking for a house in New Jersy, USA',
            url: 'https://picsum.photos/50',
        }
    ];

    if(error){
        message.error(textMessage)
    }


    return (
        <>

{false ?
                <Spin size="large" color="blue" />
                : 
    <>
            <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    
                    <ChartCard count={(dashboardData.length && dashboardData[0].totalClient) || 0} desc={<IntlMessages id="dashboard.totalClient" />} Data={Data} bgColor={'#FCEAF4'} borderColor={'#F8C8E3'} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <ChartCard count={(dashboardData.length &&dashboardData[0].totalLead) || 0} desc={<IntlMessages id="dashboard.totalLeads" />} Data={Data} bgColor={'#E3F7D7'} borderColor={'#B8E986'} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <ChartCard count={(dashboardData.length &&dashboardData[0].approvedLead) || 0} desc={<IntlMessages id="dashboard.approvedLeads" />} Data={Data} bgColor={'#F3ECF9'} borderColor={'#C39FDF'} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <ChartCard count={(dashboardData.length &&dashboardData[0].unApprovedLead) || 0} desc={<IntlMessages id="dashboard.unApprovedLeads" />} Data={Data} bgColor={'#e5eef5'} borderColor={'#6aafe6'} />
                </Col>
            </Row>

            <Row>
                <Col xl={17} lg={17} md={12} sm={24} xs={24}>
                    <Row>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <RevenueOverview noOfClients={12} noOfSites={5} dashboardData={dashboardData} />
                        </Col>
                    </Row>

                    
                    
                    <Row>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                           
                            <WeeklyAanalysis data={weeklyAnalysis} title={<IntlMessages id="dashboard.weeklyAnalysis" />} width={'100%'} height={180} axisX={'name'} axisY={'totalSale'}
                                    showNumber={4}
                                    showYAxis={true} startColor={'#ffffff'} endcolor={'#51BDA7'} strokeColor={'#A2E2D9'} />
                        </Col>
                    </Row>
                </Col>
                <Col xl={7} lg={7} md={12} sm={24} xs={24}>
                    <div className="recent-activity-container">
                        <RecentActivities recentActivity={recentActivities} showImage={false} title={<IntlMessages id="dashboard.notifications" />} />
                    </div>
                </Col>
            </Row>
        </>
}
       </>
    )
}

export default Index
