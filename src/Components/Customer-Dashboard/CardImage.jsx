import React from "react";
import "./style/index.css";
import { Card } from "antd";


const CardImage = ({img,number,title,isBadge=false}) => {
  return (
    <Card className="card-image-box-main" >
      <div className="card-image-box">
      <div className="card-image-box-img">
        <img src={img} alt="" />
      </div>
      <div className="card-image-texts">
        <div className="card-image-text1">
        {number}
        </div>
        <div className="card-image-text2">
        {title}
        </div>
        {isBadge?<><div className="card-image-badge">
        {"(30 days)"}
        </div></>:<></>}
      </div>
      </div>
    </Card>
  );
};

export default CardImage;
