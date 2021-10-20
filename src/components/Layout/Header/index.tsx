import React from "react";
import styles from "./header.module.scss";

const Header: React.FunctionComponent = () => (
  <header className={styles.header} data-testid="header">
    <a aria-label="home" data-testid="logo-link" href="/">
      Donation Box
    </a>
  </header>
);

export default Header;
