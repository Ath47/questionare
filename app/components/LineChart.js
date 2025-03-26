import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Label,
} from "recharts";

const percentileData = [
  { percentile: 3, students: 12 },
  { percentile: 14, students: 18 },
  { percentile: 26, students: 25 },
  { percentile: 37, students: 21 },
  { percentile: 50, students: 15 },
  { percentile: 64, students: 10 },
  { percentile: 78, students: 7 },
  { percentile: 89, students: 4 },
  { percentile: 95, students: 2 },
  { percentile: 100, students: 1 },
];

const updateDataWithUserPercentile = (data, myPercentile) => {
  if (myPercentile === undefined || myPercentile < 0 || myPercentile > 100)
    return data;

  const existingIndex = data.findIndex(
    (point) => point.percentile === myPercentile
  );

  if (existingIndex !== -1) {
    const updatedData = [...data];
    updatedData[existingIndex] = {
      ...updatedData[existingIndex],
      students: updatedData[existingIndex].students + 1,
    };
    return updatedData;
  } else {
    return [...data, { percentile: myPercentile, students: 1 }].sort(
      (a, b) => a.percentile - b.percentile
    );
  }
};

function CustomLineChart({ myPercentile }) {
  const updatedData = updateDataWithUserPercentile(
    percentileData,
    myPercentile
  );
  const userPoint = updatedData.find((d) => d.percentile === myPercentile);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={updatedData}>
        <XAxis
          dataKey="percentile"
          domain={[0, 100]}
          scale="linear"
          tickFormatter={(tick) => `${tick}%`}
        />
        <YAxis hide />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="students"
          stroke="#8884d8"
          strokeWidth={2}
          dot={(dotProps) => (
            <circle
              key={dotProps.payload.percentile}
              cx={dotProps.cx}
              cy={dotProps.cy}
              r={dotProps.payload.percentile === myPercentile ? 6 : 4}
              fill={
                dotProps.payload.percentile === myPercentile ? "red" : "#8884d8"
              }
            />
          )}
        />

        {userPoint && (
          <ReferenceDot x={userPoint.percentile} y={userPoint.students} r={0}>
            <Label
              value="Your Percentile"
              position="top"
              fill="red"
              fontSize={14}
            />
          </ReferenceDot>
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomLineChart;
