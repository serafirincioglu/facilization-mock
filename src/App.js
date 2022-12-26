import './App.css';
import Home from './pages/HomePage';
import NavigationBar from './components/GlobalComponents/NavigationBar';
import Footer from './components/GlobalComponents/Footer';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import News from './pages/News';
import Login from './pages/Login';
import Contact from './pages/Contact';
import UserInfo from './pages/UserInfo';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Logout from './pages/Logout';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/preferences" element={<UserInfo />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
