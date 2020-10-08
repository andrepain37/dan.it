import React from 'react';
import Product from '../Product';
import PropTypes from 'prop-types';

const ProductList = (props) => {


        const {products, addToCart, toggleWishlist, wishlist, cart, forCart, forWishList} = props
        const prodList = products.map((prod) => {
            return <Product key={prod.id} forCart={forCart} forWishList={forWishList} id={prod.id} inWish={wishlist && wishlist.includes(prod.id)} inCart={cart && cart.includes(prod.id)} addToCart={addToCart} toggleWishlist={toggleWishlist} name={prod.name} color={prod.color} image={prod.image} price={prod.price} />
        })

        return ( 
            <ul className="product-list">
                {prodList}
            </ul>
        );
    
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    toggleWishlist: PropTypes.func.isRequired,
    wishlist: PropTypes.array.isRequired,
    forCart: PropTypes.bool,
    forWishList: PropTypes.bool,
}
  
Product.defaultProps = {
    forCart: false,
    forWishList: false
}

 
export default ProductList;
