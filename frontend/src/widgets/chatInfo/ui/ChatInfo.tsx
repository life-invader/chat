import { Button } from '@shared/ui/button';
import cn from 'classnames';
import type { IChatInfoProps } from '../cfg/types';
import userProfileImg from '@assets/images/stories/story-1.png';
import '../style.pcss';

export const ChatInfo = ({ isChatInfoOpened, onToggleChatPanel }: IChatInfoProps) => {
  const toggleBtnicon = isChatInfoOpened ? 'close' : 'arrow-left';
  const classNames = cn('chatInfo', {
    'chatInfo--isOpened': isChatInfoOpened,
  });

  return (
    <div className={classNames}>
      <div className="chatInfo__wrapper">
        <div className="chatInfo__top">
          <Button
            onClick={onToggleChatPanel}
            iconLeft={{ icon: toggleBtnicon }}
            isBgTransparent={true}
            extraClasses={['btn--isToggleChatPanel']}
            title={isChatInfoOpened ? 'Закрыть панель' : 'Открыть панель'}
          />
          <h3 className="chatInfo__topTitle">Contact info</h3>
        </div>

        <div className="chatInfo__user">
          <div className="chatInfo__userImgContainer">
            <img src={userProfileImg} alt="" width={124} height={124} loading="lazy" />
          </div>

          <p className="chatInfo__userName">Lara Mueller</p>
          <a className="chatInfo__userPhoneNumber" href="tel:491522792358">
            +49 1522 792358
          </a>
        </div>
      </div>
    </div>
  );
};
