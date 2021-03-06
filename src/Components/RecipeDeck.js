import React, { Component } from 'react';
import { CardDeck, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class RecipeDeck extends Component {

  render() {
    const recipeDeck = this.props.recipes.map(recipe => {
      return (
        <Card key={recipe.id} className="col col-md-6 col-lg-4 m-1">
          <CardImg src={recipe.image} alt={recipe.name} />
          <CardBody>
            <CardTitle>{recipe.name}</CardTitle>
            <CardText>{recipe.description}</CardText>
          </CardBody>
        </Card>
      );
    })
    return (
      <div className="container">
        <div className="row" width="100%">
          <CardDeck>{recipeDeck}</CardDeck>
        </div>
      </div>
    );
  }
}

export default RecipeDeck;