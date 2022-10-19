import React from "react";
import { useEffect, useState, useContext } from "react";
import {
  Card,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function Transaction({
  type,
  handleTransact,
  handleChange,
  balance,
  isError,
  success,
  errorMessage,
}) {


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

          <Input  id="amount" placeholder="Enter Amount">
                  onChange={(e) => {handleChange(e);}}
          </Input>
        
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
