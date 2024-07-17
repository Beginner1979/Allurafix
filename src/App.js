import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new-video" element={<NewVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
