import React from 'react';
import EmployeeList from './EmployeeList';
import ThemeContext from './ThemeContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Employee Management App</h1>
          <button
            onClick={this.toggleTheme}
            style={{
              padding: '10px 20px',
              margin: '10px',
              backgroundColor: this.state.theme === 'light' ? '#eee' : '#333',
              color: this.state.theme === 'light' ? '#333' : '#eee',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Toggle Theme (Current: {this.state.theme})
          </button>
          <EmployeeList />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;