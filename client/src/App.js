import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Search } from "./components/Search"
import Books from "./components/Books";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main">

        {/* Navigation */}
        <Nav />

        {/* Jumbotron */}
        <Jumbotron />

        {/* Wrapper */}
        <Wrapper>

          {/* Main Content */}
          <Router>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/search" component={Search} />
              <Route path="/books" component={Books} />
            </Switch>
          </Router>
        </Wrapper>

      </div>
    )
  }
}

export default App;