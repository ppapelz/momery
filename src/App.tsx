import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/" element={<Navigate to ="/home" />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
