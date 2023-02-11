import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import { BrowserRouter,Routes,Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AboutUs from './pages/InnerPages/AboutPageInner/aboutUs';
import Serviceinner from "./pages/InnerPages/ServicesInner/serviceInner";
import Porfolio from './pages/InnerPages/PorfolioInner/portfolio';
import NotFound from './components/generic/NotFound';
import DashboardLayout from './components/Layout/DashboardLayout';
import OurBlogs from "./pages/InnerPages/BlogInner/index";
import Contact from './pages/InnerPages/ContactInner/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
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
root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//    <BrowserRouter>
//    <Routes>
//    <Route path='/' element={<App/>}/>
//    <Route path="/about" element={<AboutUs/>}/>
//    <Route path="/service" element={<Serviceinner/>}/>
//    <Route path="/Ourportfolio" element={<Porfolio/>}/>
//    <Route path='*' element={<NotFound />}/>



//    </Routes>
// </BrowserRouter>
<RouterProvider router={router} />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
