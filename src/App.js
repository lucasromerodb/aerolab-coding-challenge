import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Products from "./containers/products/";
import Navigation from "./containers/navigation";
import History from "./containers/history/";

import { Wrapper } from "./styles/Mixins";

function App() {
  return (
    <HashRouter>
      <Wrapper>
        <Navigation />
        <Route path="/" exact component={Products} />
        <Route path="/history" component={History} />
        <Route component={Products} />
      </Wrapper>
    </HashRouter>
  );
}

export default App;
