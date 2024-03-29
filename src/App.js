import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RECIPES } from "./shared/recipes";
import Header from "./Components/Elements/Header";
import Main from "./Components/Pages/Main";
import User from "./Components/Pages/User";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: RECIPES,

    }

    this.toggleBookmark = this.toggleBookmark.bind(this);
  }
  
  toggleBookmark(id) {
    const newState = [...this.state.recipes];
    newState[id].isBookmarked = !newState[id].isBookmarked;
    console.log(newState[id].isBookmarked);

    this.setState({recipes: newState})
  }
  //   this.setState((currentState) => {
  //     const recipe = currentState.recipes.find((recipe) => recipe.id === id);
  //     recipe.isBookmarked = !recipe.isBookmarked;
  //     console.log(recipe);

  //     return {
  //       recipes: [recipe]
  //  }
  // }


  render () {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  recipes={this.state.recipes}
                  handleToggleBookmark={this.toggleBookmark}
                />
              )}
            />
            <Route
              exact
              path="/user"
              render={() => <User handleToggleBookmark={this.toggleBookmark} bookmarked={this.state.recipes.isBookmarked}/>}
            />
          </Switch>
        </Router>
      </div>
    );
    }
    
  }


export default App;
