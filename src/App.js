import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Products from "./containers/products/";
import User from "./containers/user/";
import History from "./containers/history/";

import { WrapperGap } from "./styles/Mixins";

function App() {
  return (
    <Router>
      <WrapperGap gap={20}>
        <User />
        <Link to="/">Home</Link>
        <Link to="/history">Redeem History</Link>
        <Route path="/" exact component={Products} />
        <Route path="/history" component={History} />
      </WrapperGap>
    </Router>
  );
}

export default App;
