 import React, { useState } from 'react';

const Login = () => {
  // These variables store what the user types
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // This runs when the user types in a box
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This runs when the user clicks "Login"
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data Submitted:', formData);
    alert('Login clicked! (Backend connection coming soon)');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Email Input */}
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label><br />
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email"
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label><br />
          <input 
            type="password" 
            name="password" 
            placeholder="Enter your password"
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;