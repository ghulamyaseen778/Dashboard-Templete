import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardLayout from "./Layout/Dashboard/index.jsx";
import { Button, Result } from "antd";

const App = () => {
  const navigate = useNavigate()
  return (
    <Routes>
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
