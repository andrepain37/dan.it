import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../../components/Modal';



const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}))
jest.mock('../../components/CartItem', () => <div>CartItem</div>)

describe('Testing component Modal', () => {
 

    test('Smoke test Modal.js', () => {

        render(<Modal/>);
    })




});