import React from 'react';
import { Button } from '../button/Button' ;
import './styleHeader.css';
import ReactLogo from '../../assets/Logo.svg';

export const Header = () => {
    return(
        <header className="header">
            <div className='header_nav'>
                <a href="index.html" className="logo">
                    <img src={ReactLogo} />
                </a>
                <div className="nav-btn">
                    <Button title='Users' />
                    <Button title='Sign up' />
                </div>
            </div> 
            <div className="header_title">
                <h1 className='title'>Test assignment for front-end developer</h1>
                <p className='header_text'>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, 
                    CSS, JS with a vast understanding of User design thinking as they'll be building web 
                    interfaces with accessibility in mind. They should also 
                    be excited to learn, as the world of Front-End Development keeps evolving.
                </p>
                <Button className='btn' title='Sign up' />
            </div>
        </header>
    )
}