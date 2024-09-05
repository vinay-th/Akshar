import React, { useRef } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import '@excalidraw/excalidraw/dist/excalidraw.min.css';
import axios from 'axios';

const Whiteboard = () => {
  const excalidrawRef = useRef(null);

  const saveAsSVG = async () => {
    if (excalidrawRef.current) {
      const svg = excalidrawRef.current
        .getSceneElements()
        .map((element) => {
          // Convert each element to SVG
          // This is a simplified example, you might need to handle more cases
          return `<svg>${element}</svg>`;
        })
        .join('');

      try {
        const response = await axios.post(
          'http://localhost:5000/api/whiteboard/demo/save-svg',
          {
            svgData: svg,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error('Error saving SVG:', error);
      }
    }
  };

  return (
    <div>
      <Excalidraw ref={excalidrawRef} />
      <button onClick={saveAsSVG}>Save as SVG</button>
    </div>
  );
};

export default Whiteboard;
