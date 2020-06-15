import React from "react";

type RecipeListProps = {
  AllRecipes: Array<object>;
};

const RecipeList = ({ AllRecipes }: RecipeListProps) => {
  // EXAMPLE RECIPE OBJECT
  // Title: "Ice Cream Sundae"
  // Description: "A delicious ice cream and banana snack!"
  // ingredients: "pepper, eggs, milk, red pepper"
  // instructions: "Preheat so you can cook idiot"
  // tags: "tasty, dessert, delicious"
  // recipeID: 1234


  const MappedRecipeList = AllRecipes.map((e: any) => {
    return (
      <li key={e.recipeID}>
        <p>hello {e.Title}</p>
      </li>
    );
  });

  return (
    <main>
      <ul>{MappedRecipeList}</ul>
    </main>
  );
};

export default RecipeList;
