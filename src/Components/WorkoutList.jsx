import React from 'react';
import WorkoutItem from './WorkoutItem';

function WorkoutList({ workouts }) {
  return (
    <div>
      <h2>Workouts</h2>
      {workouts.map((workout, index) => (
        <WorkoutItem key={index} workout={workout} />
      ))}
    </div>
  );
}

export default WorkoutList;
