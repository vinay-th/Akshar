import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Akshar</h1>
      <Link to="/faculty/demo/whiteboard">Go to Demo Whiteboard</Link>
    </div>
  );
}

export default Home;
