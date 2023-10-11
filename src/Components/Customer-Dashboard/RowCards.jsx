import { Card, Progress } from "antd";
import React from "react";


const RowCards = ({
  name,
  number,
  icon,
  color,
  display = "flex",
  percent,
  icon2,
  iconColor,
  display2="none"
}) => {
  return (
    <Card style={{
      margin:"10px 0"
    }}>
      <div className="row-card-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="row-card-text1">{name}</div>
            <div className="row-card-text2">{number}</div>
          </div>
          <div
            className="row-card-img"
            style={{
              backgroundColor: color,
            }}
          >
            {icon}
          </div>
        </div>
        <div
          style={{
            display: display,
            alignItems: "center",
          }}
        >
          <div className="row-card-icon" style={{ color: iconColor }}>
            {icon2}
            {percent}%
          </div>
          <div className="row-card-text3">Since last month</div>
        </div>
        <div
          style={{
            display:display2,
            alignItems: "center",
          }}
        >
           <Progress percent={75.5} showInfo={false} size="small" strokeColor="#4050b5" />
        </div>
      </div>
    </Card>
  );
};

export default RowCards;
