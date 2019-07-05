import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Products from "./containers/products/";
import User from "./containers/user/";
import History from "./containers/history/";

function App() {
  return (
    <Router>
      <User />
      <Link to="/">Home</Link>
      <Link to="/history">Redeem History</Link>
      <Route path="/" exact component={Products} />
      <Route path="/history" component={History} />
    </Router>
  );
}

export default App;
