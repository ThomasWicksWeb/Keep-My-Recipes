import React, { useState, useEffect, useContext } from "react";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

import styles from "./Recipes.module.scss";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

// Recipe-realted components
import { RecipeList } from "../../components/RecipeList";

import { db } from "../../App";

const Recipes = () => {
  // Logged in user object
  const { userState } = useContext(AuthContext);
  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  // All recipes
  const [AllRecipes, setAllRecipes] = useState([]);

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
    <section className="section">
      <main
        className="container"
      >
        <h1
          className="has-text-weight-bold is-size-2 has-text-dark-grey"
          style={{ color: LocalTheme.syntax }}
        >
          Recipes
        </h1>

        <ToastContainer />
        <RecipeList AllRecipes={AllRecipes} />
        <Helmet>
          <title>Recipes | Keep My Recipes</title>
          <meta name="description" content="View all your recipes..." />
        </Helmet>
      </main>
    </section>
  );
};

export default Recipes;
