import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Card } from "antd";
import { SlSizeFullscreen } from "react-icons/sl";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { FaRegHandPaper } from "react-icons/fa";
import "./style/index.css";

const LineChart = ({ data ,name,legends}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#000000",
          callback: function (value, index, values) {
            console.log(values, value);
            if (value % 2 === 0) {
              return value;
            }
            return "";
          },
        },
      },
      x: {
        ticks: {
          color: "#000000", // Change the color of X-axis ticks to red
        },
      },
    },
  };
  return (
    <Card>
      <div className="customer-dashboard-graph-items">
        <div></div>
        <div></div>
        <div className="customer-dashboard-graph-items-heading">
          {name}
        </div>
        <div>
          <SlSizeFullscreen
            className="customer-dashboard-graph-items-icon"
            size={16}
            color="#5a5a5f"
          />
          <AiOutlinePlusCircle
            className="customer-dashboard-graph-items-icon"
            size={18}
            color="#5a5a5f"
          />
          <AiOutlineMinusCircle
            className="customer-dashboard-graph-items-icon"
            size={18}
            color="#5a5a5f"
          />
          <FaRegHandPaper
            className="customer-dashboard-graph-items-icon"
            size={18}
            color="#5a5a5f"
          />
        </div>
      </div>
      <Line data={data} options={options} height={100}/>
      <div id="custom-legend" className="legend-container">
        <div className="legend-container-con">
          <div
            className="legend-color"
            style={{
              backgroundColor: "#71589F",
            }}
          ></div>
          <div>{legends[0]}</div>
        </div>
        <div className="legend-container-con">
          <div
            className="legend-color"
            style={{
              backgroundColor: "#E0712F",
            }}
          ></div>
          <div>{legends[1]}</div>
        </div>
        <div className="legend-container-con">
          <div
            className="legend-color"
            style={{
              backgroundColor: "#9A8053",
            }}
          ></div>
          <div>{legends[2]}</div>
        </div>
      </div>
    </Card>
  );
};

export default LineChart;
