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
    let tempObj = [];
    var result = this.state.coreItems.filter(function( obj ) {
      return obj.id == id;
      });
    result.toString();
    tempObj.push(result).toString();
    this.setState(function (previousState, props) {
     return {
      score: previousState.checkoutItem.push(tempObj)
     }
    });
    console.log("checkoutItem: ", this.state.checkoutItem);
  }

  handleProcessor(id) {
    let tempArr = [];
    var result = this.state.processorItems.filter(function( obj ) {
      return obj.id == id;
      });
    tempArr.push(result).toString();
    this.setState(function (previousState, props) {
     return {
      score: previousState.checkoutItem.push(tempArr)
     }
    });
    console.log("checkoutItem: ", this.state.checkoutItem);
  }
  handleCase(id) {
    let tempArr = [];
    var result = this.state.caseItems.filter(function( obj ) {
      return obj.id == id;
      });
    tempArr.push(result).toString();
    this.setState(function (previousState, props) {
     return {
      score: previousState.checkoutItem.push(tempArr)
     }
    });
    console.log("checkoutItem: ", this.state.checkoutItem);
  }
  handlePerif(id) {
    let tempArr = [];
    var result = this.state.perifItems.filter(function( obj ) {
      return obj.id == id;
      });
    tempArr.push(result).toString();
    this.setState(function (previousState, props) {
     return {
      score: previousState.checkoutItem.push(tempArr)
     }
    });
    console.log("checkoutItem: ", this.state.checkoutItem);
  }

  render() {


    return(
    <div>
      <Router>
        <div className="App">
          <nav>
          <Link to='/core'></Link>{' '}
          <Link to='/processor'></Link>{' '}
          <Link to='/case'></Link>{' '}
          <Link to='/perif'></Link>{' '}
          <Link to='/checkout'></Link>{' '}
          </nav>
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
          <Route path="/checkout" render={() => <Checkout checkoutItem={this.state.checkoutItem} />} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
