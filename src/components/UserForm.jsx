import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");  
    const [ConfirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { FirstName, LastName, Email, Password, ConfirmPassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>FirstName: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) }/>
            </div>
            <div>
                <label>LastName: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) }/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>ConfirmPassword: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />

            
            
        </form>

        <div>
            <h2>Your Typed Information</h2>
            <p>FirstName: {FirstName}</p>
            <p>LastName: {LastName}</p>
            <p>Email: {Email}</p>
            <p>Password: {Password}</p>
            <p>ConfirmPassword: {ConfirmPassword}</p>

        </div>

    </>

            
    );
    


};
    
export default UserForm;
