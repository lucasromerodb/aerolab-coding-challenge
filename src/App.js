import React, { useState, useEffect } from "react";
import { baseUrl, headers } from "./api";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState({});

  async function fetchProducts(method = "GET") {
    const res = await fetch(`${baseUrl}/products`, { method, headers });
    res
      .json()
      .then(products => setProducts(products))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Challenge</h1>
      <ul>{products.length ? products.map(p => <li key={p._id}>{p.name}</li>) : ""} </ul>
    </div>
  );
}

export default App;
