import React from "react";
import "./style/index.css";
import SwitchDashboard from "../../Components/Customer-Dashboard/Switch";

const DashboardSetting = () => {
  return (
    <>
      <div className="Dashboard-Heading">Setting</div>
      <div className="dashboard-setting-row">
        <div className="dashboard-setting-texts">
          <div className="dashboard-setting-text1">Desktop Push Notification</div>
          <div className="dashboard-setting-text2">Receive push notification on mentions, comments, alerts, edit changes, supply and target meet</div>
        </div>
        <SwitchDashboard />
      </div>
      <div className="dashboard-setting-row">
        <div className="dashboard-setting-texts">
          <div className="dashboard-setting-text1">Email Notification</div>
          <div className="dashboard-setting-text2">Receive push notification on mentions, comments, alerts, edit changes, supply and target meet</div>
        </div>
        <SwitchDashboard defaultChecked={false} />
      </div>
      <div className="dashboard-setting-row">
        <div className="dashboard-setting-texts">
          <div className="dashboard-setting-text1">Dark Theme</div>
          <div className="dashboard-setting-text2">use the system settings to enable dark theme</div>
        </div>
        <SwitchDashboard defaultChecked={false} />
      </div>
      <div className="dashboard-setting-row">
        <div className="dashboard-setting-texts">
          <div className="dashboard-setting-text1">Sound Notification</div>
          <div className="dashboard-setting-text2">Enable sound notification on mentions, comments, alerts, edit changes, supply and target meet</div>
        </div>
        <SwitchDashboard />
      </div>
    </>
  );
};

export default DashboardSetting;
