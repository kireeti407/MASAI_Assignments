import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Auth from './context/Auth.jsx'

createRoot(document.getElementById('root')).render(
 
  <Auth>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth>
  
)
