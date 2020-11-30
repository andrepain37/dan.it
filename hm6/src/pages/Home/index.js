import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ProductList from "../../components/ProductList";
import { addToCart, toggleModal, toggleWishlist } from "../../store/operations";


const Home = () => {
    

    const dispatch = useDispatch()

    const products = useSelector(st => st.products)
    const showModal = useSelector(st => st.showModal)
    const addedToCart = useSelector(st => st.addedToCart)


    return (

        <>
            <h1>bestsellers</h1>
            {!!products.length && (
                <ProductList
                products={products}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                />
            )}
            {!products.length && <div className="empty-text">Our warehouse is empty</div>}
            {showModal && (
                <Modal
                    header={`Do you want to add ${addedToCart.name} to your cart?`}
                    closeButton={true}
                    cartItem={addedToCart}
                    actions={
                        <>
                            <Button
                                text="Add"
                                classes="modal-action__button"
                                onClick={() => dispatch(addToCart(addedToCart.id))}
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

export default Home;
