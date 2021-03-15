import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RECIPES } from './shared/recipes';
import Header from './Components/Header'
import Main from "./Components/Main";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: RECIPES
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/" render={() => <Main recipes={this.state.recipes} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
