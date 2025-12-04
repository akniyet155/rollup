import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './styles.css';
import Home from './pages/Home';
import Builder from './pages/Builder';
const router = createHashRouter([
    { path: '/', element: _jsx(Home, {}) },
    { path: '/builder', element: _jsx(Builder, {}) },
]);
createRoot(document.getElementById('root')).render(_jsx(RouterProvider, { router: router }));
