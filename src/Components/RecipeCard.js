import React from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import RecipeCarousel from './RecipeCarousel';

const RecipeCard = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <Card key={recipe.id} className="col col-md-6 col-lg-4 m-1">
            <RecipeCarousel recipe={recipe} />
            <CardBody>
              <CardTitle>{recipe.name}</CardTitle>
              <CardText>{recipe.description}</CardText>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default RecipeCard;
