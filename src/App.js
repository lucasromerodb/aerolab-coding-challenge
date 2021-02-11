import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Products from "./containers/Products/";
import Navigation from "./containers/Navigation";
import History from "./containers/History/";

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
