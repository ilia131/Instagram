import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import router from './config/router/router.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
 
)
