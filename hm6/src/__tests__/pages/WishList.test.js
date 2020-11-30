import React from 'react';
import { render, fireEvent , wait } from "@testing-library/react";
import WishList from '../../pages/WishList';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store;


jest.mock('../../components/ProductList', () => () => <div className="ProductList">ProductList</div>)


beforeEach(() => {

    store =  mockStore({
        products: [],
        wishlist: []
    })
        
})



describe('Testing component WishList', () => {
    test('Smoke test WishList.js ', () => {
        render(
            <Provider store={store}>
                <WishList />
            </Provider>
        );
    });

    test('Smoke test with empty products WishList.js ', () => {
        const {container} = render(
            <Provider store={store}>
                <WishList />
            </Provider>
        );

        expect(container.querySelector(".empty-text")).toBeInTheDocument();
    });

    test('Smoke test with products in wishlist WishList.js ', () => {

        store.getState().products = [
            {
                id: 1,
                name: 'Test 1',
                image: '',
                color: 'yellow',
                price: 431
            }
        ];
        store.getState().wishlist = [1]

        const {container} = render(
            <Provider store={store}>
                <WishList />
            </Provider>
        );
        
        expect(container.querySelector(".ProductList")).toBeInTheDocument();
    });

    test('Smoke test with products without in wishlist WishList.js', () => {

        store.getState().products = [
            {
                id: 1,
                name: 'Test 1',
                image: '',
                color: 'yellow',
                price: 431
            }
        ];

        const {container} = render(
            <Provider store={store}>
                <WishList />
            </Provider>
        );
        
        expect(container.querySelector(".ProductList")).not.toBeInTheDocument();
    });

})
