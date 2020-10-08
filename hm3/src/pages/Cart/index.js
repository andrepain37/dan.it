import React from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ProductList from "../../components/ProductList";


const Cart = (props) => {


    const {toggleModal, deletedFromCart, delFromCart, PrepareDelFromCart, cart, products, showModal} = props


    const cartList = products.filter(prod => cart.includes(prod.id))

    return (

        <>
            <h1>you're cart</h1>
            {cart && (
                <ProductList
                    forCart={true}
                    products={cartList}
                    cart={cart}
                    addToCart={PrepareDelFromCart}
                    addToWishlist={PrepareDelFromCart}
                />
            )}
            {showModal && (
                <Modal
                header={`Do you want delete ${deletedFromCart.name} from your cart?`}
                closeButton={true}
                cartItem={deletedFromCart}
                closeModal={() => toggleModal()}
                actions={
                    <>
                    <Button
                        text="Delete"
                        classes="modal-action__button"
                        onClick={() => delFromCart(deletedFromCart.id)}
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

export default Cart;
