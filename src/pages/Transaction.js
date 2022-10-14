import React from 'react'
import Card from 'reactstrap'

function Transaction({
  handleChange,
  HandleDeposit,
  deposit,
  balance,
  status,
  errorMessage,
  buttonStatus
}) {
  let disabledButton = {
    backgroundColor: "#e2e2e2",
    cursor: "not-allowed",
  };
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  console.log("error messg in Transaction: " + errorMessage);

return (
  <div>
  <Card bgcolor="warning" txtcolor="black" header="Deposit" status={status}>
    <>
      <a  href="#/Login/"
          className="btnDeposit"
          data-toggle="tooltip"
          title="Login to your account"> 
      
      Login </a> {' '} to make a transaction.      
      <br />
    </>

    <div>
      <h4>Current Balance: ${balance}</h4>
      
      <br />
        Deposit Amount:
      <br />
        <input type="input"
          className="form-control"
          id="deposit"
          placeholder="$0.00"
          value={deposit}
          onChange={handleChange}/>
      <br />

      <div>
        <button id="button"  
          type="submit"
          className="btn btn-light"
          disabled={buttonStatus}
          onClick={HandleDeposit}>
        Deposit
        </button>
      <div className="text-left"></div>
      </div>

    </div>
    
  </Card>
  </div>
)
}
export default Transaction;