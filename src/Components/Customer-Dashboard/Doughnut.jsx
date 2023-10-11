import { Card } from "antd";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./style/index.css";

const DoughnutChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <Card>
      <div className="doughnut-heading">Traffic by Channels</div>
      <div className="doungth-graph-con">
        <div className="doungth-graph">
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="custom-doungth-legends">
       <div style={{
        display:"flex",
        alignItems:"flex-end"
       }}>
       <div className="custom-doungth-legend-box" style={{
        backgroundColor:"#4050B5"
       }}></div>
        <div className="custom-doungth-legend-text" style={{
        color:"#4050B5"
       }}>
          63%
          <div className="custom-doungth-legend-text2">
          Social Media
          </div>
        </div>
       </div>
       <div style={{
        display:"flex",
        alignItems:"flex-end"
       }}>
       <div className="custom-doungth-legend-box" style={{
        backgroundColor:"#FB8C00"
       }}></div>
        <div className="custom-doungth-legend-text" style={{
        color:"#FB8C00"
       }}>
          23%
          <div className="custom-doungth-legend-text2">
          Voice/SMS
          </div>
        </div>
       </div>
       <div style={{
        display:"flex",
        alignItems:"flex-end"
       }}>
       <div className="custom-doungth-legend-box" style={{
        backgroundColor:"#E53835"
       }}></div>
        <div className="custom-doungth-legend-text" style={{
        color:"#E53835"
       }}>
          15%
          <div className="custom-doungth-legend-text2">
          Live Chats
          </div>
        </div>
       </div>
      </div>
    </Card>
  );
};

export default DoughnutChart;
