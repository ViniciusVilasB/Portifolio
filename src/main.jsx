import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Projects from './pages/Projects.jsx'
import DetailedProject from './pages/DetailedProject.jsx'
import Contact from './pages/Contact.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/projects', element: <Projects/>},
      {path: '/projects/:id', element: <DetailedProject />},
      {path: '/contact', element: <Contact/>},
      {path: '*', element: <PageNotFound/>}
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
