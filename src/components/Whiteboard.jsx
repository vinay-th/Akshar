import React, { useState, useCallback, Suspense, lazy, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// Add this at the top of your file
if (typeof process === 'undefined') {
  window.process = { env: { NODE_ENV: 'production' } };
}

const Excalidraw = lazy(() =>
  import('@excalidraw/excalidraw')
    .then((module) => ({
      default: module.Excalidraw,
    }))
    .catch((error) => {
      console.error('Error loading Excalidraw:', error);
      return { default: () => <div>Error loading Excalidraw</div> };
    })
);

const Whiteboard = () => {
  console.log('Whiteboard component rendering');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [error, setError] = useState(null);
  const { uniqueId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('Checking auth for uniqueId:', uniqueId);
        const response = await axios.get(`/api/auth/check/${uniqueId}`);
        console.log('Auth response:', response.data);
        if (response.data.isTeacher) {
          setIsLoggedIn(true);
        } else {
          setError('User is not authorized as a teacher');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setError(`Auth check failed: ${error.message}`);
      }
    };
    checkAuth();
  }, [uniqueId]);

  const onExcalidrawAPIMount = useCallback((api) => {
    setExcalidrawAPI(api);
  }, []);

  const SaveButton = () => {
    const saveAsPNG = async () => {
      if (!isLoggedIn) {
        alert('Please log in to save PNG');
        return;
      }

      try {
        if (!excalidrawAPI) {
          console.error('Excalidraw API is undefined');
          alert('Failed to access the drawing');
          return;
        }

        const title = prompt('Enter a title for your PNG:', 'My Drawing');
        if (!title) return;

        const { exportToBlob } = await import('@excalidraw/excalidraw');
        const blob = await exportToBlob({
          elements: excalidrawAPI.getSceneElements(),
          appState: excalidrawAPI.getAppState(),
          files: excalidrawAPI.getFiles(),
          mimeType: 'image/png',
        });

        const formData = new FormData();
        formData.append('image', blob, `${title}.png`);
        formData.append('title', title);

        console.log('Sending PNG save request...');
        const response = await axios.post(
          `/api/whiteboard/${uniqueId}/save-png`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log('Server response:', response.data);
        alert('PNG saved successfully!');
      } catch (error) {
        console.error('Error saving PNG:', error);
        console.error('Error details:', error.response?.data);
        alert(`Failed to save PNG: ${error.message}`);
      }
    };

    return (
      <button
        onClick={saveAsPNG}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1000, // This ensures the button is on top
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Optional: adds a subtle shadow
        }}
      >
        Save as PNG
      </button>
    );
  };

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {isLoggedIn ? (
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
      ) : (
        <div>Please log in to access the whiteboard.</div>
      )}
    </div>
  );
};

export default Whiteboard;
