 import React from 'react';
import { useCart } from '../context/CartContext'; // <-- Import the hook

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // <-- Get real items

  // Calculate the total price automatically
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2>Your Shopping Cart 🛒</h2>
      
      {/* Show message if cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go add some books!</p>
      ) : (
        <div>
          {/* List the real items */}
          {cartItems.map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.title}</span>
                <div style={{ fontSize: '14px', color: '#555' }}>
                   ${item.price} x {item.quantity}
                </div>
              </div>
              
              <div>
                <span style={{ fontWeight: 'bold', marginRight: '15px' }}>${item.price * item.quantity}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price Section */}
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <h3>Total: ${totalPrice}</h3>
            <button 
              onClick={() => alert("Checkout functionality coming soon!")}
              style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', fontSize: '16px', borderRadius: '5px' }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;