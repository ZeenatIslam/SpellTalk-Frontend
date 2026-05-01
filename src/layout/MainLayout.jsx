import React from 'react'
import Navigation from "../pages/Navigation"
import Sidebar from "../pages/Sidebar"
import Chat from '../pages/Chat'
import {ChatProvider} from "../context/ChatContext"
const MainLayout = () => {
  return (
    <ChatProvider>

    <div className='flex w-screen h-screen overflow-hidden'>
      <div className='w-16'>
        <Navigation />
      </div>
      
      <div className='w-[400px] border-r'>
        <Sidebar />
      </div>
      
      <div className='flex-1'>
        <Chat />
      </div>
    </div>
    </ChatProvider>
  )
}

export default MainLayout
