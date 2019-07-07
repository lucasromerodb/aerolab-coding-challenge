import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Products from "./containers/products/";
import Navigation from "./containers/navigation";
import History from "./containers/history/";

import { Wrapper } from "./styles/Mixins";

function App() {
  return (
    <Router>
      <Wrapper>
        <Navigation />
        <Route path="/" exact component={Products} />
        <Route path="/history" component={History} />
      </Wrapper>
    </Router>
  );
}

export default App;
