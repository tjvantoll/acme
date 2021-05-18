import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RouterContainer from "./components/RouterContainer";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import Support from "./components/Support";
import Home from "./components/Home";
import Planning from "./components/Planning";
import Products from "./components/Products";
import Team from "./components/Team";
import Play from "./components/Play";

export default function App() {
  return (
    <Router>
      <RouterContainer>
        <div className="page-container">
          <Switch>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/support">
              <Support />
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
            <Route path="/play">
              <Play />
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
