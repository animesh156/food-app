import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import './App.css'
import Layout from "./Layout.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Menu from "./components/Menu.jsx"




const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='menu' element={<Menu />} />
    <Route path='contact' element={<Contact />} />
    </Route>

  ), { basename: import.meta.env.BASE_URL })


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)