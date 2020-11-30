import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { useDispatch } from "react-redux";
import { prepareAddToCart, prepareDelFromCart, toggleWishlist } from "../../store/operations";

const Product = (props) => {


  const dispatch = useDispatch()



  const {
    id,
    image,
    color,
    name,
    price,
    inWish,
    inCart,
    forWishList,
    forCart,
  } = props;

  let ButtonAction = "";

  if (forCart) {

    ButtonAction = (
      <div
        className="product-list_card_image--close"
        onClick={() => dispatch( prepareDelFromCart(id))}
      ></div>
    );
  } else {

    ButtonAction = (
      <Icon
        type="like"
        onClick={() => dispatch(toggleWishlist(id))}
        classes={`product-list_card_image--like ${inWish && "liked"}`}
      />
    );
  }

  return (
    <li className="product-list_card">
      <div className="product-list_card_image">
        {ButtonAction}
        <img
          className="product-list_card_image--main"
          src={image}
          alt={name}
          title={name}
        />
      </div>
      <div className="product-list_card_description">
        <h4 className="product-list_card_description--name">{name}</h4>
        <div className="product-list_card_description_options">
          <p className="product-list_card_description_options--option">
            Color: <span style={{ color }}>{color}</span>
          </p>
        </div>
        <div className="product-list_card_description_actions">
          <p className="product-list_card_description_actions--price">
            ${price}
          </p>
          {!forCart && !forWishList && (
            <Button
              text={inCart ? "Added" : "Add to cart"}
              classes="product-list_card_description_actions--add"
              onClick={() => dispatch(prepareAddToCart(id))}
            />
          )}
        </div>
      </div>
    </li>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  inWish: PropTypes.bool,
  inCart: PropTypes.bool,
};

Product.defaultProps = {
  inWish: false,
  inCart: false,
};

export default Product;
