import React, { useContext } from "react";

// Contexts
import { ThemeContext } from "../../../contexts/ThemeContext";

// EXAMPLE RECIPE OBJECT
// Title: "Ice Cream Sundae"
// Description: "A delicious ice cream and banana snack!"
// ingredients: "pepper, eggs, milk, red pepper"
// instructions: "Preheat so you can cook idiot"
// tags: "tasty, dessert, delicious"
// recipeID: 1234

type SingleRecipeProps = {
  Recipe: {
    Title: string;
    Description: string;
    ingredients: string;
    instructions: string;
    tags: string;
    recipeID: string;
  };
};

const SingleRecipeTemplate = ({ Recipe }: SingleRecipeProps) => {
  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  return (
    <div style={{color: LocalTheme.syntax}}>
      <h2>{Recipe.Title}</h2>
      <h2>{Recipe.Description}</h2>
      <h2>{Recipe.ingredients}</h2>
    </div>
  )
};

export default SingleRecipeTemplate;
