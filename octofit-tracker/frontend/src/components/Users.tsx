import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    safeFetch<{ users: any[] }>('users')
      .then((data) => setUsers(data.users || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.role}) — {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Users;
