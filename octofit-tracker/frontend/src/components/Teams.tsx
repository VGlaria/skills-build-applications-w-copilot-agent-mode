import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const Teams = () => {
  const [teams, setTeams] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    safeFetch<{ teams: any[] }>('teams')
      .then((data) => setTeams(data.teams || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Teams</h2>
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
