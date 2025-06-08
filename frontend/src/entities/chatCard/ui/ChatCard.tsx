import type { IChatCard } from '../cfg/types';
import '../style.pcss';

export const ChatCard = ({ img, name, time, lastMessage, unreadMessagesQty }: IChatCard) => {
  return (
    <div className="chatCard">
      <div className="chatCard__imgWrapper">
        <img src={img} alt="" width={48} height={48} loading="lazy" />
      </div>

      <div className="chatCard__main">
        <header className="chatCard__header">
          <p className="chatCard__name">{name}</p>
          <p className="chatCard__lastMsgTime">{time}</p>
        </header>

        <div className="chatCard__lastMsg">
          <p className="chatCard__lastMsgtext">{lastMessage}</p>
          {!!unreadMessagesQty && <span className="chatCard__lastMsgQty">{unreadMessagesQty}</span>}
        </div>
      </div>
    </div>
  );
};
