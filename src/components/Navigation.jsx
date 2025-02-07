import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-200">
      <NavLink to="/" className="cursor-pointer text-blue-600" end>
        Home
      </NavLink>
      <NavLink to="/quiz" className="cursor-pointer text-blue-600">
        Quiz
      </NavLink>
      <NavLink to="/results" className="cursor-pointer text-blue-600">
        Results
      </NavLink>
      <NavLink to="/leaderboard" className="cursor-pointer text-blue-600">
        Leaderboard
      </NavLink>
      <NavLink to="/resources" className="cursor-pointer text-blue-600">
        Resources
      </NavLink>
    </nav>
  );
}