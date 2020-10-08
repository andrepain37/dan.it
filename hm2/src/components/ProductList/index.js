import React, { PureComponent } from 'react';
import Product from '../Product';
import PropTypes from 'prop-types';

class ProductList extends PureComponent {


    render() { 

        const {products, addToCart, toggleWishlist, wishlist} = this.props
        const prodList = products.map((prod) => {
            return <Product key={prod.id} id={prod.id} inWish={wishlist.includes(prod.id)} addToCart={addToCart} toggleWishlist={toggleWishlist} name={prod.name} color={prod.color} image={prod.image} price={prod.price} />
        })

        return ( 
            <ul className="product-list">
                {prodList}
            </ul>
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    toggleWishlist: PropTypes.func.isRequired,
    wishlist: PropTypes.array.isRequired,
}
  

 
export default ProductList;
