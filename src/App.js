import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import RecipeDeck from './Components/RecipeDeck';
import { RECIPES } from './shared/recipes'
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
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">openOven</NavbarBrand>
          </div>
        </Navbar>
        <RecipeDeck recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
