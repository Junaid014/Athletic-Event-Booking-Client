import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './routers/Router.jsx'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>,
)
