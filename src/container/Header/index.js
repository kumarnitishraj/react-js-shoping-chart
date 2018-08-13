import React, { Component } from 'react';
import '../../App.css';


class Header extends Component {
  render() {
    return (
      <div className="header col-md-12 col-sm-12 col-xs-12">
        <header>
            <h1>
                {'YOUR SHOPPING CART'}
            </h1>
            <h6>
                {'If the cart is empty we can fill products for you'}
            </h6>
        </header>       
      </div>
    );
  }
}

export default Header;
