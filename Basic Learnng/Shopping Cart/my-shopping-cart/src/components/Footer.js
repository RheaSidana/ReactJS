import React from "react";

function Footer(props) {
  return (
    <div className="container mt-5 fixed-bottom bg-dark text-white">
      <div className="row px-2 py-2 align-items-center border border-success rounded-top rounded-bottom">
        <div className="col-6 d-flex flex-rows">
          <div className="col-6 h3">Total Items : {props.itemCount}</div>
          <div className="h3">Total Amount : {props.totalAmount}</div>
        </div>
        <div className="col-3 h3">
          <button
            className="px-5 py-2 btn btn-danger btn-block"
            onClick={props.resetCart}
          >
            Reset
          </button>
        </div>
        <div className="col-3 h3">
          <button className="px-5 py-2 btn btn-success btn-block">
            Confirm and Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
