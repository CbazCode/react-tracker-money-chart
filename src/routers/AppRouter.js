import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ChartCoin } from "../ChartCoin";
import Coins from "../Coins";

export default function AppRouter() {
  return (
    <Router>
        <div>
        <Switch>
          <Route path="/chart" component = {ChartCoin}/>
          <Route path="/" component = {Coins} />
            
        </Switch>
      </div>
    </Router>
  );
}