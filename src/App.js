import React, { Component } from 'react';
import './App.css';
import Core from './Core';
import Perif from './Perif';
import Processor from './Processor';
import Case from './Case';
import Checkout from './Checkout';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coreItems: [
        {name: 'manufacturer1', price: 30, description: 'high end', id: 0},
        {name: 'manufacturer2', price: 20, description: 'mid range', id: 1},
        {name: 'manufacturer3', price: 10, description: 'low end', id: 2}
        ],
      processorItems: [
        {name: 'manufacturer1', price: 30, description: 'high end', id: 0},
        {name: 'manufacturer2', price: 20, description: 'mid range', id: 1},
        {name: 'manufacturer3', price: 10, description: 'low end', id: 2}
      ],
      caseItems: [
        {name: 'manufacturer1', price: 30, description: 'high end', id: 0},
        {name: 'manufacturer2', price: 20, description: 'mid range', id: 1},
        {name: 'manufacturer3', price: 10, description: 'low end', id: 2}
      ],
      perifItems: [
        {name: 'manufacturer1', price: 30, description: 'high end', id: 0},
        {name: 'manufacturer2', price: 20, description: 'mid range', id: 1},
        {name: 'manufacturer3', price: 10, description: 'low end', id: 2}
      ],
      price: [],
      checkoutItem: []
    }
    this.handleCore = this.handleCore.bind(this);
    this.handleProcessor = this.handleProcessor.bind(this);
    this.handleCase = this.handleCase.bind(this);
    this.handlePerif = this.handlePerif.bind(this);
  }

  handleCore(id) {
    let tempArr = [];
    var result = this.state.coreItems.filter(function( obj ) {
      return obj.id == id;
      });
    tempArr.push(result).toString();
    // let string = function(tempArr) {
    //   tempArr.toString();
    // }
    // string()
    // let string = tempArr.toString();
    // console.log("string: ", string);
    this.setState({
      checkoutItem: tempArr
    });
    console.log("checkoutItem: ", this.state.checkoutItem);
  }

  handleProcessor(id) {
    let tempArr = [];
    var result = this.state.processorItems.filter(function( obj ) {
      return obj.id == id;
      });
    tempArr.push(result).toString();
      this.setState({
      checkoutItem: tempArr
    });
    console.log("checkoutItem: ", this.state.checkoutItem);
  }
  handleCase(id) {
    let tempArr = [];
    var result = this.state.caseItems.filter(function( obj ) {
      return obj.id == id;
      });
    let push = tempArr.push(result);
    this.setState({
      checkoutItem: push
    })
  }
  handlePerif(id) {
    let tempArr = [];
    var result = this.state.perifItems.filter(function( obj ) {
      return obj.id == id;
      });
    let push = tempArr.push(result);
    this.setState({
      checkoutItem: push
    })
  }

  render() {


    return(
    <div>
      <Router>
        <div className="App">
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
            </div>
          </div>
        </div>

          <Route path="/core" render={() => <Core coreItems={this.state.coreItems}
                  handleCore = {this.handleCore}
                  />} />
          <Route path="/processor" render={() => <Processor processorItems={this.state.processorItems}
                  handleProcessor = {this.handleProcessor}
                  />} />
          <Route path="/case" render={() => <Case caseItems={this.state.caseItems}
                  handleCase = {this.handleCase}
                  />} />
          <Route path="/perif" render={() => <Perif perifItems={this.state.perifItems}
                  handlePerif = {this.handlePerif}
                  />} />
          <Route path="/checkout" render={() => <Checkout checkoutItems={this.state.checkoutItems} />} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
