import userProfilePic from '@assets/images/user-profile-pic.png';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Stories, storiesMockData } from '@entities/stories';
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
          <Input
            name="message-search"
            placeholder="Search"
            autoComplete="true"
            autoSave="searchAutoSave"
            inputMode="search"
            icon={{ icon: 'search' }}
          />
        </div>
      </header>

      <Stories stories={storiesMockData.stories} />
      <div>messages</div>
    </aside>
  );
};
