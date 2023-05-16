import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import {
    RecoilRoot,
} from 'recoil';

import "bootstrap/dist/css/bootstrap.min.css"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
);