import React from 'react';
import { Tooltip } from '../tooltip/Tooltip';

import './styleUserCard.css' 

export const UserCard = (props) => {
    return(
        <div className='card'>
            <div className='card_contnet'>
                <img className='avatar' src={props.avatar} />
                <div className='nameUser' data-tip='tooltip' data-for={props.name} >
                    <Tooltip id={props.name} text={props.name} />
                        {props.name}
                </div>
                <div className='user_info'>
                    <p>{props.position}</p>
                    <p data-tip='tooltip' data-for={props.email}>
                        {props.email}
                    </p>
                    <Tooltip id={props.email} text={props.email} />
                    <p>{props.phone}</p>
                </div>                
            </div>
        </div>
    )
}


