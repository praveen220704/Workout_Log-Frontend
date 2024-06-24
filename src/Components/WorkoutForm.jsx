import React, { useState } from 'react';

function WorkoutForm({ onAddWorkout }) {
  const [name, setName] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || sets <= 0 || reps <= 0) return;
    const workout = { name, sets, reps };
    onAddWorkout(workout);
    setName('');
    setSets(0);
    setReps(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(parseInt(e.target.value))}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
