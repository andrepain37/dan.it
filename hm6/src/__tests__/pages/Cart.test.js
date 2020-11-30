import React from 'react';
import { render, fireEvent , wait } from "@testing-library/react";
import Cart from '../../pages/Cart';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import { act } from 'react-dom/test-utils';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store;


jest.mock('../../components/Modal', () => () => <div className="Modal">Modal</div>)
jest.mock('../../components/ProductList', () => () => <div className="ProductList">ProductList</div>)


beforeEach(() => {

    store =  mockStore({
        products: [],
        cart: [],
        showModal: false,
        deletedFromCart: false
    })
        
})




describe('Testing component Cart', () => {
    test('Smoke test Cart.js ', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );
    });

    test('Test showing modal with value of true on Cart.js ', () => {

        store.getState().showModal = true;

    

        const {container} = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(container.querySelector('.Modal')).toBeInTheDocument();
    });


    test('Test showing modal with value of false on Cart.js ', () => {

        const {container} = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(container.querySelector('.Modal')).not.toBeInTheDocument();
    });

    test('Test not empty products in cart on Cart.js ', () => {

        store.getState().cart = [1, 2];

        const { container } = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(container.querySelector('.cart--info-list')).toBeInTheDocument();
    });

    test('Test invalid form for order on Cart.js ', async () => {
       
        store.getState().cart = [1, 2];

        const { container } = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        fireEvent.click(container.querySelector('[type="submit"]'));


        await wait(() => {
            expect(container.querySelectorAll('.text-error').length).toBe(4);
            
        })

    
    });

    test('Test valid form for order on Cart.js ', async () => {
       
        store.getState().cart = [1, 2];

        const { container } = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );
        const firstname = container.querySelector('input[name="firstname"]');
        const lastname = container.querySelector('input[name="lastname"]');
        const age = container.querySelector('input[name="age"]');
        const shipping_address = container.querySelector('input[name="shipping_address"]');
        const phone = container.querySelector('input[name="phone"]');


        fireEvent.change(firstname, { persist: jest.fn(), target: { value: 'FN' } });
        fireEvent.change(lastname, { persist: jest.fn(), target: { value: 'LN' } });
        // fireEvent.change(age, { persist: jest.fn(), target: { value: 'First Name' } });
        fireEvent.change(shipping_address, { persist: jest.fn(), target: { value: 'Testing st.' } });
        fireEvent.change(phone, { persist: jest.fn(), target: { value: '3803333333' } });


        fireEvent.click(container.querySelector('[type="submit"]'));

        await wait(() => {
            expect(container.querySelectorAll('.text-error').length).toBe(0);

            expect(store.getActions()).toEqual([{type: 'CLEAR_CART'}])
        })

    
    });

})
