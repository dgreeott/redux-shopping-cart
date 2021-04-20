import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../actions/cartActions";
import Recipe from "../Recipe/Recipe";
import * as AiIcons from "react-icons/ai";

import "./Cart.css"

class Cart extends Component {
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <>
            <div className="row new-item" key={item.id}>
              <div className="col-sm-4">
                <div className="item-img">
                  <img src={item.img} alt={item.img} />
                </div>
              </div>

              <div className="col-sm-5">
                <div className="row">
                  <h2>
                    <b>{item.title}</b>
                  </h2>
                </div>
                <div className="row">
                  <p>
                    Quantity: <b>{item.quantity}</b>
                  </p>
                </div>
              </div>
              <div className="col-sm-3 justify-content-center">
                <div className="row justify-content-end mb-2">
                  <AiIcons.AiOutlineClose
                    onClick={() => {
                      this.handleRemove(item.id);
                    }}
                    size={20}
                  />
                </div>
                <div className="row justify-content-end">
                  <h4>${item.price}</h4>
                </div>
              </div>
            </div>
          </>
        );
      })
    ) : (
      <>
        <div className="row justify-content-center m-3">
          <div className="col-sm text-center">
            <h1>Your Cart Is Empty...</h1>
          </div>
        </div>
      </>
    );
    return (
      <div className="container checkout justify-content-center mb-5">
        <div className="row">
          <div className="col-sm text-center">
            <h2>Your Cart</h2>
          </div>
        </div>
        <div className="row item justify-content-center">
          <div className="col-sm">{addedItems}</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm text-center">
            <Recipe />
          </div>
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
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
