import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Endgame from "./pages/Endgame";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/endgame">
          <Endgame />
        </Route>
        <Route path="/ranking">
          <Ranking />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
