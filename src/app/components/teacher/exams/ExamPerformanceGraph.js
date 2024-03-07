"use client";
import React, { useState, useEffect } from "react";
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

const calculateTotalAverage = (data) => {
  // Calculate total average
  const totalMarks = data.reduce(
    (acc, curr) => acc + curr.class + curr.exam,
    0
  );
  const totalStudents = data.length;
  return totalMarks / totalStudents;
};

const data = [
  { name: "English", class: 40, exam: 60, averageMark: 50 },
  { name: "Mathematics", class: 65, exam: 78, averageMark: 71.5 },
  { name: "Science", class: 72, exam: 85, averageMark: 78.5 },
  { name: "History", class: 58, exam: 62, averageMark: 60 },
  { name: "Geography", class: 45, exam: 55, averageMark: 50 },
  { name: "Art", class: 80, exam: 90, averageMark: 85 },
  { name: "Music", class: 75, exam: 82, averageMark: 78.5 },
  { name: "Physical Education", class: 90, exam: 95, averageMark: 92.5 },
  { name: "Chemistry", class: 50, exam: 65, averageMark: 57.5 },
  { name: "Biology", class: 62, exam: 70, averageMark: 66 },
];

const totalAverage = calculateTotalAverage(data);

export default function ExamPerformanceGraph() {
  const [calculateMean, setcalculateMean] = useState(null);
  const [calculateRange, setcalculateRange] = useState(null);
  const [calculateMedian, setcalculateMedian] = useState(null);
  const [calculateStandardDeviation, setcalculateStandardDeviation] =
    useState(null);

  const calculatingMean = (data) => {
    // Check if data is empty
    if (data.length === 0) {
      return null; // Or any placeholder value to indicate empty data
    }

    const sum = data.reduce((acc, value) => acc + value, 0);
    setcalculateMean(sum / data.length);
  };

  const calculatingMedian = (data) => {
    // Check if data is empty
    if (data.length === 0) {
      setcalculateMedian(null); // Or any placeholder value to indicate empty data
    }

    // Sort the data in ascending order
    const sortedData = [...data].sort((a, b) => a - b);

    // Get the middle element or the average of the middle two elements
    const midIndex = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      setcalculateMedian(sortedData[midIndex - 1] + sortedData[midIndex]) / 2;
    } else {
      setcalculateMedian(sortedData[midIndex]);
    }
  };

  const calculatingRange = (data) => {
    // Check if data is empty
    if (data.length === 0) {
      setcalculateRange(null); // Or any placeholder value to indicate empty data
    }

    // Find the minimum and maximum values
    const min = Math.min(...data);
    const max = Math.max(...data);

    setcalculateRange(max - min);
  };

  const calculatingStandardDeviation = (data) => {
    // Check if data is empty
    if (data.length === 0) {
      setcalculateStandardDeviation(null); // Or any placeholder value to indicate empty data
    }

    const mean = calculateMean(data);
    const squaredDifferences = data.map((value) => Math.pow(value - mean, 2));
    const variance =
      squaredDifferences.reduce((acc, value) => acc + value, 0) / data.length;
    setcalculateStandardDeviation(Math.sqrt(variance));
  };

  useEffect(() => {}, []);

  return (
    <ResponsiveContainer width="100%" height="100%" className={"text-color"}>
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
        <XAxis dataKey="name" className="text-color" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="class" stroke="#82ca9d" />
        <Line type="monotone" dataKey="exam" stroke="#8884d8" />
        {/* Add line for total average */}
        <Line
          type="monotone"
          dataKey="averageMark"
          stroke="#FF9900"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
