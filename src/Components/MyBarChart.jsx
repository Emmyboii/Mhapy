import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', ProspectiveClients: 100, ActiveClients: 150, TotalClients: 150 },
  { name: 'Feb', ProspectiveClients: 80, ActiveClients: 120, TotalClients: 100 },
  { name: 'Mar', ProspectiveClients: 140, ActiveClients: 160, TotalClients: 200 },
  { name: 'Apr', ProspectiveClients: 60, ActiveClients: 90, TotalClients: 50 },
  { name: 'May', ProspectiveClients: 200, ActiveClients: 150, TotalClients: 150 },
  { name: 'Jun', ProspectiveClients: 110, ActiveClients: 130, TotalClients: 160 },
  { name: 'Jul', ProspectiveClients: 90, ActiveClients: 100, TotalClients: 120 },
  { name: 'Aug', ProspectiveClients: 160, ActiveClients: 140, TotalClients: 180 },
  { name: 'Sep', ProspectiveClients: 130, ActiveClients: 120, TotalClients: 110 },
  { name: 'Oct', ProspectiveClients: 120, ActiveClients: 180, TotalClients: 140 },
  { name: 'Nov', ProspectiveClients: 100, ActiveClients: 160, TotalClients: 170 },
  { name: 'Dec', ProspectiveClients: 150, ActiveClients: 150, TotalClients: 200 },
];


const MyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart
        data={data}
        margin={{ top: 20, bottom: 5 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fill: '#25252580', fontSize: 14, fontWeight: 500 }}
        />
        <YAxis
          ticks={[0, 100, 200, 300, 400, 500]}
          domain={[0, 'dataMax']}
          tick={{ fill: '#25252580' }}
        />
        <Tooltip />

        {/* Stacked Bars with different colors */}
        <Bar dataKey="TotalClients" stackId="a" barSize={35} fill="#441890" radius={[0,0,10,10]} />
        <Bar dataKey="ActiveClients" stackId="a" barSize={35} fill="#8467B6" radius={0} />
        <Bar dataKey="ProspectiveClients" stackId="a" barSize={35} fill="#C3B5DB" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
