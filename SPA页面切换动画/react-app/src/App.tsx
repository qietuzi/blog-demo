import {
  Switch,
  Route,
  NavLink,
  Redirect,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { Component } from "react";
import A from "./views/A";
import B from "./views/B";
import C from "./views/C";

import "./assets/App.css";

const indexs: { [key: string]: number } = {
  "/a": 0,
  "/b": 1,
  "/c": 2,
};

class App extends Component<RouteComponentProps> {
  currentIndex = 0

  render() {
    const { location } = this.props;
    const index = indexs[location.pathname] || 0;
    const rightIn = index >= this.currentIndex
    const className = rightIn ? "right-slide-in" : "left-slide-in";
    this.currentIndex = index
    return (
      <div id="app">
        <div id="nav">
          <NavLink to="/a" activeClassName="router-link-exact-active">
            Page A
          </NavLink>
          |
          <NavLink to="/b" activeClassName="router-link-exact-active">
            Page B
          </NavLink>
          |
          <NavLink to="/c" activeClassName="router-link-exact-active">
            Page C
          </NavLink>
        </div>
        <TransitionGroup>
          <CSSTransition
            timeout={800}
            key={location.key}
            classNames={"child-view " + className}
          >
            <Switch>
              <Route exact path="/">
                <Redirect to={{ pathname: "/a" }} />
              </Route>
              <Route exact path="/a">
                <A />
              </Route>
              <Route exact path="/b">
                <B />
              </Route>
              <Route exact path="/c">
                <C />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
