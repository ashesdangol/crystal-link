import React from 'react';

function InputLabel(props){
    return(
       <>
        <label>{props.label} </label>
        <input type={props.type} name={props.name} />
       </>
    )
}

export default InputLabel;