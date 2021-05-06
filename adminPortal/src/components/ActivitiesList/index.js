import React, { useEffect } from "react";
import Widget from "components/Widget"
import { Timeline, Empty } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { DataGetAction } from 'redux/actions/http';
const Index = ({ recentActivity, showImage ,title}) => {

    const dispatch = useDispatch();
    const activityProps = useSelector(state => state.activities);
    const { activitiesList } = activityProps;
    const fetchRecentActivity = () => {
        dispatch(DataGetAction('getRecentActivity', '', 'gettingActivity'));
    }

    useEffect(fetchRecentActivity, []);

    const renderNoDate = () => {
        return <Empty style={{ marginTop: '30px' }} />
    }

    return (
        <Widget title={<h4 className="gx-blue-font gx-font-sans-bold gx-mb-0 gx-text-capitalize">{title}</h4>} >
            <div className="gx-timeline-info">
                {activitiesList && activitiesList.length > 0 ? <Timeline>
                    {showImage && activitiesList.map(item => {
                        return <Timeline.Item className="gx-d-flex" mode="alternate" dot={

                            <span className="ant-avatar gx-size-40 ant-avatar-circle ant-avatar-image">
                                <img src={item.url} alt="" />
                            </span>}>
                            {item.desc}
                        </Timeline.Item>
                    })}

                    {!showImage && activitiesList.map(item => {
                        return <Timeline.Item className="gx-d-flex" mode="alternate">
                            {item.desc}
                        </Timeline.Item>
                    })}
                </Timeline> : renderNoDate()}
            </div>


        </Widget>
    )
}

export default Index
