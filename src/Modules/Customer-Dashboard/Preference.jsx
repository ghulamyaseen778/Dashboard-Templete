import { AutoComplete, Card, Col, Row } from "antd";
import React, { useState } from "react";
import DashboardTable from "../../Components/Customer-Dashboard/Table";
import { BiDotsHorizontalRounded, BiSearch } from "react-icons/bi";
import { AiFillBug,AiOutlineUser } from "react-icons/ai";
import { HiOutlineSignal} from "react-icons/hi2";
import userimg from "@/Assets/3D05.svg"
import userimg2 from "@/Assets/Female15.png"

const DashboardPreference = () => {
  const [columns, setColumns] = useState([
    "Name of Agent",
    "Channel",
    "Date",
    "Time",
    "Duration",
  ]);
  const [notification, setNotification] = useState([
    {icon:<AiFillBug color="white" size={23}/>,titel:"You have a bug that needs t...", time:"Just now"},
    {icon:<AiOutlineUser color="white" size={23}/>,titel:"New user registered", time:"59 minutes ago"},
    {icon:<AiFillBug color="white" size={23}/>,titel:"You have a bug that needs t...", time:"12 hours ago"},
    {icon:<HiOutlineSignal color="white" size={23}/>,titel:"Andi Lane subscribed to you", time:"Today, 11:59 AM"},
  ]);
  const [activities, setActivities] = useState([
    {titel:"Edited the details of Project X", time:"Just now"},
    {titel:"Released a new version", time:"59 minutes ago"},
    {titel:"Submitted a bug", time:"12 hours ago"},
    {titel:"Modified A data in Page X", time:"Today, 11:59 AM"},
    {titel:"Deleted a page in Project X", time:"Feb 2, 2023"},
  ]);
  const [Contact, setContact] = useState([
    {name:"Natali Craig"},
    {name:"Drew Cano"},
    {name:"Orlando Diggs"},
    {name:"Andi Lane"},
    {name:"Kate Morrison"},
    {name:"Koray Okumus"},
    {name:"Natali Craig"},
    {name:"Drew Cano"},
    {name:"Orlando Diggs"},
    {name:"Andi Lane"},
    {name:"Kate Morrison"},
    {name:"Andi Lane"},
    {name:"Kate Morrison"},
    {name:"Natali Craig"},
    {name:"Koray Okumus"},
  ]);
  const [rows, setRows] = useState([
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
    ["Agent Name", "Live chat", "7 July 20203", "07:00 PM", "01:54:89"],
  ]);
  return (
    <Row gutter={24}>
      <Col span={6}>
        <Card className="preference-notification">
          <div className="preference-top-row">
            <div className="preference-heading-text1">Notifications</div>
            <BiDotsHorizontalRounded size={20} color="black" />
          </div>
          {
            notification.map((item)=>{
              return(
                <div className="preference-notification-box">
            <div className="preference-notification-box-image">
              {item.icon}
            </div>
            <div className="preference-notification-box-text">
              <div className="preference-notification-box-heading">
              {item.titel}
              </div>
              <div className="preference-notification-box-text2">
              {item.time}
              </div>
            </div>
          </div>
              )
            })
          }
        </Card>
        <Card className="preference-activity">
          <div className="preference-top-row">
            <div className="preference-heading-text1">Activities</div>
          </div>
          {
            activities.map((item)=>{
              return(
                <>
                <div className="preference-notification-box">
            <div className="preference-activities-box-image">
              <img src={userimg} alt="" style={{
                width:"30px",
                marginRight:"10px"
              }} />
            </div>
            <div className="preference-activities-box-text">
              <div className="preference-notification-box-heading">
              {item.titel}
              </div>
              <div className="preference-notification-box-text2">
              {item.time}
              </div>
            </div>
          </div></>
              )
            })
          }
        </Card>
      </Col>
      <Col span={12}>
        <Card className="preference-table-main">
          <div className="preference-top-row">
            <div className="preference-heading-text">
              Conversation Summary Deatils
            </div>
            <div className="preference-top-btns">
              <div className="preference-top-btn">Channels</div>
              <div className="preference-top-btn">Date</div>
              <div className="preference-top-btn">Type</div>
            </div>
          </div>
          <DashboardTable column={columns} row={rows} />
        </Card>
      </Col>
      <Col span={6}>
        <Card className="preference-table-main">
          <div className="preference-top-row">
            <div className="preference-heading-text1">All Contacts</div>
          </div>
          <AutoComplete
            className="communication-auto-complete"
            style={{
              width: "100%",
            }}
            placeholder="Search"
            suffixIcon={<BiSearch size={20} color="#5A5A5F" />}
          />
          {
            Contact.map((item)=>{
                return(
                  <div className="prefrence-contacts">
            <img src={userimg2} style={{
              width:"30px"
            }} alt="" className="prefrence-contacts-image" />
            <div className="prefrence-contacts-text">{item.name}</div>
          </div>
                )
            })
          }
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardPreference;
