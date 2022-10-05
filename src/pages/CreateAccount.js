import { useState } from 'react'
import SignUpForm from "./SignUpForm";
import { useUserContext } from "./Context";


// TODO: Store submissions either in context or alldata
// TODO: Authorize login requests

function CreateAccount() {
    return <Account />;
}

function Account() {
    const { user, setUser } = [useUserContext()];
    function handle(data) {
        console.log("handle from createaccount called");
        setUser([
            ...user,
            {
            name: data.name,
            email: data.email,
            password: data.password,
            balance: 100,
            },
        ]);
        return true;
    }

    return (
        <div>
            <SignUpForm
            bgcolor="primary"
            label="Create Account"
            handle={handle}
            successButton="Add another account"
            />
    
        </div>
    );
}

    


export default CreateAccount
