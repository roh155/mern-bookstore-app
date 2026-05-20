 import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', formData);
    alert('Register Successful! (Backend connection coming soon)');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Name Input */}
        <div style={{ marginBottom: '15px' }}>
          <label>Full Name:</label><br />
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name"
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

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
            placeholder="Create a password"
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'green', color: 'white', border: 'none' }}>
          Register
        </button>

      </form>
    </div>
  );
};

export default Register;