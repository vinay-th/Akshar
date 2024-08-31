import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Whiteboard from './components/Whiteboard';
import Home from './components/Home'; // Create this component if it doesn't exist

function App2() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whiteboard" element={<Whiteboard />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App2;
