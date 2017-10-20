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
          <img src="http://www.xoticpc.com/media/wysiwyg/landingpages/store_fronts/xpc-desktops/gx12-destroyer-a.png" />
          <div className="component">
            <h1>Other</h1>
          </div>
          <div className="mainDesc">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <ul>
            {mappedCheckout}
          </ul>
        </div>
      </div>
    )
  }
  }

export default Checkout;
