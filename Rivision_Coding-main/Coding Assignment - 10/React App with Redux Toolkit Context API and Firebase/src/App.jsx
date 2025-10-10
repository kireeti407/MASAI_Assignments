import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadCart } from './redux/cartSlice';
import { FirebaseProvider } from './context/FirebaseContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      dispatch(loadCart(JSON.parse(cart)));
    }
  }, [dispatch]);

  return (
    <FirebaseProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </Router>
    </FirebaseProvider>
  );
}

export default App;