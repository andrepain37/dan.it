import React from 'react';
import PropTypes from 'prop-types';


const CartItem = (props) => {

    const {image, name, color, price} = props.product

    return (
        <div className="modal-action_window__products-product">
            <img className="modal-action_window__products-product--image" src={image} alt={name} title={name} />
            
            <div className="modal-action_window__products-product_options" >
                <h4 className="modal-action_window__products-product--name"> {name}</h4>
                <p className="modal-action_window__products-product_options--option">Color: <span style={{color: color}}>{color}</span></p>
            </div>
            
            <b className="modal-action_window__products-product--price">${price}</b>
        </div>
    );

}

CartItem.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired, 
        price: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired
        ])
    })
    
}

 
export default CartItem;