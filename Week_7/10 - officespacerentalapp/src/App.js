import React from 'react';
import './App.css';

import officeImage from './office_space.jpg';

function App() {
  const pageHeadingText = "Office Space , at Affordable Range";
  const office = {
    Name: "CTS",
    Rent: 50000,
    Address: "Chennai"
  };
  const officeSpaces = [
    { Name: "Tech Hub", Rent: 45000, Address: "Bangalore", image: 'https://via.placeholder.com/400x200?text=Tech+Hub' },
    { Name: "City View Offices", Rent: 75000, Address: "Mumbai", image: 'https://via.placeholder.com/400x200?text=City+View' },
    { Name: "Innovation Center", Rent: 55000, Address: "Delhi", image: 'https://via.placeholder.com/400x200?text=Innovation' },
  ];

  return (
    <div className="App">
      <h1>{pageHeadingText}</h1>
      <img
        src={officeImage || 'https://via.placeholder.com/400x200?text=Office+Space+Placeholder'}
        alt="Office Space"
        style={{ width: '25%', height: 'auto', maxWidth: '400px', display: 'block', margin: '20px auto' }}
      />
      <div>
        <h1>Name: {office.Name}</h1>
        <h3 style={{ color: office.Rent < 60000 ? 'red' : 'green' }}>
          Rent: Rs. {office.Rent}
        </h3>
        <h3>Address: {office.Address}</h3>
      </div>
      <hr />
      <h2>More Office Space Options:</h2>
      {officeSpaces.map((space, index) => (
        <div key={index} style={{
          border: '1px solid #ddd',
          padding: '15px',
          margin: '20px auto',
          borderRadius: '8px',
          maxWidth: '500px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <img
            src={space.image}
            alt={space.Name}
            style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
          />
          <h3>Name: {space.Name}</h3>
          <h4 style={{ color: space.Rent < 60000 ? 'red' : 'green' }}>
            Rent: Rs. {space.Rent}
          </h4>
          <h4>Address: {space.Address}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;