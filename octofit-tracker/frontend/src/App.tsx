import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>OctoFit Tracker</h1>
          <p>
            Set <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to enable Codespaces API routing.
          </p>
        </div>
        <nav className="app-nav">
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
