import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Whiteboard from './components/Whiteboard';
import Home from './components/Home';

function App2() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/faculty/demo/whiteboard">Demo Whiteboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<div>Test route works</div>} />
        <Route path="/faculty/:uniqueId/whiteboard" element={<Whiteboard />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App2;
