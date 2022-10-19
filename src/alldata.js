import { useContext } from "react";
import { useUserContext, UserContext } from "./context";
import { Card, CardBody, CardHeader} from "reactstrap";

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

  return (
    <div>
      All User Account Data
      <br/>
        {user.map((user, i) => (
            <>
            <Card key={i} className = "alldatacard" style={{ width: '35rem' }}>
            <CardHeader>
            {user.name}
            </CardHeader>
            <CardBody>      
            Email:      {user.email}
            <br/>
            Balance: $  {user.balance}
            <br/>
            Password:   {user.password}
            </CardBody>
            </Card>
            </>        
        ))}
      <br/>
    </div>
  );
}

export default AllData;
