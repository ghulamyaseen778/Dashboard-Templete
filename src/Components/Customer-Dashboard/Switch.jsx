import { Switch } from 'antd'
import React from 'react'
import "./style/index.css"

const SwitchDashboard = ({defaultChecked=true}) => {
  return (
    <Switch defaultChecked={defaultChecked} />
  )
}

export default SwitchDashboard