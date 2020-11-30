import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Modal from '../../components/Modal';
import Button from '../../components/Button';



const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}))
jest.mock('../../components/CartItem', () => () => <div className="CartItem">CartItem</div>)


let container = null;
beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Testing component Modal', () => {
 

    test('Smoke test Modal.js', () => {
        act(() => {    
            render(<Modal actions={<Button />} header="Testing" />, container);  
        });
        expect(container.querySelector(".CartItem")).toBeInTheDocument();
    })

    test('Smoke test props for Modal.js with closeButton', () => {
        const mockToggleModal = jest.fn();

        jest.mock('../../store/operations', () => ({
            toggleModal: () => mockToggleModal
        }))
        

        act(() => {    
            render(<Modal actions={<Button />} header="Testing" closeModal={mockToggleModal} closeButton={true} />, container);  
        });  

        expect(container.querySelector('.modal-action_window__actions button').textContent).toBe("Click");
        expect(container.querySelector('.modal-action_window__header > h2').textContent).toBe("Testing");
        container.querySelector('.modal-action_background').dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
        expect(container.querySelector('.modal-action_window__close')).toBeInTheDocument();
        container.querySelector('.modal-action_window__close').dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(mockToggleModal).toHaveBeenCalledTimes(2);
    })


});