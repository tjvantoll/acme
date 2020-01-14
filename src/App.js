import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import DrawerRouterContainer from "./components/DrawerRouterContainer";
import Forms from "./components/Forms";
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
        </Switch>
      </DrawerRouterContainer>
    </Router>
  );
}
