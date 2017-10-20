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
    //use if we want to do something with the information after checkout
  }

  render() {

    const flat = this.props.checkoutItem.reduce((total, amount) => {
      return total.concat(amount);
    }, []);
    const flatter = flat.reduce((total, amount) => {
      return total.concat(amount);
    }, []);
    console.log(flat);
    console.log(flatter);
    var mappedCheckout = flatter.map((checkout, index) => {
      return([
        <p href="/perif" key={index} data-key={index} onClick={this.handleChange}>
              <p className="name">{checkout.name}</p>
              <p className="price">{checkout.price}</p>
              </p>
      ])
    })
    console.log(mappedCheckout)

    return (
      <div>
        <div className="container">
          <h1>Checkout</h1>
          <form>
            <h3>Shipping Address</h3>
              <div>
                First Name: <input className="textbox" type="text"/>
                Last Name: <input className="textbox" type="text"/>
              </div>
              <div>
                Address: <input className="textbox" type="text"/>
                Address 2: <input className="textbox" type="text"/>
              </div>
              City: <input className="textbox" type="text"/>
              State: <input className="textbox" type="text"/>
              Zip Code: <input className="textbox" type="text"/>
          </form>
          <form>
            <h3>Payment Information</h3>
              <div>
                Credit Card:  <input type="radio" input="MasterCard"/>
                              <input type="radio" input="Visa"/>
                              <input type="radio" input="American Express"/>
              </div>
              <div>
                Card Number: <input className="textbox" type="text"/>
              </div>
              <div>
              Expiration Date: <input type="date"/>
              </div>
              Cardholder Name: <input className="textbox" type="text"/>
              <div>
              CSV: <input className="textbox" type="text"/>
              </div>
          </form>
          <form>
            <h3>Shipping</h3>
              <div>
              <input type="radio"/> Standard: 5-7 Days
              </div>
              <div>
              <input type="radio"/> Standard: 5-7 Days
              </div>
              <div>
              <input type="radio"/> Standard: 5-7 Days
              </div>
          </form>
          <ul className="checkout-items">
            <h3>Review</h3>
            <span className="name">Product</span>
            <span className="Price">Price</span>
            <span>Total</span>
            <hr/>
            {mappedCheckout}
            <button type="submit">Submit Order</button>
          </ul>
        </div>
      </div>
    )

  }
  }

export default Checkout;
