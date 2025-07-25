import React from 'react';
// We are intentionally NOT importing './App.css' here for this specific setup
// to ensure no default create-react-app styling interferes with our inline styles.

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the component's state for entry and exit counts
    this.state = {
      entrycount: 0, // Initial count for people entering
      exitcount: 0,  // Initial count for people exiting
    };
    // Bind 'this' to the event handler methods. This is crucial for class component methods
    // when they are used as callbacks for events (like onClick).
    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  // Method to update the entry count
  updateEntry() {
    // Using the functional form of setState is best practice when relying on previous state
    this.setState((prevState) => {
      return { entrycount: prevState.entrycount + 1 }; // Increment entrycount by 1
    });
  }

  // Method to update the exit count
  updateExit() {
    // Using the functional form of setState
    this.setState((prevState) => {
      return { exitcount: prevState.exitcount + 1 }; // Increment exitcount by 1
    });
  }

  // The render method defines the UI that this component will display
  render() {
    return (
      // Main container div with inline flexbox styling for centering and layout
      <div style={{
        display: 'flex',              // Use flexbox for layout
        justifyContent: 'center',     // Center items horizontally
        alignItems: 'center',         // Center items vertically
        minHeight: '100vh',           // Make the container take full viewport height
        fontFamily: 'Arial, sans-serif', // Set a readable font
        gap: '50px',                  // Add space between the two counter sections
        flexWrap: 'wrap',             // Allow items to wrap on smaller screens
        backgroundColor: '#f0f0f0'    // A light background to make it visually clear
      }}>
        {/* Login Counter Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',                // Space between button and text
          border: '1px solid #ccc',   // Add a subtle border
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Soft shadow
          backgroundColor: 'white'
        }}>
          {/* Login button: calls updateEntry on click */}
          <button
            onClick={this.updateEntry}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: '#4CAF50' // Green color for Login button
            }}
          >
            Login
          </button>
          {/* Display the current entry count */}
          <span style={{ fontSize: '1.5em', color: '#333' }}>
            {this.state.entrycount} People Entered!!!
          </span>
        </div>

        {/* Exit Counter Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor: 'white'
        }}>
          {/* Exit button: calls updateExit on click */}
          <button
            onClick={this.updateExit}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: '#f44336' // Red color for Exit button
            }}
          >
            Exit
          </button>
          {/* Display the current exit count */}
          <span style={{ fontSize: '1.5em', color: '#333' }}>
            {this.state.exitcount} People Left!!!
          </span>
        </div>
      </div>
    );
  }
}

export default App; // Export the App component as the default export for index.js