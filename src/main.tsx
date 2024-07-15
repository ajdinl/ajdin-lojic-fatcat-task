import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import { Landing } from './components/landing/Landing';
import ListComponent from './components/ListComponent';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Landing />} />
                    <Route path="list" element={<ListComponent />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
