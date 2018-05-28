import React, { Component } from 'react';
import Topbar from './layout/navbar';
import List from './solicitudes/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <List/>
      </div>
    );
  }
}

export default App;
