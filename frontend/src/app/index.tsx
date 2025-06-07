import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Icon } from '@shared/ui/icon';
import './styles/index.pcss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>App</div>

    <Icon icon="react" />
    <Icon icon="dots" />
    <Icon icon="message" />
    <Icon icon="search" />
    <Icon icon="smile" />
    <Icon icon="arrow-right" />
    <Icon icon="attach-file" />
    <Icon icon="bell" />
    <Icon icon="clock" />
    <Icon icon="close" />
    <Icon icon="mic" />
    <Icon icon="settings" />
    <Icon icon="star" />
  </StrictMode>,
);
