import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Products from "./containers/products/";
import { setRedeemMsgAction, selectRedeemMsg } from "./ducks/productsDuck";

import { getUserMe, getUserHistory, postPoints } from "./api";

function App({ redeemMsg, setRedeemMsg }) {
  const [userMe, setUserMe] = useState({});
  const [userHistory, setUserHistory] = useState([]);
  const [pointsMsg, setPointsMsg] = useState({});

  function addPoints() {
    postPoints(setPointsMsg, 1000);
  }

  useEffect(() => {
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
      <Products />
    </div>
  );
}

// error: "User don't have enogh points" on redeem post

const mapStateToProps = store => ({
  redeemMsg: selectRedeemMsg(store)
});

const mapDispatchToProps = dispatch => ({
  setRedeemMsg: msg => dispatch(setRedeemMsgAction(msg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
