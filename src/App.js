import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/core/header/Header";
import Lobby from "./components/lobby/Lobby";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NewMatch from "./components/newMatch/NewMatch";

const App = () => (
  <Router>
    <Header />
    <div className="container-fluid pt-4">
      <Route path="/" exact component={Home} />
      <Route path="/lobby" component={Lobby} />
      <Route path="/newmatch" component={NewMatch} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default App;
