import React from "react";
import ProductList from "../../components/ProductList";


const Cart = (props) => {


    const { toggleWishlist, wishlist, products} = props


    const wishList = products.filter(prod => wishlist.includes(prod.id))

    return (

        <>
            <h1>you're wishlist</h1>
            {!!wishlist.length && (
                <ProductList
                    forWishList={true}
                    products={wishList}
                    wishlist={wishlist}
                    addToCart={toggleWishlist}
                    toggleWishlist={toggleWishlist}
                />
            )}
            {!wishlist.length && <h2 className="empty-text">Empty wishlist :(</h2>}
        </>
    );
};

export default Cart;
