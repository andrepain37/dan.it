import React from 'react';
import { fireEvent, render } from "@testing-library/react";
import Home from '../../pages/Home';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store;


jest.mock('../../components/Modal', () => () => <div className="Modal">Modal</div>)

beforeEach(() => {

    store =  mockStore({
        products: false,
        showModal: false,
        addedToCart: false
    })
        
})



describe('Testing component Home', () => {
    test('Smoke test Home.js ', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });

    test('Test empty products Home.js ', () => {
        const {container} = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        expect(container.querySelector('.empty-text')).toBeInTheDocument();
    });

    test('Test full products on Home.js ', () => {
        
        store.getState().products = [
            {
                id: 1,
                name: 'Test 1',
                image: '',
                color: 'yellow',
                price: 431
            }, 
            {
                id: 2,
                name: 'Test 2',
                image: '',
                color: 'yellow',
                price: 455
            }, 
        ]

        const {container} = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );


        expect(container.querySelectorAll('.product-list_card').length).toBe(2);
    });

    test('Test click on the button "Add to cart" on Home.js ', () => {
        
        store.getState().products = [
            {
                id: 1,
                name: 'Test 1',
                image: '',
                color: 'yellow',
                price: 431
            }, 
            {
                id: 2,
                name: 'Test 2',
                image: '',
                color: 'yellow',
                price: 455
            }, 
        ]

        store.getState().cart = []
        
        const {container} = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        fireEvent.click(container.querySelector('.product-list_card_description_actions--add'));

        const actionClick = [
            {
                payload: store.getState().products[0],
                type: 'SAVE_ADDED_TO_CART'
            },
            {
                payload: true,
                type: 'SAVE_SHOW_MODAL'
            }
        ]


        expect(store.getActions()).toEqual(actionClick)

    });

    test('Test show modal on true Home.js ', () => {
        store.getState().showModal = true;
        
        const {container} = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        expect(container.querySelector('.Modal')).toBeInTheDocument();
    })

})
