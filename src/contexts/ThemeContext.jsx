import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLightTheme, setTheme] = useState(true);

  const theme = {
    light: {
      syntax: "black",
      backgroundColorLight: "white",
      backgroundColorDark: "#fafafa",
      "&:hover": {
        underline: "#333"
      }
    },
    dark: {
      syntax: "white",
      backgroundColorLight: "#1f2b46",
      backgroundColorDark: "#17223b",
      buttonBackground: "#e54242",
      linkText: "lightskyblue",
      "&:hover": {
        underline: "white"
      }
    },
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
