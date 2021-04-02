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
        <div className="row m-3">
          <div className="col-sm-8">
            
          </div>
          <div className="col-sm-4">
            <div className="collection">
            <div className="row"><li className="collection-item">
                <h3>
                  Total: <b>${this.props.total}</b>
                </h3>
              </li></div>
            <div className="row"><li className="collection-item">
                <label>
                  <input
                    type="checkbox"
                    ref="shipping"
                    onChange={this.handleChecked}
                  />
                  <span>Shipping(+6$)</span>
                </label>
                
              </li></div>
            <div className="row"><div className="checkout">
              <button className="btn btn-secondary">Checkout</button>
            </div></div>
              
              
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
