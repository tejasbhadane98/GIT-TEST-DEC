import React from "react";
import { useState } from "react";
import "./formInput.css"

let DisplayFormInput = () => {
    let [name, setName] = useState("");
    let [showData, setShowData] = useState(null);
    let[age, setAge] = useState(20)
    let [occupation, setOccupation] = useState("none")
    let [cool, setCool] = useState(false)

    let handleChange=(e)=>{
        e.preventDefault();
        setName(name)
    }

    return (
        <>
            <div className="all-content">
                <div className="sub-content">
                    <div className="heading">
                        Display Handling Inputs
                    </div>
                    <div className="data">
                        <label for="name">Name:</label>
                        <input type="text"  placeholder="Name" value={name} className="name" onChange={e=>setName(e.target.value)} /><br/>
                        <label for="age">Age:</label>
                        <input type="text"  placeholder="Age" value={age} className="age" onChange={e=>setAge(e.target.value)}/><br/>
                        <label for="gender" >Gender:</label>
                        <input type="radio" value="male" id="male" name="gender" onChange={e=>setShowData(e.target.value)}/> <label for="male">Male</label> <br/>
                        <input type="radio" value="female" id="female" name="gender"  onChange={e=>setShowData(e.target.value)}/><label for="female">Female</label><br/>
                        <input type="radio" value="other" id="other" name="gender"  onChange={e=>setShowData(e.target.value)}/><label for="other">Other</label><br/>
                        <label for="occupation">Occupation:</label>
                        <select name="occupation" >
                            <option value="frontend" name="frontend" onChange={e=>setOccupation(e.target.value)}>Frontend</option>
                            <option value="backend" name="backend" onChange={e=>setOccupation(e.target.value)}>Backend</option>
                            <option value="fullstack" name="fullstack" onChange={e=>setOccupation(e.target.value)}>Full Stack</option><br/>

                        </select><br/>
                        <label for="cool">Are you cool?</label><br/>
                        <input type="radio" className="cool" value={true} onChange={e=>setCool(e.target.value)}/>Of Course I'm cool!!

                    </div>
                    <div className="output">
                        {`"Name":"${name}","Age":"${age}", "Gender":"${showData}","Occupation":"${occupation}", "is Cool":"${cool}" `}
                    </div>

                </div>

            </div>

        </>
    )
}
export default DisplayFormInput

