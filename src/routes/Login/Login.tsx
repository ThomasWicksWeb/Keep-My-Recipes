import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";

import firebase from "firebase";
import classnames from "classnames";

import "bulma/css/bulma.css";
import styles from "./Login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

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
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        history.push("/recipes");
      })
      .catch(function (error) {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <section className={classnames("section", styles.LoginBackground)}>
      <div className={classnames("box", styles.ContentContainer)}>
        <ToastContainer />

        <h3 className="has-text-weight-bold has-text-centered is-size-3">
          Login
        </h3>
        <h3 className="has-text-weight-bold has-text-centered is-size-4">
          with Username or Email
        </h3>

        <form onSubmit={handleOnSubmit} className={styles.formContainer}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Email"
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
                placeholder="Password"
                required
                value={password}
                onChange={handlePassword}
              />
            </div>
          </div>
          <button className="button is-info has-text-weight-bold" type="submit">
            Login
          </button>

          <hr />

          <p className="has-text-centered">
            Don't have an account? <Link to="/createaccount">Create one</Link>
          </p>

          <p className="has-text-centered">
            Having trouble logging in?{" "}
            <Link to="/resetpassword">Reset your password</Link>
          </p>
        </form>
      </div>
      <Helmet>
        <title>Login | Keep My Notes</title>
        <meta
          name="description"
          content="Login to your Keep My Notes account"
        />
      </Helmet>
    </section>
  );
};

export default Login;
