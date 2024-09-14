import React from 'react';
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
  star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  x: 'M6 18L18 6M6 6l12 12',
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

export default function Dashboard() {
  const [tasks, setTasks] = React.useState([
    { id: 1, text: 'Grade midterm papers', completed: false },
    { id: 2, text: 'Prepare lecture slides', completed: false },
    { id: 3, text: 'Schedule office hours', completed: false },
  ]);

  const [newTask, setNewTask] = React.useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledHeaderContent>
          <StyledLogoContainer>
            <StyledLogo src={Logo} alt="Akshar Logo" />
          </StyledLogoContainer>
          <StyledNav>
            {[
              'Dashboard',
              'Lectures',
              'Quizzes',
              'Files',
              'Alerts',
              'Calendar',
            ].map((item) => (
              <StyledNavButton key={item}>
                <Icon name={item.toLowerCase()} className="h-4 w-4 mr-2" />
                {item}
              </StyledNavButton>
            ))}
          </StyledNav>
          <StyledLogoutButton>
            <Icon name="logOut" className="h-4 w-4 mr-2" />
            Logout
          </StyledLogoutButton>
        </StyledHeaderContent>
      </StyledHeader>
      <StyledMain>
        <StyledGreeting>Hello, Professor Smith!</StyledGreeting>
        <StyledGrid>
          <StyledCard>
            <StyledCardTitle>Quick Actions</StyledCardTitle>
            <StyledQuickActions>
              {[
                { icon: 'fileText', text: 'Record Lecture Notes' },
                { icon: 'upload', text: 'Upload Notes' },
                { icon: 'star', text: 'View Feedback' },
                { icon: 'helpCircle', text: 'Create Quiz' },
              ].map((action) => (
                <StyledQuickActionButton
                  key={action.text}
                  className="quick-action-button"
                >
                  <Icon name={action.icon} className="h-8 w-8 mb-2" />
                  {action.text}
                </StyledQuickActionButton>
              ))}
            </StyledQuickActions>
          </StyledCard>
          <StyledCard>
            <StyledCardTitle>To-do List</StyledCardTitle>
            <StyledTodoList>
              {tasks.map((task) => (
                <StyledTodoItem key={task.id}>
                  <StyledCheckbox
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <StyledTaskLabel completed={task.completed}>
                    {task.text}
                  </StyledTaskLabel>
                </StyledTodoItem>
              ))}
            </StyledTodoList>
            <StyledAddTaskForm onSubmit={addTask}>
              <StyledInput
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add new task..."
              />
              <StyledAddButton type="submit">Add</StyledAddButton>
            </StyledAddTaskForm>
          </StyledCard>
          <StyledCard>
            <StyledCardTitle>Upcoming Lectures</StyledCardTitle>
            <StyledLectureList>
              <StyledLectureItem>
                <StyledLectureTitle>Green Computing</StyledLectureTitle>
                <StyledLectureDetails>Room no. 302</StyledLectureDetails>
                <StyledLectureDetails>9:20 AM</StyledLectureDetails>
              </StyledLectureItem>
              <StyledLectureItem>
                <StyledLectureTitle>Foreign Language</StyledLectureTitle>
                <StyledLectureDetails>Room no. 102</StyledLectureDetails>
                <StyledLectureDetails>12:30 PM</StyledLectureDetails>
              </StyledLectureItem>
            </StyledLectureList>
          </StyledCard>
        </StyledGrid>
      </StyledMain>
      <StyledSOSButton className="sos-button">
        <StyledSOSText className="text">SOS</StyledSOSText>
        <StyledSOSIcon className="icon">
          <Icon name="x" />
        </StyledSOSIcon>
      </StyledSOSButton>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #e6f2ff, #e6fff2);
`;

const StyledHeader = styled.header`
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const StyledHeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 3rem;
  width: 15rem;
  margin-right: 0.75rem;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledNavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #4b5563;
  font-size: 0.875rem;
`;

const StyledLogoutButton = styled.button`
  background: none;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  color: #4b5563;
  cursor: pointer;
`;

const StyledMain = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const StyledGreeting = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 2rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const StyledCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: all 0.3s ease;
`;

const StyledCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
`;

const StyledQuickActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const StyledQuickActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 6rem;
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #4b5563;

  &.quick-action-button:hover {
    transform: scale(1.05);
    background-color: black;
    color: white;
  }

  svg {
    transition: all 0.3s ease;
  }

  &.quick-action-button:hover svg {
    stroke: white;
  }
`;

const StyledTodoList = styled.div`
  margin-bottom: 1rem;
`;

const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StyledCheckbox = styled.input`
  margin-right: 0.5rem;
`;

const StyledTaskLabel = styled.label`
  font-size: 0.875rem;
  color: ${(props) => (props.completed ? '#9ca3af' : '#4b5563')};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const StyledAddTaskForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
`;

const StyledAddButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
`;

const StyledLectureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledLectureItem = styled.div`
  background-color: #f3f4f6;
  border-radius: 0.375rem;
  padding: 1rem;
`;

const StyledLectureTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const StyledLectureDetails = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

const StyledSOSButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 150px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #e62222;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  transition: 200ms;

  &:hover {
    background: #ff3636;
  }

  &:hover .text {
    color: transparent;
  }

  &:hover .icon {
    width: 150px;
    border-left: none;
    transform: translateX(0);
  }

  &:focus {
    outline: none;
  }

  &:active .icon svg {
    transform: scale(0.8);
  }
`;

const StyledSOSText = styled.span`
  transform: translateX(35px);
  color: white;
  font-weight: bold;
  transition: 200ms;
`;

const StyledSOSIcon = styled.span`
  position: absolute;
  border-left: 1px solid #c41b1b;
  transform: translateX(110px);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;

  svg {
    width: 15px;
    fill: #eee;
  }
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 100%;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
