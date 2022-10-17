import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  // const UserContext = createContext();
  // const useUserContext = () => useContext(UserContext);
  const [user, setUser] = useState([
    { name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 },
    { name: "Erika", email: "erikamal@usc.edu", password: "markiv", balance: 101 },
    ]);

  return !user ? null : (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


// function UserProvider({ children }) {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     userService.allDetails()
//       .then(({ data }) => setUser(data));
//   }, []);

//   return !user ? null : (
//     <UserContext.Provider value={user}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export default UserProvider;






