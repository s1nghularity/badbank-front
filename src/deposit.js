import React, { useContext, useState } from 'react'
import {UserProvider, useUserContext, UserContext} from './context'
import Transaction from './transaction';
import { Card } from 'reactstrap';

function Deposit(){
  const { user, setUser } = useUserContext(UserContext);
  const [input, setInput] = useState(0);
  const [total, setTotal] = useState(user.balance);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  function handleChange(e) {
    setError(false);
    setSuccess(false);
    let value = e.target.value;
    setInput(value);
  }

  function handleDeposit(e) {
    const regexE = /\S@\S/;
    const regexN = /^[1-9]\d*$/g

    if ((!regexE.test(input) || input.length < 3) 
        && (input > 0 && regexN.test(input))) 
        {user.balance = user.balance + input; 
        setSuccess(true);}
    
    else {setError(true);
    
        if (input < 0)
          {alert = "Must be a number greater than 0";} 
        else if (regexN.test(input))
          {alert = "Must be a number greater than 0";}
        }
    
    setTotal(user.balance);
  }

return(
  <div>
  <Transaction
    type="Deposit"
    handleChange={handleChange}
    handleTransact={handleDeposit}
    balance={total}
    error ={error}
    success={success}
  />
  </div>
  );
}

export default Deposit;
