import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const endpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams`;

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    safeFetch('teams')
      .then((data) => setTeams(data.teams || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      <p className="notice">Using endpoint: {import.meta.env.VITE_CODESPACE_NAME ? endpoint : 'http://localhost:8000/api/teams'}</p>
      {error && <p className="error">{error}</p>}
      <ul>
        {teams.map((team) => (
          <li key={team._id}>
            {team.name} — {team.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Teams;
