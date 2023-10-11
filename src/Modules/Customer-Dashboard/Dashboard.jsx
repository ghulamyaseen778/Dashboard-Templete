import React from "react";
import { Card, Col, Row } from "antd";
import DashboardCard from "../../Components/Customer-Dashboard/Card";
import LineChart from "../../Components/Customer-Dashboard/LineChart";
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "../../Components/Customer-Dashboard/Doughnut";
import RowCards from "../../Components/Customer-Dashboard/RowCards";
import { FiUsers } from "react-icons/fi";
import { RiNumbersFill } from "react-icons/ri";
import { BiBarChartSquare, BiDollar } from "react-icons/bi";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const data = {
  labels: [0, 1, 2, 3, 4, 5],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: "Today",
      data: [7, 2, 8, 6, 4, 2],
      // you can set indiviual colors for each bar
      backgroundColor: "white",
      borderColor: "rgba(113, 88, 159, 1)",
      borderWidth: 1,
    },
    {
      label: "Tomorrow",
      data: [2, 4, 6, 7, 5, 8],
      // you can set indiviual colors for each bar
      backgroundColor: "white",
      borderColor: "rgba(224, 113, 47, 1)",
      borderWidth: 1,
    },
    {
      label: "Same Day Last Week",
      data: [4, 6, 8, 3, 7, 0],
      // you can set indiviual colors for each bar
      backgroundColor: "white",
      borderColor: "rgba(154, 128, 83, 1)",
      borderWidth: 1,
    },
  ],
};
const data2 = {
  labels: [0, 1, 2, 3, 4, 5],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: "# of Votes",
      data: [63, 15, 23],
      backgroundColor: [
        "rgba(64, 80, 181, 1)",
        "rgba(229, 56, 53, 1)",
        "rgba(251, 140, 0, 1)",
      ],
      borderWidth: 5,
      borderColor: "white",
    },
  ],
};

const Dashboard = () => {
  return (
    <>
      <Row gutter={34}>
        <Col span={6}>
          <DashboardCard name="Incoming Sessions" number={235600} />
        </Col>
        <Col span={6}>
          <DashboardCard name="Total Conversation" number={16738} />
        </Col>
        <Col span={6}>
          <DashboardCard name="Average waiting time" number={286320} />
        </Col>
        <Col span={6}>
          <DashboardCard name="Total Transactions" number={92861} />
        </Col>
      </Row>

      <Row
        gutter={34}
        style={{
          marginTop: "20px",
        }}
      >
        <Col span={12}>
          <LineChart
            data={data}
            name="Total Usage"
            legends={["Today", "Tomorrow", "Same Day Last Week"]}
          />
        </Col>
        <Col span={12}>
          <LineChart
            data={data}
            name="Channel sentiments"
            legends={["Facebook", "Live Chat", "SMS"]}
          />
        </Col>
      </Row>

      <Row
        gutter={34}
        style={{
          marginTop: "20px",
        }}
      >
        <Col span={8}>
          <DoughnutChart data={data2} />
        </Col>
        <Col span={12}>
          <Card>
            <Row gutter={24}>
              <Col span={12}>
                <RowCards
                  name="Budget"
                  color="#d34a4aff"
                  number="$24k"
                  icon={<RiNumbersFill size={18} color="white" />}
                  icon2={<AiOutlineArrowDown size={15} />}
                  percent="12"
                  iconColor="red"
                />
              </Col>
              <Col span={12}>
                <RowCards
                  name="Total Customers"
                  color="#14b8a6"
                  number="$1,6k"
                  icon={<FiUsers size={18} color="white" />}
                  icon2={<AiOutlineArrowUp size={15} />}
                  percent="16"
                  iconColor="#14b8a6"
                />
              </Col>
              <Col span={12}>
                <RowCards
                  name="Task Progress"
                  color="#ffb020"
                  number="75.5%"
                  icon={<BiBarChartSquare size={20} color="white" />}
                  display="none"
                  display2="block"
                />
              </Col>
              <Col span={12}>
                <RowCards
                  name="Total Profit"
                  color="#5048e4ff"
                  number="$23k"
                  icon={<BiDollar size={20} color="white" />}
                  display="none"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
