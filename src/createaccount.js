import { useState } from 'react'
import BankForm from "./bankform";
import { useUserContext } from "./context";


// TODO: Authorize login requests

function CreateAccount() {
    return <Account />;
}

function Account() {
    const { user, setUser } = useUserContext();

    function handle(data) {
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
            <BankForm
            bgcolor="primary"
            label="Create Account"
            handle={handle}
            successButton="Add another account"
            />
    
        </div>
    );
}

export default CreateAccount