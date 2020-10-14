import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ProductList from "../../components/ProductList";
import { delFromCart, toggleModal } from "../../store/Home/operations";


const Cart = () => {

    const dispatch = useDispatch()

    const products = useSelector(st => st.products)
    const cart = useSelector(st => st.cart)
    const showModal = useSelector(st => st.showModal)
    const deletedFromCart = useSelector(st => st.deletedFromCart)


    const cartList = products.filter(prod => cart.includes(prod.id))

    return (

        <>
            <h1>you're cart</h1>
            {!!cart.length && (
                <ProductList
                    forCart={true}
                    products={cartList}
                    cart={cart}
                />
            )}
            {!cart.length && <h2 className="empty-text">Empty cart :(</h2>}
            {showModal && (
                <Modal
                header={`Do you want delete ${deletedFromCart.name} from your cart?`}
                closeButton={true}
                cartItem={deletedFromCart}
                actions={
                    <>
                        <Button
                            text="Delete"
                            classes="modal-action__button"
                            onClick={() => dispatch(delFromCart(deletedFromCart.id))}
                        />
                        <Button
                            text="Cancel"
                            classes="modal-action__button"
                            onClick={() => dispatch(toggleModal())}
                        />
                    </>
                }
                />
            )}
        </>
    );
};

export default Cart;
