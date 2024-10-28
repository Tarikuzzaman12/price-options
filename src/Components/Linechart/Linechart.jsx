
import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const Linechart = () => {
    const studentMarksData = [
        { id: 1, student: "Alice", math: 78, physics: 84, chemistry: 76 },
        { id: 2, student: "Bob", math: 85, physics: 78, chemistry: 82 },
        { id: 3, student: "Charlie", math: 92, physics: 91, chemistry: 89 },
        { id: 4, student: "David", math: 88, physics: 85, chemistry: 87 },
        { id: 5, student: "Ella", math: 73, physics: 76, chemistry: 79 },
        { id: 6, student: "Frank", math: 80, physics: 79, chemistry: 75 },
        { id: 7, student: "Grace", math: 95, physics: 92, chemistry: 94 },
        { id: 8, student: "Henry", math: 68, physics: 72, chemistry: 70 },
        { id: 9, student: "Ivy", math: 82, physics: 83, chemistry: 81 },
        { id: 10, student: "Jack", math: 77, physics: 74, chemistry: 76 }
    ];
    
      
    return (
        <div>
            <LChart width={500} height={400} data={studentMarksData}>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={`physics`}></Line>

            </LChart>
        </div>
    );
};

export default Linechart;