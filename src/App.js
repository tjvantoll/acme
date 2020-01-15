import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DrawerRouterContainer from "./components/DrawerRouterContainer";
import Forms from "./components/Forms";
import Home from "./components/Home";
import Products from "./components/Products";
import Team from "./components/Team";

export default function App() {
  return (
    <Router>
      <DrawerRouterContainer>
        <Switch>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </DrawerRouterContainer>
    </Router>
  );
}
