import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Recipe.css";

class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }
  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    return (
      <div className="row justify-content-center ">
        <div className="col-sm text-center">
          <div className="row">
            <div className="col-sm-8 text-center">
              <div className="row text-center">
                <h5>SUBTOTAL:</h5>
              </div>
              <div className="row text-center">
                <label>
                  <input
                    type="checkbox"
                    ref="shipping"
                    onChange={this.handleChecked}
                  />
                  <span>Shipping(+6$)</span>
                </label>
              </div>
            </div>
            <div className="col-sm-4 text-end">
              <div className="row justify-content-end">
                <h3>
                  <b>${this.props.total}</b>
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center m-4">
            <div className="col-sm">
              <div className="checkout">
                <Link to="/checkout">
                  <button className="btn-checkout">Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
