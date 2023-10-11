import React, { useState } from "react";
import CardImage from "../../Components/Customer-Dashboard/CardImage";
import { Button, Card, Checkbox, Col, Row } from "antd";
import img1 from "@/Assets/2-img.png";
import img2 from "@/Assets/1-img.png";
import img3 from "@/Assets/3-img.png";
import img4 from "@/Assets/4-img.png";
import "./style/index.css";
import { AiOutlineMessage, AiOutlineTwitter } from "react-icons/ai";
import { FaVideo, FaFacebookF } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const DashboardBilling = () => {
  const Icons = [
    <AiOutlineMessage size={30} color="white" />,
    <AiOutlineTwitter size={30} color="white" />,
    <FaVideo size={26} color="white" />,
    <FaFacebookF size={26} color="white" />,
    <MdKeyboardVoice size={30} color="white" />,
    <IoLogoWhatsapp size={26} color="white" />,
  ];
  const [rows, setRows] = useState([
    {
      name: "Agent Name",
      channel: "Live Chat",
      date: "12-July- 2023 09:00pm",
      dollar: "$45",
      icon: Icons[0],
    },
    {
      name: "Agent Name",
      channel: "Video Call",
      date: "12-July- 2023 09:00pm",
      dollar: "$45",
      icon: Icons[2],
    },
    {
      name: "Agent Name",
      channel: "Voice call",
      date: "12-July- 2023 09:00pm",
      dollar: "$45",
      icon: Icons[4],
    },
    {
      name: "Agent Name",
      channel: "Whats app",
      date: "12-July- 2023 09:00pm",
      dollar: "$45",
      icon: Icons[5],
    },
    {
      name: "Agent Name",
      channel: "Facebook",
      date: "12-July- 2023 09:00pm",
      dollar: "$45",
      icon: Icons[3],
    },
    {
      name: "Agent Name",
      channel: "Twitter",
      date: "12-July- 2023 09:00pm",
      dollar: "$45",
      icon: Icons[1],
    },
  ]);
  const options = [
    {
      label: "Live Chat",
      value: "Live Chat",
    },
    {
      label: "Video Call",
      value: "Video Call",
    },
    {
      label: "Voice Call",
      value: "Voice Call",
    },
    {
      label: "Facebook",
      value: "Facebook",
    },
  ];
  const options2 = [
    {
      label: "Whats app",
      value: "Whats app",
    },
    {
      label: "Twitter",
      value: "Twitter",
    },
  ];
  return (
    <Row gutter={34}>
      <Col span={6}>
        <CardImage img={img1} number={75} title="Total Orders" isBadge={true} />
      </Col>
      <Col span={6}>
        <CardImage img={img2} number={357} title="Total Transactions" />
      </Col>
      <Col span={6}>
        <CardImage img={img3} number={65} title="Total Canceled" />
      </Col>
      <Col span={6}>
        <CardImage img={img4} number={"$128"} title="Total Revenue" />
      </Col>
      <Col
        span={18}
        style={{
          marginTop: "20px",
        }}
      >
        <Card className="billing-card-table">
          <div className="billing-card-table-row">
            <div className="billing-card-heading">
              Summary of Total Placed Orders
            </div>
            <div className="billing-card-filter-button">
              <div className="billing-card-filter-button-1">Today</div>
              <div className="billing-card-filter-button-line"></div>
              <div className="billing-card-filter-button-2">Yesterday</div>
            </div>
          </div>
          <div className="billing-card-table-header">
            <div className="billing-card-table-header-channel">Channel</div>
            <div className="billing-card-table-header-name">Name</div>
            <div className="billing-card-table-header-tarsaction">
              Transaction
            </div>
          </div>
          <div className="billing-card-table-colums">
            {rows?.map((item, index) => {
              return (
                <div key={index} className="billing-card-table-rows">
                  <div className="billing-card-table-row-channel">
                    <div className="billing-card-table-row-channel-img">
                      {item.icon}
                    </div>
                    <div>
                      <div className="billing-card-table-row-channel-text">
                        {item.channel}
                      </div>
                      <div className="billing-card-table-row-channel-date">
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <div className="billing-card-table-row-name">{item.name}</div>
                  <div className="billing-card-table-row-tarsaction">
                    {item.dollar}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </Col>
      <Col
        span={18}
        style={{
          marginTop: "20px",
        }}
      >
        <Card>
          <div className="billing-agent-order-top">
            <div>
              <div className="billing-agent-order-heading">
                Place Your Order
              </div>
              <div className="billing-agent-order-text">
                Select your Agent you want to talk with
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <div className="billing-agent-order-text">
                  Total Transaction
                </div>
                <div className="billing-agent-order-text2">For Mothly</div>
              </div>
              <div className="billing-agent-order-text3">$45</div>
            </div>
          </div>
          <input
            type="text"
            className="billing-agent-order-input"
            placeholder="search"
          />
          <div className="checkBox-billing">
            <Checkbox.Group options={options} />
            <br />
            <div className="checkBox-billing2">
              <Checkbox.Group options={options2} />
            </div>
          </div>
          <div className="billing-agent-order-top">
          <div className="billing-agent-order-button">
            <div className="billing-agent-order-button1">Monthly</div>
            <div className="billing-agent-order-button2">Per Service</div>
          </div>
          <Button
              type="primary"
              htmlType="submit"
              style={{
                outline: "none",
                background: "#0B2360",
                padding: "5px 30px",
                fontFamily: "Poppins",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:"20px"
              }}
            >
              Place your Order
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardBilling;
