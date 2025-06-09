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
    </div>
  );
};
