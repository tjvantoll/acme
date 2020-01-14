import React from "react";
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from "react-router-dom";
import { Avatar } from "@progress/kendo-react-layout";

import "./App.css";

import Forms from "./components/Forms";
import Team from "./components/Team";

const user = {
  initials: "TV",
  name: "TJ VanToll",
  position: "Developer Advocate",
  img: "https://pbs.twimg.com/profile_images/1029805644310827008/wkAPO_XC_400x400.jpg"
};

export default function App() {
  return (
    <Router>
      <div className="header">
        <h1>
          ACME Industries
          {/*<Avatar shape="rounded" type="image">
            <img alt={user.name} src={user.img} />
          </Avatar>*/}
          <Avatar shape="rounded" type="initials">
            <span>{user.initials}</span>
          </Avatar>
        </h1>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/forms">Join</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
