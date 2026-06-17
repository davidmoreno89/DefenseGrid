import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// @ts-ignore: CSS side-effect import without type declarations
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
