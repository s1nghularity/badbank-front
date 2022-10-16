import UserProvider from './context'
import React from 'react'

export default function Home(){
  return (  
    <UserProvider
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome  to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="./bank.png" className="img-fluid" alt="Black icon of bank building"/>)}
    />
  );  
}
