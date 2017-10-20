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
