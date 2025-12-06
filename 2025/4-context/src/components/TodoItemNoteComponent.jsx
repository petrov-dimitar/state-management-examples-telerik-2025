import { useUser } from '../context/UserContext';

function TodoItemNoteComponent() {
  const { username } = useUser();
  
  return (
    <div className='border'>
      <h3>Todo Item Note</h3>
      <span>User: {username}</span>
    </div>
  );
}

export default TodoItemNoteComponent;

