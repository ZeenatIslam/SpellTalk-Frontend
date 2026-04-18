import React from 'react'
import { Home, MessageCircle, User, Settings  } from "lucide-react";
const SideList = () => {
  return (
    <section>
      <div className='flex flex-col justify-between h-screen p-2 bg-amber-50 w-17' >
        <div  className='flex flex-col gap-4'>
          
          <Home size={40} className='m-1 rounded-full hover:bg-gray-200 p-2'/>
          <MessageCircle size={40} className='m-1 rounded-full hover:bg-gray-200 p-2'/>
        </div>
        <div className='flex flex-col gap-4'>
          <Settings size={40} className='m-1 rounded-full hover:bg-gray-200 p-2'/>
          <User size={40} className='m-1 rounded-full hover:bg-gray-200 p-2'/>
        </div>
      </div>
    </section>
  )
}

export default SideList
