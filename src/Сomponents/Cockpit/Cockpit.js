import React,{useEffect} from "react";
import classes from "./Cockpit.css"

const cockpit = (props) => {
useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
});

    const assignedClasses = [];
    let btnClass = '';
    if (props.showperson) {
        btnClass = classes.Red;
    }else{
        btnClass = classes.Green;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }  
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is realy working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;