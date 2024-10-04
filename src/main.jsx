import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './provider/AuthProvider'
import  { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
       <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
       </QueryClientProvider>
       <Toaster />
   </AuthProvider>
  </StrictMode>,
)
