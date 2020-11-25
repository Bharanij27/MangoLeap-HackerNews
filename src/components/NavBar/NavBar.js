import React from 'react';
import { useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();
    const classStyle = "nav-item nav-link f-left";
    
    return(
        <nav className="navbar navbar-expand-md sticky-top hacker-new-navr-bar p-2">
        <a href="/" className={classStyle}>Hacker News</a>
        <a href="/" className={location.pathname === '/' ? 'active '+classStyle : classStyle}>Top</a>
        <a href="/new" className={location.pathname === '/new' ? 'active '+classStyle : classStyle}>New</a>
        <a href="/best" className={location.pathname === '/best' ? 'active '+classStyle : classStyle}>Best</a>
    </nav>
    )
}

export default NavBar;