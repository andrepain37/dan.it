import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';


jest.mock('react-router-dom', () => ({
    NavLink: 'a'
}))

describe('Testing component Header', () => {
 

    test('Smoke test Header.js', () => {

        render(<Header/>);

    })


});