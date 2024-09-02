import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import Herosection from './pages/Herosection';
import Whiteboard from './components/Whiteboard.jsx'; // Ensure correct import

function MainApp() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
      case '/teachers/whiteboard':
        title = 'Whiteboard';
        metaDescription = 'Teaching Whiteboard';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Herosection />} />
      <Route path="/teachers/whiteboard" element={<Whiteboard />} />
      <Route path="/test" element={<div>Test route works</div>} />
      <Route path="/faculty/:uniqueId/whiteboard" element={<Whiteboard />} />
      <Route path="*" element={<div>404 - Not Found</div>} />
    </Routes>
  );
}

export default MainApp;
