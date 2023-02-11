import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AboutUs from './pages/InnerPages/AboutPageInner/aboutUs';
import Serviceinner from "./pages/InnerPages/ServicesInner/serviceInner";
import Porfolio from './pages/InnerPages/PorfolioInner/portfolio';
import NotFound from './components/generic/NotFound';
import DashboardLayout from './components/Layout/DashboardLayout';
import OurBlogs from "./pages/InnerPages/BlogInner/index";
import Contact from './pages/InnerPages/ContactInner/Contact';

export default function App() {
    const [goto,setGoto] = useState()
    const router = createBrowserRouter([
        {
          path: "/",
          element: <DashboardLayout setGoto={setGoto} />,
          errorElement: <NotFound />,
          children: [
            {
              path: "/",
              element: <Home goto={goto} setGoto={setGoto} />,
            },
            {
              path: "/about",
              element: <AboutUs />,
            },
            {
              path: "/service",
              element: <Serviceinner />,
            },
            {
              path: "/Ourportfolio",
              element: <Porfolio />,
            },
            {
              path: "/blogs",
              element: <OurBlogs/>
            },
            {
              path: "/contactUs",
              element: <Contact/>
            }
          ],
        },
      ]);
  return (
    <RouterProvider router={router} />
  )
}
