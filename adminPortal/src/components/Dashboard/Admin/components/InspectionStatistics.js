// import React from 'react'
// import Widget from 'components/Widget'
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// const InspectionStatistics = ({inspectionStatistics}) => {

// console.log('============inspectionStatistics============',inspectionStatistics)

//     const data = [
//         { name: 'onDemand', value: 2300 },
//         { name: 'autoPilot', value: 1200 },
//         { name: 'scheduled', value: 800 }, 
//     ];

//     const COLORS = ['#0D7DD9', '#3FD4A2', '#B8E886'];
//     return (
//         <Widget title={
//             <h4 className="gx-blue-font gx-font-sans-bold gx-mb-0 gx-text-capitalize">Inspection Statistics</h4>
//         } >
//             <div className="gx-py-3">
//                 <ResponsiveContainer width="100%" height={150}>
//                     <PieChart>
//                         <Tooltip />
//                         <text
//                             x="50%" className="h6"
//                             y="50%" textAnchor="middle" dominantBaseline="middle">
//                             Inspections

//                         </text>
//                         <Pie
//                             data={data} dataKey="value"
//                             cx="50%"
//                             cy="50%"
//                             innerRadius={47}
//                             outerRadius={57}
//                             fill="#8884d8"
//                         >
//                             {
//                                 data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
//                             }
//                         </Pie>
//                     </PieChart>
//                 </ResponsiveContainer>
//             </div>
//         </Widget>
//     )
// }

// export default InspectionStatistics


import React,{useState} from 'react'
import Widget from 'components/Widget'
import {  Pie, PieChart, ResponsiveContainer,Sector } from "recharts";


const InspectionStatistics = ({ inspectionStatistics }) => {
    console.log('inspectionStatistics',inspectionStatistics)
    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
            cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            fill, payload, value
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
    
        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
                
            </g>
        );
    };
    const initialState = {
        activeIndex: 0
    }
    const [state, setState] = useState(initialState)

    const onMouseEnter = (data,index) => {

        console.log('============onMouseEnter==========',index)
        setState({
            activeIndex: index,
        });
    }
    const data = [
        { name: 'onDemand', value: 2300 },
        { name: 'autoPilot', value: 1200 },
        { name: 'scheduled', value: 800 },
    ];

    // const COLORS = ['#0D7DD9', '#3FD4A2', '#B8E886'];
    return (
        <Widget title={
            <h4 className="gx-blue-font gx-font-sans-bold gx-mb-0 gx-text-capitalize">Inspection Statistics</h4>
        } >
            <div className="gx-py-3">
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie dataKey="value"
                            activeIndex={state.activeIndex}
                            activeShape={renderActiveShape}
                            onMouseEnter={onMouseEnter}
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#003366" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Widget>
    )
}

export default InspectionStatistics