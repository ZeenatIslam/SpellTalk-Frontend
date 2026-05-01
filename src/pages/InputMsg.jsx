import React, { useState } from "react";
import { Send, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const InputMsg = ({ message, setMessage, onSend }) => {
  const [showEmoji, setShowEmoji] = useState(false);

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="w-full p-3 flex items-center gap-2 bg-white relative">
      
      {/* Emoji Button */}
      <button
        className="p-2 rounded-full bg-orange-300 text-white hover:bg-orange-400"
        onClick={() => setShowEmoji(!showEmoji)}
      >
        <Smile size={20} />
      </button>

      {showEmoji && (
        <div className="absolute bottom-14 left-2 z-50">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}

      {/* Input */}
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 rounded-full border-2 border-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />

      {/* Send Button */}
      <button
        onClick={onSend}
        className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-600"
      >
        <Send size={22} />
      </button>
    </div>
  );
};

export default InputMsg;