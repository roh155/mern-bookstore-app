 import React from 'react';
import { useCart } from '../context/CartContext'; // <-- Import the hook

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10 },
  { id: 2, title: "1984", author: "George Orwell", price: 15 },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 12 },
  { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", price: 18 },
  { id: 5, title: "Harry Potter", author: "J.K. Rowling", price: 20 },
];

const BookList = () => {
  const { addToCart } = useCart(); // <-- Get the function from the box

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Available Books 📚</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {books.map((book) => (
          <div key={book.id} style={{ border: '1px solid #ccc', padding: '15px', width: '200px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ height: '120px', backgroundColor: '#ddd', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span>Book Cover</span>
            </div>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p style={{ fontWeight: 'bold', color: 'green' }}>${book.price}</p>
            
            {/* When clicked, run addToCart with this specific book */}
            <button 
              onClick={() => addToCart(book)} 
              style={{ backgroundColor: 'orange', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '5px' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;