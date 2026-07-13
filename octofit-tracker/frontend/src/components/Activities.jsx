import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const endpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities`;

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    safeFetch('activities')
      .then((data) => setActivities(data.activities || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      <p className="notice">Using endpoint: {import.meta.env.VITE_CODESPACE_NAME ? endpoint : 'http://localhost:8000/api/activities'}</p>
      {error && <p className="error">{error}</p>}
      <ul>
        {activities.map((activity) => (
          <li key={activity._id}>
            {activity.type} — {activity.durationMinutes} min — {activity.caloriesBurned} cal
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Activities;
