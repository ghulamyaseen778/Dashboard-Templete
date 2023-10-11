import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Badge, Divider, Menu } from "antd";
import "./style/sider.css";
import { GoHome } from "react-icons/go";
import { IoDownloadOutline } from "react-icons/io5";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { LuListTodo } from "react-icons/lu";
import { PiTruck } from "react-icons/pi";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    label,
  };
}
const items = [
  getItem("Dashboard", "/dashboard", <GoHome size={20} />),
  getItem("Communication", "/communication", <IoDownloadOutline size={20} />),
  getItem("Preference", "/preference", <HiOutlinePencilSquare size={20} />),
  getItem("Billing", "/billing", <LuListTodo size={20} />),
  getItem("Data Privacy", "/data", <PiTruck size={20} />),
  {
    type: "divider",
  },
  getItem("Profile", "/profile", <AiOutlineUser size={20} />),
  getItem(
    `Notification`,
    "/notification",
    <AiOutlineBell size={20} />
  ),
  getItem("Setting", "/setting", <FiSettings size={20} />),
  getItem("FAQ", "/faq", <BiHelpCircle size={20} />),
  getItem("Logout", "logout", <MdLogout size={20} />),
];
const DashBoardSider = () => {
  const [isOnline, setIsOnline] = useState();
  const [theme, setTheme] = useState("light");
  const [current, setCurrent] = useState("/dashboard");
  const navigate = useNavigate()
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  useEffect(()=>{
    console.log(navigator.onLine)
  },[navigator.onLine])
  const location = useLocation();
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key == "/dashboard"
    ? "/dashboard":"/dashboard"+e.key)
    setCurrent(e.key);
  };
  useEffect(() => {
    console.log();
    setCurrent(
      location.pathname == "/dashboard"
        ? "/dashboard"
        : location.pathname.split("/dashboard")[1]
    );
  }, [location]);
  return (
    <>
      <Menu
        className="customer-dashboard-menu"
        theme={theme}
        onClick={onClick}
        style={{
          width: "100%",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: 500,
          color: "#5A5A5F",
        }}
        selectedKeys={[current]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default DashBoardSider;
