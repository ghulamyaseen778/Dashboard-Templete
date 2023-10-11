import React, { useState } from "react";
import "./style/index.css";
import { BiError } from "react-icons/bi";
import { Divider, Pagination } from "antd";

const DashBoardNotification = () => {
  const [notification,setNotifiction] = useState([
    {
      heading:"Unread Notification - This section will provide the information of error heading",
      date:"hh:mm AM/PMz",
      text:"This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
      isRead:false
    },
    {
      heading:"Unread Notification - This section will provide the information of error heading",
      date:"hh:mm AM/PMz",
      text:"This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
      isRead:true
    },
    {
      heading:"Unread Notification - This section will provide the information of error heading",
      date:"hh:mm AM/PMz",
      text:"This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
      isRead:true
    },
    {
      heading:"Unread Notification - This section will provide the information of error heading",
      date:"hh:mm AM/PMz",
      text:"This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
      isRead:false
    },
  ])
  return (
    <>
      <div className="notificatin-main-box">
        <div className="Dashboard-Heading">Notification</div>
        <div className="notification-btn">Clear All</div>
      </div>
      <div className="mt"></div>
      {notification.map((noti)=>{
        return(
          <div className="notification-box">
      <div className="notificatin-main-box">
        <div
          className="notification-box-heading"
          style={{
            color: noti.isRead ? "#5A5A5F" : "#0B2360",
          }}
        >
          <BiError
            size={25}
            style={{
              marginRight: "6px",
            }}
          />
          {noti.heading}
        </div>
        <div className="notification-box-date">{noti.date}</div>
      </div>
      <div
        className="notification-box-text"
        style={{
          color: noti.isRead ? "#5A5A5F" : "#0B2360",
        }}
      >
       {noti.text}
      </div>
      <div className="notificaton-box-btns">
        <div className="notificaton-box-btn1">Clear</div>
        <div className="notificaton-box-btn2">View</div>
      </div>
      <Divider/>
      </div>
        )
      })}
      <div style={{
        display:"flex",
        justifyContent:"flex-end"
      }}>
      <Pagination
    total={50}
    defaultPageSize={1}
  />
      </div>
    </>
  );
};

export default DashBoardNotification;
