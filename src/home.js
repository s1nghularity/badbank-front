import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import React from 'react'
import bank from './bank.png'

export default function Home(){
  return (  
    <Card style={{width: "18rem",}}>
    <img alt="Bank Company Logo" src={bank} />
    <CardBody>
      <CardTitle tag="h5">The Bad Bank</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Welcome to Bad Bank!
        </CardSubtitle>
        <CardText color='green'>
          You can move around using the navigation bar above.
        </CardText>
    </CardBody>
    </Card>
  );  
}

