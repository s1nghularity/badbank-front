import React, { useEffect, useContext, useState } from 'react'
import { useUserContext, UserContext} from './context'
import { Card, CardHeader, Col, Table } from 'reactstrap';

  //track deposit and withdrawal amounts from deposit and withdrawal components

function Transactions(props) {
  const context = useContext(UserContext);
  const renderTable = () => {
    return context.transactionHistory.map((transaction, index) => {
      const { ts, type, amount} = transaction;
      return (
        <tr key={ts}>
          <th scope="row">{context.user[1].name}</th>
          <td>{ts}</td>
          <td>{type}</td>
          <td>${amount}</td>
        </tr>
      )
    })
  }

  return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <UserContext.Provider value={{ transactionHistory, setTransactionHistory }}>
          <Card>
            <CardHeader>
              <h3>Transaction History</h3>
            </CardHeader>
            <Table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                </tr>
                {user.map((transaction, id) => (
                  <tr key={id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </thead>
              <tbody>
                {transactionHistory}
              </tbody>
            </Table>
          </Card>
          </UserContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Transactions;


