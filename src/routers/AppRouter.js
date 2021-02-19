import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ChartCoin } from "../components/ChartCoin";
import Coins from "../components/Coins";

export default function AppRouter() {
  return (
    <Router>
        <div>
        <Switch>
          <Route path="/chart/:id" component = {ChartCoin}/>
          <Route path="/" component = {Coins} />
            
        </Switch>
      </div>
    </Router>
  );
}