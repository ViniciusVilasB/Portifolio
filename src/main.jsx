import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
<<<<<<< HEAD
=======
import DetailedProject from './pages/DetailedProject.jsx'
>>>>>>> trabalhando-geral
import Contact from './pages/Contact.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/about', element: <About/>},
      {path: '/projects', element: <Projects/>},
<<<<<<< HEAD
=======
      {path: '/projects/:id', element: <DetailedProject />},
>>>>>>> trabalhando-geral
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
