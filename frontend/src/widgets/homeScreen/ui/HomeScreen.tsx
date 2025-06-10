import { Sidebar } from '@widgets/sidebar';
import { ChatScreen } from '@widgets/chatScreen';
import { ChatInfo } from '@widgets/chatInfo';
import { useState } from 'react';
import '../style.pcss';

export const HomeScreen = () => {
  const [isChatInfoOpened, setIsChatInfoOpened] = useState(false);

  const toggleChatPanel = () => {
    setIsChatInfoOpened(!isChatInfoOpened);
  };

  return (
    <div className="homeScreen">
      <Sidebar />
      <ChatScreen />
      <ChatInfo isChatInfoOpened={isChatInfoOpened} onToggleChatPanel={toggleChatPanel} />
    </div>
  );
};
