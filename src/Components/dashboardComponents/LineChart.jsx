import React from "react";
import ApexCharts from "react-apexcharts";

const LineChart = () => {
  const categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const demoRevenue = [120, 180, 140, 220, 260, 240, 280, 300, 270, 320, 340, 380];

  const options = {
    chart: {
      id: "basic-line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#85E211"],
    dataLabels: { enabled: false },
    markers: { size: 3, strokeWidth: 0 },
    yaxis: {
      show: true,
      min: 0,
      labels: {
        formatter: (val) => `$${Math.round(val)}`,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      borderColor: "#eee",
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val}`,
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          markers: { size: 2 },
          stroke: { width: 2 },
        },
      },
    ],
  };

  const series = [
    {
      name: "Revenue",
      data: demoRevenue,
    },
  ];

  return (
    <div className="h-[290px]">
      <ApexCharts options={options} series={series} type="line" height={299} />
    </div>
  );
};
export default LineChart;