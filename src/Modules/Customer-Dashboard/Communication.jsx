import { AutoComplete, Card, Col, Input, Row } from "antd";
import React, { useState } from "react";
import DashboardCard from "../../Components/Customer-Dashboard/Card";
import { BiSearch } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import "./style/index.css";
import UserB from "../../Assets/UserB.png";
import UProfile from "../../Assets/profile.png";
import UProfile2 from "../../Assets/Profile2.png";
import facebook from "../../Assets/Facebook.png";
import Whatsapp from "../../Assets/Whatsapp.png";
import Twitter from "../../Assets/Twitter.png";
import DashboardTable from "../../Components/Customer-Dashboard/Table";

const Communication = () => {
  const [lists, setList] = useState([
    {
      value: "Agent Name",
    },
    {
      value: "Agent Name",
    },
    {
      value: "Agent Name",
    },
  ]);
  const [columns, setColumns] = useState([
    "Channel",
    "Incoming Conv.",
    "Engaged Conv.",
    "Avg Wait Time",
    "Avg Speed to Ans",
    "Avg Handle Time",
    "Avg Transfer Rate",
    "Avg CSAT",
  ]);
  const [rows, setRows] = useState([
    ["Live Chat", "83", "83", "83", "83", "83", "83", "83"],
    ["Video Call", "83", "83", "83", "83", "83", "83", "83"],
    ["Facebook", "83", "83", "83", "83", "83", "83", "83"],
    ["Whatsapp", "83", "83", "83", "83", "83", "83", "83"],
    ["Twitter", "83", "83", "83", "83", "83", "83", "83"],
  ]);
  return (
    <>
      <Row gutter={34}>
        <Col span={6}>
          <DashboardCard name="Incoming Sessions" number={235600} />
        </Col>
        <Col span={6}>
          <DashboardCard name="Total Conversation" number={16738} />
        </Col>
        <Col span={6}>
          <DashboardCard name="Average waiting time" number={286320} />
        </Col>
        <Col span={6}>
          <DashboardCard name="Total Transactions" number={92861} />
        </Col>
      </Row>
      <Row
        gutter={34}
        className="comunication-main"
        style={{
          marginTop: "20px",
        }}
      >
        <Col span={6}>
          <Card>
            <AutoComplete
              className="communication-auto-complete"
              style={{
                width: "100%",
              }}
              placeholder="Search"
              suffixIcon={<BiSearch size={20} color="#5A5A5F" />}
            />
            <div className="communication-search">
              {lists.map(({ value, index }) => {
                return (
                  <div key={index} className="communication-box">
                    <div className="customer-dashboard-profile">
                      <div
                        style={{
                          position: "relative",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <img src={UserB} alt="" />
                        <img
                          src={UProfile}
                          alt=""
                          style={{
                            position: "absolute",
                            top: "4px",
                            left: "7px",
                          }}
                        />
                      </div>
                      <div className="customer-dashboard-profile-name">
                        {value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <div className="communication-header">
              <div className="communication-profile">
                <div className="communication-profile-background">
                  <img src={UProfile2} alt="" />
                </div>
                <div className="communication-profile-text">Agent Name</div>
              </div>
              <div className="communication-icons">
                <IoCallSharp
                  size={24}
                  color="white"
                  style={{
                    marginRight: "10px",
                  }}
                />
                <FaVideo size={24} color="white" />
              </div>
            </div>
            <div className="comunication-chat"></div>
            <div className="comunication-chat-inputs">
              <Input
                className="comunication-chat-input"
                placeholder="Start Conversation....................."
                suffix={
                  <BsSendFill
                    size={30}
                    style={{
                      padding: "7px 6px",
                      borderRadius: "6px",
                      width: "50px",
                      height: "37px",
                      backgroundColor: "#0B2360",
                      color: "white",
                    }}
                  />
                }
              />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="communication-social-cards">
            <div className="social-media-communication-text">
              Select Channels
            </div>
            <div
              className="social-box-communication"
              style={{
                backgroundColor: "#3A589B",
              }}
            >
              <img src={facebook} alt="" />
              <div className="communication-image-text">Facebook</div>
            </div>
            <div
              className="social-box-communication"
              style={{
                backgroundColor: "#48C857",
              }}
            >
              <img src={Whatsapp} alt="" />
              <div className="communication-image-text">Whatsapp</div>
            </div>
            <div
              className="social-box-communication"
              style={{
                backgroundColor: "#1D9BF0",
              }}
            >
              <img src={Twitter} alt="" />
              <div className="communication-image-text">Twitter</div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row
        className="communication-row"
        gutter={2}
        style={{
          marginTop: "20px",
        }}
      >
        <Col span={24}>
          <Card>
            <div className="social-media-communication-text">
              Conversation Summary Deatils
            </div>
            <DashboardTable column={columns} row={rows} width={"12%"} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Communication;
