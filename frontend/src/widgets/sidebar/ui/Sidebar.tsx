import userProfilePic from '@assets/images/user-profile-pic.png';
import { Button } from '@shared/ui/button';
import '../style.pcss';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__headerTop">
          <div className="sidebar__headerUserPicWrapper">
            <img
              src={userProfilePic}
              width={40}
              height={40}
              alt="Фото профиля Александр Леонтьев"
              loading="lazy"
            />
          </div>

          <ul className="sidebar__btnList">
            <li className="sidebar__btnListItem">
              <Button isBgTransparent={true} iconLeft={{ icon: 'message' }} />
            </li>

            <li className="sidebar__btnListItem">
              <Button isBgTransparent={true} iconLeft={{ icon: 'dots' }} />
            </li>
          </ul>
        </div>

        <div className="sidebar__headerSearch">
          <input type="search" placeholder="Search" />
        </div>
      </header>

      <div>stories</div>
      <div>messages</div>
    </aside>
  );
};
