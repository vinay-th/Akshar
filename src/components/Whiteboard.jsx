import React, { useState, useCallback, Suspense, lazy } from 'react';
import axios from 'axios';

const Excalidraw = lazy(() =>
  import('@excalidraw/excalidraw').then((module) => ({
    default: module.Excalidraw,
  }))
);

const Whiteboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const onExcalidrawAPIMount = useCallback((api) => {
    setExcalidrawAPI(api);
  }, []);

  const SaveButton = () => {
    const saveAsSVG = async () => {
      if (!isLoggedIn) {
        alert('Please log in to save SVG');
        return;
      }

      try {
        if (!excalidrawAPI) {
          console.error('Excalidraw API is undefined');
          alert('Failed to access the drawing');
          return;
        }

        const { exportToSvg } = await import('@excalidraw/excalidraw');
        const elements = excalidrawAPI.getSceneElements();
        if (elements.length === 0) {
          alert('No content to save');
          return;
        }

        const svg = await exportToSvg({
          elements,
          appState: excalidrawAPI.getAppState(),
          files: excalidrawAPI.getFiles(),
        });

        const svgString = new XMLSerializer().serializeToString(svg);
        console.log('SVG string length:', svgString.length);
        console.log('SVG string preview:', svgString.substring(0, 100) + '...');

        if (svgString.length > 16777216) {
          // 16MB limit for MongoDB documents
          alert('SVG is too large to save. Please simplify your drawing.');
          return;
        }

        const response = await axios.post(
          '/api/whiteboard/save-svg',
          {
            svgData: svgString,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Full server response:', response);
        if (response.status !== 200) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        console.log('Server response:', response.data);
        alert('SVG saved successfully!');
      } catch (error) {
        console.error('Error saving SVG:', error);
        console.error('Error response:', error.response);
        console.error('Error details:', error.response?.data || error.message);
        alert(
          `Failed to save SVG: ${
            error.response?.data?.details || error.message
          }`
        );
      }
    };

    return (
      <button
        onClick={saveAsSVG}
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '20px',
          zIndex: 100,
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Save as SVG
      </button>
    );
  };

  if (!isLoggedIn) {
    return (
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <Suspense fallback={<div>Loading Excalidraw...</div>}>
        <Excalidraw
          excalidrawAPI={onExcalidrawAPIMount}
          initialData={{
            elements: [],
            appState: { viewBackgroundColor: '#ffffff' },
          }}
        />
      </Suspense>
      <SaveButton />
    </div>
  );
};

export default Whiteboard;
