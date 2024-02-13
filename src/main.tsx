import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GlobalStyle from './styles/GlobalStyles.tsx';
import MoviesProvider from './context/MoviesContext.tsx';
import { register } from 'swiper/element/bundle';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'


register();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
