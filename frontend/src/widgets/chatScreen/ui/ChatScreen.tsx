import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Message } from '@entities/message';
import { messages } from '../api/mock';
import userProfileImg from '@assets/images/stories/story-1.png';
import '../style.pcss';

export const ChatScreen = () => {
  return (
    <div className="chatScreen">
      <div className="chatScreen__top">
        <div className="chatScreen__user">
          <div className="chatScreen__userImgContainer">
            <img
              src={userProfileImg}
              alt="Аватар профиля Lara Mueller"
              width={40}
              height={40}
              loading="lazy"
            />
          </div>

          <p className="chatScreen__userName">Lara Mueller</p>
        </div>

        <ul className="chatScreen__topBtnList">
          <li className="chatScreen__topBtnListItem">
            <Button iconLeft={{ icon: 'search' }} isBgTransparent={true} />
          </li>

          <li className="chatScreen__topBtnListItem">
            <Button iconLeft={{ icon: 'dots' }} isBgTransparent={true} />
          </li>
        </ul>
      </div>

      <div className="chatScreen__body">
        <div className="chatScreen__bodyInner">
          {messages.map(({ date, mesasges }) => (
            <div className="chatScreen__messageGroup">
              <p className="chatScreen__messageGroupTimestamp">{date}</p>

              {mesasges.map(({ id, ...restPropss }) => (
                <Message key={id} {...restPropss} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="chatScreen__bottom">
        <Button iconLeft={{ icon: 'smile' }} isBgTransparent={true} />
        <Button iconLeft={{ icon: 'attach' }} isBgTransparent={true} />
        <Input name="message" placeholder="Write a message" />
        <Button iconLeft={{ icon: 'mic' }} isBgTransparent={true} />
      </div>
    </div>
  );
};
