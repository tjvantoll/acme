import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RouterContainer from "./components/RouterContainer";
import Calendar from "./components/Calendar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Planning from "./components/Planning";
import Products from "./components/Products";
import Team from "./components/Team";

export default function App() {
  return (
    <Router>
      <RouterContainer>
        <div className="page-container">
          <Switch>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/planning">
              <Planning />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </RouterContainer>
    </Router>
  );
}
