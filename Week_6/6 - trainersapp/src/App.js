import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import TrainersList from './trainerslist';
import trainersMock from './trainersmock';
import TrainerDetail from './trainerdetail'; // Make sure this import is here

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Academy Trainers App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainersMock} />} />
          {/* This route is key for TrainerDetail. Make sure it's exactly "/trainers/:trainerId" */}
          <Route path="/trainers/:trainerId" element={<TrainerDetail trainers={trainersMock} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;