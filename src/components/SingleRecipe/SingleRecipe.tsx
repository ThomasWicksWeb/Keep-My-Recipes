import React, { useContext } from "react";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

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
  // AllRecipes: Array<object>;
  AllRecipes: any;
  RecipeID: string;
};

const SingleRecipe = ({ AllRecipes, RecipeID }: SingleRecipeProps) => {
  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  if (RecipeID !== null) {
    const FoundRecipe = AllRecipes.find((e: any) => e.recipeID === RecipeID);
    console.log("Found recipe is: ", FoundRecipe)
    return <div>{FoundRecipe.Title}</div>;
  } else {
    return <>No item selected</>;
  }
};

export default SingleRecipe;
