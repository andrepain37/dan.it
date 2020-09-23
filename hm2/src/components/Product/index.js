import React, { PureComponent } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';

class Product extends PureComponent {


    render() { 

        const {id, image, color, name, price, addToCart, addToWishlist, inWish} = this.props

        return ( 
            <li className="product-list_card">
                <div className="product-list_card_image">
                    <svg onClick={() => addToWishlist(id)} className={"product-list_card_image--like " + (inWish && 'liked')} version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1189.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001
                            -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360
                            634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346
                            -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178
                            408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19
                            196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998
                            -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417
                            -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535
                            610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
                        </g>
                    </svg>
                    <img className="product-list_card_image--main" src={image} alt={name} title={name} />
                </div>
                <div className="product-list_card_description">
                    <h4 className="product-list_card_description--name">{name}</h4>
                    <div className="product-list_card_description_options">
                        <p className="product-list_card_description_options--option">Color: <span style={{color}}>{color}</span></p>
                    </div>
                    <div className="product-list_card_description_actions">
                        <p className="product-list_card_description_actions--price">${price}</p>
                        <Button text="Add to cart" classes="product-list_card_description_actions--add" onClick={() => addToCart(id)} /> 
                    </div>
                </div> 
            </li>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired, 
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    addToCart: PropTypes.func.isRequired,
    addToWishlist: PropTypes.func.isRequired,
    inWish: PropTypes.bool,
  }
  
Product.defaultProps = {
    inWish: false
}
 
export default Product;
