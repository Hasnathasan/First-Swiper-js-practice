import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../activeLink/ActiveLink';

const Header = () => {
    return (
        <div className='links'>
            <ActiveLink to={"/"}>Home</ActiveLink>
            <ActiveLink to={"/friends"}>Friends</ActiveLink>
            <ActiveLink to={"/contact"}>Contact</ActiveLink>
            <ActiveLink to={"/about"}>About</ActiveLink>
            <ActiveLink to={"/posts"}>Posts</ActiveLink>
        </div>
    );
};

export default Header;