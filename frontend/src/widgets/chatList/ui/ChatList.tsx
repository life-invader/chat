import { ChatCard } from '@entities/chatCard';
import { messages } from '../api/mock';
import '../style.pcss';

export const ChatList = () => {
  return (
    <div className="chatList">
      <h2 className="chatList__title">Messages</h2>

      <ul className="chatList__list">
        {messages.map((chat) => (
          <li key={chat.id} className="chatList__item">
            <ChatCard {...chat} />
          </li>
        ))}
      </ul>
    </div>
  );
};
