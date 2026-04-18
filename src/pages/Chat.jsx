import React from 'react'
import {Avatar,AvatarFallback,AvatarImage} from '@/components/ui/avatar'
import { Send, Smile, Paperclip, Mic } from "lucide-react";
const Chat = () => {
  return (
    <div className='bg-mist-950 h-screen w-full border  flex flex-col grid-'>
      <div className='h-20 w-full px-4 py-2'>
        <Avatar className="w-12 h-12 ">
          <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"/>
          <AvatarFallback>Hello</AvatarFallback>
          <span>
            <h2 className='text-white'>Harry Potter</h2>
          </span>
        </Avatar>

      </div>
      <div className='bg-white h-screen w-full rounded-t-3xl'>
        <div></div>
        <div></div>
      </div>
      
    </div>
  )
}

export default Chat
