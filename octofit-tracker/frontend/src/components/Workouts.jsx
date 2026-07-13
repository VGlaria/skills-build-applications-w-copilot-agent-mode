import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const endpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts`;

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    safeFetch('workouts')
      .then((data) => setWorkouts(data.workouts || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      <p className="notice">Using endpoint: {import.meta.env.VITE_CODESPACE_NAME ? endpoint : 'http://localhost:8000/api/workouts'}</p>
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
