import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { ListItems } from "./ListItems.js";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems justify-content-end sticky-top">
          <div className="col-sm-3">
            <Link to="/" className="brand-logo ">
              <h2>Shopping</h2>
            </Link>
          </div>
          <div className="col-sm-9">
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {ListItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
      </nav>
    );
  }
}

export default Navbar;
