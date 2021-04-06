import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./actions/cartActions";
import Recipe from "./Recipe";
import * as AiIcons from "react-icons/ai";

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
            <div className="row">
              <li className="collection-item" key={item.id}>
                <div className="row">
                  <div className="col-sm">
                    <div className="item-img">
                      <img src={item.img} alt={item.img} className="" />
                    </div>
                  </div>

                  <div className="col-sm">
                    <div className="row justify-content-center">
                      <div className="col-sm">
                        <span className="title">
                          <h2>
                            <b>{item.title}</b>
                          </h2>
                        </span>
                        <div className="row add-remove justify-content-center">
                          <div className="col-sm">
                            <p>
                              Quantity: <b>{item.quantity}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 justify-content-center">
                    <div className="row justify-content-center">
                      <div className="col-sm text-center">
                        <AiIcons.AiOutlineClose
                          onClick={() => {
                            this.handleRemove(item.id);
                          }}
                          size={30}
                        />
                      </div>
                    </div>
                    <div className="row justify-content-end">
                      <div className="col-sm text-end">
                        <h4>
                          ${item.price}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
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
        <div className="row">
          <ul className="collection">{addedItems}</ul>
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
