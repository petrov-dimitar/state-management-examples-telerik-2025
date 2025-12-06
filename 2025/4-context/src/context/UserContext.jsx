import { createContext, useContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Custom hook to use the UserContext
// This provides better error handling and makes it easier to use
export function useUser() {
  const context = useContext(UserContext);
  
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  
  return context;
}

// UserProvider component that manages the state
export function UserProvider({ children, initialUsername = 'gorg2213' }) {
  const [username, setUsername] = useState(initialUsername);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

