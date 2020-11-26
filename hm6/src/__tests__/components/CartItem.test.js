import React from 'react';
import { shallow } from 'enzyme';
import CartItem from '../../components/CartItem';


describe('Testing component CartItem', () => {
 

    test('Test render props for CartItem.js', () => {


        const product = {
            image: '',
            name: 'Faster',
            color: 'red',
            price: 23
        }

        const {image, name, color, price} = product;

        const shallowCartItem= shallow(<CartItem product={product}/>);

        const CartItemImage = shallowCartItem.find(`.modal-action_window__products-product--image`);
        const CartItemTitle = shallowCartItem.find(`.modal-action_window__products-product--name`);
        const CartItemOption = shallowCartItem.find(`.modal-action_window__products-product_options--option`);
        const CartItemPrice = shallowCartItem.find(`.modal-action_window__products-product--price`);

        //Image
        expect(CartItemImage.is(`[alt="${name}"]`)).toBeTruthy();
        expect(CartItemImage.is(`[title="${name}"]`)).toBeTruthy();
        expect(CartItemImage.is(`[src="${image}"]`)).toBeTruthy();
        //Title
        expect(CartItemTitle.text().trim()).toBe(name);

        //Option
        expect(CartItemOption.find('span').text().trim()).toBe(color);

        //Price
        expect(CartItemPrice.text().trim()).toBe('$' + price);

        shallowCartItem.debug()
    })


});