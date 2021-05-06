import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGetAction } from 'redux/actions/http'
import Widget from 'components/Widget'
import { Tag } from 'antd'
import moment from 'moment'
const OnGoingInspections = () => {


    const dispatch = useDispatch();
    // const generalProps = useSelector(state => state.generalAnalytics)
    // const { tasksList } = generalProps

    const tasksProps = useSelector(state => state.tasks)
    const { tasksList } = tasksProps
    console.log('tasksList', tasksList)
    const fetchOngoingInspections = () => {
        dispatch(DataGetAction('getTasks', { status: 'assign' }, 'gettingTasks'));
    }
    useEffect(fetchOngoingInspections, [])


    const renderInspections = (data) => {
        console.log('===========data============',data)
        return data && data.map(item => {
            return (<div className="gx-d-flex gx-flex-row gx-align-items-center gx-mb-3">
                <div className="gx-w-50 gx-d-flex gx-align-items-center">
                    <img src="https://pbs.twimg.com/profile_images/1148021629865332736/K8KzxU5p_400x400.jpg" alt="inspection" width="40" height="40" style={{ borderRadius: '50%' }} className="gx-mr-3" />
                    <span className="gx-blue-font "> {item.description}</span>
                </div>
                <div className="gx-w-50">
                    <span className=" gx-w-50 gx-d-inline-block">  <Tag color="blue">{item.siteName}</Tag></span>
                    <span style={{ color: '#545454' }} className="gx-w-50 gx-d-inline-block">{moment(item.startBefore).format('DD MMM YYYY h:mm a')} </span>
                </div>
            </div>)
        })
    }

    return (
        <Widget title={<h2 className="gx-blue-font gx-font-sans-bold gx-mb-4" style={{ textTransform: 'Capitalize' }}>Ongoing Inspections</h2>} extra={""}>

                { renderInspections(tasksList)}

        </Widget>
    )
}

export default OnGoingInspections
