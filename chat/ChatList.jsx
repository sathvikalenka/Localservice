import React from 'react';
import { Search } from 'lucide-react';

export const ChatList = ({ conversations, activeChatId, onSelectChat }) => {
  return (
    <div className="w-full lg:w-80 bg-white border-r border-[#8B1020]/10 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-[#8B1020]/10 bg-[#FFF9F7]">
        <h3 className="text-base font-bold text-[#21191A] mb-3">Messages & Chat</h3>
        <div className="relative">
          <Search className="w-4 h-4 text-[#8A7779] absolute left-3 top-3" />
          <input 
            type="text" 
            placeholder="Search conversations..." 
            className="w-full pl-9 pr-3 py-2 bg-white text-xs text-[#21191A] rounded-xl border border-[#8B1020]/15 outline-none focus:border-[#8B1020]"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto divide-y divide-[#8B1020]/05">
        {conversations.map((chat) => {
          const isActive = chat.id === activeChatId;
          return (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`p-4 flex items-center gap-3 cursor-pointer transition-colors ${
                isActive ? 'bg-[#7A0D1A] text-white' : 'hover:bg-[#FFF4F2] text-[#21191A]'
              }`}
            >
              <div className="relative">
                <img 
                  src={chat.participantAvatar} 
                  alt={chat.participantName} 
                  className="w-11 h-11 rounded-full object-cover border border-white/20"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#2F9B68] border-2 border-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-[#21191A]'}`}>
                    {chat.participantName}
                  </h4>
                  <span className={`text-[10px] ${isActive ? 'text-white/70' : 'text-[#8A7779]'}`}>
                    {chat.lastTime}
                  </span>
                </div>
                <p className={`text-xs truncate mt-0.5 ${isActive ? 'text-white/80' : 'text-[#625557]'}`}>
                  {chat.lastMessage}
                </p>
              </div>

              {chat.unread > 0 && !isActive && (
                <span className="w-5 h-5 rounded-full bg-[#8B1020] text-white text-[10px] font-bold flex items-center justify-center">
                  {chat.unread}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
