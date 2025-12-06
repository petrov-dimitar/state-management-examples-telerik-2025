import { useUserStore } from '../store/useUserStore';

function ChangeUserComponent() {
  const setUsername = useUserStore((state) => state.setUsername);

  return (
    <div className='border'>
      <h3>Change User Component</h3>
      <label>Change Username: </label>
      <input onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}

export default ChangeUserComponent;

