import React from "react";

const person = (props) =>{
    return (
    // <p click={props.click}>I'm Person I'm {props.name} {props.age} years old </p>
    <div>
        <p onClick={props.click}>  I'm Person I'm {props.name} {props.age} years old </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;