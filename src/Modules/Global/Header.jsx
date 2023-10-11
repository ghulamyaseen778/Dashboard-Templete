import React from "react";
import "./style/header.css";
import logo from "../../Assets/logo.svg";
import UserB from "../../Assets/UserB.png";
import UProfile from "../../Assets/profile.png";
import { Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

const DashBoardHeader = () => {
  return (
    <div id="customer-dashboard-header">
        <img className="customer-dashboard-logo" src={logo} alt="" />
      
        <Input
        className="customer-dsahboard-input"
          placeholder="Search"
          suffix={
            <CloseOutlined
              style={{
                color: "#5A5A5F",
              }}
            />
          }
          prefix={
            <SearchOutlined
              style={{
                color: "#5A5A5F",
              }}
            />
          }
        />

        <div className="customer-dashboard-profile">
          <div style={{
            position:"relative",
            alignItems:"center",
            display:"flex"
          }}>
          <img src={UserB} alt="" />
          <img src={UProfile} alt="" style={{position:"absolute",top:"4px",left:"7px"}} />
          </div>
          <div  className="customer-dashboard-profile-name">Customer Name</div>
        </div>
      </div>
  );
};

export default DashBoardHeader;
