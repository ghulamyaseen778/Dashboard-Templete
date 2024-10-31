import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardLayout from "./Layout/Dashboard/index.jsx";
import { Button, Result } from "antd";
import Login from "./Modules/Registration/index.jsx";

const App = () => {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/*" element={<DashboardLayout />} />
      <Route
        path="*"
        element={
          <Result
            status="404"
            title="404"
            subTitle="Sorry, Dashboard not found on this page"
            extra={<Button type="primary" onClick={()=>navigate("/dashboard")}>Go dashboard</Button>}
          />
        }
      />
    </Routes>
  );
};

export default App;
