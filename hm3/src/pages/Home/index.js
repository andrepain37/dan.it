import React from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ProductList from "../../components/ProductList";


const Home = (props) => {


    const {toggleModal, addedToCart, addToCart, PrepareAddToCart, toggleWishlist, cart, wishlist, products, showModal} = props


    return (

        <>
            <h1>bestsellers</h1>
            {products && (
                <ProductList
                products={products}
                wishlist={wishlist}
                cart={cart}
                addToCart={PrepareAddToCart}
                toggleWishlist={toggleWishlist}
                />
            )}
            {showModal && (
                <Modal
                header={`Do you want to add ${addedToCart.name} to your cart?`}
                closeButton={true}
                cartItem={addedToCart}
                closeModal={() => toggleModal()}
                actions={
                    <>
                    <Button
                        text="Add"
                        classes="modal-action__button"
                        onClick={() => addToCart(addedToCart.id)}
                    />
                    <Button
                        text="Cancel"
                        classes="modal-action__button"
                        onClick={() => toggleModal()}
                    />
                    </>
                }
                />
            )}
        </>
    );
};

export default Home;
