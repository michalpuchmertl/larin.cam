import React, { createContext, useState } from 'react';
import firebase from 'firebase';

export const UserContext = createContext(null);

function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
