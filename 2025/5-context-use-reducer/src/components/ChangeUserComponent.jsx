import { useUser } from "../context/UserContext";

function ChangeUserComponent() {
  const { state: { username }, dispatch } = useUser();

  return (
    <div className='border'>
      <h3>ChangeUserComponent Component</h3>
      <label>Change Username:</label>
      <input
        onChange={e => dispatch({ name: 'set_username', value: e.target.value })}
      />
    </div>
  );
}

export default ChangeUserComponent;

