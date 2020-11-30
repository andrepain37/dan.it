import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import NotFound from '../../pages/NotFound';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'



describe('Testing component NotFound', () => {
    test('Smoke test NotFound.js ', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <NotFound />
            </Router> 
        );
    });


    test('Click on link NotFound.js ', () => {
        const history = createMemoryHistory()
        history.push('/404');
        const {container} = render(
            <Router history={history}>
                <NotFound />
            </Router> 
        );

        const leftClick = { button: 0 }
        userEvent.click(screen.getByText(/Go to home/i), leftClick)

        expect(history.location.pathname).toBe('/');
    });

})
