import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.scss';
import AppRoutes from './routes/AppRoutes';


const App = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [addedToCart, setAddedToCart] = useState([])
  const [deletedFromCart, setDeletedFromCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [showModal, setShowModal] = useState(false)



  useEffect(() => {
    axios.get('/products.json').then(res => {
      setProducts(res.data)
      setCart(JSON.parse(localStorage.getItem('cart')) || [])
      setWishlist(JSON.parse(localStorage.getItem('wishlist')) || [])
    })
  }, [])

  const PrepareDelFromCart = (id) => {
    
    setDeletedFromCart(products.filter(prod => prod.id === id)[0])
    setShowModal(true)
  }

  const delFromCart = (id) => {
    const newCart = cart.filter(prod => prod !== id)

    setCart(newCart)
    setDeletedFromCart([])
    setShowModal(false)
    localStorage.setItem('cart', JSON.stringify(newCart));
  }


  const PrepareAddToCart = (id) => {
    
    setAddedToCart(products.filter(prod => prod.id === id)[0])
    setShowModal(true)
  }

  const addToCart = (id) => {
    const newCart = [...cart, id]

    setCart(newCart)
    setAddedToCart([])
    setShowModal(false)
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const addToWishlist = (id) => {
    const newWishList = [...wishlist, id]

    setWishlist(newWishList)
    localStorage.setItem('wishlist', JSON.stringify(newWishList));
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  
  return ( 
    <AppRoutes addToWishlist={addToWishlist} PrepareDelFromCart={PrepareDelFromCart} deletedFromCart={deletedFromCart} delFromCart={delFromCart} addToCart={addToCart} toggleModal={toggleModal} PrepareAddToCart={PrepareAddToCart} cart={cart} products={products} addedToCart={addedToCart} wishlist={wishlist} showModal={showModal} />
  );
  
}


 
export default App;