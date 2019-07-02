import React, { useState, useEffect } from "react";
import { getProducts, getUserMe, getUserHistory, postPoints, postRedeem } from "./api";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [userMe, setUserMe] = useState({});
  const [userHistory, setUserHistory] = useState([]);
  const [pointsMsg, setPointsMsg] = useState({});
  const [redeemMsg, setRedeemMsg] = useState({});

  useEffect(() => {
    getProducts(setProducts);
    getUserMe(setUserMe);
    getUserHistory(setUserHistory);
  }, [pointsMsg, redeemMsg]);

  function addPoints() {
    postPoints(setPointsMsg, 1000);
  }

  function redeemProduct(productId) {
    postRedeem(setRedeemMsg, productId);
  }

  return (
    <div className="App">
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
      <ul>
        {products.length
          ? products.map(i => (
              <li key={i._id}>
                <button onClick={() => redeemProduct(i._id)}>
                  Add: ${i.cost} - {i.name}
                </button>
              </li>
            ))
          : ""}{" "}
      </ul>
    </div>
  );
}

export default App;

// resetear los puntos
// restar putos al usuario, no hay post (redux?)
//
