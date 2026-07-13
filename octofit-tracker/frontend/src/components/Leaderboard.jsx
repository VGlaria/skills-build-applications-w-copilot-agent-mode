import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const endpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard`;

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    safeFetch('leaderboard')
      .then((data) => setLeaderboard(data.leaderboard || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      <p className="notice">Using endpoint: {import.meta.env.VITE_CODESPACE_NAME ? endpoint : 'http://localhost:8000/api/leaderboard'}</p>
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
