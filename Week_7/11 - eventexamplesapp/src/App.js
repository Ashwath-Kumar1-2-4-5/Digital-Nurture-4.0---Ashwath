import React from 'react';
import './App.css'; cd

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      currencyInput: 0,
      euroValue: 0,
      message: "Welcome to Event Examples App!"
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
    this.handleCurrencyInputChange = this.handleCurrencyInputChange.bind(this);
    this.handleSubmitConversion = this.handleSubmitConversion.bind(this);
  }

  handleIncrement() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  handleDecrement() {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  }

  sayHello() {
    alert("Hello! This is a static message.");
  }

  invokeMultipleMethods = () => { 
    this.handleIncrement(); 
    this.sayHello(); 
  }

  sayWelcome(greeting) {
    alert(greeting); 
  }

  handleSyntheticEvent(event) {
    console.log("Synthetic Event:", event);
    console.log("Event Type:", event.type); 
    alert("I was clicked! (via SyntheticEvent)");
  }
  handleCurrencyInputChange(event) {
    this.setState({ currencyInput: event.target.value });
  }

  handleSubmitConversion() {
    const inr = parseFloat(this.state.currencyInput);
    if (!isNaN(inr)) {
      const euroRate = 0.011; 
      const convertedEuro = inr * euroRate;
      this.setState({ euroValue: convertedEuro.toFixed(2) }); 
    } else {
      alert("Please enter a valid number for conversion.");
      this.setState({ euroValue: 0 });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React Event Handling Examples</h1>

        <h2>Counter: {this.state.counter}</h2>
        <div className="counter-buttons">
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
        <hr />

        {/* Multiple Methods Invocation */}
        <h2>Multiple Method Invocation</h2>
        <button onClick={this.invokeMultipleMethods}>Increase & Say Hello</button>
        <hr />

        <h2>Function with Argument</h2>
        <button onClick={() => this.sayWelcome("Welcome to Event Handling Lab!")}>Say Welcome</button>
        <hr />

        <h2>Synthetic Event Example</h2>
        <button onClick={this.handleSyntheticEvent}>Click for Synthetic Event</button>
        <hr />

        <h2>Currency Converter (INR to Euro)</h2>
        <div className="currency-converter">
          <input
            type="number"
            value={this.state.currencyInput}
            onChange={this.handleCurrencyInputChange} 
            placeholder="Enter INR amount"
          />
          <button onClick={this.handleSubmitConversion}>Convert to Euro</button> 
          <p>Euro Value: {this.state.euroValue} €</p>
        </div>
        <hr />

        <p>{this.state.message}</p> 
      </div>
    );
  }
}

export default App;