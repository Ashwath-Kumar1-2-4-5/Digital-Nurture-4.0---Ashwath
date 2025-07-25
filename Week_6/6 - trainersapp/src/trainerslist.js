import React from 'react';
import { Link } from 'react-router-dom';

function TrainersList({ trainers }) {
  return (
    <div>
      <h2>Trainers List</h2>
      <ul>
        {trainers.map(trainer => (
          <li key={trainer.trainerid}>

            <Link to={`/trainers/${trainer.trainerid}`}>
              {trainer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainersList;