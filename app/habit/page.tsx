"use client";

import { Bar, Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(BarElement);
Chart.register(LineElement);

export default function Timeline() {
  const screenTime = {
    "2023-10-10": 4.5,
    "2023-10-11": 8.01,
    "2023-10-12": 2.18,
    "2023-10-13": 6.07,
    "2023-10-14": 1.28,
    "2023-10-15": 1.52,
    "2023-10-16": 3.43,
    "2023-10-17": 4.14,
    "2023-10-18": 6.32,
    "2023-10-19": 4.1,
    "2023-10-20": 7.16,
    "2023-10-21": 3.49,
    "2023-10-22": 4.34,
    "2023-10-23": 5.35,
    "2023-10-24": 8.12,
    "2023-10-25": 4.52,
    "2023-10-26": 7.27,
    "2023-10-27": 9.07,
    "2023-10-28": 3.08,
    "2023-10-29": 3.25,
    "2023-10-30": 4.56,
  };

  const bed_wakeUp_getUp_times = {
    "2023-10-28": {
      bt: 4,
      wUp: 11.5,
      gUp: 12,
    },
    "2023-10-29": {
      bt: -1,
      wUp: 11,
      gUp: 11.5,
    },
    "2023-10-30": {
      bt: 0,
      wUp: 8,
      gUp: 8.5,
    },
    "2023-10-31": {
      bt: 0,
      wUp: 7.5,
      gUp: 8.5,
    },
  };

  return (
    <>
      <Bar
        data={{
          labels: Object.keys(screenTime),
          datasets: [
            {
              label: "Screen time",
              data: Object.values(screenTime),
              borderWidth: 0,
              backgroundColor: "#800080",
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
      <div
        className="flex items-center justify-center p-10 text-purple-800080"
        style={{ color: "#800080" }}
      >
        Number hours spend on phone each day
      </div>

      <Line
        data={{
          labels: Object.keys(bed_wakeUp_getUp_times),
          datasets: [
            {
              label: "Bed Time",
              data: Object.values(bed_wakeUp_getUp_times).map((e) => e.bt),
              backgroundColor: "yellow",
            },
            {
              label: "WakeUp Time",
              data: Object.values(bed_wakeUp_getUp_times).map((e) => e.wUp),
              backgroundColor: "orange",
            },
            {
              label: "GetUp Time",
              data: Object.values(bed_wakeUp_getUp_times).map((e) => e.gUp),
              backgroundColor: "red",
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
      <div
        className="flex items-center justify-center p-10 text-purple-800080"
        style={{ color: "#800080" }}
      >
        Bed, WakeUp and GetUp times
      </div>
    </>
  );
}
