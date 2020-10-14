import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList";


const Cart = (props) => {

    const products = useSelector(st => st.products)
    const wishlist = useSelector(st => st.wishlist)


    const wishList = products.filter(prod => wishlist.includes(prod.id))

    return (

        <>
            <h1>you're wishlist</h1>
            {!!wishlist.length && (
                <ProductList
                    forWishList={true}
                    products={wishList}
                />
            )}
            {!wishlist.length && <h2 className="empty-text">Empty wishlist :(</h2>}
        </>
    );
};

export default Cart;
