import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
 
  const [user, setUser] = useState([
    { name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 },
    { name: "Erika", email: "erikamal@usc.edu", password: "markiv", balance: 101 },
    ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};









