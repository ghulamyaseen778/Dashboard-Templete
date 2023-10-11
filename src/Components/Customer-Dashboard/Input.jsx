import { Form, Input, Select } from "antd";
import React from "react";
import "./style/index.css";

const DashboardInput = ({
  select = false,
  name = "username",
  width = "80%",
  type = "text",
  isRequired = true,
  message = "Please input your",
  label = "Username",
  suffix,
  placeholder,
  arr = [],
  value,
  func
}) => {
  return (
    <Form.Item
      className="Dashboard-Form-Item"
      label={label}
      name={name}
      rules={[
        {
          required: isRequired,
          message: message,
        },
      ]}
    >
      <div
        style={{
          width: width,
        }}
      >
        {select ? (
          <>
            <Select
              className="global-select"
              placeholder={placeholder}
              options={arr}
              allowClear
            />
              
          </>
        ) : (
          <>
            <Input
              className="global-input"
              type={type}
              placeholder={placeholder}
              suffix={suffix}
            />
          </>
        )}
      </div>
    </Form.Item>
  );
};

export default DashboardInput;
