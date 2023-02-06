import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AboutUs from './pages/InnerPages/AboutPageInner/aboutUs';
import Serviceinner from "./pages/InnerPages/ServicesInner/serviceInner";
import Porfolio from './pages/InnerPages/PorfolioInner/portfolio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<App/>}/>
   <Route path="/about" element={<AboutUs/>}/>
   <Route path="/service" element={<Serviceinner/>}/>
   <Route path="/Ourportfolio" element={<Porfolio/>}/>



   </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
