import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

import firebase from "firebase";
import { db } from "../../App";

import styles from "./CreateAccount.module.scss";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        db.collection("users").doc();
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            db.collection("users").doc(user.uid).set({
              username
            });
          } else {
          }
        });
        history.push("/recipes");
      })
      .catch(function (error) {
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };

  return (
    <section className="section">
      <div className="container">
        <h3 className="has-text-weight-bold has-text-centered is-size-3">
          Create Account
        </h3>

        <ToastContainer />

        <form onSubmit={handleOnSubmit} className={styles.formContainer}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="What do you want to be called?"
                required
                value={username}
                onChange={handleUsername}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={handleEmail}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Sshh... Don't tell anyone!"
                required
                value={password}
                onChange={handlePassword}
              />
            </div>
          </div>

          <button className="button is-info has-text-weight-bold" type="submit">
            Create Account
          </button>

          <p className="has-text-centered">
            Already have an account? <Link to="/login">Login</Link>
          </p>

          <p className="has-text-centered">
            Having trouble logging in?{" "}
            <Link to="/resetpassword">Reset your password</Link>
          </p>
        </form>
      </div>
      <Helmet>
        <title>Create Account | Keep My Notes</title>
        <meta name="description" content="Create your Keep My Notes account" />
      </Helmet>
    </section>
  );
};

export default CreateAccount;
