import React from 'react';
import styles from './CohortDetails.module.css';
function CohortDetails({ cohort }) {
  const { name, status, startDate, coach, trainer } = cohort;
  const nameStyle = {
    color: status === 'Ongoing' ? 'green' : 'blue', /
    fontWeight: 'bold', 
    marginBottom: '8px' 
  };

  return (
    <div className={styles.box}>
      {/* h3 element displaying the cohort name with conditional inline style */}
      <h3 style={nameStyle}>{name}</h3>
      <dl> {/* Definition List to organize key-value pairs of details */}
        <dt>Started On</dt>
        <dd>{startDate}</dd> {/* Definition Description for 'Started On' date */}

        <dt>Current Status</dt>
        <dd>{status}</dd> {/* Definition Description for 'Current Status' */}

        <dt>Coach</dt>
        <dd>{coach}</dd> {/* Definition Description for 'Coach' */}

        <dt>Trainer</dt>
        <dd>{trainer}</dd> {/* Definition Description for 'Trainer' */}
      </dl>
    </div>
  );
}

export default CohortDetails;
