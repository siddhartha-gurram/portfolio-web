import React from "react";
import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import {assets} from '../../assets/assets.js';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <p>All rights reserved © 2025</p>
        </div>
        <div className={styles.madeWithLove}>
          <p>Made with ❤ by Siddhartha Gurram</p>
        </div>
      </div>
    </footer>
  );
};
