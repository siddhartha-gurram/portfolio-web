import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils"; // Commented out as per your original code
import {assets} from '../../assets/assets.js'; // Assuming assets are correctly imported

export const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // This effect runs an interval that increments 'count'
    // It stops when count reaches 6.
    // As of this code, 'count' is not directly rendered in the UI,
    // so this might be for a future feature or an internal animation trigger.
    if (count >= 6) return;

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 150); // Update every 150 milliseconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [count]); // Rerun effect when count changes

  return (
    <section className={styles.container}>
      <div className={styles.content}> <br />
        <h1 className={styles.title}>Hi, I'm Siddhartha Gurram</h1>
        <p className={styles.description}>
          Software Developer @Addepar | Ex-LTIMindtree | Full-Stack Engineer | Cloud & DevOps Enthusiast | Microservices & Security Expert
          <br /><br />
          Experienced in building scalable full-stack apps using Node.js, Spring Boot, React.js, and deploying secure, high-performance systems on AWS & Azure.
        </p>
        <a href="https://www.linkedin.com/in/siddhartha29" className={styles.connectBtn}>
          Connect +
        </a>
      </div>
      <img
        src={assets.mypic_icon} // Using assets.mypic_icon as per your component
        alt="image of Siddhartha Gurram"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};