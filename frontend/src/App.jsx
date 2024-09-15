import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import Herosection from './pages/Herosection';
import Whiteboard from './components/Whiteboard.jsx';
import Login from './pages/Login.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import FacultyDashboard from './pages/FacultyDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import ManageFaculty from './components/admin-dashboard/ManageFaculty';
import ManageStudents from './components/admin-dashboard/ManageStudents';
import ManageDepartment from './components/admin-dashboard/ManageDepartment';
import { createGlobalStyle } from 'styled-components';

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
      <Route path="/login" element={<Login />} />
      <Route path="/faculty/:uniqueId/whiteboard" element={<Whiteboard />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/manage-faculty" element={<ManageFaculty />} />
      <Route path="/admin/manage-students" element={<ManageStudents />} />
      <Route path="/admin/manage-departments" element={<ManageDepartment />} />
      <Route path="*" element={<div>404 - Not Found</div>} />
    </Routes>
  );
}

export default MainApp;
