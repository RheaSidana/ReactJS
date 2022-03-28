import React, { useState } from "react";

export default function Product(props) {
  // function decrementQty() {}
  return (
    <div className="row px-2 py-2 align-items-center border border-primary rounded-top rounded-bottom">
      <div className="col-2">
        <p className="h2 bg-dark text-danger">{props.product.name}</p>
      </div>
      <div className="col-2">
        <span className="badge bg-warning text-dark">
          <p className="h3">₹{props.product.price}</p>
        </span>
      </div>
      <div className="col-2">
        <span className="badge bg-info text-dark">
          <p className="h3">
            (Available:{props.product.qty - props.product.qtyToCart})
          </p>
        </span>
      </div>
      <div className="col-2">
        <div className="h5">
          Add to Cart:
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                props.decrementCartQty(props.productIndex);
                // console.log(
                //   "Product:" +
                //     props.product.name +
                //     " Qty: Cart" +
                //     props.product.qtyToCart
                // );
              }}
            >
              -
            </button>
            <button type="button" className="btn btn-outline-success">
              {props.product.qtyToCart}
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                props.incrementCartQty(props.productIndex);
                // console.log(
                //   "Product:" +
                //     props.product.name +
                //     " Qty: Cart" +
                //     props.product.qtyToCart
                // );
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="col-2">
        <span className="badge badge-pill bg-primary">
          <p className="h5">
            Cost Payable:
            <span className="badge bg-light text-info badge-pill">
              {props.product.price * props.product.qtyToCart}
            </span>
          </p>
        </span>
      </div>
      <div className="col-2">
        <button
          className="px-5 py-2 btn btn-danger btn-block"
          onClick={() => {
            props.resetQty(props.productIndex);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
