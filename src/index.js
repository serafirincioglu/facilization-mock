import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/HomePage';
import NavigationBar from './components/GlobalComponents/NavigationBar';
import Footer from './components/GlobalComponents/Footer';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import News from './pages/News';
import Career from './pages/Career';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/solutions",
    element: <Solutions />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
