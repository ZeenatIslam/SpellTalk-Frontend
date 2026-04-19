import React from 'react'
import { Home, MessageCircle, User, Settings ,BellDot,Bot } from "lucide-react";
const SideList = () => {
  return (
    <section>
      <div className='flex flex-col justify-between h-screen p-2 bg-amber-50 w-17' >
        <div  className='flex flex-col gap-4'>
          
          <Home size={40} className='m-1 rounded-full hover:bg-rose-300 hover:text-white p-2'/>
          <MessageCircle size={40} className='m-1 rounded-full hover:bg-blue-300 hover:text-white p-2'/>
          <BellDot size={40} className='m-1 rounded-full hover:bg-orange-300 hover:text-white p-2'/>
          <Bot size={40} className='m-1 rounded-full hover:bg-green-200 hover:text-white p-2'/>
        </div>
        <div className='flex flex-col gap-4'>
          <Settings size={40} className='m-1 rounded-full hover:bg-gray-400 hover:text-white p-2'/>
          <User size={40} className='m-1 rounded-full  p-2  hover:bg-pink-300 hover:text-white'/>
        </div>
      </div>
    </section>
  )
}

export default SideList
