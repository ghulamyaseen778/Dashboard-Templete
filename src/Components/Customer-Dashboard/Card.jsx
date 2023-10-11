import React from 'react'
import "./style/index.css"
import CountUp from 'react-countup';
import {Card} from "antd"

const DashboardCard = ({name,number}) => {
  return (
   <Card className='Num-Card-main'>
    <div className='Num-Card'>
    {name}
    </div>
    <CountUp end={number} className='Num-Card-Num' start={0} duration={4} />
   </Card>
  )
}

export default DashboardCard