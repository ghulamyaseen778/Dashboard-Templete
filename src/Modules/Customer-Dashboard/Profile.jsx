import { Button, Col, Divider, Form, Row } from "antd";
import React, { useState } from "react";
import "./style/index.css";
import { FaUserAlt } from "react-icons/fa";
import { BsCameraFill, BsFillCheckSquareFill } from "react-icons/bs";
import DashboardInput from "@/Components/Customer-Dashboard/Input";
import { AiFillPlusCircle } from "react-icons/ai";
import img1 from "../../Assets/image 7.png";
import img2 from "../../Assets/image 8.png";
import img3 from "../../Assets/image 9.png";

const Profile = () => {
  const [ci, setCi] = useState("Karachi");
  const [form] = Form.useForm();

  const [st, setSt] = useState("Sindh");
  const city = [{ label: "Karachi", value: "karachi" }];
  const state = [{ label: "Sindh", value: "sindh" }];
  const onChangeCity = (value) => {
    console.log(value);
    setCi(value);
  };
  const onChangeState = (value) => {
    console.log(value);
    setSt(value);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Col
        span={14}
        style={{
          margin: "0 20px",
          position: "relative",
        }}
      >
        <Row>
          <Col span={14}>
            <div className="Dashboard-Heading2">
              Customer <br /> Name
            </div>
          </Col>
          <Col span={8}>
            <div className="profile-image-main">
              <div className="profile-img-box">
                <FaUserAlt color="white" size={80} />
                <div className="profile-img-on-hover">
                  <BsCameraFill size={40} color="white" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="profile-h2-haeding">Basic Info</div>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Row>
            <Col span={12}>
              <DashboardInput
                name="FirstName"
                message="Please input first name"
                label={"First Name"}
                placeholder="First Name"
              />
            </Col>
            <Col span={12}>
              <DashboardInput
                name="LastName"
                message="Please input last name"
                label={"Last Name"}
                placeholder="Last name"
              />
            </Col>
            <Col span={24}>
              <DashboardInput
                name="email"
                message="Please input email"
                label="Email"
                width="90%"
                placeholder="xyz@gmail.com"
                type="email"
                suffix={<BsFillCheckSquareFill color="green" />}
              />
            </Col>
            <Col span={24}>
              <DashboardInput
                width="90%"
                message="Please input address"
                name="Address"
                label="Address"
                placeholder="Customer Address Here"
              />
            </Col>
            <Col span={24}>
              <DashboardInput
                width="90%"
                message="Please input number"
                type="number"
                name="ContactNumber"
                label="Contact Number"
                placeholder="58077.79"
              />
            </Col>
            <Col span={12}>
              <DashboardInput
                name="City"
                isRequired={false}
                func={onChangeCity}
                value={ci}
                label="City"
                select={true}
                arr={city}
                placeholder="Select"
              />
            </Col>
            <Col span={12}>
              <DashboardInput
                name="State"
                isRequired={false}
                func={onChangeState}
                value={st}
                label="State"
                select={true}
                arr={state}
                placeholder="Select"
              />
            </Col>
            <Col span={24}>
              <DashboardInput
                width="90%"
                message="Please input password"
                placeholder="Password"
                label="Password"
                name="Password"
                type="password"
                suffix={<BsFillCheckSquareFill color="green" />}
              />
            </Col>
          </Row>
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
              }}
            >
              Edit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Divider
        type="vertical"
        style={{
          height: "50rem",
          marginTop: "-30px",
          marginBottom: "-30px",
        }}
      />
      <Col
        span={8}
        style={{
          marginLeft: "10px",
        }}
      >
        <div className="profile-h2-haeding">Contact Info</div>
        <div className="profile-2-box">
          <div className="profile-2-box-heading-1">Email</div>
          <div className="profile-2-box-heading-2">xyz@gamil.com</div>
          <div className="profile-2-box-heading-3">
            <AiFillPlusCircle
              size={25}
              style={{
                marginRight: "2px",
              }}
            />
            Add Email
          </div>
        </div>
        <div className="profile-2-box">
          <div className="profile-2-box-heading-1">Phone Number</div>
          <div className="profile-2-box-heading-2">123456889</div>
          <div className="profile-2-box-heading-3">
            <AiFillPlusCircle
              size={25}
              style={{
                marginRight: "2px",
              }}
            />
            Add Phone number
          </div>
        </div>
        <div className="profile-2-box">
          <div className="profile-2-box-heading-1">Social Links</div>
          <div className="profile-2-box-heading-2">
            {" "}
            <img
              src={img1}
              alt=""
              style={{
                marginRight: "6px",
              }}
            />{" "}
            www.facebook.com
          </div>
          <div className="profile-2-box-heading-2">
            <img
              src={img2}
              alt=""
              style={{
                marginRight: "6px",
              }}
            />{" "}
            www.Linkedin.com
          </div>
          <div className="profile-2-box-heading-2">
            <img
              src={img3}
              alt=""
              style={{
                marginRight: "6px",
              }}
            />{" "}
            www.twitter.com
          </div>
          <div className="profile-2-box-heading-3">
            <AiFillPlusCircle
              size={25}
              style={{
                marginRight: "2px",
              }}
            />
            Add Social link
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
