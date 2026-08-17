import React, { useState } from 'react';
import { Send, Phone, Video, MoreVertical, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { useApp } from '../../context/AppContext';

export const ChatWindow = ({ chat }) => {
  const { sendMessage } = useApp();
  const [inputText, setInputText] = useState('');

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 bg-[#FFF9F7] text-center">
        <p className="text-sm text-[#8A7779]">Select a conversation from the left sidebar to start chatting.</p>
      </div>
    );
  }

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(chat.id, inputText);
    setInputText('');
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#FFF9F7]">
      
      {/* Chat Top Header */}
      <div className="p-4 bg-white border-b border-[#8B1020]/10 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <img 
            src={chat.participantAvatar} 
            alt={chat.participantName} 
            className="w-10 h-10 rounded-full object-cover border border-[#8B1020]/20"
          />
          <div>
            <h4 className="text-sm font-bold text-[#21191A] flex items-center gap-1.5">
              {chat.participantName}
              <ShieldCheck className="w-3.5 h-3.5 text-[#2F9B68]" />
            </h4>
            <span className="text-[11px] text-[#2F9B68] font-semibold">● Online • {chat.participantRole || "Local Professional"}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-[#8A7779] hover:text-[#8B1020] hover:bg-[#FFF4F2] rounded-xl transition-colors">
            <Phone className="w-4 h-4" />
          </button>
          <button className="p-2 text-[#8A7779] hover:text-[#8B1020] hover:bg-[#FFF4F2] rounded-xl transition-colors">
            <Video className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Thread Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {chat.messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div 
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
            >
              <div 
                className={`max-w-md p-3.5 rounded-2xl text-sm leading-relaxed ${
                  isUser 
                    ? 'bg-[#8B1020] text-white rounded-br-none shadow-md shadow-[#8B1020]/15' 
                    : 'bg-[#FCEDEA] text-[#21191A] rounded-bl-none border border-[#8B1020]/10'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-[#8A7779] mt-1 px-1">{msg.time}</span>
            </div>
          );
        })}
      </div>

      {/* Message Input Footer */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-[#8B1020]/10 flex items-center gap-2">
        <input 
          type="text" 
          placeholder="Type your message to service provider..." 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 py-2.5 px-4 bg-[#FFF9F7] text-sm text-[#21191A] rounded-xl border border-[#8B1020]/15 outline-none focus:border-[#8B1020] focus:ring-2 focus:ring-[#8B1020]/20 transition-all"
        />
        <Button type="submit" variant="primary" icon={Send} size="md">
          Send
        </Button>
      </form>
    </div>
  );
};
