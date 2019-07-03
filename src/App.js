import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Product from "./components/product";
import { setRedeemMsgAction } from "./ducks/products";

import { getProducts, getUserMe, getUserHistory, postPoints, postRedeem } from "./api";
import { sortBy } from "./utils";
// import "./App.css";

function App({ redeemMsg, setRedeemMsg }) {
  const [products, setProducts] = useState([]);
  const [userMe, setUserMe] = useState({});
  const [userHistory, setUserHistory] = useState([]);
  const [pointsMsg, setPointsMsg] = useState({});
  // const [redeemMsg, setRedeemMsg] = useState({});

  function addPoints() {
    postPoints(setPointsMsg, 1000);
  }

  function redeemProduct(productId) {
    postRedeem(setRedeemMsg, productId);
  }

  function sortProductsByPrice(first = "low") {
    const sorted = sortBy(products, first);
    setProducts(sorted);
  }

  function sortProductsByRecent() {
    const sorted = sortBy(products, "high", "_id");
    setProducts(sorted);
  }

  useEffect(() => {
    getProducts(setProducts);
    getUserMe(setUserMe);
    getUserHistory(setUserHistory);

    console.info("- render -");
    if (redeemMsg !== "") {
      const timer = setTimeout(() => {
        setRedeemMsg("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [redeemMsg, pointsMsg, setRedeemMsg]);

  return (
    <div>
      <h1>User</h1>
      <h2>{userMe.name}</h2>
      <h3>{userMe.points}</h3>
      <h3>{userMe._id}</h3>
      <h2>Points</h2>
      <button onClick={addPoints}>Add More Points</button>
      <p>
        {Object.keys(pointsMsg).length && <span>{pointsMsg.message}</span>}
        <br />
        {Object.keys(pointsMsg).length && <span>{pointsMsg["New Points"]}</span>}
      </p>
      <h2>Redeem Product</h2>
      <button onClick={() => redeemProduct("5a0b35d7734d1d08bf7084c9")}>Redeem Switch</button>
      <button onClick={() => redeemProduct("5a0b3648734d1d08bf708502")}>Redeem 3DS</button>
      <h2>User History</h2>
      <ul>
        {userHistory.length ? (
          userHistory.map(i => (
            <li key={i._id + i.createDate}>
              {i.name} ({i.cost})
            </li>
          ))
        ) : (
          <li>No hay compras aún...</li>
        )}
      </ul>
      <h2>Products List</h2>
      <button onClick={() => sortProductsByPrice("low")}>Price LOW to high</button>
      <button onClick={() => sortProductsByPrice("high")}>Price HIGH to low</button>
      <button onClick={() => sortProductsByRecent()}>Recent</button>
      <section>{products.length ? products.map(i => <Product key={i._id} {...i} />) : ""} </section>
    </div>
  );
}

// error: "User don't have enogh points" on redeem post

const mapStateToProps = store => ({
  redeemMsg: store.productsReducer.redeemMsg
});

const mapDispatchToProps = dispatch => ({
  setRedeemMsg: msg => dispatch(setRedeemMsgAction(msg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
