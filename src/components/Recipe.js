import React, { Component } from "react";
import { connect } from "react-redux";

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
      <div className="row justify-content-center">
        <div className="col-sm-6 text-center">
          <div className="collection">
            <div className="row justify-content-center">
              <li className="collection-recipe">
                <h3>
                  Total: <b>${this.props.total}</b>
                </h3>
              </li>
            </div>
            <div className="row justify-content-center">
              <li className="collection-recipe">
                <label>
                  <input
                    type="checkbox"
                    ref="shipping"
                    onChange={this.handleChecked}
                  />
                  <span>Shipping(+6$)</span>
                </label>
              </li>
            </div>
            <div className="row justify-content-center">
              <div className="checkout">
                <button className="btn btn-secondary">Checkout</button>
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
