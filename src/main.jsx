import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css';
import Fullscreen from './components/fullScreen';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fullscreen />
  </StrictMode>,
)
