import "./chart.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//////////
const data = [
  {name:'فروردین' , Total:1200},
  {name:'اردیبهشت' , Total:2100},
  {name:'خرداد' , Total:100},
  {name:'تیر' , Total:1000},
  {name:'مرداد' , Total:1700},
  {name:'شهریور' , Total:800},
  {name:'مهر' , Total:600},
  {name:'ابان' , Total:1000},
  {name:'اذر' , Total:2000},
  {name:'دی' , Total:400},
  {name:'بهمن' , Total:1300},
  {name:'اسفند' , Total:1200},
];
/////////
const Chart = () => {
  
  return (
  <div className="chart">
    <div className="title">Last 12 month </div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
      <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Total"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Total" stroke="#82ca9d" />
    </LineChart>
</ResponsiveContainer>
  </div>
  )
};

export default Chart;
