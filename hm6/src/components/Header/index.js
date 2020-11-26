import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {


    return (
        <header>
            <nav>
                <NavLink exact="true" to='/' activeclassname="active">Home</NavLink>
                <NavLink exact="true" to='/cart' activeclassname="active">Cart</NavLink>
                <NavLink exact="true" to='/wishlist' activeclassname="active">Wishlist</NavLink>
            </nav>
        </header>
        
    );

}


 
export default Header;