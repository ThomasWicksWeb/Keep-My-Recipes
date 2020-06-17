import React, { useContext } from "react";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./RecipeList.module.scss";

type RecipeListProps = {
  AllRecipes: Array<object>;
  setRecipeToShow: Function;
};

const RecipeList = ({ AllRecipes, setRecipeToShow }: RecipeListProps) => {
  // EXAMPLE RECIPE OBJECT
  // Title: "Ice Cream Sundae"
  // Description: "A delicious ice cream and banana snack!"
  // ingredients: "pepper, eggs, milk, red pepper"
  // instructions: "Preheat so you can cook idiot"
  // tags: "tasty, dessert, delicious"
  // recipeID: 1234

  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  const MappedRecipeList = AllRecipes.map((e: any) => {
    return (
      <li
        key={e.recipeID}
        style={{ color: LocalTheme.syntax }}
        className={styles.ListItem}
        onClick={() => setRecipeToShow(e.recipeID)}
      >
        <h2 className="is-size-4 has-text-weight-bold">{e.Title}</h2>
        <p>{e.Description}</p>
      </li>
    );
  });

  return <ul>{MappedRecipeList}</ul>;
};

export default RecipeList;
