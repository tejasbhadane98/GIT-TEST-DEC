import React, { useState } from "react";
const ContactList = (props) => {
    const [showAge, setAge] = useState(false)
    
    return (
        <div id="card">
            <img
                src={props.imageUrl}
                alt="profile">
            </img>
            <div className="details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={() => setAge(!age)}>Toggle Age</button>
                {age ? <p>age: {props.age}</p> : null}
            </div>
        </div>
    )
}
export default ContactList;