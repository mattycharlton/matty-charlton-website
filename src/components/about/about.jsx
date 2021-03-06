import React, { Fragment } from 'react';
import styles from './about.scss';
import picture from '../../images/profile-pic.png';

const About = ({ title, subTitle }) => {
    return <section className={styles.section}>
        <div className={styles.left_content}>
            <img src={picture}></img>
        </div>
        <div className={styles.right_content}>
            <h2>Hey I'm Matty!</h2>
            <p>I'm a UK based front end engineer focused on creating clean & user‑friendly websites, apps and anything digital. Currently working as a Developer for an amazing agency called MMT Digital. Working as an integral part of the Client Support Team developing and applying new features, rebranding and fixing production issues for high profile clients.</p>
        </div>
    </section>
};

export default About;