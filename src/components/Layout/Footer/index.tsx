import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FunctionComponent = () => (
  <footer className={styles.footer} data-testid="footer">
    <span>
      <a href="https://www.example.com/privacy-policy.html">Privacy Policy</a>
    </span>
  </footer>
);

export default Footer;
