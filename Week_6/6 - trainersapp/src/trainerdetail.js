import React from 'react';
import { useParams } from 'react-router-dom';

function TrainerDetail({ trainers }) {
  const { trainerId } = useParams();
  const trainer = trainers.find(t => t.trainerid === trainerId);

  if (!trainer) {
    return <h2>Trainer Not Found</h2>;
  }

  // Render trainer details
  return (
    <div>
      <h2>Trainer Details</h2>
      <p><strong>ID:</strong> {trainer.trainerid}</p>
      <p><strong>Name:</strong> {trainer.name}</p>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>
      <p><strong>Technology:</strong> {trainer.technology}</p>
      <p><strong>Skills:</strong> {trainer.skills && trainer.skills.join(', ')}</p>
    </div>
  );
}

export default TrainerDetail;