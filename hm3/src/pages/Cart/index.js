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
            {!!cart.length && (
                <ProductList
                    forCart={true}
                    products={cartList}
                    cart={cart}
                    addToCart={PrepareDelFromCart}
                    toggleWishlist={PrepareDelFromCart}
                />
            )}
            {!cart.length && <h2 className="empty-text">Empty cart :(</h2>}
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
