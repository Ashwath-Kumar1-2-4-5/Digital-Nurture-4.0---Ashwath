import React from 'react';
import './App.css';

class Cart extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.item.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.itemname}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

class OnlineShopping extends React.Component {
  render() {
    const CartInfo = [
      {itemname: "Laptop", price: 80000},
      {itemname: "TV", price: 120000},
      {itemname: "Washing Machine", price: 50000},
      {itemname: "Mobile", price: 30000},
      {itemname: "Fridge", price: 70000}
    ];

    return (
      <div className="mydiv">
        <h1 style={{ color: 'green' }}>Items Ordered :</h1>
        <Cart item={CartInfo} />
      </div>
    );
  }
}

export default OnlineShopping;