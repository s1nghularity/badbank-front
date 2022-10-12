import React, { createContext, useContext, useState } from "react";
import { useUserContext, UserContext, UserProvider } from "./context";

import {Card} from 'reactstrap'

function AllData() {
  return(
  <div>
  {/* <UserProvider> */}
  <UserAccountData />
  {/* </UserProvider> */}
  </div>
  );
}

function UserAccountData() {
  const { user, setUser } = useUserContext();
  const context = useContext(UserContext);

  return (
    <div> All Data
        {user.map((ctx, i) => (
          <Card
            key={i}
            bgcolor="info"
            txtcolor="black"
            header={'Account information for: ' +  ctx.name}
            title={"Balance: $" + ctx.balance}
            text={"Email: " + ctx.email}
            body={"Password: " + ctx.password}
          />
        ))}
    </div>
  );
}

export default AllData;
