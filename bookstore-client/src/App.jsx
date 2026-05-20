 import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext'; // <-- Import Context

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookList from './pages/BookList';
import Cart from './pages/Cart';

// Create a separate component for the Navigation Bar
// This allows us to use the "useCart" hook to show the real number of items
const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
        <Link to="/books" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Browse Books</Link>
      </div>
      <div>
        {/* Show real cart count */}
        <Link to="/cart" style={{ color: 'yellow', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>
          Cart ({totalItems})
        </Link>
        <Link to="/login" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Login</Link>
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
      </div>
    </nav>
  );
};

function App() {
  return (
    <CartProvider> {/* <-- Wrap everything in the Provider */}
      <Router>
        <Navbar /> {/* <-- Use the new Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;