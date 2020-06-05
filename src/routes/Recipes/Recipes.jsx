import React, { useState, useContext } from "react";

import AuthContext from '../../contexts/AuthContext'
import styles from "./Recipes.module.scss";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';

import { db } from '../../App'

const Recipes = () => {

  const { userState } = useContext(AuthContext);

  const [AllRecipes, setAllRecipes] = useState([]);


  async function getCollectionData() {
    const snapshot = await db
      .collection('users')
      .doc(userState.uid)
      .collection('Notes')
      .orderBy('LastEdit', 'desc')
      .get();
    const storedRecipes = await Promise.all(
      snapshot.docs.map(async (doc) => await doc.data())
    );
    return storedRecipes;
  }

  return (
    <main>
      <ToastContainer /> 
      <Helmet>
        <title>Notes | Keep My Notes</title>
        <meta name="description" content="View all your notes..." />
      </Helmet>
    </main>
  );
};

export default Recipes;
