import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './app/app';
import '@fontsource/open-sans-condensed';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
