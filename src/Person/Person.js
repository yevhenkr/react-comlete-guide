import React from "react";
import classes from './Person.css';

const person = (props) => {
    return (
         <div className={classes.Person}>
            <p onClick={props.click}>  I'm Person I'm {props.name} {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;