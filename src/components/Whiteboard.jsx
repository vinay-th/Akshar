import React, { useState, useCallback, Suspense, lazy, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

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
        const response = await axios.get(`/api/auth/check/${uniqueId}`, {
          withCredentials: true,
        });
        console.log('Auth response:', response.data);
        if (response.data.isTeacher) {
          setIsLoggedIn(true);
        } else {
          setError('User is not authorized as a teacher');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        if (error.response) {
          console.error('Error data:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        setError(`Auth check failed: ${error.message}`);
      }
    };
    checkAuth();
  }, [uniqueId]);

  const onExcalidrawAPIMount = useCallback((api) => {
    setExcalidrawAPI(api);
  }, []);

  const SaveButton = () => {
    const saveAsSVG = async () => {
      try {
        const svgElement = document.querySelector('svg');
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const title = prompt('Enter a title for your drawing:');

        if (!title) return;

        const response = await axios.post(
          `/api/whiteboard/${uniqueId}/save-svg`,
          {
            title,
            svgData,
          }
        );

        console.log('SVG saved successfully:', response.data);
        alert('SVG saved successfully!');
      } catch (error) {
        console.error('Error saving SVG:', error);
        console.error('Error details:', error.response?.data || error.message);
        alert('Error saving SVG. Please try again.');
      }
    };

    return (
      <button
        onClick={saveAsSVG}
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
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}
      >
        Save as SVG
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
