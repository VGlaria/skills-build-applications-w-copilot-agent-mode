import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    safeFetch<{ leaderboard: any[] }>('leaderboard')
      .then((data) => setLeaderboard(data.leaderboard || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      {error && <p className="error">{error}</p>}
      <ol>
        {leaderboard.map((entry) => (
          <li key={entry._id}>
            {entry.user?.name || 'Unknown'} — Rank {entry.rank} — {entry.score}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Leaderboard;
