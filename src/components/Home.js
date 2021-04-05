import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="col-sm m-3">
          <div className="card" key={item.id}>
            <div className="card-image-top m-3">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="card-body">
              <span className="card-title m-3">
                <h4>{item.title}</h4>
                <h6>Price: {item.desc}$</h6>
              </span>
              <div className="row">
                <div className="col-sm-6">
                  <h5>Price: ${item.price}</h5>
                </div>
                <div className="col-sm-6">
                  <button
                    className="btn btn-danger"
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
        </div>
      );
    });
    return (
      <>
        <div className="container shop justify-content-center mb-5">
          <div className="row m-5">
            <div className="col-sm text-center">
              <h2 className="">Our items</h2>
            </div>
          </div>

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
