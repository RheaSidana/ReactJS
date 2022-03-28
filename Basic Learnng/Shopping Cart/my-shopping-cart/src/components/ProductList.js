import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  //console.log(props.Products);
  //console.log(React.version);
  return props.Products.map((product, k) => {
    return(
      <div className="py-2">
        <Product
          product={product}
          key={k}
          incrementCartQty={props.incrementQtyToCart}
          productIndex = {k}
          decrementCartQty={props.decrementQtyFromCart}
          resetQty={props.resetQty}
        />
      </div>
    );
  });
}
