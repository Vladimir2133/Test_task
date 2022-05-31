import React from "react";
import ReactTooltip from "react-tooltip";

import './styleTooltip.css'

export const Tooltip = (props) => {
    return(
        <ReactTooltip place='bottom' id={props.id}>
            {props.id === props.text &&<span className='tooltip_text'>{props.text}</span>}           
        </ReactTooltip>
        
    )
}
