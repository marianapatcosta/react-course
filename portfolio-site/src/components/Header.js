import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio Site</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
        <NavLink to="/contacts" activeClassName="is-active">Contacts</NavLink>      
    </header>
);

export default Header;