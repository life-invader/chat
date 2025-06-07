import type { IconProps } from '../cfg/types';
import '../style.pcss';

export const Icon = ({ icon, size = 'medium' }: IconProps) => {
  const capitalizedSize = size.charAt(0).toUpperCase() + size.slice(1);

  return (
    <svg className={`icon icon--isSize${capitalizedSize}`}>
      <use xlinkHref={`#icon-${icon}`} />
    </svg>
  );
};
