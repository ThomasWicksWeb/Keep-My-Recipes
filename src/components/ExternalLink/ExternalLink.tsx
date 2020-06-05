import React, { useContext } from "react";
import classnames from "classnames";
import styles from "./ExternalLink.module.scss";

import { ThemeContext } from "../../contexts/ThemeContext";

type ExternalLinkProps = {
  text: string;
  icon: string;
  href: string;
  className: string;
};

const ExternalLink = ({ text, icon, href }: ExternalLinkProps) => {
  // Theme Context
  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  return (
    <a
      href={href}
      className={classnames(
        "helpingMarginLR noWrap is-size-6",
        styles.textHighlight,
        styles.hvrSweepToRight
      )}
      target="_blank"
      rel="noopener noreferrer"
      style={{background: LocalTheme.buttonBackground}}
    >
      <strong style={{color: LocalTheme.syntax}}>
        {text} <i className={icon}></i>
      </strong>
    </a>
  );
};

export default ExternalLink;
