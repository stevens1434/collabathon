import React, { Component } from 'react';

class Case extends Component {
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
    this.props.handleCase(id);
    //setstate of selected item, possibly at item like data-id to grab array[i] info
    //call function in app.js
  }

  render() {
    var mappedCase = this.props.caseItems.map((cases, index) => {
      return([
          // <div className="core" key={core.call}>{core}</div>
          <div key={index}>
            <p href="/perif" key={index} onClick={this.handleChange}><strong data-id={index}>{cases.name}</strong></p>
            <p>Price: {cases.price}</p> <p>Description: {cases.description}</p>
          </div>
      ])
    })

    return (
      <div>
        <div className="col-lg-12 text-center">
          <div className="container">
          <div className="bubble-container">
                           <a href="/core">
                             <div className="bubble"></div>
                           </a>
                           <a href="/core">
                             <h3 className="bubble-text">Core</h3>
                           </a>
                           <a href="/case">
                             <div className="bubble"></div>
                           </a>
                           <a href="/case">
                             <h3 className="bubble-text">Case</h3>
                           </a>
                           <a href="/perif">
                             <div className="bubble"></div>
                           </a>
                           <a href="/perif">
                             <h3 className="bubble-text">Perif</h3>
                           </a>
                           <a href="/checkout">
                             <div className="bubble"></div>
                           </a>
                           <a href="/checkout">
                             <h3 className="bubble-text-checkout">Checkout</h3>
                           </a>
                       </div>
            <div className="info">
              <div className="img-div-case">
                <img src="http://www.xoticpc.com/media/wysiwyg/landingpages/store_fronts/xpc-desktops/gx12-destroyer-a.png" />
              </div>
              <div className="page-header-case">
                <h1>Tower</h1>
              </div>

              <div className="main-desc">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <div className="items">
                <ul className="list-unstyled">
                  {mappedCase}
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }

export default Case;
