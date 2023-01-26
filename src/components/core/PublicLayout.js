import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../molecule/Header'
import RightSidebar from '../molecule/RightSidebar'
import Sidebar from '../molecule/Sidebar.js'
import './style.css'

const PublicLayout = ({children}) => {
    return (
      <>
          <Header />
          <Sidebar />
          <div className='sidebar_right'>
          {children}
          </div>
          <RightSidebar />
          <Outlet />
      </>
    )
  }

export default PublicLayout