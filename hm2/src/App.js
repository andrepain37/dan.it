import React, {Component} from 'react';
import ProductList from  './components/ProductList';
import Button from  './components/Button';
import Modal from  './components/Modal';
import axios from "axios";
import './App.scss';


class App extends Component {

  state = {
    products: [],
    cart: [],
    wishlist: [],
    addedProduct: false
  }

  componentDidMount() {
    axios.get('/products.json').then(res => {
      this.setState({
        products: res.data,
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
      })
    })
    
  }

  addToCart = (id) => {
    const {cart} = this.state
    this.setState({
      cart: [...cart, id],
      addedProduct: true
    })
    localStorage.setItem('cart', JSON.stringify([...cart, id]));
  }

  addToWishlist = (id) => {
    const {wishlist} = this.state
    this.setState({
      wishlist: [...wishlist, id]
    })
    localStorage.setItem('wishlist', JSON.stringify([...wishlist, id]));
  }

  toggleModal = () => {
    const {addedProduct} = this.state
    this.setState({
      addedProduct: !addedProduct
    })
  }

  



  render() { 

    const {products, addedProduct, cart, wishlist} = this.state

    return ( 
      <>
        <h1>bestsellers</h1>
        {products && <ProductList products={products} wishlist={wishlist} addToCart={this.addToCart} addToWishlist={this.addToWishlist} />}
        {addedProduct && 
          <Modal 
            header="Your product added to cart!" 
            closeButton={true} 
            cartList={products.filter(prod => cart.includes(prod.id))}
            closeModal={() => this.toggleModal('second_modal')}
            actions={
            <>
              <Button text="Close" classes="modal-action__button" onClick={() => this.toggleModal('second_modal')} /> 
            </>}
          />
        }
      </>
    );
  }
}


 
export default App;
