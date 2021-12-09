import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Games from './pages/Games/Games';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';

const About = React.lazy(() => import("./pages/Home/Home"));
const Dashboard = React.lazy(() => import("./pages/NotFound"));


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Games />} />
        <Route path="home" element={<Home/>} />
        <Route path="game" element={<Games/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
