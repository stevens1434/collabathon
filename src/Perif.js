import React, { Component } from 'react';

class Perif extends Component {
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
    this.props.handlePerif(id);
    //setstate of selected item, possibly at item like data-id to grab array[i] info
    //call function in app.js
  }

  render() {
    var mappedPerif = this.props.perifItems.map((perif, index) => {
      return([
          // <div className="core" key={core.call}>{core}</div>
          <div key={index}>
            <p href="/perif" key={index} onClick={this.handleChange}><strong data-id={index}>{perif.name}</strong></p>
            <p>Price: {perif.price}</p> <p>Description: {perif.description}</p>
          </div>
      ])
    })

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
            {mappedPerif}
          </ul>
        </div>
      </div>
    )
  }
  }

export default Perif;
