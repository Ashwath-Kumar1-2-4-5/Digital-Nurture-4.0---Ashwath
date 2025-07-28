import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  const buttonClassName = `button-${theme}`;
  const cardStyle = {
      border: `1px solid ${theme === 'light' ? '#ccc' : '#555'}`,
      backgroundColor: theme === 'light' ? '#f8f8f8' : '#333',
      color: theme === 'light' ? '#333' : '#f8f8f8',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '250px',
      textAlign: 'left',
  };
  const buttonStyle = {
      backgroundColor: theme === 'light' ? '#007bff' : '#6c757d',
      color: 'white',
      padding: '8px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
  };

  return (
    <div style={cardStyle}>
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
      <button className={buttonClassName} style={buttonStyle}>
        View Profile
      </button>
    </div>
  );
}

export default EmployeeCard;