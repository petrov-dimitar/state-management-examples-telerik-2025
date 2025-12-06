import { createContext, useContext, useReducer } from 'react';

// Create the context
export const UserContext = createContext();

// Reducer function
function userReducer(state, action) {
  if (action.name === "set_username") {
    return { ...state, username: action.value };
  }
  return state;
}

// Custom hook to use the UserContext
// This provides better error handling and makes it easier to use
export function useUser() {
  const context = useContext(UserContext);
  
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  
  return context;
}

// UserProvider component that manages the state with useReducer
export function UserProvider({ children, initialUsername = 'geofskld' }) {
  const [state, dispatch] = useReducer(userReducer, { username: initialUsername });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

