import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ExternalLink } from "../ExternalLink";

function AppFooter() {
  // Theme Context
  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  return (
    <footer className="footer" style={{background: LocalTheme.backgroundColorDark, color: LocalTheme.syntax}}>
      <div className="content has-text-centered">
        <p className="is-size-6">
          <strong style={{color: LocalTheme.syntax}}>Keep My Recipes</strong> by{" "}
          <ExternalLink
            text="Thomas Wicks,"
            href="https://thomaswicks.com/"
            icon=""
            className="text-highlight hvr-sweep-to-right has-text-weight-bold"
          ></ExternalLink>{" "}
          created as a personal project
        </p>
        <p className="is-size-6">
          If you'd like to support this website, please consider my{" "}
          <ExternalLink
            text="Buy Me a Coffee"
            href="https://www.buymeacoffee.com/thomaswicks"
            icon=""
            className="is-size-6 hvr-sweep-to-right text-highlight has-text-weight-bold"
          ></ExternalLink>{" "}
          ☕ page. Thank you!{" "}
        </p>
        <p className="is-size-6">
          Curious about the code? Check out the{" "}
          <ExternalLink
            text="GitHub repository"
            href="https://github.com/ThomasWicksWeb/Keep-My-Recipes"
            icon=""
            className="is-size-6 hvr-sweep-to-right text-highlight has-text-weight-bold"
          ></ExternalLink>{" "}
        </p>
        <p className="is-size-6">
          Site last updated <strong style={{color: LocalTheme.syntax}}>May 26th, 2020</strong>
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
