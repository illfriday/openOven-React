import React from 'react';
import { CardDeck } from 'reactstrap';
import RecipeCard from '../Elements/RecipeCard';


const Main = (props) => {

    return (
      <div className="container">
        <div className="row" width="100%">
          <CardDeck>
            <RecipeCard recipes={props.recipes} handleToggleBookmark={props.handleToggleBookmark}/>
          </CardDeck>
        </div>
      </div>
    );
    
}

export default Main;