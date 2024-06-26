import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 800, pv: 24, amt: 200 }
];

const TooltipChart = () => {
    return (
        <div className='container mx-auto px-5 md:py-10 lg:py-24 py-5'>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default TooltipChart;