"use client";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Week 1",
    classAvg: 70,
    studentAvg: 40,
    amt: 100,
  },
  {
    name: "Week 2",
    classAvg: 75,
    studentAvg: 76,
    amt: 100,
  },
  {
    name: "Week 3",
    classAvg: 72,
    studentAvg: 98,
    amt: 100,
  },
  {
    name: "Week 4",
    classAvg: 78,
    studentAvg: 82,
    amt: 100,
  },
];

export default class Progress extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="studentAvg"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="classAvg" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
