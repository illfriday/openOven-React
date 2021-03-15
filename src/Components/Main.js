import React from 'react';
import { CardDeck } from 'reactstrap';
import RecipeCard from './RecipeCard';


const Main = ({recipes}) => {

    return (
      <div className="container">
        <div className="row" width="100%">
          <CardDeck>
            <RecipeCard recipes={recipes} />
          </CardDeck>
        </div>
      </div>
    );
    
}

export default Main;