import type { IMessageProps } from '../cfg/types';
import cn from 'classnames';
import '../style.pcss';

export const Message = ({ text, isMine, time }: IMessageProps) => {
  const classNames = cn('message', {
    'message--isMine': isMine,
  });

  return (
    <div className={classNames}>
      <p className="message__text">{text}</p>
      <span className="message__time">{time}</span>
    </div>
  );
};
