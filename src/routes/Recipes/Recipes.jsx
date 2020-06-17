import React, { useState, useEffect, useContext } from "react";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

import styles from "./Recipes.module.scss";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import classnames from "classnames";

// Recipe-realted components
import { RecipeList } from "../../components/RecipeList";
import { SingleRecipe } from "../../components/SingleRecipe";

import { db } from "../../App";

const Recipes = () => {
  // Logged in user object
  const { userState } = useContext(AuthContext);
  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  const [AllRecipes, setAllRecipes] = useState([]); // All recipes
  const [SelectedRecipe, setSelectedRecipe] = useState(null);

  // Calls function to get all recipes from FireStore on component load
  useEffect(() => {
    if (userState) {
      getCollectionData(userState.uid).then(setAllRecipes);
    }
  }, [userState]);

  // If the user's ID hasn't loaded, show nothing
  if (!userState) {
    return <></>;
  }

  const setRecipeToShow = (RecipeID) => {
    setSelectedRecipe(RecipeID);
  };

  // Gets recipes from FireStore
  async function getCollectionData(uid) {
    const snapshot = await db
      .collection("users")
      .doc(uid)
      .collection("recipes")
      .orderBy("Title", "desc")
      .get();

    const storedRecipes = await Promise.all(
      snapshot.docs.map(async (doc) => await doc.data())
    );

    return storedRecipes;
  }

  return (
    <section className={classnames("section", styles.PageContainer)}>
      <div className="container">
        <h1
          className="has-text-weight-bold is-size-2 has-text-dark-grey"
          style={{ color: LocalTheme.syntax }}
        >
          Recipes
        </h1>

        <ToastContainer />
        <main className={styles.MainContainer}>
          <div className={styles.RecipeListContainer}>
            <RecipeList
              AllRecipes={AllRecipes}
              setRecipeToShow={setRecipeToShow}
            />
          </div>
          <div className={styles.SingleRecipeContainer}>
            <SingleRecipe RecipeID={SelectedRecipe} AllRecipes={AllRecipes} />
          </div>
        </main>
        <Helmet>
          <title>Recipes | Keep My Recipes</title>
          <meta name="description" content="View all your recipes..." />
        </Helmet>
      </div>
    </section>
  );
};

export default Recipes;
