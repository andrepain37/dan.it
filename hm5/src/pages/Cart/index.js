import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import ProductList from "../../components/ProductList";
import { clearCartInfo, delFromCart, toggleModal } from "../../store/operations";
import {Form, withFormik} from "formik";
import schema from "../../validation/cart/schema";

const Cart = (props) => {

    const dispatch = useDispatch()

    const products = useSelector(st => st.products)
    const cart = useSelector(st => st.cart)
    const showModal = useSelector(st => st.showModal)
    const deletedFromCart = useSelector(st => st.deletedFromCart)

    const cartList = products.filter((prod) => {
        return cart.includes(prod.id);
    })

    let total = 0;


    cartList.map((prod) => total = total + +prod.price);

    return (

        <>
            <h1>you're cart</h1>
            {!!cart.length && (
            <section className="cart">
                <div className="cart--info-list">
                    <ProductList
                        forCart={true}
                        products={cartList}
                        cart={cart}
                    />
                    <h4 className="cart-total">Total: ${total.toFixed(2)}</h4>
                </div>
                <Form className='cart-form' noValidate>
                    <h3 className="text-center">Order details</h3>
                    <Input classes="required" label="You're name" type='text' placeholder="You're name" name='firstname' />
                    <Input classes="required" label="You're lastname" type='text' placeholder="You're lastname" name='lastname' />
                    <Input classes="required" label="You're age" type='number' placeholder="You're age" name='age' min='14' />
                    <Input classes="required" label="You're shipping address" type='text' placeholder="You're shipping address" name='shipping_address' />
                    <Input classes="required" label="You're phone" type='telephone' placeholder="You're phone" name='phone' />
                    <div className="cart-submit"> 
                        <button type='submit' disabled={props.isSubmitting}>Submit</button>
                    </div>
                </Form>

            </section>
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

const mapDispatchToProps = dispatch => {
    return {
        clearCartLog: values => dispatch(clearCartInfo(values))
    }
}
export default connect(null, mapDispatchToProps)(withFormik({
    mapPropsToValues: () => ({
        firstname: '',
        lastname: '',
        age: 14,
        shipping_address: '',
        phone: ''
    }),
    handleSubmit: (values, {props, setSubmitting }) => {
        setTimeout(() => {
            props.clearCartLog(values);
   
          setSubmitting(false);
        }, 1000);
   
    },
    validationSchema: schema
  })(Cart));
