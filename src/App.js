import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/core/header/Header";
import Lobby from "./components/lobby/Lobby";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Chat from "./components/chatBox/chat/Chat";

const App = () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/lobby" component={Lobby} />
    <Route path="/chat" component={Chat} />
    <Route path="/about" component={About} />
  </Router>
);

export default App;
