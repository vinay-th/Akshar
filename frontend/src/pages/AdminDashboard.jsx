import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Logo from '../components/ui/logo.svg';

const iconPaths = {
  home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  fileText:
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  helpCircle:
    'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  upload: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
  bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  calendar:
    'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  logOut:
    'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
  user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
};

const Icon = ({ name, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={iconPaths[name]}
    />
  </svg>
);

const Dropdown = ({ onEdit, onRemove, isOpen, toggleDropdown }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownToggle onClick={toggleDropdown}>...</DropdownToggle>
      {isOpen && (
        <DropdownMenu>
          <DropdownItem onClick={onEdit}>
            <Icon name="fileText" className="h-4 w-4 mr-2" />
            Edit
          </DropdownItem>
          <DropdownItem onClick={onRemove}>
            <Icon name="logOut" className="h-4 w-4 mr-2" />
            Remove
          </DropdownItem>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

const navItems = [
  { text: 'Dashboard', icon: 'home', link: '/admin/dashboard' },
  { text: 'Lectures', icon: 'fileText', link: '/admin/lectures' },
  { text: 'Alerts', icon: 'bell', link: '/admin/alerts' },
  { text: 'Calendar', icon: 'calendar', link: '/admin/calendar' },
];

const sidebarItems = [
  { text: 'Manage faculty', icon: 'user', link: '/admin/manage-faculty' },
  { text: 'Manage students', icon: 'user', link: '/admin/manage-students' },
  {
    text: 'Manage departments',
    icon: 'user',
    link: '/admin/manage-departments',
  },
  { text: 'Manage courses', icon: 'fileText', link: '/admin/dashboard' },
  {
    text: 'Manage resources',
    icon: 'helpCircle',
    link: '/admin/manage-resources',
  },
];

const classesData = [
  {
    srNo: 1,
    departmentName: 'Computer Science',
    courseName: 'B.Tech',
    semester: 'SEM III',
    division: 'A',
    classRoom: '101',
  },
  {
    srNo: 2,
    departmentName: 'Computer Science',
    courseName: 'B.Tech',
    semester: 'SEM III',
    division: 'B',
    classRoom: '102',
  },
  {
    srNo: 3,
    departmentName: 'Computer Science',
    courseName: 'B.Sc IT',
    semester: 'SEM V',
    division: 'A',
    classRoom: '201',
  },
  {
    srNo: 4,
    departmentName: 'Computer Science',
    courseName: 'B.Sc IT',
    semester: 'SEM V',
    division: 'B',
    classRoom: '202',
  },
  {
    srNo: 5,
    departmentName: 'Electronics Engineering',
    courseName: 'B.E',
    semester: 'SEM IV',
    division: 'A',
    classRoom: '301',
  },
  {
    srNo: 6,
    departmentName: 'Electronics Engineering',
    courseName: 'B.E',
    semester: 'SEM IV',
    division: 'B',
    classRoom: '302',
  },
  {
    srNo: 7,
    departmentName: 'Mechanical Engineering',
    courseName: 'B.Tech',
    semester: 'SEM II',
    division: 'A',
    classRoom: '401',
  },
  {
    srNo: 8,
    departmentName: 'Mechanical Engineering',
    courseName: 'B.Tech',
    semester: 'SEM II',
    division: 'B',
    classRoom: '402',
  },
  {
    srNo: 9,
    departmentName: 'Information Technology',
    courseName: 'B.Sc IT',
    semester: 'SEM VI',
    division: 'A',
    classRoom: '501',
  },
  {
    srNo: 10,
    departmentName: 'Information Technology',
    courseName: 'B.Sc IT',
    semester: 'SEM VI',
    division: 'B',
    classRoom: '502',
  },
  {
    srNo: 11,
    departmentName: 'Electronics Engineering',
    courseName: 'B.E',
    semester: 'SEM IV',
    division: 'B',
    classRoom: '302',
  },
  {
    srNo: 12,
    departmentName: 'Mechanical Engineering',
    courseName: 'B.Tech',
    semester: 'SEM II',
    division: 'A',
    classRoom: '401',
  },
  {
    srNo: 13,
    departmentName: 'Mechanical Engineering',
    courseName: 'B.Tech',
    semester: 'SEM II',
    division: 'B',
    classRoom: '402',
  },
  {
    srNo: 14,
    departmentName: 'Information Technology',
    courseName: 'B.Sc IT',
    semester: 'SEM VI',
    division: 'A',
    classRoom: '501',
  },
  {
    srNo: 15,
    departmentName: 'Information Technology',
    courseName: 'B.Sc IT',
    semester: 'SEM VI',
    division: 'B',
    classRoom: '502',
  },
];

export default function AdminDashboard() {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleEdit = (id) => {
    console.log(`Edit student with id: ${id}`);
    // Add our edit logic here
  };

  const handleRemove = (id) => {
    console.log(`Remove student with id: ${id}`);
    // Add our remove logic here
  };

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };
  return (
    <Container>
      <Header>
        <HeaderContent>
          <LogoContainer>
            <a href="/">
              <LogoImage src={Logo} alt="Akshar Logo" />
            </a>
          </LogoContainer>
          <Nav>
            {navItems.map((item) => (
              <a href={item.link} style={{ textDecoration: 'none' }}>
                <NavButton key={item.text}>
                  <Icon name={item.icon} className="h-4 w-4 mr-2" />
                  {item.text}
                </NavButton>
              </a>
            ))}
          </Nav>
          <UserButton>
            {/* user details */}
            <Icon name="user" className="h-6 w-6" />
          </UserButton>
        </HeaderContent>
      </Header>
      <Main>
        <Sidebar>
          {sidebarItems.map((item) => (
            <SidebarButton key={item.text}>
              <React.Fragment key={item.text}>
                <a href={item.link} style={{ textDecoration: 'none' }}>
                  <SidebarButton>
                    <Icon name={item.icon} className="h-5 w-5 mr-2" />
                    {item.text}
                  </SidebarButton>
                </a>
              </React.Fragment>
            </SidebarButton>
          ))}
        </Sidebar>
        <Content>
          <ContentHeader>Classes and divisions</ContentHeader>
          <Table>
            <thead>
              <tr>
                <Th>Sr no</Th>
                <Th>Department Name</Th>
                <Th>Course Name</Th>
                <Th>Semester</Th>
                <Th>Division</Th>
                <Th>Class room</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {classesData.map((row) => (
                <tr key={`row-${row.srNo}`}>
                  <Td>{row.srNo}</Td>
                  <Td>{row.departmentName}</Td>
                  <Td>{row.courseName}</Td>
                  <Td>{row.semester}</Td>
                  <Td>{row.division}</Td>
                  <Td>{row.classRoom}</Td>
                  <Td>
                    <Dropdown
                      onEdit={() => handleEdit(row.srNo)}
                      onRemove={() => handleRemove(row.srNo)}
                      isOpen={openDropdownId === row.srNo}
                      toggleDropdown={() => toggleDropdown(row.srNo)}
                    />
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ButtonContainer>
            <ActionButton className="add-class">Add Class</ActionButton>
            <ActionButton className="edit-class">Edit Class</ActionButton>
          </ButtonContainer>
        </Content>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to bottom right, #e6f2ff, #e6fff2);
`;

const Header = styled.header`
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 3rem;
  width: 15rem;
  margin-right: 0.75rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #4b5563;
  font-size: 0.875rem;
`;

const UserButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #4b5563;
`;

const Main = styled.main`
  display: flex;
  max-width: 1280px;
  margin: 2rem auto;
  gap: 2rem;
`;

const Sidebar = styled.aside`
  width: 250px;
  height: 380px;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const SidebarButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #4b5563;
  font-size: 0.875rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const Content = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const ContentHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 0.75rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4b5563;
`;

const Td = styled.td`
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #4b5563;
  border-bottom: 1px solid #e5e7eb;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: #3b82f6;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }

  &.add-class {
    background-color: #10b981;
    &:hover {
      background-color: #059669;
    }
  }

  &.edit-class {
    background-color: #f59e0b;
    &:hover {
      background-color: #d97706;
    }
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #4b5563;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: -20px;
  z-index: 1;
  min-width: 120px;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;
