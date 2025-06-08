import { ChatCard } from '@entities/chatCard';
import '../style.pcss';
import { chatListMockData } from '..';

export const ChatList = () => {
  return (
    <div className="chatList">
      <h2 className="chatList__title">Messages</h2>

      <ul className="chatList__list">
        {chatListMockData.messages.map((chat) => (
          <li key={chat.id} className="chatList__item">
            <ChatCard {...chat} />
          </li>
        ))}
      </ul>
    </div>
  );
};
