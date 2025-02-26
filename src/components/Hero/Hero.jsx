import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi I'm Ishaaq </h1>
        <p className={styles.description}>
          I am a full stack developer with 5 years of experience with React and JS!
        </p>
        <a href="mailto:hawkotf2@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img src="assets/hero/heroImage.png" alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
