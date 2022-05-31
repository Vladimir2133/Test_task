import React from 'react';
import './styleButton.css'

export const Button = (props) =>{
    return(
        <button className='btn' onClick={props.oclick}>{props.title}</button>
    )
}