import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Main from './components/main/main'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
