import React, { useEffect, useContext, useState } from 'react'
import { useUserContext, UserContext} from './context'
import { Card, CardHeader } from 'reactstrap';

function Deposit( ){
  const context = useContext(UserContext);
  const { user, setUser } = useUserContext(UserContext);
  const [input, setInput] = useState('Enter deposit amount');
  const [total, setTotal] = useState(context.user[1].balance);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  
  function clearError(){
    setError(false);
  }

  function clearForm(){
    setInput('Enter deposit amount');
  }

  function handleChange(event) {
    const input = event.target.value;
    if (input < 0 || isNaN(input)) {
      setError('Positive numerical values only');
    } else {
      clearError(event);
      setSuccess(false)
      setInput(Number(input)); 
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newTotal = total + input;
    if (!error && input > 0) {
      setTotal(user[1].balance = newTotal);
      clearError(event);
      clearForm(event);
      setSuccess('Deposit Successful');
      updateAccountBalance(newTotal)
      updateTransactions('Deposit', input)};
  }

  function updateAccountBalance(newTotal) {
    context.users.find(user => {
      if (user.id === context.user.id) 
      {user.balance = newTotal && context.user.push(newTotal);}  
      return user;});
  }

  function updateTransactions(type, amount) {
    context.users.find(user => {
      if (user.id === context.user.id) 
      {user.transactionHistory = !error && context.user.push({type: 'deposit', amount: input})}  
      return user;});
  }

  
  return (
    <UserContext.Provider value={{ user, setUser }}>

    <Card style={{ width: '35rem', margin: 'auto', marginTop: '5rem' }}>
    <CardHeader style={{ width: '35rem' }}>Erika's Account Balance: ${ total }</CardHeader>  
      <h2 style={{ textAlign: 'center' }}>Deposit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount</label>
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

    </UserContext.Provider>
  );
}


export default Deposit;
