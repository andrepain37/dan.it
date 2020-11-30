import React from 'react';
import { render } from "@testing-library/react";
import Product from '../../components/Product';


jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn()
}))

const props = {
    id: 1,
    image: '',
    color: '',
    name: 'Testing Product',
    price: 20
}


describe('Testing component Product', () => {
    test('Smoke test Product.js ', () => {
        render(<Product {...props} />);
    });

    test('Test render button for cart Product.js', () => {
        const {container} = render(<Product {...props} forCart={true} />);
        expect(container.querySelector('.product-list_card_image--close')).toBeInTheDocument();
    });

    test('Test render button for wishlist Product.js', () => {
        const {container} = render(<Product {...props} forCart={false} />);
        expect(container.querySelector('.product-list_card_image--like')).toBeInTheDocument();
    });

    test('Test render button class for wishlist Product.js', () => {
        const {container} = render(<Product {...props} forCart={false} inWish />);
        expect(container.querySelector('.product-list_card_image--like.liked')).toBeInTheDocument();
    });

    test('Test render button class for wishlist Product.js', () => {
        const {container} = render(<Product {...props} forCart={false} inCart />);
        expect(container.querySelector('.product-list_card_description_actions--add').textContent).toBe('Added');
    });
})