import React from "react";

import Products from "./containers/products/";
import User from "./containers/user/";
import History from "./containers/history/";

function App() {
  return (
    <div>
      <User />
      <hr />
      <Products />
      <hr />
      <History />
    </div>
  );
}

export default App;
