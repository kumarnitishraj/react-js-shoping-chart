import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';


class App extends Component {

  render() {
    return (
      <div className="App container">
        <div className="row">
            <Header />
            <Content />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
