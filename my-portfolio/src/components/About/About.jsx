import React from "react";
import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";
import {assets} from '../../assets/assets.js';

export const About = () => {
    return (
        <>

            {/* About Section */}
            <section className={styles.container} id="about"> <br />
                <h2 className={styles.title}>About</h2>
                <div className={styles.content}>

                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>

                            <div className={styles.aboutItemText}>
                                <h3>👨‍💻 Software Developer</h3>
                                <p>
                                    Experienced in building scalable, high-performance applications with a focus on microservices, event-driven systems, and cloud-native solutions.
                                </p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>

                            <div className={styles.aboutItemText}>
                                <h3>🧠 Full-Stack Engineer</h3>
                                <p>
                                    Skilled in React.js (Next.js), Node.js (Nest.js), Spring Boot, and PostgreSQL. Passionate about delivering real-time, secure systems with robust CI/CD pipelines.
                                </p>
                                <br />
                            </div>
                        </li>
                        <li className={styles.aboutItem}>

                            <div className={styles.aboutItemText}>
                                <h3>🔐 Backend Specialist</h3>
                                <p>
                                    Expertise in REST/GraphQL APIs, Kafka, gRPC, and security protocols like OAuth 2.0, JWT, and RBAC. Proven experience in optimizing systems for 1M+ daily transactions.
                                </p>
                            </div>
                        </li>
                         <li className={styles.aboutItem}>

                            <div className={styles.aboutItemText}>
                                <h3>☁️ Cloud & DevOps</h3>
                                <p>
                                    Hands-on with AWS, Azure, Terraform, Docker, Prometheus, and Grafana. Focus on performance, scalability, and secure deployments.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};