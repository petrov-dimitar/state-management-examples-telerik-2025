import { useUser } from '../context/UserContext';

function ChangeUserComponent() {
  const { setUsername } = useUser();
  
  return (
    <div className='border'>
      <h3>ChangeUserComponent Component</h3>
      <label>Change Username:</label>
      <input onChange={(e) => setUsername(e.target.value)}/>
    </div>
  );
}

export default ChangeUserComponent;

