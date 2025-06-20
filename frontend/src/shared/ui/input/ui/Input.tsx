import { Icon } from '@shared/ui/icon';
import type { InputProps } from '../cfg/types';
import '../style.pcss';

export const Input = ({
  type = 'text',
  placeholder = 'Placeholder',
  icon,
  ...restProps
}: InputProps) => {
  return (
    <div className="input">
      <input className="input__field" type={type} placeholder={placeholder} {...restProps} />
      {!!icon && <Icon {...icon} />}
    </div>
  );
};
