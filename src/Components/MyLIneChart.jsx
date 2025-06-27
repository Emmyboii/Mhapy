import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const lineData = [
    { name: 'SUN', Quality: 180, Efficiency: 110 },
    { name: 'MON', Quality: 250, Efficiency: 110 },
    { name: 'TUE', Quality: 180, Efficiency: 210 },
    { name: 'WED', Quality: 300, Efficiency: 110 },
    { name: 'THU', Quality: 400, Efficiency: 210 },
    { name: 'FRI', Quality: 280, Efficiency: 150 },
    { name: 'SAT', Quality: 280, Efficiency: 150 },
];

const MyLineChart = () => (
    <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
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

            <Line type="monotone" dot={false} dataKey="Quality" stroke="#441890" strokeWidth={2} />
            <Line type="monotone" dot={false} dataKey="Efficiency" stroke="#C3B5DB" strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
);

export default MyLineChart