import React, { useState, useEffect } from "react";

import Products from "./containers/products/";
import User from "./containers/user/";

import { getUserHistory } from "./api";

function App() {
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    getUserHistory(setUserHistory);
    console.info("- render -");
  }, []);

  return (
    <div>
      <User />
      <hr />
      <Products />
      <hr />
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
    </div>
  );
}

// error: "User don't have enogh points" on redeem post

export default App;
