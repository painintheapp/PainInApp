
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";



const RevenuePieChart = ({ onPieEnter,revenueOverview }) => {

    const data = [
        { name: 'Group A', "value": 50 }, 
        { name: 'Group B', "value": 20},
        
    ];

    const COLORS = ['#C39FDF', '#3FD4A2', '#0D7DD9', '#B8E886'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <ResponsiveContainer width="60%" height={200}>
        <PieChart onMouseEnter={onPieEnter}>
            <Pie dataKey="numberOfLead"
                data={revenueOverview}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#003366"
            >
                {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
        </PieChart>
    </ResponsiveContainer>
    );
}

export default RevenuePieChart