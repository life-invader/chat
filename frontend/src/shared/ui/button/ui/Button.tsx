import cn from 'classnames';
import { Icon } from '@shared/ui/icon';
import type { IButtonProps } from '../cfg/types';
import '../style.pcss';

export const Button = ({
  extraClasses = [],
  iconLeft,
  iconRight,
  label,
  type,
  children,
  isBgTransparent,
}: IButtonProps) => {
  const isIconOnly = !!label || !!children;
  const classNames = cn('btn', extraClasses, {
    'btn--isBgTransparent': isBgTransparent,
    'btn--isIconOnly': !isIconOnly,
  });

  return (
    <button className={classNames} type={type}>
      {!!iconLeft && <Icon {...iconLeft} />}

      {children ? <>{children}</> : !!label && <span className="btn__label">{label}</span>}

      {!!iconRight && <Icon {...iconRight} />}
    </button>
  );
};
