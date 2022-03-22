import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer.js";

function App() {
  const Products =[
    {
      price: 1000,
      name: "t-shirt",
      qty: 2
    },
    {
      price: 800,
      name: "denim",
      qty: 3
    },
    {
      price: 1200,
      name: "coat",
      qty: 1
    }
  ];
  return (
    <React.Fragment>
      <Navbar />
      <ProductList Products={Products}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
