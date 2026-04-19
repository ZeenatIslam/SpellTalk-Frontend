import React from 'react'

const MessageBubble = ({text,user}) => {
  return (
    <div className={`flex mb-2 ${user==='me'?'justify-end':'justify-start'}`}>
        <div className={`h-20 mb-2 max-w-xs px-4 rounded-xl text-black ${user==='me'?'bg-gray-200 justify-end ':'bg-amber-50 justify-start '}`}>{text}</div>
      
    </div>
  )
}

export default MessageBubble
