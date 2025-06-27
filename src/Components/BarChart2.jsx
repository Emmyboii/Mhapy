import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const barData = [
    { name: 'SUN', Cannabis: 300, Alcohol: 180, Cigarettes: 160 },
    { name: 'MON', Cannabis: 220, Alcohol: 190, Cigarettes: 170 },
    { name: 'TUE', Cannabis: 340, Alcohol: 100, Cigarettes: 180 },
    { name: 'WED', Cannabis: 200, Alcohol: 210, Cigarettes: 190 },
    { name: 'THU', Cannabis: 280, Alcohol: 230, Cigarettes: 200 },
    { name: 'FRI', Cannabis: 380, Alcohol: 230, Cigarettes: 200 },
    { name: 'SAT', Cannabis: 180, Alcohol: 230, Cigarettes: 200 },
];

const BarChart2 = () => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData} barCategoryGap="20%">
            <CartesianGrid vertical={false} />
            <XAxis
                dataKey="name"
                tick={{ fill: '#25252580', fontSize: 14, fontWeight: 500 }}
            />
            <YAxis
                ticks={[0, 100, 200, 300, 400]}
                domain={[0, 400]}
                tick={{ fill: '#25252580' }}
            />
            <Tooltip />
            <Bar dataKey="Cannabis" barSize={6} radius={30} fill="#441890" />
            <Bar dataKey="Alcohol" barSize={6} radius={30} fill="#B6A2D9" />
            <Bar dataKey="Cigarettes" barSize={6} radius={30} fill="#7A58B5" />
        </BarChart>
    </ResponsiveContainer>
);

export default BarChart2
