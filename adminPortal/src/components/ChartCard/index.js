//components/ChartCard 
import React from "react";
import Widget from "components/Widget";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
const ChartCard = ({ count, desc, Data,bgColor,borderColor }) => {



    return (
        <Widget styleName="gx-card-full">

            <div className="gx-actchart gx-px-3 gx-pt-3">
                <div className="ant-row-flex">
                    <h3 className="gx-mb-0  gx-blue-font gx-font-sans-bold ">
                        {count}
                    </h3>
                </div>
                <p className="gx-mb-0 gx-fs-sm gx-text-grey">{desc}</p>
            </div>
            <ResponsiveContainer width="100%" height={75}>
                <AreaChart data={Data}a
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="5%" stopColor={bgColor} stopOpacity={1} />
                            
                        </linearGradient>
                    </defs>
                    <Area dataKey='price' type='monotone' strokeWidth={2} stackId="2" stroke={borderColor}
                        fill={bgColor}
                        fillOpacity={1} />
                </AreaChart>
            </ResponsiveContainer>
        </Widget>
    );
};

export default ChartCard;
