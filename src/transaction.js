import React from "react";
import {
  Card,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

let disabledButton = {
  backgroundColor: "#e2e2e2",
  cursor: "not-allowed",
};

function validateInput(amount) {
  if (amount < 0 || isNaN(amount)) {
    return false;
  } else {
    return true;
  }
}

function Transaction({  type,  handleTransact,  handleChange, balance, success,  errorMessage,  user,}) {
    const [show, setShow] = React.useState(false);
    const [amount, setAmount] = React.useState(0);
    const [isError, setIsError] = React.useState(false);
    const [errors, setError] = React.useState({
      amountError: "",});
    const [buttonDisabled, setButtonDisabled ] = React.useState(true);

    function clearError(){
      setError({amountError: ""});
    }

    function handleSubmit() {
      const isValidInput = validateInput(amount);
      if (isValidInput(amount)) {
        setIsError(false);
        handleTransact(amount);
        setShow(false);
        clearError();
      } else {
        setIsError(true);
        setError({ amountError: isValidInput ? "" : "Must be a numerical value greater than 0." });
      }
    }


function clearForm () {
    setAmount(0);
    setShow(false);
    clearError();
  }

  return (
    <Card
      style={{
        width: "35rem",
      }}
    >
      <Form onSubmit={handleTransact}>
        <FormGroup>
        
          <h2>{type}</h2>
          <CardSubtitle>
            Please enter only positive numbers and do not include the dollar.
          </CardSubtitle>
          <br />
          <Label for="amount">Current Balance: {balance}</Label>

          <Form  id="amount" placeholder="Enter Amount">
              <input
                type="number"
                className="form-control"
                id="amount"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setButtonDisabled(false);
                }}/>

          </Form>
        
        </FormGroup>
      </Form>
        {isError ? (
          <div>
            <h4 style={{color: "red", textAlign: "center"}}>
            "Must be a number greater than 0";
            </h4>
          </div>
        ) : (<p> </p>)}
        
        {success ? (
          <h4 style={{color: "green", textAlign: "center"}}>
            Transaction Successful!
          </h4>
        ) : (<p> </p>)}
      
        <Button type="submit" onClick={handleTransact}>
          Submit
        </Button>
      
    </Card>
  );
}

export default Transaction;
