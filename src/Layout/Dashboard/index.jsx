import React, { useEffect } from "react";
import { Layout } from "antd";
import DashBoardHeader from "../../Modules/Global/Header";
import DashBoardSider from "../../Modules/Global/Sider";
import CustomerDashBoardRoutes from "../../ContentRoutes/CustomerDashboard";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  useEffect(() => {
    document.title += " || Customer Dashboard";
  }, []);
  const headerStyle = {
    height: 64,
    boxShadow: "0px 1px 4px 0px #00000040",
    backgroundColor: "#FFFFFF",
    zIndex: "2",
    alignItems: "center",
    position: "fixed",
    width: "100%",
  };
  const headerStyle2 = {
    height: 64,
    boxShadow: "0px 1px 4px 0px #00000040",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  };
  const contentStyle = {
    height: "100%",
    margin: "30px 40px 30px 30px",
    minHeight : "100vh",
  };
  const siderStyle = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 1px 4px 0px #00000040",
    position: "fixed",
    zIndex: 1,
    height: "100%",
  };
  const siderStyle2 = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 1px 4px 0px #00000040",
  };
  return (
    <Layout>
      <Header style={headerStyle}>
        <DashBoardHeader />
      </Header>
      <Header style={headerStyle2}></Header>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <DashBoardSider />
        </Sider>
        <Sider style={siderStyle2}></Sider>
        <Content style={contentStyle}>
          <CustomerDashBoardRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
