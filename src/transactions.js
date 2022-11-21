import React, { useEffect, useContext, useState } from 'react'
import { useUserContext, UserContext} from './context'
import { Card, CardHeader, Col, Table } from 'reactstrap';
import updateTransactions from './transactions'
  //track deposit and withdrawal amounts from deposit and withdrawal components

function Transactions(props) {
  const context = useContext(UserContext);
  const [user, setUser] = useState(context.user[1].transactionHistory);
  const [transactions, setTransactions] = useState([]);
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
        <UserContext.Provider value={{ user, setUser }}>

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
          </UserContext.Provider>
   
        </div>
      </div>
    </div>
  )
}

export default Transactions;


