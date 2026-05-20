import React, { createContext, useState, useContext } from 'react';

// Create the Context (The "Box")
const CartContext = createContext();

// Create the Provider (The "Wrapper" that gives the box to the app)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a book to the cart
  const addToCart = (book) => {
    setCartItems((prevItems) => {
      // Check if item is already in cart
      const itemInCart = prevItems.find((item) => item.id === book.id);

      if (itemInCart) {
        // If yes, just increase the quantity number
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If no, add the new item with quantity 1
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
    alert("Added to cart!");
  };

  // Function to remove a book
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// A shortcut helper to use the cart
export const useCart = () => useContext(CartContext);