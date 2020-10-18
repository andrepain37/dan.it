import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/operations';

const Modal = (props) => {

    const dispatch = useDispatch()

    const { closeButton, header, actions, cartItem } = props
    
    
    return (
        <div className="modal">
            <div className="modal-action_background" onClick={() => dispatch(toggleModal())}>
            </div>
            <div className="modal-action_window">
                
                <div className="modal-action_window__header">
                    <h2>{header}</h2>
                    {closeButton && <div className="modal-action_window__close" onClick={() => dispatch(toggleModal())}></div>}
                </div>
                <div className="modal-action_window__products">
                    <CartItem product={cartItem}  />
                </div>
                <div className="modal-action_window__actions">
                    {actions}
                </div>
            </div>
        </div>
    );
}


Modal.propTypes = {
    closeButton: PropTypes.bool, 
    header: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired, 
    closeModal: PropTypes.func.isRequired, 
    cartItem: PropTypes.array
}

Modal.defaultProps = {
    closeButton: false
}
 
export default Modal;