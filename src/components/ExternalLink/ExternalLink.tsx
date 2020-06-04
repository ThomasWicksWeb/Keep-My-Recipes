import React from "react";
import classnames from "classnames";
import styles from "./ExternalLink.module.scss";

type ExternalLinkProps = {
  text: string;
  icon: string;
  href: string;
  className: string;
};

const ExternalLink = ({ text, icon, href }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      className={classnames(
        "helpingMarginLR noWrap is-size-6",
        styles.textHighlight,
        styles.hvrSweepToRight,
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <strong>
        {text} <i className={icon}></i>
      </strong>
    </a>
  );
};

export default ExternalLink;
