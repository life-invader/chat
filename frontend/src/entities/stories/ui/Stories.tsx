import { Button } from '@shared/ui/button';
import type { IStoriesProps } from '../cfg/types';
import '../style.pcss';

export const Stories = ({ stories }: IStoriesProps) => {
  return (
    <div className="stories">
      <h2 className="stories__title">Stories</h2>

      <ul className="stories__list">
        <li className="stories__listItem">
          <Button
            extraClasses={['btn--isNewStory']}
            iconLeft={{ icon: 'plus' }}
            isBgTransparent={true}
          />
        </li>

        {stories.map((story, index) => (
          <li className="stories__listItem" key={index}>
            <img src={story} alt="Тестовая история" width={48} height={48} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
};
