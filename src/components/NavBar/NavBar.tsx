import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

// Toast notifications
import { toast, ToastContainer } from "react-toastify";

// Import Auth Context
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

import firebase from "firebase";
import "./NavBar.module.scss";

const NavBar = () => {
  const { userState } = useContext(AuthContext);

  const history = useHistory();

  // Theme Context
  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  // Handles user logout
  const handleLogout = () => {
    firebase.auth().signOut();
    toast.success("Successfully logged out", {
      position: "top-center",
    });
    history.push("/login");
  };

  const AuthDependantButtons = () => {
    if (!userState) {
      return (
        <div className="buttons">
          <Link className="button is-info" to="/createaccount">
            <strong>Sign Up</strong>
          </Link>
          <Link className="button is-light" to="/login">
            <strong>Login</strong>
          </Link>
        </div>
      );
    } else {
      return (
        <>
          <Link to="/recipes" className="navbar-item">
            <strong
              style={{
                color: LocalTheme.syntax,
              }}
            >
              My Recipes
            </strong>
          </Link>
          <Link to="/account" className="navbar-item">
            <strong
              style={{
                color: LocalTheme.syntax,
              }}
            >
              Account
            </strong>
          </Link>
          <Link to="/settings" className="navbar-item">
            <strong
              style={{
                color: LocalTheme.syntax,
              }}
            >
              Settings
            </strong>
          </Link>
          <button className="button is-info" onClick={handleLogout}>
            <strong>Logout</strong>
          </button>
        </>
      );
    }
  };
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{
        background: LocalTheme.backgroundColorDark,
        color: LocalTheme.syntax,
      }}
    >
      <ToastContainer />
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-item is-size-3 ScriptFont"
          style={{
            color: LocalTheme.syntax,
          }}
        >
          Keep My Recipes
        </Link>
        <button
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/about" className="navbar-item">
            <strong
              style={{
                color: LocalTheme.syntax,
              }}
            >
              About
            </strong>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">{AuthDependantButtons()}</div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
