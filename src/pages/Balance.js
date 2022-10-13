
import React from 'react';
import {useUserContext, UserContext, UserProvider} from './pages/Context';
import {Card, CardTitle, CardSubtitle, CardBody} from 'reactstrap';

function Balance() {
    const { user, setUser } = useUserContext(UserContext);
    let name = user[0].name;
    let balance = user[0].balance;
        
    return (
        <div>
        <Card>
            <CardTitle>    Balance    </CardTitle>
            <CardSubtitle> {name}     </CardSubtitle>
            <CardBody>     ${balance} </CardBody> 
        </Card>
        </div>
        )
}

export default Balance;