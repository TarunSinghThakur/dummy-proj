import React, { useState } from "react";

const AddUser = () => {
    const [submitForm, setSubmitForm] = useState(0);

    const addUserHandler = (event) => {
        event.preventDefault(); // Prevents application to reload on submission
        setSubmitForm(1)
    };

    // Don't use addUserHandler() -- This will execute it as form line is parsed -- Just pass a pointer of the function

    return (
        <form onSubmit={addUserHandler}> 
            <label htmlFor="username">Username: </label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age (Years) </label>
            <input id="age" type="number"/>
            <button type="submit">Add User</button>
        </form>
    )
};

export default AddUser;