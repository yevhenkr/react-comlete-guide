import React from "react";
import './Person.css';

const person = (props) =>{
    return (
    // <p click={props.click}>I'm Person I'm {props.name} {props.age} years old </p>
    <div className="Person">
        <p onClick={props.click}>  I'm Person I'm {props.name} {props.age} years old </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;