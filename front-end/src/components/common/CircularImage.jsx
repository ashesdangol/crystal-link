import React from "react";

function CircularImage(props){
    return(
        <img src={props.imgSrc} alt={props.alt} className={props.className + `w-10 h-10 rounded-full`}/>
    )
}

export default CircularImage;