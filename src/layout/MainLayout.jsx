import React from 'react'
import Navigation from "../pages/Navigation"
import Sidebar from "../pages/Sidebar"
import Chat from '../pages/Chat'
const MainLayout = () => {
  return (
    <div className='flex '>
      <Navigation />
      <Sidebar />
      <Chat/>
    </div>
  )
}

export default MainLayout
