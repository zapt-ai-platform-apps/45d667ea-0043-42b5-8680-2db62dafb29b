import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Leaderboard from './pages/Leaderboard';
import Resources from './pages/Resources';

export default function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <Router>
        <Navigation />
        <div className="p-4 h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
        <footer className="p-4 text-center">
          <a className="cursor-pointer" href="https://www.zapt.ai" target="_blank" rel="noreferrer">
            Made on ZAPT
          </a>
        </footer>
      </Router>
    </div>
  );
}