import { useEffect, useState } from 'react';
import { safeFetch } from './ApiClient';

const endpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    safeFetch('users')
      .then((data) => setUsers(data.users || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Users</h2>
      <p className="notice">Using endpoint: {import.meta.env.VITE_CODESPACE_NAME ? endpoint : 'http://localhost:8000/api/users'}</p>
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
