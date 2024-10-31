import React from "react";
import img from "../../Assets/q8SZvOf9xT.gif";
import img2 from "../../Assets/QvpiwNUZwr.gif";
import { Button, Form } from "antd";
import DashboardInput from "../../Components/Customer-Dashboard/Input";

const Login = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,35,96,1) 100%)",
          width: "50%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={img2} alt="" />
        <div
          style={{
            fontSize: 90,
            textAlign: "center",
            color: "white",
            fontFamily: "Poppins",
            fontWeight: "800",
            textTransform: "uppercase",
          }}
        >
          School Simplfier
        </div>
      </div>
      <div
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "50%" }}>
          <div
            style={{
              fontSize: 30,
              textAlign: "center",
              color: "#0b2360",
              fontFamily: "Poppins",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            Login
          </div>
          <Form layout="vertical" style={{ width: "100%" }}>
            <DashboardInput
              placeholder="Email"
              isRequired
              message="Please Enter Email"
              name="email"
              label=""
              width="100%"
            />
            <DashboardInput
              placeholder="Password"
              isRequired
              type="password"
              message="Please Enter Password"
              name="password"
              label=""
              width="100%"
            />
            <Form.Item>
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
                  width: "100%",
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div
          style={{
            fontSize: 12,
            textAlign: "center",
            color: "gray",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#0b2360",
          }}
        >
          Developed By:{" "}
          <a
          href="https://rectigenx.com"
          target="_blank"
            style={{
              fontWeight: "700",
              textTransform:"uppercase",
              cursor:"pointer",
              color: "#0b2360",
            }}
          >
            Rectigenx
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
