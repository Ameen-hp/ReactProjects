import React from "react";
let Card = (props) => {
    let getClassName = props.className;

    return (
        <div className={getClassName}>
           {props.children}
        </div>
    )
}

export default Card