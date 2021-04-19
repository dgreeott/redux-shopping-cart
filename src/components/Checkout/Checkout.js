import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addToCart,
} from "../actions/cartActions";

import "./Checkout.css"

class Cart extends Component {
  handleRemove = (id) => {
    this.props.removeItem(id);
  };

  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <>
          <div className="row justify-content-center">
          <div className="col-sm-8">

          </div>
          <div className="col-sm-4">
              
          </div>

          </div>  
          </>
        );
      })
    ) : (
      <>
        <div className="row">
          <div className="col-sm">
            <h1>Your Cart Is Empty...</h1>
          </div>
        </div>
      </>
    );
    return (
      <div className="container checkout justify-content-center mb-5">
        <div className="row m-5">
          <div className="col-sm text-center m-3">
            <h2>You have ordered:</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
