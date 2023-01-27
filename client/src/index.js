import React, { Suspense } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import i18n from './i18n'
import './index.css'

createRoot(document.createElement('root')).render(
    <Suspense fallback="loading">
        <App />
    </Suspense>
);