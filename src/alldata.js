import { useContext, useState } from "react";
import { useUserContext, UserContext } from "./context";
import { Card, CardBody, CardHeader} from "reactstrap";
import * as React from 'react'
import Deposit from "./deposit";

function AllData() {
  return (
    <div>
      <UserAccountData />
    </div>
  );
}

function UserAccountData() {
  const { user, setUser } = useUserContext();
  const context = useContext(UserContext);
  const [total, setTotal] = useState(context.user[1].balance);

  return (
    <UserContext.Provider value={{ user, setUser }}>
    <div>
     <h3> All User Account Data </h3>
      <br/>
        {user.map((user, id) => (
            <>
            <Card key={id} className = "alldatacard" style={{ width: '35rem' }}>
            <CardHeader style={{ width: '35rem' }}>
            {user.id} {user.name}
            </CardHeader>
            <CardBody>      
            Email:      {user.email}
            <br/>
            Balance: $  {user.balance}
            <br/>
            Password:   {user.password}
            </CardBody>
            </Card>
            <br/>
            </>        
        ))}
      <br/>
    </div>
    </UserContext.Provider>
  );
}

export default AllData;
