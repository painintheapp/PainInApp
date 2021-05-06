import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Widget from 'components/Widget'


const Index = ({ data, title, desc, width, height, showYAxis, axisX, axisY, options, ItemValue, label, startColor, endcolor, strokeColor }) => {




    return (
        <Widget styleName="gx-card-full">
            <div className="ant-row-flex gx-px-4 gx-pt-4 gx-d-flex gx-justify-content-between">
                <div className="gx-d-flex gx-flex-column">
                    <h3 className="gx-font-sans-bold gx-blue-font  gx-mb-3">{title}</h3>
                    <p className="" style={{ color: '#545454' }}>{desc}</p>
                </div>
            </div>
            <ResponsiveContainer width={width} height={height}>
                <AreaChart data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <Tooltip

                        labelFormatter={function (value) {
                            
                            const dataForValue = data.filter(Item => Item.name === value);
                            return (<div>
                                <p>{dataForValue[0].name}</p>
                                <p style={{color : '#5eca80'}}>Active Leads: {dataForValue && dataForValue.length && dataForValue[0].activeLead}</p>
                                <p style={{color : '#5eca80'}}>New Leads: {dataForValue && dataForValue.length && dataForValue[0].newLead}</p>
                                <p style={{color : '#5eca80'}}>Rejected Leads: {dataForValue && dataForValue.length && dataForValue[0].rejectedLead}</p>
                            </div>);
                        }}
                    />
                    <XAxis dataKey={axisX} />
                    {showYAxis && <YAxis />}
                    <defs>
                        <linearGradient id="color15" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FDCCB8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ffffff" stopOpacity={0.8} />
                        </linearGradient>
                    </defs>
                    <Area dataKey={axisY} strokeWidth={2} stackId="2" stroke='#FDD5BF' fill="url(#color15)"
                        fillOpacity={1} />


                </AreaChart>
            </ResponsiveContainer>
        </Widget>
    )
}

export default Index
