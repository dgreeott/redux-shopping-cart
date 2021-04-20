import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";

import "./Home.css"

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="col-sm mb-3">
          <div className="card" key={item.id}>
            <div className="card-image ml-4 mr-4 mt-4">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="card-body">
              <span className="card-title">
                <h4>{item.title}</h4>
              </span>
              <div className="row justify-content-center mb-2">
                <h2>${item.price}</h2>
              </div>
              <div className="row justify-content-center">
                <button
                  className="btn-add"
                  onClick={() => {
                    this.handleClick(item.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <>
        <div className="container shop justify-content-center pb-5">
          <div className="row pb-5">{itemList}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
