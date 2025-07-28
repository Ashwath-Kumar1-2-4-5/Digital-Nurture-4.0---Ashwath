import React from 'react';
import './App.css';

class ComplaintRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      complaint: '',
      transactionId: Math.floor(Math.random() * 10000)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const msg = `Thanks ${this.state.employeeName}\nYour Complaint was Submitted.\nTransaction ID is: ${this.state.transactionId}`;
    alert(msg);

    this.setState({
      employeeName: '',
      complaint: '',
      transactionId: Math.floor(Math.random() * 10000)
    });
  }

  render() {
    return (
      <div className="complaint-container">
        <h1 className="main-heading">Register your complaints here!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="employeeName"
              value={this.state.employeeName}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Complaint:</label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;