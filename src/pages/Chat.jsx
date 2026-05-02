import React, { useState, useEffect, useRef, useContext } from 'react'
import InputMsg from './InputMsg';
import { PhoneCall, Video, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MessageBubble from './MessageBubble';
import { connectWebSocket } from '../web.socket.js/WS';
import { ChatContext } from "../context/ChatContext"
import axios from "axios";

const Chat = () => {
  const { selectedUser } = useContext(ChatContext);
  const socket = useRef(null);
  const bottomRef = useRef(null);
  const selectedUserRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const senderId = localStorage.getItem("userId");
  const receiverId = selectedUser?._id;

  // keep latest selected user in ref
  useEffect(() => {
    selectedUserRef.current = selectedUser;
  }, [selectedUser]);

  // socket connect once
  useEffect(() => {
    socket.current = connectWebSocket();

    socket.current.on("connect", () => {
      console.log("Connected:", socket.current.id);
      socket.current.emit("register", senderId);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  // fetch old messages from DB
  const fetchOldMessages = async () => {
    if (!selectedUser) return;

    try {
      const res = await axios.get(
        `https://spelltalk-backend.onrender.com/auth/get-messages/${senderId}/${selectedUser._id}`
      );

      console.log("old messages", res.data);
      setMessages(res.data);

    } catch (error) {
      console.log("error loading old messages", error);
    }
  };

  useEffect(() => {
    fetchOldMessages();
  }, [selectedUser]);

  // receive realtime msg
  useEffect(() => {
    const handleReceive = (msg) => {
      console.log("incoming", msg);

      if (
        String(msg.senderId) === String(selectedUserRef.current?._id) &&
        String(msg.receiverId) === String(senderId)
      ) {
        setMessages((prev) => [...prev, msg]);
      }
    };

    socket.current.on("receiveMessage", handleReceive);

    return () => {
      socket.current.off("receiveMessage", handleReceive);
    };
  }, []);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // send message
  const handleSend = () => {
    if (!message.trim() || !selectedUser) return;

    const msgData = {
      _id: Date.now(),
      senderId,
      receiverId,
      message,
    };

    setMessages((prev) => [...prev, msgData]);

    socket.current.emit("sendMessage", msgData);

    setMessage("");
  };

  return (
    <div className='relative bg-mist-950 h-screen w-full border flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className='h-22 w-full px-4 py-2 flex'>
             <img src="noUser.jpg" alt={name} className='w-10 h-10 rounded-full border-2 border-black object mt-2'/>
          <div className='flex flex-col py-2'>

            <span className='w-full px-2'>
              <h2 className='text-white font-bold'>
                {selectedUser ? selectedUser.username : "Select User"}
              </h2>
              <h3 className='text-xs text-white'>Online</h3>
            </span>
          </div>
        </div>

        <div className='flex items-center gap-4 text-gray-300 px-4'>
          <PhoneCall size={22} />
          <Video size={22} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <EllipsisVertical size={22} className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Delete Chat</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className='bg-taupe-50 h-screen w-full rounded-t-3xl flex flex-col  '>
        <div className='flex-1 overflow-y-auto p-4'>
          {messages.map((msg, index) => (
            <MessageBubble
              key={msg._id || index}
              text={msg.message}
              user={String(msg.senderId) === String(senderId) ? "me" : "them"}
            />
          ))}
         
        </div>

        <InputMsg
          message={message}
          setMessage={setMessage}
          onSend={handleSend}
        />
      </div>
    </div>
  )
}

export default Chat