import React from 'react';

import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import CreatePostForm from './components/CreatePostForm';
import { Landing } from './components/landing/Landing';
import ListComponent from './components/ListComponent';
import './styles.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Landing />} />
                        <Route path="list" element={<ListComponent />} />
                        <Route path="form" element={<CreatePostForm />} />
                    </Route>
                </Routes>
            </Router>
        </QueryClientProvider>
    </React.StrictMode>
);
