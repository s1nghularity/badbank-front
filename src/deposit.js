import React, { useContext, useState } from 'react'
import {UserProvider, useUserContext, UserContext} from './context'

import { Card } from 'reactstrap';

function Deposit( ){
  const context = useContext(UserContext);
  const { user, setUser } = useUserContext(UserContext);
  const [input, setInput] = useState(0);
  const [total, setTotal] = useState(context.balance);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  
  function clearError(){
    setError('');
  }

  function clearForm(){
    setInput(0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newTotal = total + input;
    if (!error && input > 0) {
      setSuccess('Deposit Successful');
      setTotal(newTotal);
      setUser({...user, balance: newTotal});
      updateAccountBalance()};
  }

  function handleChange(event) {
    const input = event.target.value;
    if (input < 0 || isNaN(input)) {
      setError('Positive numerical values only');
    } else {
      clearError();
      setInput(Number(input));
      
    }
  }

  function updateAccountBalance() {
    let newBalance = user.balance + input;
    setUser({ ...user, balance: newBalance });
   
  }

  
  return (

    <Card style={{ width: '35rem', margin: 'auto', marginTop: '5rem' }}>
      <h2 style={{ textAlign: 'center' }}>Deposit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type=""
            className="form-control"
            id="amount"
            onChange={handleChange}
          />
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

        </div>
        
        
        <button disabled={!input} type="submit" className="btn btn-primary">
          Deposit
        </button>
      </form>

    </Card>
  );
}


export default Deposit;
