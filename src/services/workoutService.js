// Simulated backend service with mock data
const mockWorkouts = [
    { id: 1, name: 'Push-ups', sets: 3, reps: 10 },
    { id: 2, name: 'Squats', sets: 3, reps: 12 },
    { id: 3, name: 'Pull-ups', sets: 3, reps: 8 },
  ];
  
  export const getWorkouts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockWorkouts);
      }, 500); // Simulating network delay
    });
  };
  
  export const addWorkout = (workout) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newWorkout = { ...workout, id: Date.now() };
        mockWorkouts.push(newWorkout);
        resolve(newWorkout);
      }, 500); // Simulating network delay
    });
  };
  