import axios from 'axios';
import { saveAddedToCart, saveCart, saveDeletedFromCart, saveProducts, saveShowModal, saveWishlist } from '../actions';

export const loadProducts = () => (dispatch) => {

    axios.get("/products.json").then((res) => {
        
        dispatch(saveProducts(res.data));
        dispatch(saveCart(JSON.parse(localStorage.getItem("cart")) || []));
        dispatch(saveWishlist(JSON.parse(localStorage.getItem("wishlist")) || []));
    });
}

export const delFromCart = (id) => (dispatch, getState) => {

    const {cart} = getState()

    const newCart = cart.filter((prod) => prod !== id);

    dispatch(saveCart(newCart));
    dispatch(saveDeletedFromCart([]));
    dispatch(saveShowModal(false));
    localStorage.setItem("cart", JSON.stringify(newCart));
}


export const prepareAddToCart = (id) => (dispatch, getState) => {

    const {cart, products} = getState()

    if (cart.includes(id)) {
        return;
    }

    dispatch(saveAddedToCart(products.filter((prod) => prod.id === id)[0]));
    dispatch(saveShowModal(true));

}

export const prepareDelFromCart = (id) => (dispatch, getState) => {

    const {products} = getState()

    dispatch(saveDeletedFromCart(products.filter((prod) => prod.id === id)[0]));
    dispatch(saveShowModal(true));

}

export const addToCart = (id) => (dispatch, getState) => {

    const {cart} = getState()

    const newCart = [...cart, id];

    dispatch(saveCart(newCart));
    dispatch(saveAddedToCart([]));
    dispatch(saveShowModal(false));
    localStorage.setItem("cart", JSON.stringify(newCart));
}

export const toggleWishlist = (id) => (dispatch, getState) => {

    const {wishlist} = getState()

    let newWishList = [];
    if (wishlist.includes(id)) {
      newWishList = wishlist.filter((wish_id) => wish_id !== id);
    } else {
      newWishList = [...wishlist, id];
    }

    dispatch(saveWishlist(newWishList));
    localStorage.setItem("wishlist", JSON.stringify(newWishList));
};

export const toggleModal = () => (dispatch, getState) => {

    const {showModal} = getState()

    dispatch(saveShowModal(!showModal))
};