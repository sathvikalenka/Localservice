import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { ChatList } from '../../components/chat/ChatList';
import { ChatWindow } from '../../components/chat/ChatWindow';
import { useApp } from '../../context/AppContext';

export const CustomerMessages = () => {
  const { conversations } = useApp();
  const [activeChatId, setActiveChatId] = useState(conversations[0]?.id || 'chat-1');

  const activeChat = conversations.find(c => c.id === activeChatId) || conversations[0];

  return (
    <DashboardLayout title="Customer Messages">
      <div className="bg-white rounded-3xl border border-[#8B1020]/15 shadow-md overflow-hidden flex flex-col lg:flex-row h-[75vh]">
        <ChatList 
          conversations={conversations} 
          activeChatId={activeChatId} 
          onSelectChat={(id) => setActiveChatId(id)} 
        />
        <ChatWindow chat={activeChat} />
      </div>
    </DashboardLayout>
  );
};
