import './App.css';
import ChangeUserComponent from './components/ChangeUserComponent';
import ListTodoComponent from './components/ListTodoComponent';

function App() {
  return (
    <div className="App border">
      <h3>App Component</h3>
      <ChangeUserComponent />
      <ListTodoComponent />
    </div>
  );
}

export default App;
