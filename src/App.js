import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DrawerRouterContainer from "./components/DrawerRouterContainer";
import Calendar from "./components/Calendar";
import Forms from "./components/Forms";
import Home from "./components/Home";
import Products from "./components/Products";
import Team from "./components/Team";

export default function App() {
  return (
    <Router>
      <DrawerRouterContainer>
        <div className="page-container">
          <Switch>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/forms">
              <Forms />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </DrawerRouterContainer>
    </Router>
  );
}
