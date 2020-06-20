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

  // Maps all the recipe objects for Title/Desc preview 'parent' list
  const MappedRecipeList = AllRecipes.map((e: any) => {

    const DescText = () => {
      if (e.Description.length > 65) {
        return <span>{e.Description.substring(0, 65)}...</span>;
      } else {
        return <span>{e.Description}</span>;
      }
    };

    return (
      <li
        key={e.recipeID}
        style={{ color: LocalTheme.syntax }}
        className={styles.ListItem}
        onClick={() => setRecipeToShow(e.recipeID)}
      >
        <h2 className="is-size-4 has-text-weight-bold">{e.Title}</h2>
        {/* <p>{e.Description.substring(0, 65)}...</p> */}
        <p>{DescText()}</p>
      </li>
    );
  });

  return <ul>{MappedRecipeList}</ul>;
};

export default RecipeList;
