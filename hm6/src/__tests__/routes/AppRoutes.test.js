import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import AppRoutes from '../../routes/AppRoutes';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';


jest.mock('../../pages/Home', () => () => <div className="Home">Home</div>)
jest.mock('../../pages/Cart', () => () => <div className="Cart">Cart</div>)
jest.mock('../../pages/WishList', () => () => <div className="WishList">WishList</div>)
jest.mock('../../pages/NotFound', () => () => <div className="NotFound">NotFound</div>)



describe('Testing component AppRoutes', () => {
    test('Smoke test AppRoutes.js ', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <AppRoutes />
            </Router>
        );
    });

    test('Test route Home AppRoutes.js ', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <AppRoutes />
            </Router>
        );

        expect(document.querySelector('.Home')).toBeInTheDocument();
    });

    test('Test route Cart AppRoutes.js ', () => {
        const history = createMemoryHistory();
        history.push('/cart');
        render(
            <Router history={history}>
                <AppRoutes />
            </Router>
        );

        expect(document.querySelector('.Cart')).toBeInTheDocument();
    });

    test('Test route WishList AppRoutes.js ', () => {
        const history = createMemoryHistory();
        history.push('/wishlist');
        render(
            <Router history={history}>
                <AppRoutes />
            </Router>
        );

        expect(document.querySelector('.WishList')).toBeInTheDocument();
    });

    test('Test route NotFound AppRoutes.js ', () => {
        const history = createMemoryHistory();
        history.push('/404');
        render(
            <Router history={history}>
                <AppRoutes />
            </Router>
        );

        expect(document.querySelector('.NotFound')).toBeInTheDocument();
    });
   

})
