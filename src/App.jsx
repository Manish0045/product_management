import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/homepage/Home';
import Products from './pages/productsPage/Products';
import Cart from './pages/cartPage/Cart';
import SignIn from './pages/LoginPage/SignIn';
import SignUp from './pages/registerPage/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className='mainContainer'>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {!hideNavbar && <Footer />}
    </div>
  );
}

export default App;
