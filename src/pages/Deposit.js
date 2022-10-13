import React from "react";
import { Card, CardHeader, CardBody, } from "reactstrap";

function Deposit() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState(' ');

    return(
        <Card
            bgcolor="warning"
            header="Deposit">
             {/* status={status}
             body={show ?} */}
            <DepositForm>{setShow}</DepositForm> 
            <DepositMsg>{setShow}</DepositMsg>
        </Card>
    )
}

function DepositMsg(props){
    return(<>
    <h5>Deposit Amount</h5>
    <button type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}>Success!</button>
        </>);
}

function DepositForm(props){
    const [email, setEmail]       = React.useState('');
    const [amount, setAmount] = React.useState('');
    
    function handle(){
        console.log(email,amount);
        const url = `/account/deposit/${email}/${amount}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();
        props.setShow(false);
    }
    
    return (<>

    Email address<br/>
    <input type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Amount<br/>
    <input type="number"
    className="form-control"
    placeholder="Enter amount"
    value={amount}
    onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit"
        className="btn btn-light"
        onClick={handle}>Deposit</button>
    </>);
}
export default Deposit;