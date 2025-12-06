import './App.css';
import { UserProvider } from './context/UserContext';
import ChangeUserComponent from './components/ChangeUserComponent';
import ListTodoComponent from './components/ListTodoComponent';

function AppContent() {
  return (
    <div className="App border">
      <h3>App Component</h3>
      <ChangeUserComponent />
      <ListTodoComponent />
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
