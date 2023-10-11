import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import "./style/index.css";

const DashboardTable = ({ column,row,width,width1 }) => {
  const [columns, setColumns] = useState(24 / column.length);
  return (
    <div className="dashboard-table">
      <div className="dashboard-table-header">
          {column.map((value) => {
            return (
                <div key={value} className="dashboard-table-header-text" style={{
                  width:width1
                }}>{value}</div>
            );
          })}
      </div>
      {
        row.map((list,index)=>{
          return(
           <>
            <div className="dashboard-table-Rows" >
            {list.map((value) => {
            return (
                <div key={value} className="dashboard-table-header-text2" style={{
                  width:width
                }}>{value}</div>
            );
          })}
            </div>
            <div className="divider">
              
            </div>
           </>
          )
        })
      
      }
    </div>
  );
};

export default DashboardTable;
