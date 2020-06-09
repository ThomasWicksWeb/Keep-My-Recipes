import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import styles from "./Recipes.module.scss";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

import { db } from "../../App";

const Recipes = () => {
  const { userState } = useContext(AuthContext);

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

    console.log("Called FireStore!");
    return storedRecipes;
  }

  return (
    <main>
      <p>Recipes</p>
      <ToastContainer />
      <Helmet>
        <title>Recipes | Keep My Recipes</title>
        <meta name="description" content="View all your recipes..." />
      </Helmet>
    </main>
  );
};

export default Recipes;
