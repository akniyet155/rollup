import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles.css'
import Home from './pages/Home'
import Builder from './pages/Builder'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/builder', element: <Builder /> },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
