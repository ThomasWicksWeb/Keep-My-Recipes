import React, { useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Firebase services
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Styling
import "bulma"; // Styles app on a global level
import "./BulmaFixes.scss";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import { ThemeContext } from "./contexts/ThemeContext";

// Components
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

// Routes
import { Splash } from "./routes/Splash";
import { Login } from "./routes/Login";
import { CreateAccount } from "./routes/CreateAccount";
import { Recipes } from "./routes/Recipes";
import { Account } from "./routes/Account";
import { Settings } from "./routes/Settings";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBU_wMuhdT9-v4DTBw1e1ijZWBX9OpME7Y",
  authDomain: "keepmyrecipes-7843a.firebaseapp.com",
  databaseURL: "https://keepmyrecipes-7843a.firebaseio.com",
  projectId: "keepmyrecipes-7843a",
  storageBucket: "keepmyrecipes-7843a.appspot.com",
  messagingSenderId: "914159830666",
  appId: "1:914159830666:web:64c305465e102f3e240f73",
  measurementId: "G-XFMZMQ56VM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();

function App() {
  // Theme Context
  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <main style={{ backgroundColor: LocalTheme.backgroundColorLight }}>
          <Route exact path="/" component={Splash} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/settings" component={Settings} />
        </main>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
