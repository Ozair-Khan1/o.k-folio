import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Home } from './Component/Home.jsx'
import { About } from './Component/About.jsx'
import { Contact } from './Component/Contact.jsx'
import { Work } from './Component/Work.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        index : true,
        element : <Navigate to='/Home' replace/>
      },
      {
        path : 'Home',
        element : <Home/>
      },
      {
        path : 'About',
        element : <About/>
      },
      {
        path : 'Work',
        element : <Work/>
      },
      {
        path : 'Contact',
        element : <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
