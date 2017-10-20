import React, { Component } from 'react';
import './App.css';

class Core extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: [],
      selectedItem: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log("handleChange() in Core.js: ", e.target.getAttribute('data-id'));
    var id = e.target.getAttribute('data-id');
    this.props.handleCore(id);
    //setstate of selected item, possibly at item like data-id to grab array[i] info
    //call function in app.js
  }

  render() {
    var mappedCore = this.props.coreItems.map((core, index) => {
      return([
          // <div className="core" key={core.call}>{core}</div>
        <div key={index}>
          <p href="/perif" key={index} onClick={this.handleChange}><strong data-id={index}>{core.name}</strong></p>
          <p>Price: {core.price}</p> <p>Description: {core.description}</p>
        </div>
      ])
    })

    return (
      <div>
        <div className="container">
          <div className="img-div">
              <img alt="asdfa" src="http://www.xoticpc.com/media/wysiwyg/landingpages/store_fronts/xpc-desktops/gx12-destroyer-a.png" />
          </div>
          <div className="core-items">
            <div className="page-header">
              <h1>Tower</h1>
            </div>
              <h3 className="highlight">Motherboard</h3>
              <h3>CPU</h3>
              <h3>Processor</h3>
              <h3>RAM</h3>
              </div>
            <div className="main-desc">
              <h3>MotherBoard</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="items">
            <ul>
              {mappedCore}
            </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default Core;
