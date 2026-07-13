import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Users from './components/Users.tsx';
import Teams from './components/Teams.tsx';
import Activities from './components/Activities.tsx';
import Leaderboard from './components/Leaderboard.tsx';
import Workouts from './components/Workouts.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/users" replace />} />
          <Route path="users" element={<Users />} />
          <Route path="teams" element={<Teams />} />
          <Route path="activities" element={<Activities />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="workouts" element={<Workouts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
