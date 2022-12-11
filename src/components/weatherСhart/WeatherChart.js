import React from 'react';
import {LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line} from "recharts";
function WeatherChart(props) {
    const data = [{name: 'ветер', uv: Math.floor(Math.random() * 400), pv: 2400, amt: 2400},
                    {name: 'шквал', uv: Math.floor(Math.random() * 400), pv: 2400, amt: 2400},
                    {name: 'метель', uv: Math.floor(Math.random() * 400), pv: 2400, amt: 2400},
                    {name: 'дождь', uv: Math.floor(Math.random() * 400), pv: 2400, amt: 2400},
                    {name: 'снег', uv: Math.floor(Math.random() * 400), pv: 2400, amt: 2400},
                    {name: 'град', uv: Math.floor(Math.random() * 400), pv: 2400, amt: 2400},
                    {name: 'туман', uv: Math.floor(Math.random() * 400), pv: 2400, amt: 2400},
                    {name: 'гололёд', uv: Math.floor(Math.random() * 400), pv: 2400, amt: 2400},];

    return (
        <LineChart width={1140} height={550} data={data} margin={{ top: 80, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
}

export default WeatherChart;