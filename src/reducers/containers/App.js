import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

// import * as reducers from '../reducers';

// const reducer = combineReducers(reducers);
// const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hello, world.</h1>
        </div>
      </div>
    );
  }
}
