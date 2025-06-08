import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HomeScreen } from '@widgets/homeScreen';
import './styles/index.pcss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomeScreen />
  </StrictMode>,
);
