import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import WishList from '../pages/WishList';
import NotFound from '../pages/NotFound';



const AppRoutes = (props) => {
    

    const {addToWishlist, addToCart, toggleModal, deletedFromCart, delFromCart, PrepareDelFromCart, PrepareAddToCart, cart, products, addedToCart, wishlist, showModal} = props
    console.log(cart)
    return(
        <Switch>
            <Route exact path="/">
                <Home addToWishlist={addToWishlist} addToCart={addToCart} toggleModal={toggleModal} PrepareAddToCart={PrepareAddToCart} cart={cart} products={products} addedToCart={addedToCart} wishlist={wishlist} showModal={showModal} />
            </Route> 
            <Route exact path="/cart">
                <Cart toggleModal={toggleModal} deletedFromCart={deletedFromCart} delFromCart={delFromCart} PrepareDelFromCart={PrepareDelFromCart} products={products} cart={cart} showModal={showModal} />
            </Route> 
            <Route exact path="/wishlist">
                <WishList />
            </Route> 
            <Route path="*">
                <NotFound />
            </Route> 
        </Switch>
    )
}

export default AppRoutes