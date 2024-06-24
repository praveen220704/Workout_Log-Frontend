import React, { useState, useEffect } from 'react';
import WorkoutForm from '../Components/WorkoutForm';
import WorkoutList from '../Components/WorkoutList';
import { getWorkouts, addWorkout } from '../services/workoutService';

function DashboardNav() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const data = await getWorkouts();
    setWorkouts(data);
  };

  const handleAddWorkout = async (workout) => {
    const newWorkout = await addWorkout(workout);
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <div className="App">
      <h1>Workout Log</h1>
      <WorkoutForm onAddWorkout={handleAddWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default DashboardNav;
