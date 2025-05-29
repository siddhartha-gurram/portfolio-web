import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import {assets} from '../../assets/assets.js';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      {/* Removed <br /> here, will control spacing with CSS */}
      <h2 className={styles.title}>Skills & Experience</h2>
      {/* Removed <br /> <br /> here, will control spacing with CSS */}
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  {/* Assuming skill.imageSrc is a key in your assets object */}
                  <img src={assets[skill.imageSrc]} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        {/* Removed <br /> here, will control spacing with CSS */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* Assuming historyItem.imageSrc is a key in your assets object */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, idx) => { // Changed id to idx for inner map
                      return <li key={idx}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};