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
        {name: 'manufacturer1', price: 30, description: 'high end'},
        {name: 'manufacturer2', price: 20, description: 'mid range'},
        {name: 'manufacturer3', price: 10, description: 'low end'}
        ],
      cpuItems: [
        {name: 'manufacturer1', price: 30, description: 'high end'},
        {name: 'manufacturer2', price: 20, description: 'mid range'},
        {name: 'manufacturer3', price: 10, description: 'low end'}
      ],
      caseItems: [
        {name: 'manufacturer1', price: 30, description: 'high end'},
        {name: 'manufacturer2', price: 20, description: 'mid range'},
        {name: 'manufacturer3', price: 10, description: 'low end'}
      ],
      monitorItems: [
        {name: 'manufacturer1', price: 30, description: 'high end'},
        {name: 'manufacturer2', price: 20, description: 'mid range'},
        {name: 'manufacturer3', price: 10, description: 'low end'}
      ],
      price: []
    }
  }

  render() {

    
    return(
    <Router>
      <div className="App">
        <nav>
        <Link to='/core'>Core</Link>{' '}
        <Link to='/perif'>Perif</Link>{' '}
        <Link to='/processor'>Processor</Link>{' '}
        <Link to='/case'>Case</Link>{' '}
        <Link to='/checkout'>Checkout</Link>{' '}
        </nav>
        <Route path="/core" component={Core} />
        <Route path="/perif" component={Perif} />
        <Route path="/processor" component={Processor} />
        <Route path="/case" component={Case} />
        <Route path="/checkout" component={Checkout} />
      </div>
      </Router>
    );
  }
}

export default App;
