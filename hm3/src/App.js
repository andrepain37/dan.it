import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);
  const [deletedFromCart, setDeletedFromCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      setProducts(res.data);
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
      setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    });
  }, []);

  const prepareDelFromCart = (id) => {
    setDeletedFromCart(products.filter((prod) => prod.id === id)[0]);
    setShowModal(true);
  };

  const delFromCart = (id) => {
    const newCart = cart.filter((prod) => prod !== id);

    setCart(newCart);
    setDeletedFromCart([]);
    setShowModal(false);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const prepareAddToCart = (id) => {
    setAddedToCart(products.filter((prod) => prod.id === id)[0]);
    setShowModal(true);
  };

  const addToCart = (id) => {
    const newCart = [...cart, id];

    setCart(newCart);
    setAddedToCart([]);
    setShowModal(false);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const toggleWishlist = (id) => {
    let newWishList = [];
    if (wishlist.includes(id)) {
      newWishList = wishlist.filter((wish_id) => wish_id !== id);
    } else {
      newWishList = [...wishlist, id];
    }

    setWishlist(newWishList);
    localStorage.setItem("wishlist", JSON.stringify(newWishList));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header />
      <AppRoutes
        toggleWishlist={toggleWishlist}
        prepareDelFromCart={prepareDelFromCart}
        deletedFromCart={deletedFromCart}
        delFromCart={delFromCart}
        addToCart={addToCart}
        toggleModal={toggleModal}
        prepareAddToCart={prepareAddToCart}
        cart={cart}
        products={products}
        addedToCart={addedToCart}
        wishlist={wishlist}
        showModal={showModal}
      />
    </>
  );
};

export default App;
