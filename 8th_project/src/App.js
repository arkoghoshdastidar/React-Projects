import UserFinder from './components/UserFinder';
import Users from './components/Users';
import UserContext from './store/user-context';
import ErrorBoundary from './components/ErrorBoundary';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {

  return (
    <ErrorBoundary>
      <UserContext.Provider value={
        { users: DUMMY_USERS }
      } >
        <UserFinder />
      </UserContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
