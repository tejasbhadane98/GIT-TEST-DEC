import React from "react";
import { useState } from "react";
import "./form.css"

function Form() {
    let [formInput, setFormInput] = useState({firstname:"", lastname:"", email:""});
    let [register, setRegister] = useState(false);
    let [error, setError] = useState(false);
    let [message, setMessage] = useState(false);

    let handleFirst=(e)=>{
        e.preventDefault();
        setFormInput((formInput)=>({
            ...formInput,
            firstname:e.target.value

        }))
    }

    let handleLast=(e)=>{
        e.preventDefault();
        setFormInput((formInput)=>({
            ...formInput,
            lastname:e.target.value

        }))
    }

    let handleEmail=(e)=>{
        e.preventDefault();
        setFormInput((formInput)=>({
            ...formInput,
            email:e.target.value

        }))
    }

    let handleRegister=(e)=>{
        e.preventDefault();
        if(formInput.firstname && formInput.lastname && formInput.email){
            setError(true);
            setMessage(true);
        }
        setRegister(true);
    }
    
    return (
        <>
            <div className="all-content">
                <div className="sub-content">
                    <div className="heading">
                        Basic Registration Form

                    </div>
                    <div >
                    {message && <div className="message">Success! Thank you for registering</div>}<br/>
                    </div>
                   
                    <div className="firstname">
                        <input type="text" id="input-field" disabled={setMessage} value={formInput.firstname} placeholder="First Name" onChange={handleFirst} />
                        {
                            register && !formInput.firstname && <div className="error-firstname">Please Enter the First name</div>
                        }

                    </div>
                    <div className="lastname">
                        <input type="text"  id="input-field" value={formInput.lastname} placeholder="Last Name" onChange={handleLast}/>
                        {
                            register && !formInput.lastname && <div className="error-lastname">Please Enter the Last name</div>
                        }

                    </div>
                    <div className="email">
                        <input type="email" id="input-field"  value={formInput.email} placeholder="Email" onChange={handleEmail}/>
                        {
                            register && !formInput.email && <div className="error-email">Please Enter the Email</div>
                        }

                    </div>
                    <div >
                        <button className="button" onClick={handleRegister}>Register</button>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Form;