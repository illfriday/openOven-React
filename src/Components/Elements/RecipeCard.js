import React from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import RecipeCarousel from './RecipeCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import styled from 'styled-components';

const RecipeCard = ( props) => {
  return (
    <>
      {props.recipes.map((recipe) => {
        return (
          <Card key={recipe.id} className="col col-md-6 col-lg-4 m-1">
            <Button onClick={() => props.handleToggleBookmark(recipe.id)}>
              <FontAwesomeIcon className="far " icon={faBookmark} size="3x" />
            </Button>
            <RecipeCarousel recipeImages={recipe.images} />
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

const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  z-index: 100;
  position: absolute;
  right: 5px;
`
