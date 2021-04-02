import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

import { FaShoppingBag } from "react-icons/fa";

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="col-sm m-3">
          <div className="card" key={item.id}>
            <div classname="row m-3 justify-content-end">
              <div classname="col-sm text-end">
                <FaShoppingBag
                  size={20}
                  onClick={() => {
                    this.handleClick(item.id);
                  }}
                />
              </div>
            </div>

            <div className="card-image-top">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="card-body">
              <span className="card-title">
                <h4>{item.title}</h4>
              </span>

              <h6>Price: {item.price}$</h6>
            </div>
          </div>
        </div>
      );
    });
    return (
      <>
        <div className="container">
          <h2 className="text-center m-5">Our items</h2>
          <div className="row">{itemList}</div>
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
