//import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.slice(0, 4).map(stat => (
          <li key={stat.id} className={styles.item}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
