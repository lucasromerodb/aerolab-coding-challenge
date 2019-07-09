import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Products from "./containers/products/";
import Navigation from "./containers/navigation";
import History from "./containers/history/";

import { Wrapper } from "./styles/Mixins";

function App() {
  return (
    <Wrapper>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/history" component={History} />
          <Route component={Products} />
        </Switch>
      </HashRouter>
    </Wrapper>
  );
}

export default App;
