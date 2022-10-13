import React, { useContext } from "react";
import { useUserContext, UserContext} from "./Context";
import {Card, CardBody, CardHeader} from 'reactstrap'

function AllData() {
  return(
  <div>
  <UserAccountData />
  </div>
  );
}

function UserAccountData() {
  const { user, setUser } = useUserContext();
  const {context} = useContext(UserContext);

  return (
    <div> All Data
      <br/>
        {user.map((ctx, i) => (
            <>
            <Card key={i} border = "primary" style={{ width: '35rem' }}>
            <CardHeader>
            {ctx.name}
            </CardHeader>
            <CardBody>      
            Email: {ctx.email}
            <br/>
            Balance: ${ctx.balance}
            <br/>
            Password:  {ctx.password}
            </CardBody>
            </Card>
            </>
            
          
        ))}
      <br/>
    </div>
  );
}

export default AllData;
