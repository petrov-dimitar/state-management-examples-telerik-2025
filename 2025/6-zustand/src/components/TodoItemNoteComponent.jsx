import { useUserStore } from '../store/useUserStore';

function TodoItemNoteComponent() {
  const username = useUserStore((state) => state.username);

  return (
    <div className='border'>
      <h3>Todo Item Note</h3>
      <span>User: {username}</span>
    </div>
  );
}

export default TodoItemNoteComponent;

