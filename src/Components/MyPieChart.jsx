import React from 'react';
import {
    PieChart, Pie, Cell, Legend,
    Label
} from 'recharts';

const data = [
    { name: 'Sad', value: 300 },
    { name: 'Depressed', value: 400 },
    { name: 'Happy', value: 300 },
];

const COLORS = ['#F99BAB', '#62B2FD', '#9BDFC4'];


const MyPieChart = () => {
    return (
        <div className="flex items-center justify-between gap-5">
            {/* Chart */}
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    labelLine={false}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

                    <Label
                        value="Total"
                        position="center"
                        fill="#252525"
                        style={{ fontSize: '16px', fontWeight: 'bold' }}
                    />
                </Pie>
                <text
                    x="50%"
                    y="45%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-[16px]"
                    fill="#222529"
                    fontWeight="medium"
                >
                    234
                </text>
                <text
                    x="50%"
                    y="57%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-[16px]"
                    fill="#25252580"
                    fontWeight="medium"
                >
                    Active Clients
                </text>
            </PieChart>


            <div className="flex flex-col gap-5">
                {data.map((entry, index) => {
                    const total = data.reduce((sum, item) => sum + item.value, 0);
                    const percent = ((entry.value / total) * 100).toFixed(1); // rounded to 1 decimal

                    return (
                        <div
                            key={`legend-${index}`}
                            className="flex items-center justify-between gap-3 text-[#252525]"
                        >
                            <div className='flex items-center gap-3'>
                                <div
                                    className="w-2 h-2 rounded-full font-medium"
                                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                ></div>
                                <span className='mq:text-[12px] sd:text-[18px] text-[12px] text-[#25252580]'>{entry.name}</span>
                            </div>
                            <span className='mq:text-[10px] sd:text-[18px] text-[12px] flex justify-end'>{percent}%</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MyPieChart;
