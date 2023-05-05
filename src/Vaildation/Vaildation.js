import React from "react";

const validation = (props) => {
    let validationMessage = 'Text long enought'

    if (props.inputLength <= 5) {
        validationMessage = 'Text to short!'
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;