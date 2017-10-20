import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: [],
      selectedItem: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("handleChange() in Core.js: ", e);
    //setstate of selected item, possibly at item like data-id to grab array[i] info
    //call function in app.js
  }

  render() {
    if (this.props.checkoutItems === undefined) {
      return([
      <h1>You have not placed any items in your cart</h1>
      ])
    } else {
    var mappedCheckout = this.props.checkoutItems.map((checkout, index) => {
      return([
          // <div className="core" key={core.call}>{core}</div>
        <p href="/perif" key={index} data-key={index} onClick={this.handleChange}>{checkout.name} {checkout.price} {checkout.description}</p>
      ])
    })
  }

    return (
      <div>
        <div className="container">
          <form>
          <input className="checkout-input" type="text"></input>
          <input className="checkout-input" type="text"></input>
          <input className="checkout-input" type="text"></input>
          <input className="checkout-input" type="text"></input>
          <a className="checkout-button" href="#">Checkout</a>
          </form>
          <ul className="checkout-items">
            {mappedCheckout}
          </ul>
        </div>
      </div>
    )

  }
  }

export default Checkout;
