import React, { PureComponent } from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
const gyms = [
    { name: 'FitZone', rating: 4.7, ranking: 5, worldPosition: 8 },
    { name: 'IronWorks Gym', rating: 4.5, ranking: 2, worldPosition: 5 },
    { name: 'Flex Fitness Center', rating: 4.4, ranking: 3, worldPosition: 3 },
    { name: 'Powerhouse Gym', rating: 4.3, ranking: 8, worldPosition: 4 },
    { name: 'Peak Performance', rating: 4.2, ranking: 4, worldPosition: 5 },
    { name: 'Elite Fitness Club', rating: 4.6, ranking: 2, worldPosition: 6},
    { name: 'Muscle Factory', rating: 4.4, ranking: 3, worldPosition: 2 },
    { name: 'GymNation', rating: 4.3, ranking: 1, worldPosition: 8 },
    { name: 'Body Sculpt', rating: 4.2, ranking: 9, worldPosition: 9 },
    { name: 'X Fitness', rating: 4.1, ranking: 10, worldPosition: 10 }
  ];
  
  
  
const ResponsiveChart = () => {
    return (
        <div className='container mx-auto px-5 md:py-10 lg:py-24 py-5'>
            <div className="text-center py-5 mb-8">
                <h2 className="text-4xl font-bold mb-5">Our Students Position</h2>
                <p className="text-xl text-gray-600 md:w-8/12 mx-auto">Our students have consistently demonstrated exceptional academic performance, consistently securing top positions in their respective classes and examinations.</p>
            </div>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={gyms}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="ranking" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="rating" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="worldPosition" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ResponsiveChart;