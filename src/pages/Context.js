import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  console.log("INside provider")
 
  const [user, setUser] = useState([
    { name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 },
    { name: "Peter", email: "peter@uic.edu", password: "qwerty", balance: 5 },
  ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
