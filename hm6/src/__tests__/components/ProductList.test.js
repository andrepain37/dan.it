import React from 'react';
import { render } from "@testing-library/react";
import ProductList from '../../components/ProductList';


jest.mock('react-redux', () => ({
    useSelector: () => jest.fn()
}))

const props = {
    products: [],
    addToCart: jest.fn(),
    toggleWishlist: jest.fn()
}


describe('Testing component ProductList', () => {
    test('Smoke test ProductList.js ', () => {
        render(<ProductList {...props} />);
    });


})