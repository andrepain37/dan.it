import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {


    return (
        <header>
            <nav>
                <NavLink exact to='/' activeClassName="active">Home</NavLink>
                <NavLink exact to='/cart' activeClassName="active">Cart</NavLink>
                <NavLink exact to='/wishlist' activeClassName="active">Wishlist</NavLink>
            </nav>
        </header>
        
    );

}


 
export default Header;