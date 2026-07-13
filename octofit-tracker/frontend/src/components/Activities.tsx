import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const Activities = () => {
  const [activities, setActivities] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    safeFetch<{ activities: any[] }>('activities')
      .then((data) => setActivities(data.activities || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Activities</h2>
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
