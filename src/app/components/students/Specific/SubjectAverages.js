"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Maths",
    Student: 78,
    Class: 68,
  },
  {
    name: "Phy",
    Student: 80,
    Class: 78,
    amt: 0,
  },
  {
    name: "Chem",
    Student: 80,
    Class: 83,
    amt: 0,
  },
  {
    name: "Comps",
    Student: 70,
    Class: 58,
    amt: 0,
  },
  {
    name: "Eng",
    Student: 80,
    Class: 90,
    amt: 0,
  },
  {
    name: "B/S",
    Student: 90,
    Class: 80,
    amt: 0,
  },
  {
    name: "ACC",
    Student: 84,
    Class: 72,
    amt: 0,
  },
];

export default class SubjectAverages extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Bar
            dataKey="Class"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="Student"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
