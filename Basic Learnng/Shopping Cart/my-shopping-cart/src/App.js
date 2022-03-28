import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer.js";

function App() {
  const itemsInCart = 0;
  const cartTotalAmount = 0;
  const Products = [
    {
      price: 600,
      name: "T Shirt",
      qty: 10,
      qtyToCart: 0,
    },
    {
      price: 800,
      name: "Denim",
      qty: 10,
      qtyToCart: 0,
    },
    {
      price: 1200,
      name: "Coat",
      qty: 8,
      qtyToCart: 0,
    },
  ];

  let [shoppingProducts, setShoppingProductsToCart] = useState(Products);
  let [shoppingItemCount, setShoppingItemCount] = useState(itemsInCart);
  let [shoppingCartTotalAmount, setShoppingCartTotalAmount] =
    useState(cartTotalAmount);

  let incrementQtyToCart = (index) => {
    let newProducts = [...shoppingProducts];
    newProducts[index].qtyToCart++;
    incrementCartItemCount(1);
    incrementCartTotalAmount(newProducts[index].price);
    setShoppingProductsToCart(newProducts);
  };

  let decrementQtyFromCart = (index) => {
    let newProducts = [...shoppingProducts];
    if (newProducts[index].qtyToCart > 0) {
      newProducts[index].qtyToCart--;
      decrementCartItemCount(1);
      decrementCartTotalAmount(newProducts[index].price);
    }
    setShoppingProductsToCart(newProducts);
  };
  let resetQtyOfCart = (index) => {
    decrementCartItemCount(shoppingProducts[index].qtyToCart);
    //console.log("item count" + itemsInCart);
    decrementCartTotalAmount(
      shoppingProducts[index].qtyToCart * shoppingProducts[index].price
    );
    //console.log("total count" + cartTotalAmount);
    let newProducts = [...shoppingProducts];
    newProducts[index].qtyToCart = 0;
    setShoppingProductsToCart(newProducts);
  };

  let resetCart = () => {
    setShoppingProductsToCart(Products);
    setShoppingItemCount(0);
    setShoppingCartTotalAmount(0);
  };

  let incrementCartItemCount = () => {
    setShoppingItemCount(++shoppingItemCount);
  };

  let decrementCartItemCount = (count) => {
    setShoppingItemCount(shoppingItemCount - count);
  };

  let incrementCartTotalAmount = (price) => {
    setShoppingCartTotalAmount(shoppingCartTotalAmount + price);
  };

  let decrementCartTotalAmount = (price) => {
    setShoppingCartTotalAmount(shoppingCartTotalAmount - price);
  };

  return (
    <React.Fragment>
      <Navbar />
      <main className="container mt-5">
        <div className="h1 d-flex justify-content-center ">
          Shopping Products List
        </div>
        <ProductList
          Products={shoppingProducts}
          incrementQtyToCart={incrementQtyToCart}
          decrementQtyFromCart={decrementQtyFromCart}
          resetQty={resetQtyOfCart}
        />
      </main>
      <Footer
        resetCart={resetCart}
        itemCount={shoppingItemCount}
        totalAmount={shoppingCartTotalAmount}
      />
    </React.Fragment>
  );
}

export default App;
