import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const Rechart = () => {
    const students = [
        { id: 1, name: 'John', mathMarks: 85, physicsMarks: 75 },
        { id: 2, name: 'Emma', mathMarks: 78, physicsMarks: 80 },
        { id: 3, name: 'Michael', mathMarks: 92, physicsMarks: 88 },
        { id: 4, name: 'Sophia', mathMarks: 80, physicsMarks: 85 },
        { id: 5, name: 'William', mathMarks: 88, physicsMarks: 90 },
        { id: 6, name: 'Olivia', mathMarks: 75, physicsMarks: 70 },
        { id: 7, name: 'James', mathMarks: 90, physicsMarks: 92 },
        { id: 8, name: 'Ava', mathMarks: 82, physicsMarks: 78 },
        { id: 9, name: 'Alexander', mathMarks: 95, physicsMarks: 96 },
        { id: 10, name: 'Mia', mathMarks: 70, physicsMarks: 65 }
    ];

    return (
        <div className='container mx-auto px-5 md:py-10 lg:py-24 py-5'>
            <div>
                <div className="text-center py-5 mb-8">
                    <h2 className="text-4xl font-bold mb-5">Our Students Position</h2>
                    <p className="text-xl text-gray-600 md:w-8/12 mx-auto">Our students have consistently demonstrated exceptional academic performance, consistently securing top positions in their respective classes and examinations.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <LineChart className='flex items-center flex-col justify-center w-full' width={800} height={300} data={students}>
                        <Line type="bump" dataKey="mathMarks" stroke="#8884d8" />
                        <Line type="monotoneX" dataKey={'physicsMarks'} stroke='#8ac926' />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis/>
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Rechart;