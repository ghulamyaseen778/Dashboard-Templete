import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from '@/Modules/Customer-Dashboard/Dashboard'
import { Button, Result } from 'antd'
import Communication from '@/Modules/Customer-Dashboard/Communication'
import DashboardSetting from '@/Modules/Customer-Dashboard/Setting'
import DashboardPreference from '@/Modules/Customer-Dashboard/Preference'
import DashBoardNotification from '@/Modules/Customer-Dashboard/Notification'
import DashboardBilling from '@/Modules/Customer-Dashboard/Billing'
import Profile from '../../Modules/Customer-Dashboard/Profile'

const CustomerDashBoardRoutes = () => {
  const navigate = useNavigate()
  return (
   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/communication' element={<Communication/>}/>
    <Route path='/data' element={<>hello</>}/>
    <Route path='/preference' element={<DashboardPreference/>}/>
    <Route path='/billing' element={<DashboardBilling/>}/>
    <Route path='/data' element={<>hello</>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/notification' element={<DashBoardNotification/>}/>
    <Route path='/setting' element={<DashboardSetting/>}/>
    <Route path='/faq' element={<>hello</>}/>
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
  )
}

export default CustomerDashBoardRoutes