import React from 'react';

function WorkoutItem({ workout }) {
  return (
    <div>
      <h3>{workout.name}</h3>
      <p>Sets: {workout.sets}</p>
      <p>Reps: {workout.reps}</p>
    </div>
  );
}

export default WorkoutItem;
