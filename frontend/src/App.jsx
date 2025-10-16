import Navbar from './components/Common/Navbar.jsx';
import Home from './components/pages/Home/Home.jsx';
import Footer from './components/Common/Footer.jsx';
import Cart from './components/pages/Cart/Cart.jsx';
import LoginPage from './components/pages/Login/LoginPage.jsx';
import RegisterPage from './components/pages/Register/RegisterPage.jsx';
import Pizza from './components/pages/Pizza/Pizza.jsx';
import NotFound from './components/pages/NotFound/NotFound.jsx';
import Profile from './components/pages/Profile/Profile.jsx';

import CartProvider from './store/CartContext.jsx';
import PizzasProvider from './store/PizzasContext.jsx';
import { UserContext } from './store/UserContext.jsx';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';


function App() {
  // const { user } = useContext(UserContext);
  // Había implementado el usuario pero el desafío pide que use el token
  //así que cambiaré todas las referencias a user por token
  const { token } = useContext(UserContext);
  return (
    <>
      <PizzasProvider>

        <CartProvider>

          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={token ? <Navigate to="/profile" /> : <RegisterPage />} />
              <Route path="/login" element={token ? <Navigate to="/profile" /> : <LoginPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/404" element={<NotFound />} />
              {/* path to /404 redundante con el * pero lo pide el desafío */}
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
          </BrowserRouter>

        </CartProvider>

      </PizzasProvider>
    </>
  )
}

export default App