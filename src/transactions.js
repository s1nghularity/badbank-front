import React, { useContext, useState } from 'react'
import { UserContext} from './context'
import { Card, CardHeader, Col, Table } from 'reactstrap';

function Transactions(props) {
  const context = useContext(UserContext);
  const [user, setUser] = useState(context.user[1].transactionHistory);
  const [transactions, setTransactions] = useState(context.user[1].transactionHistory);
  
  const renderTable = () => {
    return context.transactionHistory.map((transaction, index) => {
      const { ts, type, input} = transaction;
      return (
        <tr key={ts}>
          <th scope="row">{context.user[1].name}</th>
          <td>{ts}</td>
          <td>{type}</td>
          <td>${input}</td>
        </tr>
      )
    })
  }

  return (
      <div className="container">
      <div className="row">
        <div className="col-12">

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
                    <td>{transaction.input}</td>
                  </tr>
                ))}
              </thead>
              <tbody>
                {renderTable()}
              </tbody>
            </Table>
          </Card>

   
        </div>
      </div>
    </div>
  )
}

export default Transactions;


