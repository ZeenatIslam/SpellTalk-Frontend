import React, { useState, useEffect, useRef } from 'react'
import InputMsg from './InputMsg';
import { Phone, Video, PhoneCall } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Send, Smile, Paperclip, Mic, EllipsisVertical } from "lucide-react";
import MessageBubble from './MessageBubble';
import { connectWebSocket } from '../web.socket.js/WS';



const Chat = () => {
  const socket = useRef(null);
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // replace with real IDs
  const senderId = "123";
  const receiverId = "456";

  useEffect(() => {
    socket.current = connectWebSocket();

    socket.current.on("connect", () => {
      console.log("Connected:", socket.current.id);

      // register user
      socket.current.emit("register", senderId);
    });

    // receive message
    socket.current.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // send message
  const handleSend = () => {
    if (!message.trim()) return;

    const msgData = {
       _id: Date.now(),
      senderId,
      receiverId,
      message,
    };

    // instant UI update
    setMessages((prev) => [...prev, msgData]);

    socket.current.emit("sendMessage", msgData);

    setMessage("");
  };
  return (
    <div className='relative bg-mist-950 h-screen w-full border  flex flex-col '>
      <div className='flex justify-between items-center'>

        <div className='h-22 w-full px-4 py-2 flex '>
          <Avatar className="w-12 h-12 mt-2">
            <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
            <AvatarFallback>Hello</AvatarFallback>

          </Avatar>
          <div className='flex flex-col py-2'>

            <span className='w-full px-2'>
              <h2 className='text-white font-bold'>Harry Potter</h2>
              <h3 className='text-xs text-white'>Online</h3>
            </span>
          </div>

        </div>
        <div className='flex items-center gap-4 text-gray-300 px-4'>
          <div>
            <PhoneCall className='hover:text-white cursor-pointer' size={22} />
          </div>
          <div>
            <Video size={22} className='hover:text-white cursor-pointer' />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <EllipsisVertical
                  size={22}
                  className="cursor-pointer hover:text-white"
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-32 rounded-2xl">
                <DropdownMenuItem>Contact Info</DropdownMenuItem>
                <DropdownMenuItem>Select Messages</DropdownMenuItem>
                <DropdownMenuItem>Mute Notification</DropdownMenuItem>
                <DropdownMenuItem>Add to Favourite</DropdownMenuItem>
                <DropdownMenuItem>Block User</DropdownMenuItem>
                <DropdownMenuItem>Delete Chat</DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>
      </div>
      {/**Chat Message area */}
      <div className='bg-taupe-50 h-screen w-full rounded-t-3xl flex flex-col'>
        <div className='flex-1 overflow-y-auto p-4'>
          {messages.map((msg, index) => (
            <MessageBubble
              key={msg._id || index}
              text={msg.message}
              user={msg.senderId === senderId ? "me" : "them"}
            />
          ))}
        </div>
        {/**Input Message Area */}



        <InputMsg
          message={message}
          setMessage={setMessage}
          onSend={handleSend}
        />



      </div>

    </div >
  )
}

export default Chat
