import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Herosection from './pages/Herosection';
import Whiteboard from './components/Whiteboard.jsx';

function App2() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/teachers/whiteboard" element={<Whiteboard />} />
      </Routes>
    </div>
  );
}

export default App2;
