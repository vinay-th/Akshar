import React from 'react';
import { Tldraw } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css';

const Whiteboard = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <Tldraw />
    </div>
  );
};

export default Whiteboard;
