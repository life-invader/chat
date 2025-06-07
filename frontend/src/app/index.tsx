import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.pcss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>App</div>
  </StrictMode>,
);
