import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const Workouts = () => {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    safeFetch<{ workouts: any[] }>('workouts')
      .then((data) => setWorkouts(data.workouts || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id}>
            {workout.title} — {workout.durationMinutes} min ({workout.difficulty})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Workouts;
