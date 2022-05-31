import React from 'react';
import ReactLogo from '../../assets/success-image.svg';
import './registeredSucc.css'

export const RegisteredSucc = () => {
    return(
        <div className='registered_block'>
            <h2 className='.success_title'>User successfully registered</h2>
            <div className='successfully'>
                <img className='success-image' src={ReactLogo} />
            </div> 
            <div className='copyrite'>
                &copy; abz.agency specially for the test task
            </div>
        </div>
    )
}