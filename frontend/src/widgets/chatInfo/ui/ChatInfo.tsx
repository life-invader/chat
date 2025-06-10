import { Button } from '@shared/ui/button';
import userProfileImg from '@assets/images/stories/story-1.png';
import '../style.pcss';

export const ChatInfo = () => {
  return (
    <div className="chatInfo">
      <div className="chatInfo__top">
        <Button iconLeft={{ icon: 'close' }} isBgTransparent={true} />
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
  );
};
